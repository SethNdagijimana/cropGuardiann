import { prisma } from "@/lib/prisma";
import { HttpStatusCode } from "@/utils/enums";
import { sendEmail } from "@/utils/mailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, contact, userId, insurance } = await req.json();

    // Validate required fields
    if (!name || !email || !contact || !userId || !insurance) {
      return NextResponse.json(
        { error: true, message: "All fields are required" },
        { status: HttpStatusCode.BAD_REQUEST }
      );
    }

    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (!user) {
      return NextResponse.json(
        { error: true, message: "User not found" },
        { status: HttpStatusCode.BAD_REQUEST }
      );
    }

    // Save insurance in the database
    const userInsurance = await prisma.insurance.create({
      data: {
        name,
        email: email.toLowerCase(),
        contact,
        userId,
        insurance,
        user: { connect: { email: email.toLowerCase() } },
      },
    });

    await sendEmail({
      to: email,
      subject: "New Insurance Request",
      text: `A new insurance request has been submitted by ${name}. Details: Name: ${name}, Email: ${email}, Contact: ${contact}, Insurance: ${insurance}.`,
      html: `<p>A new insurance request has been submitted by ${name}. Details:</p><ul><li>Name: ${name}</li><li>Email: ${email}</li><li>Contact: ${contact}</li><li>Insurance: ${insurance}</li></ul>`,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Insurance created successfully",
        insurance: userInsurance,
      },
      { status: HttpStatusCode.OK }
    );
  } catch (error) {
    console.error("Internal Server Error:", error); 
    return NextResponse.json(
      { error: true, message: "Internal Server Error",},
      { status: HttpStatusCode.INTERNAL_SERVER }
    );
  }
}
