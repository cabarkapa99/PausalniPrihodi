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
    return NextResponse.json(
      { message: "Invalid JSON body", error },
      { status: 400 }
    );
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
export async function GET() {
  const { userId } = await auth();
  // const userId = "user_2uiUcL8p9x6plNTULJAphxYDmfx"; // For testing purposes
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

export async function PUT(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  let body;
  try {
    body = await req.json();
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid JSON body", error },
      { status: 400 }
    );
  }

  try {
    const income = await prisma.income.update({
      where: { id: body.id },
      data: {
        amount: body.amount,
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

export async function DELETE(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  let body;
  try {
    body = await req.json();
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid JSON body", error },
      { status: 400 }
    );
  }

  try {
    const income = await prisma.income.delete({
      where: { id: body.id },
    });

    return NextResponse.json(income);
  } catch (error) {
    return NextResponse.json(
      { message: "Database error", error },
      { status: 500 }
    );
  }
}
