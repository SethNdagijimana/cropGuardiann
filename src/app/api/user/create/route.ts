import { prisma } from "@/lib/prisma"
import { HttpStatusCode } from "@/utils/enums"
import { hash } from "bcrypt"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { email, password, retypedPassword } = await req.json()

  // Check if all fields are sent from client
  if (!email || !password || !retypedPassword) {
    return NextResponse.json(
      { error: true, message: "all-fields are required" },
      { status: HttpStatusCode.BAD_REQUEST }
    )
  }

  // Check if passwords match
  if (password !== retypedPassword) {
    return NextResponse.json(
      { error: true, message: "passwords-do-not-match" },
      { status: HttpStatusCode.BAD_REQUEST }
    )
  }

  try {
    // Check if Email already exists in DB
    const userWithEmail = await prisma.user.findFirst({
      where: {
        email: {
          equals: email,
          mode: "insensitive"
        }
      }
    })

    if (userWithEmail) {
      return NextResponse.json(
        { error: true, message: "user with email already exists" },
        { status: HttpStatusCode.BAD_REQUEST }
      )
    }

    // Hash password
    const hashedPassword = await hash(password, 10)

    // Save user in DB
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword
      }
    })

    if (!user) {
      return NextResponse.json(
        {
          error: true,
          message: "error creating user Please try again"
        },
        { status: HttpStatusCode.BAD_REQUEST }
      )
    }

    // await generateVerificationEmail(user.id, user.email, lang, true)

    return NextResponse.json(
      { success: true, message: "user created successfully" },
      { status: HttpStatusCode.OK }
    )
  } catch (error) {
    return NextResponse.json(
      { error: true, message: "Internal-Server error" },
      { status: HttpStatusCode.INTERNAL_SERVER }
    )
  }
}
