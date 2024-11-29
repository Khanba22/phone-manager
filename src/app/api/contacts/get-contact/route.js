import { NextResponse } from "next/server";
import Contact from "@/app/_Database/Schemas/ContactSchema";

export async function POST(req) {
  try {
    const { contactNo } = await req.json();

    // Check if contactNo is provided
    if (!contactNo) {
      return NextResponse.json({ error: "contactNo is required" }, { status: 400 });
    }

    // Find the contact by contactNo
    const contact = await Contact.findOne({ contactNo }).populate("user", "username contactNo");

    if (!contact) {
      return NextResponse.json({ error: "Contact not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Contact found", contact });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
