import { prisma } from "@/lib/prisma"
import { HttpStatusCode } from "@/utils/enums"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const {
    name,
    email,
    contact,
    userId,
    insurance,

  } = await req.json()

  if (
    !name ||
    !email ||
    !contact ||
    !userId ||
    !insurance
  ) {
    return NextResponse.json(
      { error: true, message: "all-fields are required" },
      { status: HttpStatusCode.BAD_REQUEST }
    )
  }

  // Check if the user exists

  try {
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() }
    })

    if (!user) {
      return NextResponse.json(
        { error: true, message: "User not found" },
        { status: HttpStatusCode.BAD_REQUEST }
      )
    }
  
  
    //save insurance in db

    const userInsurance = await prisma.insurance.create({
      data: {
        name,
        email: email.toLowerCase(),
        contact,
        userId,
        insurance,
      
      }
    })

    return NextResponse.json(
      {
        success: true,
        message: "insurance create successfully",
        insurance: userInsurance
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
