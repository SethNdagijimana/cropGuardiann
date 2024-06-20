import { addNotification } from "@/lib/notification";
import { prisma } from "@/lib/prisma";
import { HttpStatusCode } from "@/utils/enums";
import Email from "next-auth/providers/email";
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

  // Email to support team
  const mailOptionsToSupport = {
    from: `"${userName}" <${userEmail}>`,
    to: "sethreas@gmail.com",
    subject: "New Support Request",
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #0C3E0A;">New Support Request</h2>
        <p style="color: #0C3E0A;">Crop Guardian</p>
        <p>You have received a new support request from <strong>${userName}</strong>. Here are the details:</p>
        <ul style="list-style-type: none; padding: 0;">
          <li><strong>Email:</strong> ${userEmail}</li>
          <li><strong>Phone:</strong> ${phoneNumber}</li>
          <li><strong>Location:</strong> ${location}</li>
          <li><strong>User ID:</strong> ${userId}</li>
          <li><strong>Insurance:</strong> ${insurance}</li>
          <li><strong>Support:</strong> ${support}</li>
          <li><strong>Message:</strong> ${message}</li>
        </ul>
      </div>
    `
  };

  // Email to the user
  const mailOptionsToUser = {
    from: process.env.SMTP_USER,
    to: userEmail,
    subject: "Support Request Received",
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #0C3E0A;">Support Request Received</h2>
        <p>Thank you for requesting support, <strong>${userName}</strong>! Your request is being processed. You will receive a confirmation email or call within 24 hours.</p>
        <p>Best regards,<br>The Support Team</p>
      </div>
    `
  };

    await transporter.sendMail(mailOptionsToSupport);
    await transporter.sendMail(mailOptionsToUser);

    addNotification({
      title: "Support Request Received",
      message: `Thank you for requesting support, ${userName}! Your request is being processed. You will receive a confirmation email or call within 24 hours.`,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Support created successfully and email notifications sent",
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
