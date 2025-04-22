import connectToDB from "@/db/connection";
import Budget from "@/models/budget";
import Transaction from "@/models/transaction";
import User from "@/models/User";
import { getEnv } from "@/utils/getEnv";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const uri = getEnv("MONGO_URI");
    await connectToDB(uri);

    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const user = await User.findOne({ clerkId: userId });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 401 });
    }

    const transactions = await Transaction.find({ userId: user._id }).sort({
      date: -1,
    });
    return NextResponse.json(transactions);
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const uri = getEnv("MONGO_URI");
    await connectToDB(uri);

    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const user = await User.findOne({ clerkId: userId });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 401 });
    }

    const body = await req.json();
    const { amount, date, description, category } = body;

    if (!amount || !date || !description || !category) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const transactionMonth = new Date(date).toISOString().slice(0, 7);

    const budget = await Budget.findOne({
      category,
      month: transactionMonth,
    });

    if (budget) {
      const totalAfterTxn = budget.actualSpent + Number(amount);
      if (totalAfterTxn > budget.budgetAmount) {
        return NextResponse.json(
          { message: "Budget exceeded" },
          { status: 400 }
        );
      }
    }

    const transaction = await Transaction.create({
      amount,
      date,
      description,
      category,
      userId: user._id,
    });

    if (budget) {
      budget.actualSpent += Number(amount);
      budget.transactions.push(transaction._id);
      await budget.save();
    }

    return NextResponse.json(
      { message: "Transaction created" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Transaction POST error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
