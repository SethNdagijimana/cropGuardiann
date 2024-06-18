import { prisma } from "@/lib/prisma";
import { HttpStatusCode } from "@/utils/enums";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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
        user: { connect: { email: email.toLowerCase() } },
      },
    });

    console.log("Feedback saved to database");

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: (process.env.SMTP_PORT, 10),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Define email options
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'sethreas@gmail.com',
      subject: 'New Feedback Received',
      text: `You have received new feedback from ${email}:\n\n${feedback}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");

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

export const userFeedback = async (email: string, feedback: string) => {
  console.log("Calling userFeedback API with:", { email, feedback });
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/user/feedback`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, feedback }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error(`Error: ${response.status} - ${response.statusText}`);
      return { error: true, message: errorData.message || "An error occurred" };
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Fetch error:", error);
    return { error: true, message: "feedback error" };
  }
};
