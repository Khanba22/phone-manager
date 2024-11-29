import User from "@/app/_Database/Schemas/UserSchema";
import { NextResponse } from "next/server";

export const DELETE = async (req) => {
  try {
    const { userId } = req.body;
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      throw new Error("User not found");
    }
    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    return NextResponse.error({ error: error.message });
  }
};
