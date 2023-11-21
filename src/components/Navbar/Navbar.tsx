import { cn } from "@/lib/utils"
import Link from "next/link"
import { buttonVariants } from "../ui/button"

const Navbar = () => {
  return (
    <div className="container pt-[44px]">
      <nav className="flex items-center justify-between">
        <div className="text-[32px] font-bold font-bricolage">CropGuardian</div>

        <ul className="flex items-center justify-center gap-6">
          <li className="cursor-pointer">
            <Link href="#home">Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="#about-us">About Us</Link>
          </li>
        </ul>

        <div className="flex items-center justify-center gap-6">
          <Link
            href="/signin"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "bg-[#F5F5F5] text-[#212121] hover:bg-[#F5F5F5] hover:opacity-70 transition h-10 rounded-[50px]"
            )}
          >
            <span className="px-2 py-[2px] text-[#212121] font-medium text-base">
              Sign in
            </span>
          </Link>

          <Link
            href="/signup"
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-10 rounded-[50px]"
            )}
          >
            <span className="px-2 py-[2px] font-medium text-base">
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
      </nav>
    </div>
  )
}

export default Navbar
