import { buttonVariants } from "@/components/ui/button"
import { prisma } from "@/lib/prisma"
import { cn } from "@/lib/utils"
import jwt from "jsonwebtoken"
import Link from "next/link"
import { notFound } from "next/navigation"
import ResetPasswordTokenPageWidget from "./Widget"

interface PageProps {
  params: {
    token: string
  }
}

const ResetPasswordTokenPage = async ({
  params: { token }
}: PageProps) => {
  const tokenInDB = await prisma.resetPasswordToken.findUnique({
    where: { token }
  })

  if (!tokenInDB) {
    notFound()
  }

  if (!tokenInDB.isActive) {
    return (
      <div className="text-center space-y-4">
        <p className="text-xl font-medium">Password Reset link has expired</p>

        <Link
          href={`/reset-password`}
          className={cn(
            "h-10",
            buttonVariants({ variant: "default", className: "h-10" })
          )}
        >
          Resend link
        </Link>
      </div>
    )
  }

  let decode = null

  try {
    decode = jwt.verify(
      token,
      process.env.EMAIL_VERIFICATION_SECRET!
    ) as unknown as any
  } catch (error) {
    return (
      <div className="text-center space-y-4">
        <p className="text-xl font-medium">Password Reset link has expired</p>

        <Link
          href={`/reset-password`}
          className={cn(
            "h-10",
            buttonVariants({ variant: "default", className: "h-10" })
          )}
        >
          Resend link
        </Link>
      </div>
    )
  }

  const userId = decode.id

  return (
    <ResetPasswordTokenPageWidget
      userId={userId}
    />
  )
}

export default ResetPasswordTokenPage
