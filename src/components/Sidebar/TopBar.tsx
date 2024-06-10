"use client"

import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { useState } from "react"
import AreaOfDoubtIcon from "../Icon/AreaOfDoubtIcon"
import LossesIcon from "../Icon/LossesIcon"
import UpArrow from "../Icon/UpArrow"
import Wheat from "../Icon/Wheat"

const TopBar = () => {
  const router = useRouter()

  const [isActiveTab, setIsActiveTab] = useState(null)

  const handleActiveTab = (activeTab: any) => {
    setIsActiveTab(isActiveTab === activeTab ? null : activeTab)
  }

  return (
    <div className="grid md:grid-cols-3 md:gap-6 gap-4 ">
      <div
        className={cn(
          "border border-[#F2F2F2] rounded-2xl md:p-5 p-2 cursor-pointer",
          isActiveTab === "CropYield" ? "border-[#0E4D0C]" : ""
        )}
        onClick={() => {
          router.push("/dashboard/predictions")
          handleActiveTab("CropYield")
        }}
      >
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
        className={cn(
          "border border-[#F2F2F2] rounded-2xl md:p-5 p-2 cursor-pointer",
          isActiveTab === "soil" ? "border-[#0E4D0C]" : ""
        )}
        onClick={() => {
          router.push("/dashboard/predictions/weatherInfo")
          handleActiveTab("soil")
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
        className={cn(
          "border border-[#F2F2F2] rounded-2xl md:p-5 p-2 cursor-pointer",
          isActiveTab === "market" ? "border-[#0E4D0C]" : ""
        )}
        onClick={() => {
          router.push("/dashboard/predictions/market-analysis")
          handleActiveTab("market")
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
