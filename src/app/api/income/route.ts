import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma"; // Importing singleton Prisma instance
import { NextRequest, NextResponse } from "next/server";

// ✅ Add income
export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  let body;
  try {
    body = await req.json();
  } catch (error) {
    return NextResponse.json({ message: "Invalid JSON body" }, { status: 400 });
  }

  try {
    const income = await prisma.income.create({
      data: {
        userId,
        amount: body.value,
        date: new Date(body.date),
        tag: body.tag || null,
      },
    });

    return NextResponse.json(income);
  } catch (error) {
    return NextResponse.json(
      { message: "Database error", error },
      { status: 500 }
    );
  }
}

// ✅ Fetch incomes
export async function GET(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const incomes = await prisma.income.findMany({
      where: { userId },
    });

    return NextResponse.json(incomes);
  } catch (error) {
    return NextResponse.json(
      { message: "Database error", error },
      { status: 500 }
    );
  }
}
