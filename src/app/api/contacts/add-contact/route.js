import { NextResponse } from "next/server";
import Contact from "@/app/_Database/Schemas/ContactSchema";
import User from "@/app/_Database/Schemas/UserSchema";

export async function POST(req) {
  try {
    const { name, contactNo, email, userId } = await req.json();

    const user = await User.findOne({ email: email, contactNo: contactNo });
    if (!user) {
      return NextResponse.json({ error: "Invalid Contact Details" }, { status: 404 });
    }
    const newContact = new Contact({
      name,
      contactNo,
      email,
      user: user,
    });

    const savedContact = await newContact.save();
    await User.findByIdAndUpdate(userId, {
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
