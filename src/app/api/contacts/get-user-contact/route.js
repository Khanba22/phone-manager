import { NextResponse } from "next/server";
import UserSchema from "@/app/_Database/Schemas/UserSchema";
import { connectToMongo } from "@/app/_Database/connectToMongo";
export const POST = async (req) => {
  try {
    const { userId } = await req.json();
    connectToMongo();
    const user = await UserSchema.findById(userId).populate("contacts");
    console.log(user);
    return NextResponse.json({ contacts: user.contacts },{status:200});
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.json({ message: "Failed to fetch contacts" },{status:500});
  }
};
