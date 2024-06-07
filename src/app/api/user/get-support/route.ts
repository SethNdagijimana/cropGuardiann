import { prisma } from "@/lib/prisma";
import { HttpStatusCode } from "@/utils/enums";
import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    console.log("Request received");

    const { userName, userEmail, phoneNumber, location, userId, insurance, support, message } = await req.json();
    
    console.log("Request data:", { userName, userEmail, phoneNumber, location, userId, insurance, support, message });

    if (!userName || !userEmail || !phoneNumber || !location || !userId || !insurance || !support || !message) {
      console.error("Validation error: missing fields");
      return NextResponse.json(
        { error: true, message: "All fields are required" },
        { status: HttpStatusCode.BAD_REQUEST }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: userEmail.toLowerCase() }
    });

    if (!user) {
      console.error("User not found");
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

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
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

    console.log("Support request created and email sent successfully");

    return NextResponse.json(
      {
        success: true,
        message: "Support created successfully and email notification sent",
        support: userSupport
      },
      { status: HttpStatusCode.OK }
    );
  } catch (error) {
    console.error("Internal Server Error:", error);
    return NextResponse.json(
      { error: true, message: "Internal Server Error" },
      { status: HttpStatusCode.INTERNAL_SERVER }
    );
  }
}
