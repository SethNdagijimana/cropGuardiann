import { PrismaClient } from '@prisma/client';
import { HttpStatusCode } from "@/utils/enums";
import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import { addNotification } from '@/lib/notification';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, email, contact, userId, insurance } = await req.json();

    // Validate required fields
    if (!name || !email || !contact || !userId || !insurance) {
      console.error("Validation Error: Missing fields", { name, email, contact, userId, insurance });
      return NextResponse.json(
        { error: true, message: "All fields are required" },
        { status: HttpStatusCode.BAD_REQUEST }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (!user) {
      console.error("User Not Found with email:", email.toLowerCase());
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
        userId: user.id,
        insurance,
      },
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptionsToSupport = {
      from:`"${name}" <${email}>`,
      to: "sethreas@gmail.com",
      subject: "New Insurance Quotation Request",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #0C3E0A;">New Insurance Request</h2>
          <p style="color: #0C3E0A;">Crop Guardian</p>
          <p>You have received a new Insurance request from <strong>${name}</strong>. Here are the details:</p>
          <ul style="list-style-type: none; padding: 0;">
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${contact}</li>
            <li><strong>User ID:</strong> ${userId}</li>
            <li><strong> Requested Insurance is:</strong> ${insurance}</li>
          </ul>
        </div>
      `
    };

    // Email to the user
    const mailOptionsToUser = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "Insurance Request Received",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #0C3E0A;">Request Received</h2>
          <p>Thank you for Applying for insurance, <strong>${name}</strong>! Your request is being processed. You will receive a confirmation email or call within 24 hours.</p>
          <p>Best regards,<br>Crop Guardian Support Team</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptionsToSupport);
    await transporter.sendMail(mailOptionsToUser);

    // Add notification for the user
    addNotification({
      title: "Insurance Request Received",
      message: `Thank you for applying for insurance, ${name}! Your request is being processed. You will receive a confirmation email or call within 24 hours.`,
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
      { error: true, message: "Internal Server Error" },
      { status: HttpStatusCode.INTERNAL_SERVER }
    );
  }
}
