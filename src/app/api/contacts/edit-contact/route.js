import { NextResponse } from "next/server";
import Contact from "@/app/_Database/Schemas/ContactSchema";

export async function POST(req) {
  try {
    const { contactId, name, contactNo, email } = await req.json();
    console.log(contactId, name, contactNo, email);
    const updatedContact = await Contact.findByIdAndUpdate(
      contactId,
      { name, contactNo, email },
      { new: true } // Return the updated document
    );

    if (!updatedContact) {
      return NextResponse.json({ error: "Contact not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Contact updated successfully", contact: updatedContact });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
