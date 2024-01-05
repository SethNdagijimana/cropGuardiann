"use client"

import AreaOfDoubtIcon from "@/components/Icon/AreaOfDoubtIcon"
import UpArrow from "@/components/Icon/UpArrow"
import { Seasons } from "@/components/Seasons"

const Doubt = () => {
  // TODO  dropdown width

  return (
    <div>
      <div className="border border-[#F2F2F2] rounded-2xl gap-[7px] md:w-[250px] md:p-5 p-2 md:space-y-[22px]">
        <div className="flex items-center justify-between">
          <h4 className="font-bricolage font-semibold">Area of doubt</h4>
          <div className="w-12 h-12 p-2 flex items-center justify-center rounded-[32px] bg-[#FAEEEE]">
            <AreaOfDoubtIcon color="#D25454" />
          </div>
        </div>

        <div className="mt-[7px]">
          <h1 className="md:text-[40px] text-xl">982</h1>
        </div>

        <div className="flex items-center gap-[7px] mt-[18px]">
          <UpArrow color="#4397F7" />

          <h4 className="text-[#4397F7]">MoM</h4>
          <h4 className="text-[#4397F7]">+30%</h4>
        </div>
      </div>

      <Seasons />
    </div>
  )
}

export default Doubt
