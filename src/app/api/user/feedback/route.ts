import { prisma } from '@/lib/prisma';
import { HttpStatusCode } from '@/utils/enums';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { email, feedback } = await req.json();
    console.log("Received feedback", { email, feedback });

    if (!email || !feedback) {
      console.error("Missing fields:", { email, feedback });
      return NextResponse.json(
        { error: true, message: "All fields are required" },
        { status: HttpStatusCode.BAD_REQUEST }
      );
    }

    const userWithEmail = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (!userWithEmail) {
      console.error("User does not exist:", email);
      return NextResponse.json(
        { error: true, message: "User does not exist" },
        { status: HttpStatusCode.BAD_REQUEST }
      );
    }

    await prisma.feedback.create({
      data: {
        email: email.toLowerCase(),
        feedback,
        userId: userWithEmail.id,
      },
    });

    console.log("Feedback saved to database");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptionsToSupport = {
      from:`${email}`,
      to: "sethreas@gmail.com",
      subject: "New FeedBack",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #0C3E0A;">New Insurance Request</h2>
          <p style="color: #0C3E0A;">Crop Guardian</p>
          <p>You have received a new FeedBack  from <strong>${email}</strong></p>
          <ul style="list-style-type: none; padding: 0;">
            <li><strong>Email:</strong> ${email}</li>
            <li><strong> FeedBack is:</strong> ${feedback}</li>
          </ul>
        </div>
      `
    };

    // Email to the user
    const mailOptionsToUser = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "FeedBack Received",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #0C3E0A;">Request Received</h2>
          <p>Thank you for Trusting Crop Guardian, <strong>${email}</strong>!agricultural excellence. is not just a goal but a way of life.</p>
          <p>Best regards,<br>Crop Guardian Support Team</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptionsToSupport);
    await transporter.sendMail(mailOptionsToUser);


    // Return a successful JSON response
    return NextResponse.json(
      { success: true, message: "Your feedback was received successfully" },
      { status: HttpStatusCode.OK }
    );

  } catch (error) {
    console.error("Internal server error:", error);
    return NextResponse.json(
      { error: true, message: "Internal server error" },
      { status: HttpStatusCode.INTERNAL_SERVER }
    );
  }
}
