"use client"

import { ChartComponent, WeatherChart } from "@/components/Chart"
import TotalIcon from "@/components/Icon/TotalIcon"
import { SoilAnalysis } from "@/components/SoilAnalysis"
import { useRouter } from "next/navigation"

const SimpleDashboard = () => {
  const router = useRouter()

  return (
    <>
      {/* desktop */}

      <div className="gap-8 md:flex md:items-center  md:space-y-0 space-y-4 ">
        <div className="md:px-6 px-2 py-[27px] rounded-[16px] border border-[#F2F2F2] md:w-[661px] w-[300px] container">
          <div className="flex items-center gap-[10px]">
            <TotalIcon color="#54D2D1" />

            <p className="md:text-base text-sm">Total Earnings</p>
          </div>

          <ChartComponent
            bgColor="#54d2d133"
            borderColor="#54D2D1"
            label="Total Earning Per Month"
          />
        </div>

        <SoilAnalysis />
      </div>

      <div className="md:mt-[42px] mt-[32px] md:w-[713px] w-[300px] md:p-6 rounded-[16px] border border-[#F2F2F2]">
        <WeatherChart />
      </div>
    </>
  )
}

export default SimpleDashboard
