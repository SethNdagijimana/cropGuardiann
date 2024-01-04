"use client"

import { useRouter } from "next/navigation"

const Header = () => {
  const router = useRouter()
  return (
    <>
      {/* <ul className="md:hidden flex items-center px-8">
        <li
          className="cursor-pointer text-2xl font-bricolage font-bold"
          onClick={() => router.push("/")}
        >
          Crop Guardian
        </li>
      </ul> */}

      <div className="hidden md:flex items-center justify-between container cursor-pointer">
        <h3
          className="text-2xl font-bricolage font-bold text-center px-7 "
          onClick={() => router.push("/")}
        >
          Crop Guardian
        </h3>

        <div
          className=" flex items-end justify-end left-0 gap-4"
          onClick={() => router.push("/account")}
        >
          <p className="text-[#004064] text-[15px]">Ndagijimana Seth</p>
          <div className="w-8 h-8 p-4 flex items-center justify-center rounded-[66px] bg-black">
            <p className="text-lg text-white">K</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
