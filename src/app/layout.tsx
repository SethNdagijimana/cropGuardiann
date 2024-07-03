import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Bricolage_Grotesque, Inter } from "next/font/google"
import "../styles/globals.scss"
import NextAuthSessionProvider from "./providers/NextAuthSessionProvider"
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider"

const inter = Inter({ subsets: ["latin"] })

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque"
})

export const metadata: Metadata = {
  title: "CropGuardian",
  description:
    "Step into a world of agricultural excellence with Crop Guardian, where we cultivate success and innovation hand in hand."
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, bricolage.variable)}>
        <main>
          
          <ThemeProvider attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <NextAuthSessionProvider>
              {children}
              </NextAuthSessionProvider>
              </ThemeProvider>
          
        </main>
        <Toaster />
      </body>
    </html>
  )
}
