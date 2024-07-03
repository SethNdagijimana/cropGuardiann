"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { useState } from "react"
import { Button, buttonVariants } from "../ui/button"
import { Sheet, SheetContent } from "../ui/sheet"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoading, setisLoading] = useState<boolean>(false)
  const { setTheme } = useTheme()

  const handleSheetOpenChange = (open: boolean) => {
    if (isLoading) return null

    if (!open) {
      setIsMenuOpen(!isMenuOpen)
    }

    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  return (
    <div className="container pt-[44px]">
      <nav className="flex items-center justify-between">
        <div className="text-[26px] md:text-[32px] font-bold font-bricolage">
          CropGuardian
        </div>

        <ul className="hidden md:flex items-center justify-center gap-6">
          <li className="cursor-pointer">
            <Link href="#home">Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="#about-us">About Us</Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center justify-center gap-6">
          <Link
            href="/signin"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "bg-[#F5F5F5] hover:bg-[#F5F5F5] hover:opacity-70 transition h-10 rounded-[50px]"
            )}
          >
            <span className="md:px-2 md:py-[2px] text-[#212121] font-medium md:text-base text-sm">
              Sign in
            </span>
          </Link>

          <Link
            href="/signup"
            className={cn(
              buttonVariants({ variant: "default" }),
              "md:h-10 md:rounded-[50px]"
            )}
          >
            <span className="px-[6px] md:px-2 py-[2px] font-medium md:text-base text-sm text-white">
              Create account
            </span>
            <svg
              width={25}
              height={24}
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.3656 12.3381L14.1812 17.8381C14.0781 17.9474 13.9094 18.0006 13.7969 18.0006C13.6723 18.0006 13.5472 17.9576 13.4481 17.8707C13.2365 17.6851 13.2208 17.3688 13.4132 17.1647L17.8094 12.5006H6.01844C5.73184 12.5006 5.5 12.277 5.5 12.0287C5.5 11.7804 5.73191 11.5006 6.01844 11.5006H17.8091L13.4122 6.83494C13.2198 6.63084 13.2355 6.31431 13.4471 6.129C13.6593 5.94444 13.9868 5.95809 14.1799 6.16319L19.3643 11.6632C19.5437 11.8537 19.5438 12.1474 19.3656 12.3381Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>

        <div>
        {/* <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu> */}
        </div>

        <div className="md:hidden flex">
          <div onClick={() => handleSheetOpenChange(isMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
            </svg>

            <Sheet
              open={isMenuOpen}
              onOpenChange={(open) => {
                handleSheetOpenChange(open)
              }}
            >
              <SheetContent
                className="overflow-y-auto h-[400px] w-[200px] sm:w-[540px] bg-white/80"
                side={"left"}
              >
                <ul className="md:hidden space-y-4">
                  <li className="cursor-pointer">
                    <Link href="#home">Home</Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link href="#about-us">About Us</Link>
                  </li>

                  <Link
                    href="/signin"
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      " hover:bg-[#F5F5F5] hover:opacity-70 transition md:h-10 md:rounded-[50px] "
                    )}
                  >
                    <span className="md:py-[2px] text-white font-medium text-sm">
                      Sign in
                    </span>

                    <svg
                      width={25}
                      height={24}
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.3656 12.3381L14.1812 17.8381C14.0781 17.9474 13.9094 18.0006 13.7969 18.0006C13.6723 18.0006 13.5472 17.9576 13.4481 17.8707C13.2365 17.6851 13.2208 17.3688 13.4132 17.1647L17.8094 12.5006H6.01844C5.73184 12.5006 5.5 12.277 5.5 12.0287C5.5 11.7804 5.73191 11.5006 6.01844 11.5006H17.8091L13.4122 6.83494C13.2198 6.63084 13.2355 6.31431 13.4471 6.129C13.6593 5.94444 13.9868 5.95809 14.1799 6.16319L19.3643 11.6632C19.5437 11.8537 19.5438 12.1474 19.3656 12.3381Z"
                        fill="white"
                      />
                    </svg>
                  </Link>

                  <Link
                    href="/signup"
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "md:h-10 md:rounded-[50px]"
                    )}
                  >
                    <span className=" md:px-2 py-[2px] font-medium text-sm text-white">
                      Create account
                    </span>
                    <svg
                      width={25}
                      height={24}
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.3656 12.3381L14.1812 17.8381C14.0781 17.9474 13.9094 18.0006 13.7969 18.0006C13.6723 18.0006 13.5472 17.9576 13.4481 17.8707C13.2365 17.6851 13.2208 17.3688 13.4132 17.1647L17.8094 12.5006H6.01844C5.73184 12.5006 5.5 12.277 5.5 12.0287C5.5 11.7804 5.73191 11.5006 6.01844 11.5006H17.8091L13.4122 6.83494C13.2198 6.63084 13.2355 6.31431 13.4471 6.129C13.6593 5.94444 13.9868 5.95809 14.1799 6.16319L19.3643 11.6632C19.5437 11.8537 19.5438 12.1474 19.3656 12.3381Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
