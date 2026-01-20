import { NextResponse } from "next/server";
import validator from "validator";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/userModels";

export async function POST(request) {
  try {
    await dbConnect();

    const { fullName, email, phoneNumber, message, subject } = await request.json();

    // Step 1: Check for empty fields
    if (!fullName || !email || !phoneNumber || !message || !subject) {
      return NextResponse.json({
        message: "Something is missing",
        success: false,
      }, { status: 400 });
    }

    // Step 2: Validate email format
    if (!validator.isEmail(email)) {
      return NextResponse.json({
        message: "Invalid email format",
        success: false,
      }, { status: 400 });
    }

    // Step 3: Validate international phone number format
    const parsedPhone = parsePhoneNumberFromString(phoneNumber);

    if (!parsedPhone || !parsedPhone.isValid()) {
      return NextResponse.json({
        message: "Invalid phone number format",
        success: false,
      }, { status: 400 });
    }

    // Optionally normalize the number to E.164 format
    const normalizedPhone = parsedPhone.number; // e.g., "+919027226881"

    // Step 4: Store the data
    const user = await User.create({
      fullName,
      email,
      phoneNumber: normalizedPhone,
      message,
      subject,
    });

    return NextResponse.json({
      message: "Message sent successfully. We will contact you within 24 hours.",
      success: true,
    }, { status: 201 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Internal server error",
      success: false,
    }, { status: 500 });
  }
}
