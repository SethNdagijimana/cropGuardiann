import { prisma } from "@/lib/prisma"
import { HttpStatusCode } from "@/utils/enums"
import { sendEmail } from "@/utils/postmark"
import jwt from "jsonwebtoken"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  console.log("Received POST request")

  try {
    const { email } = await req.json()
    console.log("Email received:", email)

    const userTokenInDB = await prisma.emailToken.findMany({
      where: { email }
    })
    console.log("User token in DB:", userTokenInDB)

    if (userTokenInDB.length) {
      await prisma.emailToken.updateMany({
        where: { email },
        data: {
          isActive: false,
          updatedAt: new Date()
        }
      })
      console.log("Existing tokens deactivated")
    }

    const token = jwt.sign(
      { id: email },
      process.env.EMAIL_VERIFICATION_SECRET!,
      {
        expiresIn: "1d"
      }
    )
    console.log("JWT token generated:", token)

    const emailHtml = `
    <div style="text-align:center;">
      <h1>Verify your email to start using Crop Guardian</h1>
      <span style="text-decoration:underline;margin-top:16px;">${email}</span>

      <p style="margin-top:28px">Your link is active for 24 hours. After that, you will need to resend the verification email.</p>
      
      <a href="${process.env.APP_URL}/verify-email/${token}" target="_blank">Verify email address</a>

      <a style="display:block; margin-top:16px" href="${process.env.APP_URL}/verify-email/${token}" target="_blank">
        ${process.env.APP_URL}/verify-email/${token}
      </a>
    </div>
    `
    console.log("Email HTML generated")

    await prisma.emailToken.create({
      data: {
        token,
        email,
        isActive: true
      }
    })
    console.log("Token saved in DB")

    await sendEmail(email, "Please verify your email", emailHtml)
    console.log("Email sent")

    return NextResponse.json(
      { success: true, message: "email-has-been-sent" },
      { status: HttpStatusCode.OK }
    )
  } catch (error) {
    console.error("Error in POST /api/user/generate-verification-email:", error)
    return NextResponse.json(
      { error: true, message: "error-message" },
      { status: HttpStatusCode.INTERNAL_SERVER }
    )
  }
}
