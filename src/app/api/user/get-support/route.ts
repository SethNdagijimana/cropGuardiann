import { prisma } from "@/lib/prisma"
import { HttpStatusCode } from "@/utils/enums"
import { InsuranceType, SupportType } from "@prisma/client"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const {
      userName,
      userEmail,
      phoneNumber,
      location,
      userId,
      insurance,
      support,
      message
    } = await req.json()

    if (
      !userName ||
      !userEmail ||
      !phoneNumber ||
      !location ||
      !userId ||
      !insurance ||
      !support
    ) {
      return NextResponse.json(
        { error: true, message: "All fields are required" },
        { status: HttpStatusCode.BAD_REQUEST }
      )
    }

    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: { email: userEmail.toLowerCase() }
    })

    if (!user) {
      return NextResponse.json(
        { error: true, message: "User not found" },
        { status: HttpStatusCode.BAD_REQUEST }
      )
    }

    // Check if the provided insurance option is valid
    if (!(insurance in InsuranceType)) {
      return NextResponse.json(
        { error: true, message: "Invalid insurance option" },
        { status: HttpStatusCode.BAD_REQUEST }
      )
    }

    if (!(support in SupportType)) {
      return NextResponse.json(
        { error: true, message: "Invalid support option" },
        { status: HttpStatusCode.BAD_REQUEST }
      )
    }

    // Create support
    const newSupport = await prisma.support.create({
      data: {
        userEmail: userEmail.toLowerCase(),
        userName,
        phoneNumber,
        location,
        userId,
        insurance,
        support,
        message: message !== undefined ? message : null
      }
    })

    return NextResponse.json(
      {
        success: true,
        message: "Support requested successfully",
        support: newSupport
      },
      { status: HttpStatusCode.OK }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: true, message: "Internal Server Error" },
      { status: HttpStatusCode.INTERNAL_SERVER }
    )
  }
}
