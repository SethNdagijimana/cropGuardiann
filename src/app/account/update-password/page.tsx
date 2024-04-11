import { authOptions } from "@/app/api/auth/[...nextauth]/route"

import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import ChangePasswordPageWidget from "./Widget"

const UpdatePasswordPage = async () => {

  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/signin")
  }

  const user = session.user
  const userId = user.id

  return (
    <ChangePasswordPageWidget
      userId={userId}
      
    />
  )
}

export default UpdatePasswordPage
