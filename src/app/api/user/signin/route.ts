import { prisma } from "@/lib/prisma"
import { HttpStatusCode } from "@/utils/enums"
import { compare } from "bcrypt"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { email, password } = await req.json()

  if (!email || !password) {
    return NextResponse.json(
      { error: true, message: "all fields are required" },
      { status: HttpStatusCode.BAD_REQUEST }
    )
  }

  try {
    // Check if Email already exists in DB
    const user = await prisma.user.findFirst({
      where: {
        email: {
          equals: email,
          mode: "insensitive"
        }
      }
    })

    if (!user) {
      return NextResponse.json(
        { error: true, message: "user does not exist" },
        { status: HttpStatusCode.BAD_REQUEST }
      )
    }

    // Compare passwords
    const comparePasswords = await compare(password, user.password)

    if (!comparePasswords) {
      return NextResponse.json(
        { error: true, message: "incorrect-password" },
        { status: HttpStatusCode.BAD_REQUEST }
      )
    }

    const { password: _, ...restUser } = user

    return NextResponse.json(
      {
        success: true,
        message: "user logged in successfully",
        user: restUser
      },
      { status: HttpStatusCode.OK }
    )
  } catch (error) {
    return NextResponse.json(
      { error: true, message: "Internal Server error" },
      { status: HttpStatusCode.INTERNAL_SERVER }
    )
  }
}
