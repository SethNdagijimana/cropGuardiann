import { prisma } from "@/lib/prisma";
import { HttpStatusCode } from "@/utils/enums";
import { NextResponse } from "next/server";

export async function POST(req: { json: () => PromiseLike<{ name: any; email: any; contact: any; userId: any; insurance: any; }> | { name: any; email: any; contact: any; userId: any; insurance: any; }; }) {
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
      where: { email: email.toLowerCase() }
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
        user: { connect: { email: email.toLowerCase() } } // Ensure correct relationship connection
      }
    });

    return NextResponse.json(
      {
        success: true,
        message: "Insurance created successfully",
        insurance: userInsurance
      },
      { status: HttpStatusCode.OK }
    );
  } catch (error) {
    console.error("Internal Server Error:", error);  // Log the error details
    return NextResponse.json(
      { error: true, message: "Internal Server Error" },
      { status: HttpStatusCode.INTERNAL_SERVER }
    );
  }
}
