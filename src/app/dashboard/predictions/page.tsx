"use client"

import PieChart from "@/components/Chart/Pie"
import AreaOfDoubtIcon from "@/components/Icon/AreaOfDoubtIcon"
import LossesIcon from "@/components/Icon/LossesIcon"
import UpArrow from "@/components/Icon/UpArrow"
import Wheat from "@/components/Icon/Wheat"
import { useRouter } from "next/navigation"

const Prediction = () => {
  const router = useRouter()
  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        <div className="border border-[#F2F2F2] rounded-2xl md:p-5 p-2 cursor-pointer">
          <div className="flex items-center justify-between">
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
            router.push("/dashboard/simpleDashboard/weatherInfo")
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

      <div className="mt-[25px] grid grid-cols-2 gap-[33px]">
        <div className="p-50 pr-84.87 pb-51 pl-59 rounded-2xl bg-[#F9F9F9] flex items-center justify-center">
          <PieChart />
        </div>
        <div className="bg-yellow-500">2</div>
        <div className="bg-green-500">3</div>
        <div className="bg-blue-500">4</div>
        <div className="bg-purple-500">5</div>
        <div className="bg-orange-500">6</div>
      </div>
    </>
  )
}

export default Prediction
