import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

type RevalidateTarget = {
  path: string;
  type?: "layout" | "page";
};

const normalizeTargets = (input: unknown): RevalidateTarget[] => {
  if (!Array.isArray(input)) return [];

  return input
    .map((entry) => {
      if (!entry || typeof entry !== "object") return null;
      const path = (entry as { path?: unknown }).path;
      const type = (entry as { type?: unknown }).type;

      if (typeof path !== "string" || !path.startsWith("/")) return null;
      if (type !== undefined && type !== "layout" && type !== "page") return null;

      return { path, type };
    })
    .filter((entry): entry is RevalidateTarget => entry !== null);
};

export async function POST(request: Request) {
  const expectedSecret = process.env.REVALIDATE_SECRET ?? process.env.PAYLOAD_SECRET;
  const providedSecret = request.headers.get("x-revalidate-secret");

  if (!expectedSecret || providedSecret !== expectedSecret) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json().catch(() => null)) as
    | { targets?: unknown }
    | null;
  const targets = normalizeTargets(body?.targets);

  if (!targets.length) {
    return NextResponse.json(
      { ok: false, error: "No valid revalidation targets provided" },
      { status: 400 },
    );
  }

  for (const target of targets) {
    revalidatePath(target.path, target.type);
  }

  return NextResponse.json({ ok: true, revalidated: targets });
}
