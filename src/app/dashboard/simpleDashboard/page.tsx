"use client"

import { ChartComponent, WeatherChart } from "@/components/Chart"
import AreaOfDoubtIcon from "@/components/Icon/AreaOfDoubtIcon"
import InsuranceIcon from "@/components/Icon/InsuranceIcon"
import LossesIcon from "@/components/Icon/LossesIcon"
import TotalIcon from "@/components/Icon/TotalIcon"
import UpArrow from "@/components/Icon/UpArrow"
import Wheat from "@/components/Icon/Wheat"
import { SoilAnalysis } from "@/components/SoilAnalysis"
import { useRouter } from "next/navigation"

const SimpleDashboard = () => {
  const router = useRouter()

  return (
    <>
      <div className="grid grid-cols-4 gap-x-5 mt-[34px] space-x-8 ">
        <div
          className="border border-[#F2F2F2] rounded-2xl p-5 cursor-pointer"
          onClick={() => {
            router.push("/dashboard/simpleDashboard/doubt")
          }}
        >
          <div className="flex items-center justify-between">
            <h4 className="font-bricolage font-semibold">Area of doubt</h4>
            <div className="w-12 h-12 p-2 flex items-center justify-center rounded-[32px] bg-[#EEFAFA]">
              <AreaOfDoubtIcon color="#54D2D1" />
            </div>
          </div>

          <div className="mt-[7px]">
            <h1 className="text-[40px]">982</h1>
          </div>

          <div className="flex items-center gap-[7px] mt-[18px]">
            <UpArrow color="#4397F7" />

            <h4 className="text-[#4397F7]">MoM</h4>
            <h4 className="text-[#4397F7]">+30%</h4>
          </div>
        </div>

        <div
          className="border border-[#F2F2F2] rounded-2xl p-5 cursor-pointer"
          onClick={() => {
            router.push("/dashboard/simpleDashboard/losses")
          }}
        >
          <div className="flex items-center justify-between">
            <h4 className="font-bricolage font-semibold">Total Losses</h4>
            <div className="w-12 h-12 p-2 flex items-center justify-center rounded-[32px] bg-[#fddddd]">
              <LossesIcon color="red" />
            </div>
          </div>

          <div className="mt-[7px]">
            <h1 className="text-[40px]">982</h1>
          </div>

          <div className="flex items-center gap-[7px] mt-[18px]">
            <UpArrow color="red" />

            <h4 className="text-red-500">MoM</h4>
            <h4 className="text-red-500">+40%</h4>
          </div>
        </div>

        <div
          className="border border-[#F2F2F2] rounded-2xl p-5 cursor-pointer"
          onClick={() => {
            router.push("/dashboard/simpleDashboard/income")
          }}
        >
          <div className="flex items-center justify-between ">
            <h4 className="font-bricolage font-semibold">Total Income</h4>
            <div className="w-12 h-12 p-2 flex items-center justify-center rounded-[32px] bg-[#e4fdee]">
              <Wheat color="green" width={32} height={32} />
            </div>
          </div>

          <div className="mt-[7px]">
            <h1 className="text-[40px]">982</h1>
          </div>

          <div className="flex items-center gap-[7px] mt-[18px]">
            <UpArrow color="#54D2D1" />

            <h4 className="text-[#54D2D1]">MoM</h4>
            <h4 className="text-[#54D2D1]">+40%</h4>
          </div>
        </div>

        <div
          className="border border-[#F2F2F2] rounded-2xl p-5 cursor-pointer"
          onClick={() => {
            router.push("/insurance")
          }}
        >
          <div className="flex items-center justify-between">
            <h4 className="font-bricolage font-semibold">Insurance</h4>
            <div className="w-12 h-12 p-2 flex items-center justify-center rounded-[32px] bg-[#EEFAFA]">
              <InsuranceIcon />
            </div>
          </div>

          <div className="mt-[7px]">
            <h4 className="font-bricolage">Get Your Insurance</h4>
          </div>

          <div className="flex items-center gap-[7px] mt-[25px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="green"
              viewBox="0 0 256 256"
            >
              <path d="M216,88H168V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V88H40a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16H88v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V168h48a16,16,0,0,0,16-16V104A16,16,0,0,0,216,88Zm0,64H160a8,8,0,0,0-8,8v56H104V160a8,8,0,0,0-8-8H40V104H96a8,8,0,0,0,8-8V40h48V96a8,8,0,0,0,8,8h56Z" />
            </svg>

            <h4 className="text-primary font-semibold font-bricolage text-xs">
              Farm Secure
            </h4>
            <h4 className="text-primary font-semibold font-bricolage text-xs">
              Reap Prosperity!
            </h4>
          </div>
        </div>
      </div>

      <div className="mt-[85px] gap-8 flex items-center ">
        <div className="px-6 py-[27px] rounded-[16px] border border-[#F2F2F2] w-[661px]">
          <div className="flex items-center gap-[10px]">
            <TotalIcon color="#54D2D1" />

            <p>Total Earnings</p>
          </div>

          <ChartComponent
            bgColor="#54d2d133"
            borderColor="#54D2D1"
            label="Total Earning Per Month"
          />
        </div>

        <SoilAnalysis />
      </div>

      <div className="mt-[42px] w-[713px]  p-6 rounded-[16px] border border-[#F2F2F2]">
        <WeatherChart />
      </div>
    </>
  )
}

export default SimpleDashboard
