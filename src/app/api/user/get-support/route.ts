import { prisma } from "@/lib/prisma";
import { HttpStatusCode } from "@/utils/enums";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const {
    userName,
    userEmail,
    phoneNumber,
    location,
    userId,
    insurance,
    support,
    message
  } = await req.json();

  if (
    !userName ||
    !userEmail ||
    !phoneNumber ||
    !location ||
    !userId ||
    !insurance ||
    !support ||
    !message
  ) {
    return NextResponse.json(
      { error: true, message: "All fields are required" },
      { status: HttpStatusCode.BAD_REQUEST }
    );
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: userEmail.toLowerCase() }
    });

    if (!user) {
      return NextResponse.json(
        { error: true, message: "User not found" },
        { status: HttpStatusCode.BAD_REQUEST }
      );
    }

    const userSupport = await prisma.support.create({
      data: {
        userName,
        userEmail: userEmail.toLowerCase(),
        phoneNumber,
        location,
        userId,
        insurance,
        support,
        message
      }
    });

    // Send an email notification
    const transporter = nodemailer.createTransport({
      host: "smtp.google.com", 
      port: 587,
      secure: false, 
      auth: {
        user: "sethreas@gmail.com",
        pass: "syjsyhgdocehrrqg"
      }
    });

    const mailOptions = {
      from: userEmail,
      to: "sethreas@gmail.com",
      subject: "New Support Request",
      text: `You have received a new support request from ${userName}. Here are the details:
      - Email: ${userEmail}
      - Phone: ${phoneNumber}
      - Location: ${location}
      - User ID: ${userId}
      - Insurance: ${insurance}
      - Support: ${support}
      - Message: ${message}`
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        success: true,
        message: "Support created successfully and email notification sent",
        support: userSupport
      },
      { status: HttpStatusCode.OK }
    );
  } catch (error) {
    return NextResponse.json(
      { error: true, message: "Internal Server Error" },
      { status: HttpStatusCode.INTERNAL_SERVER }
    );
  }
}
