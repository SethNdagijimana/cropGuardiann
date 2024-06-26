import { prisma } from "@/lib/prisma"
import { HttpStatusCode } from "@/utils/enums"
import { sendEmail } from "@/utils/postmark"
import jwt from "jsonwebtoken"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { userId, email } = await req.json()

  try {
    const userTokenInDB = await prisma.resetPasswordToken.findMany({
      where: { userId }
    })

    if (userTokenInDB.length) {
      await prisma.emailToken.updateMany({
        where: { email },
        data: {
          isActive: false,
          updatedAt: new Date()
        }
      })
    }

    const token = jwt.sign(
      { id: userId, email },
      process.env.EMAIL_VERIFICATION_SECRET!,
      {
        expiresIn: "1d"
      }
    )

    const emailHtml = `
    <div styles="text-align:center;">
      <h1>Reset your password</h1>
      <span style="text-decoration:underline;margin-top:16px;">${email}</span>

      <p style="margin-top:28px">Your link is active for 24 hours. After that, you will need to resend the reset password email.</p>
      
      <a href="${process.env.APP_URL}/reset-password/${token}" target="_blank">Reset password</a>

      <a style="display:block; margin-top:16px" href="${process.env.APP_URL}/reset-password/${token}" target="_blank">
        ${process.env.APP_URL}/reset-password/${token}
      </a>
    </div>
    `

    await prisma.resetPasswordToken.create({
      data: {
        token,
        userId,
        email,
        isActive: true
      }
    })

    await sendEmail(email, "Reset password", emailHtml)

    return NextResponse.json(
      { success: true, message:"email-has-been-sent"},
      { status: HttpStatusCode.OK }
    )
  } catch (error) {
    return NextResponse.json(
      { error: true, message: "error-message" },
      { status: HttpStatusCode.INTERNAL_SERVER }
    )
  }
}
