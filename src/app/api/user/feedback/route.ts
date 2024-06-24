import { prisma } from '@/lib/prisma';
import { HttpStatusCode } from '@/utils/enums';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const {name, email, feedback } = await req.json();
    console.log("Received feedback", {name, email, feedback });

    if (!email || !feedback) {
      console.error("Missing fields:", {name, email, feedback });
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
        name,
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
      from: `${email}`,
      to: "sethreas@gmail.com",
      subject: "New FeedBack",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #0C3E0A;">New FeedBack</h2>
          <p style="color: #0C3E0A;">Crop Guardian</p>
          <p>You have received a new FeedBack  from <strong>${name} </strong></p>
          <ul style="list-style-type: none; padding: 0;">
            <li><strong>Email:</strong> ${email}</li>
            <li><strong> FeedBack is:</strong> ${feedback}</li>
          </ul>
        </div>
      `,
    };

    const mailOptionsToUser = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "FeedBack Received",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #0C3E0A;">FeedBack Received</h2>
          <p>Thank you for Trusting Crop Guardian, <strong>${email}</strong>!agricultural excellence. is not just a goal but a way of life.</p>
          <p>Best regards,<br>Crop Guardian Support Team</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptionsToSupport);
    await transporter.sendMail(mailOptionsToUser);

    return NextResponse.json(
      { success: true, message: `Thank You ${name} for your FeedBack` },
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

export async function GET(req: Request) {
  try {
    const feedbacks = await prisma.feedback.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    const userFeedbackMap = new Map();
    feedbacks.forEach((feedback) => {
      if (!userFeedbackMap.has(feedback.email)) {
        userFeedbackMap.set(feedback.email, feedback);
      }
    });

    const latestFeedbacks = Array.from(userFeedbackMap.values()).slice(0, 4);

    return NextResponse.json(latestFeedbacks, { status: HttpStatusCode.OK });
  } catch (error) {
    console.error("Error fetching feedback:", error);
    return NextResponse.json(
      { error: true, message: "Error fetching feedback" },
      { status: HttpStatusCode.INTERNAL_SERVER }
    );
  }
}
