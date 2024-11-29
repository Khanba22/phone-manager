import { NextResponse } from "next/server";
import UserSchema from "@/app/_Database/Schemas/UserSchema";
export const POST = async (req) => {
  try {
    const { userId } = await req.json();
    const user = await UserSchema.findById(userId).populate("contacts");
    NextResponse.json({ contacts: user.contacts });
  } catch (error) {
    NextResponse.error(error);
  }
};
