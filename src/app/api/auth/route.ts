import connectToDB from "@/db/connection";
import User from "@/models/User";
import { getEnv } from "@/utils/getEnv";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    console.log("POST /api/init-user called");

    await connectToDB(getEnv("MONGO_URI"));

    const user = await currentUser();
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const existingUser = await User.findOne({ clerkId: user.id });

    if (existingUser) {
      await User.findOneAndUpdate(
        { clerkId: user.id },
        {
          email: user.primaryEmailAddress?.emailAddress,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          imageUrl: user.imageUrl,
        },
        { upsert: true }
      );
      return NextResponse.json({ message: "User updated" });
    }

    await User.create({
      clerkId: user.id,
      email: user.primaryEmailAddress?.emailAddress,
      firstName: user.firstName,
      lastName: user.lastName,
      imageUrl: user.imageUrl,
      username: user.username,
    });

    return NextResponse.json({ message: "User created" });
  } catch (error) {
    console.error("Error creating/updating user:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
