"use client"

import { useRouter } from "next/navigation"
import AreaOfDoubtIcon from "../Icon/AreaOfDoubtIcon"
import LossesIcon from "../Icon/LossesIcon"
import UpArrow from "../Icon/UpArrow"
import Wheat from "../Icon/Wheat"

const TopBar = () => {
  const router = useRouter()

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="border border-[#F2F2F2] rounded-2xl md:p-5 p-2 cursor-pointer">
        <div
          className="flex items-center justify-between"
          onClick={() => {
            router.push("/dashboard/predictions")
          }}
        >
          <h4 className="font-bricolage font-semibold">
            Crop Yield Prediction
          </h4>
          <div className="w-12 h-12 p-2 flex items-center justify-center rounded-[32px] bg-[#EEFAFA]">
            <AreaOfDoubtIcon color="#54D2D1" />
          </div>
        </div>

        <div className="mt-[7px]">
          <h1 className="md:text-[40px] text-[20px]">982</h1>
        </div>

        <div className="flex items-center gap-[7px] md:mt-[18px] mt-4">
          <UpArrow color="#4397F7" />

          <h4 className="text-[#4397F7]">MoM</h4>
          <h4 className="text-[#4397F7]">+30%</h4>
        </div>
      </div>

      <div
        className="border border-[#F2F2F2] rounded-2xl md:p-5 p-2 cursor-pointer"
        onClick={() => {
          router.push("/dashboard/predictions/weatherInfo")
        }}
      >
        <div className="flex items-center justify-between">
          <h4 className="font-bricolage font-semibold">
            Weather Data and Soil information
          </h4>
          <div className="w-12 h-12 p-2 flex items-center justify-center rounded-[32px] bg-[#EEFAFA]">
            <LossesIcon color="#54D2D1" />
          </div>
        </div>

        <div className="mt-[7px]">
          <h1 className="md:text-[40px] text-[20px]">982</h1>
        </div>

        <div className="flex items-center gap-[7px] md:mt-[18px] mt-4">
          <UpArrow color="#54D2D1" />

          <h4 className="text-[#54D2D1]">MoM</h4>
          <h4 className="text-[#54D2D1]">+40%</h4>
        </div>
      </div>

      <div
        className="border border-[#F2F2F2] rounded-2xl md:p-5 p-2 cursor-pointer"
        onClick={() => {
          router.push("/dashboard/simpleDashboard/income")
        }}
      >
        <div className="flex items-center justify-between ">
          <h4 className="font-bricolage font-semibold">Market Analysis</h4>
          <div className="w-12 h-12 p-2 flex items-center justify-center rounded-[32px] bg-[#e4fdee]">
            <Wheat color="green" width={32} height={32} />
          </div>
        </div>

        <div className="mt-[7px]">
          <h1 className="md:text-[40px] text-[20px]">982</h1>
        </div>

        <div className="flex items-center gap-[7px] md:mt-[18px] mt-4">
          <UpArrow color="#54D2D1" />

          <h4 className="text-[#54D2D1]">MoM</h4>
          <h4 className="text-[#54D2D1]">+40%</h4>
        </div>
      </div>
    </div>
  )
}

export default TopBar
