import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { getUser } from "@/services/user"
import { User } from "@prisma/client"
import { Header } from "@/components/Sidebar"

const HeaderWidget = async () => {
    let user = null;

    try {
        const session = await getServerSession(authOptions);
        const userId = session?.user?.id;

        if (userId) {
            const data = await getUser(userId);
            user = data.user;
        }
    } catch (error) {
        console.error("Error fetching user:", error);
    }

    return (
        <div>
            {user && <Header name={user.name} />}
        </div>
    );
};

export default HeaderWidget;
