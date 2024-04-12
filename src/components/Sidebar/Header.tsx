"use client"

import { useRouter } from "next/navigation"

interface HeaderProp{
  name: string
}

const Header = ({name}:HeaderProp ) => {
  const router = useRouter()
  return (
    <>

      <div className="hidden md:flex items-center justify-between container">
        <h3
          className="text-2xl font-bricolage font-bold text-center px-7 cursor-pointer"
          onClick={() => router.push("/")}
        >
          Crop Guardian
        </h3>

        <div
          className=" flex items-end justify-end left-0 gap-4 cursor-pointer"
          onClick={() => router.push("/account")}
        >
          <p className="text-[#004064] text-[20px] font-bricolage font-bold">{name}</p>
          <div className="w-8 h-8 p-4 flex items-center justify-center rounded-[66px] bg-black">
            <p className="text-lg text-white">S</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
