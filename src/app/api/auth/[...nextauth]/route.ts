import { logIn } from "@/services/user"
import { User } from "@prisma/client"
import { NextAuthOptions } from "next-auth"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions: NextAuthOptions = {
  // adapter: PrismaAdapter(prisma),

  providers: [
    CredentialsProvider({
      type: "credentials",

      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string
          password: string
        }

        let data = await logIn({ email, password })

        const user = data.user as User

        if (!user) {
          throw new Error(data.message)
        }

        return {
          id: user.id
        }
      }
    })
  ],

  pages: {
    signIn: "/signin"
  },

  session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 },

  callbacks: {
    async session({ session, token }) {
      const { user, ...rest } = session
      const t = token as unknown as any

      return {
        ...rest,
        user: {
          id: t.id
        }
      }
    },

    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: user.id
        }
      }

      return token
    }
  },

  secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
