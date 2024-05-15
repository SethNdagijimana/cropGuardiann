
import { prisma } from "@/lib/prisma"
import { generateResetPasswordEmail } from "@/services/user"
import { HttpStatusCode } from "@/utils/enums"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { email } = await req.json()


  if (!email) {
    return NextResponse.json(
      { error: true, message:"email is required" },
      { status: HttpStatusCode.BAD_REQUEST }
    )
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      return NextResponse.json(
        { error: true, message: "user-with-email-does-not-exist" },
        { status: HttpStatusCode.BAD_REQUEST }
      )
    }

    await generateResetPasswordEmail(user.email)

    return NextResponse.json(
      {
        success: true,
        message: "email-has-been-sent"
      },
      { status: HttpStatusCode.OK }
    )
  } catch (error) {
    return NextResponse.json(
      { error: true, message: "error-message" },
      { status: HttpStatusCode.INTERNAL_SERVER }
    )
  }
}
