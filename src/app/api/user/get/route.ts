import { getUser } from "@/services/user"
import { User } from "@prisma/client"
import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

export { default } from "next-auth/middleware"

// export const config = {
//   matcher: ["/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)"]
// }

export async function middleware(req: NextRequest, res: NextResponse) {
  const session = await getToken({ req })

  const url = req.nextUrl
  const path = url.pathname
  const hostname = req.headers.get("host") ?? ""

  if (!hostname.includes(process.env.NEXT_PUBLIC_DOMAIN!.split("//")[1])) {
    const url = req.nextUrl.clone()
    url.pathname = "/not-found"

    return NextResponse.redirect(url)
  }

  const live_url = hostname.split(".")

  let length = 3

  if (process.env.NODE_ENV === "development") {
    length = 2
  }

  if (live_url?.length === length) {
    return NextResponse.rewrite(new URL(`/${live_url[0]}${path}`, req.url))
  }

  // Authenticated pages
  const newPath = "/" + path.split("/").splice(2).join("/")

  let user = null

  if (session) {
    const userId = session?.id as string
    const data = await getUser(userId)
    user = (data.user as User) || null
  }

  // FOR USER
  if (
    newPath.startsWith("/dashboard") ||
    newPath.startsWith("/account") ||
    newPath.startsWith("/preview")
  ) {
    if (!session || !user) {
      const url = req.nextUrl.clone()
      url.pathname = "/signin"
      return NextResponse.redirect(url)
    }
  }

  if (
    newPath.startsWith("/signin") ||
    newPath.startsWith("/signup") ||
    newPath.startsWith("/reset-password")
  ) {
    if (user) {
      const url = req.nextUrl.clone()
      url.pathname = `/dashboard`
      return NextResponse.redirect(url)
    }
  }
}
