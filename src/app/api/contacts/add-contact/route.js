import { NextResponse } from "next/server";
import Contact from "@/app/_Database/Schemas/ContactSchema";
import UserSchema from "@/app/_Database/Schemas/UserSchema";
import { connectToMongo } from "@/app/_Database/connectToMongo";

export async function POST(req) {
  try {
    connectToMongo()
    const { name, contactNo, userId } = await req.json();
    console.log(name, contactNo, userId);
    const user = await UserSchema.findOne({ contactNo: contactNo });
    if (!user) {
      return NextResponse.json(
        { error: "Invalid Contact Details " },
        { status: 404 }
      );
    }
    const newContact = new Contact({
      name,
      contactNo,
      email: user.email,
      user: user,
    });

    const savedContact = await newContact.save();
    await UserSchema.findByIdAndUpdate(userId, {
      $push: { contacts: savedContact._id },
    });

    return NextResponse.json({
      message: "Contact added successfully",
      contact: savedContact,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
