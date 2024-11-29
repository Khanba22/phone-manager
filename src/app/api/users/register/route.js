import { NextResponse } from "next/server";
import User from "@/app/_Database/Schemas/UserSchema";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { username, password, contactNo, email } = await req.json();

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      password: hashedPassword,
      contactNo,
      email,
    });

    await newUser.save();
    return NextResponse.json({ message: "User registered successfully" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
