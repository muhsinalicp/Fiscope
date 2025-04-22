import Budget from "@/models/budget";
import User from "@/models/User";
import { auth } from "@clerk/nextjs/server";
import { NextResponse, NextRequest } from "next/server";
import { z } from "zod";

const budgetSchema = z.object({
  category: z.string().min(1, "Category is required"),
  month: z.string().regex(/^\d{4}-\d{2}$/, "Month must be in YYYY-MM format"),
  budgetAmount: z.number().positive("Budget must be greater than 0"),
  userId: z.string().min(1, "userId  is required"),
});

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const user = await User.findOne({ clerkId: userId });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 401 });
    }

    const body = await req.json();
    body.budgetAmount = Number(body.budgetAmount);
    body.userId = user._id.toString();

    const parsed = budgetSchema.parse(body);

    const existing = await Budget.findOne({
      category: parsed.category,
      month: parsed.month,
      userId: user._id,
    });

    if (existing) {
      return NextResponse.json(
        { error: "Budget for this category and month already exists." },
        { status: 400 }
      );
    }

    await Budget.create(parsed);

    return NextResponse.json(
      { message: "Budget saved", data: parsed },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Validation error", errors: error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const user = await User.findOne({ clerkId: userId });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 401 });
    }
    const budgets = await Budget.find({ userId: user._id });
    return NextResponse.json(budgets);
  } catch (e) {
    console.error("budget fetching error:", e);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
