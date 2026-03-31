import type { CollectionAfterChangeHook, GlobalAfterChangeHook } from "payload";

type RevalidateTarget = {
  path: string;
  type?: "layout" | "page";
};

const getHeader = (headers: unknown, name: string) => {
  if (!headers) return undefined;
  if (typeof (headers as { get?: unknown }).get === "function") {
    return (headers as Headers).get(name) ?? undefined;
  }
  const key = Object.keys(headers as Record<string, unknown>).find(
    (entry) => entry.toLowerCase() === name.toLowerCase(),
  );
  if (!key) return undefined;
  const value = (headers as Record<string, unknown>)[key];
  return typeof value === "string" ? value : undefined;
};

const normalizeOrigin = (value?: string) => {
  if (!value) return undefined;
  return value.endsWith("/") ? value.slice(0, -1) : value;
};

const resolveOrigin = (req?: { headers?: unknown }) => {
  const headers = req?.headers;
  const host =
    getHeader(headers, "x-forwarded-host") ?? getHeader(headers, "host");
  const protocol = getHeader(headers, "x-forwarded-proto") ?? "https";

  if (host) {
    return `${protocol}://${host}`;
  }

  const configuredOrigin =
    normalizeOrigin(process.env.NEXT_PUBLIC_SITE_URL) ??
    normalizeOrigin(process.env.SITE_URL) ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

  return configuredOrigin ?? "http://localhost:3000";
};

const revalidateFromApi = async (
  targets: RevalidateTarget[],
  req?: { headers?: unknown },
) => {
  const secret = process.env.REVALIDATE_SECRET ?? process.env.PAYLOAD_SECRET;
  if (!secret) {
    console.warn(
      "Missing REVALIDATE_SECRET/PAYLOAD_SECRET. Skipping on-demand revalidation.",
    );
    return;
  }

  const endpoint = `${resolveOrigin(req)}/api/revalidate`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-revalidate-secret": secret,
      },
      body: JSON.stringify({ targets }),
      cache: "no-store",
    });

    if (!response.ok) {
      console.warn(
        `On-demand revalidation failed (${response.status}) for ${endpoint}.`,
      );
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.warn(`On-demand revalidation request error: ${message}`);
  }
};

export const revalidateHomeAfterGlobalChange: GlobalAfterChangeHook = async ({
  req,
}) => {
  await revalidateFromApi([{ path: "/" }], req);
};

export const revalidateLayoutAfterSiteSettingsChange: GlobalAfterChangeHook =
  async ({ req }) => {
    await revalidateFromApi([{ path: "/", type: "layout" }], req);
  };

export const revalidateLegalPageAfterChange: CollectionAfterChangeHook = async ({
  doc,
  req,
}) => {
  const slug = doc?.slug as string | undefined;
  if (!slug) return;
  await revalidateFromApi([{ path: `/${slug}` }], req);
};
