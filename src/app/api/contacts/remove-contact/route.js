import { NextResponse } from "next/server";
import Contact from "@/app/_Database/Schemas/ContactSchema";
import User from "@/app/_Database/Schemas/UserSchema";

export async function DELETE(req) {
  try {
    const { contactId, userId } = await req.json();

    const deletedContact = await Contact.findByIdAndDelete(contactId);
    if (!deletedContact) {
      return NextResponse.json({ error: "Contact not found" }, { status: 404 });
    }

    // Remove contact from user's contact list
    await User.findByIdAndUpdate(userId, { $pull: { contacts: contactId } });

    return NextResponse.json({ message: "Contact deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
