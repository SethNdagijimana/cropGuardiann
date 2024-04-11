import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { getUser } from "@/services/user"
import { User } from "@prisma/client"
import { Header } from "@/components/Sidebar"

const HeaderWidget = async () => {

    const session = await getServerSession(authOptions)
    const userId = session?.user.id as string
  
    const data = await getUser(userId)
    const user = data.user as User

    return (
        <div>
            <Header name={user.name}/>
        </div>
    )
}

export default HeaderWidget
