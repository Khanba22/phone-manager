import { NextResponse } from "next/server";
import User from "@/app/_Database/Schemas/UserSchema";
import bcrypt from "bcrypt";
import { connectToMongo } from "@/app/_Database/connectToMongo";

export async function POST(req) {
  try {
    connectToMongo();
    const { username, password } = await req.json();
    console.log(username, password);
    const user = await User.findOne({ username });
    if (!user) {
      console.log("User not found");
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    return NextResponse.json({ message: "Login successful" , user: user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
