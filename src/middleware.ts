import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  const isPublicPath = path === "/signin" || path === "/signup"

  const token = request.cookies.get("token")?.value || ""

  if (isPublicPath && token) {
    return NextResponse.redirect(
      new URL("/dashboard/simpleDashboard", request.nextUrl)
    )
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/signin", request.nextUrl))
  }
}

export const config = {
  matcher: [
    "/",
    "/dashboard/:path*",
    "/signin",
    "/signup",
    "/assessment",
    "/account"
  ]
}
