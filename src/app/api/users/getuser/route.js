import { NextResponse } from "next/server";
import User from "@/app/_Database/Schemas/UserSchema";
import { connectToMongo } from "@/app/_Database/connectToMongo";

export const POST = async (req, res) => {
  try {
    connectToMongo();
    const { userId } = req.body;
    const user = await User.findById(userId);
    NextResponse.json({ message: "User found", user: user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
