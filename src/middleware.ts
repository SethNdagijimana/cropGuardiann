import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {


  const path = req.nextUrl.pathname

  const token = req.cookies.get("token")?.value || ""

  if(path && token){
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl))
  }

  if(path === "/account" && token){
    return NextResponse.redirect(new URL("/account", req.nextUrl))
  }

  if(path && token) {
    return NextResponse.redirect(new URL("/assessment", req.nextUrl))
  }

  if(!path && !token) {
    return NextResponse.redirect(new URL("/", req.nextUrl))
  }
}

export const config = {
  matcher: [
    "/",
    "/dashboard",
    "/signin",
    "/signup",
    "/account",
    "/assessment"
  ]
}