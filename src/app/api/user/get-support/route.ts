import { prisma } from "@/lib/prisma"
import { HttpStatusCode } from "@/utils/enums"
import { InsuranceType, SupportType } from "@prisma/client"
import { NextResponse } from "next/server"

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
  } = await req.json()

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
      { error: true, message: "all-fields are required" },
      { status: HttpStatusCode.BAD_REQUEST }
    )
  }

  // Check if the user exists

  try {
    const user = await prisma.user.findUnique({
      where: { email: userEmail.toLowerCase() }
    })

    if (!user) {
      return NextResponse.json(
        { error: true, message: "User not found" },
        { status: HttpStatusCode.BAD_REQUEST }
      )
    }

    //check if insurance option is valid
    if (!(insurance in InsuranceType)) {
      return NextResponse.json(
        { error: true, message: "Invalid insurance option" },
        { status: HttpStatusCode.BAD_REQUEST }
      )
    }

    //check if support is valid

    if (!(support in SupportType)) {
      return NextResponse.json(
        { error: true, message: "invalid support option" },
        { status: HttpStatusCode.BAD_REQUEST }
      )
    }

    //save support in db

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
    })

    return NextResponse.json(
      {
        success: true,
        message: "support create successfully",
        support: userSupport
      },
      { status: HttpStatusCode.OK }
    )
  } catch (error) {
    return NextResponse.json(
      { error: true, message: "Internal Server Error" },
      { status: HttpStatusCode.INTERNAL_SERVER }
    )
  }
}
