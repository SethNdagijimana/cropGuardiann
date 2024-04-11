import { getUser } from "@/services/user"
import { User } from "@prisma/client"
import { getServerSession } from "next-auth"
import AccountPageWidget from "./Widget"
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const AccountPage = async () => {

  const session = await getServerSession(authOptions)
  const userId = session?.user.id as string

  const data = await getUser(userId)
  const user = data.user as User

  return (
    <div>
      <AccountPageWidget
       
        userEmail={user.email}
        
      />
    </div>
  )
}

export default AccountPage
