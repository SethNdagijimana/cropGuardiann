import { prisma } from "@/lib/prisma"
import { HttpStatusCode } from "@/utils/enums"
import { compare, hash } from "bcrypt"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { userId, currentPassword, newPassword, retypedNewPassword } =
    await req.json()
  
  if (!userId) {
    return NextResponse.json(
      { error: true, message:"userId-is-required" },
      { status: HttpStatusCode.BAD_REQUEST }
    )
  }

  // Check if all fields are sent from client
  if (!currentPassword || !newPassword || !retypedNewPassword) {
    return NextResponse.json(
      { error: true, message: "all-fields-are-required" },
      { status: HttpStatusCode.BAD_REQUEST }
    )
  }

  // Check if passwords match
  if (newPassword !== retypedNewPassword) {
    return NextResponse.json(
      { error: true, message: "passwords-do-not-match" },
      { status: HttpStatusCode.BAD_REQUEST }
    )
  }

  try {
    // Check if Email already exists in DB
    const user = await prisma.user.findFirst({
      where: { id: userId }
    })

    if (!user) {
      return NextResponse.json(
        { error: true, message: "user-does-not-exist" },
        { status: HttpStatusCode.BAD_REQUEST }
      )
    }

    // Compare the current password with the hashed password stored in DB
    const comparedPasswords = await compare(currentPassword, user.password)

    if (!comparedPasswords) {
      return NextResponse.json(
        { error: true, message:"current-password-is-incorrect" },
        { status: HttpStatusCode.BAD_REQUEST }
      )
    }

    const compareCurrentPasswordAndNewPassword = await compare(
      newPassword,
      user.password
    )

    if (compareCurrentPasswordAndNewPassword) {
      return NextResponse.json(
        {
          error: true,
          message:"current-password-cannot-match-the-new-password"
        },
        { status: HttpStatusCode.BAD_REQUEST }
      )
    }

    // Hash password
    const hashedPassword = await hash(newPassword, 10)

    // update user in DB
    await prisma.user.update({
      where: { id: userId },
      data: {
        password: hashedPassword,
        updatedAt: new Date()
      }
    })

    return NextResponse.json(
      {
        success: true,
        message: "your-password-has-been-updated-successfully"
      },
      { status: HttpStatusCode.OK }
    )
  } catch (error) {
    return NextResponse.json(
      { error: true, message:"An error occured. Please try again" },
      { status: HttpStatusCode.INTERNAL_SERVER }
    )
  }
}
