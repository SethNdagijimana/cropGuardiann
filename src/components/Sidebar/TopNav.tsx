"use client"

import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { useState } from "react"
import AreaOfDoubtIcon from "../Icon/AreaOfDoubtIcon"
import InsuranceIcon from "../Icon/InsuranceIcon"
import LossesIcon from "../Icon/LossesIcon"
import UpArrow from "../Icon/UpArrow"
import Wheat from "../Icon/Wheat"

import dynamic from "next/dynamic"


// const AnimatedNumbers = dynamic(
//   () => {
//     return import("react-animated-numbers")
//   },
//   { ssr: false }
// )

// const achievementsList = [
//   {
//     metric: "Area of Doubt",
//     value: "70",
//     postfix: "+"
//   },
//   {
//     metric: "Total Losses",
//     value: "307",
//     postfix: "+"
//   },
//   {
//     metric: "Total Income",
//     value: "80",
//     postfix: "%"
//   }
// ]




const TopNav = () => {
  const router = useRouter()

  const [isActiveTab, setIsActiveTab] = useState(null)

  const handleActiveTab = (activeTab: any) => {
    setIsActiveTab(isActiveTab === activeTab ? null : activeTab)
  }

  return (
    
    <div className="grid md:grid-cols-4 grid-cols-1 md:gap-x-5  md:mt-[34px] md:space-x-8 md:space-y-0 space-y-8">
      
      <div
        className={cn(
          "border border-[#F2F2F2] rounded-2xl md:p-5 p-2 cursor-pointer",
          isActiveTab === "Doubt" ? "border-[#f84b4b]" : ""
        )}
        onClick={() => {
          router.push("/dashboard/simpleDashboard/doubt")
          handleActiveTab("Doubt")
        }}
      >
        <div className="flex items-center justify-between">
          <h4 className="font-bricolage font-semibold">Area of doubt</h4>
          <div className="w-12 h-12 p-2 flex items-center justify-center rounded-[32px] bg-[#EEFAFA]">
            <AreaOfDoubtIcon color="#54D2D1" />
          </div>
        </div>

        <div className="mt-[7px]">
          <h1 className="md:text-base text-[20px]">150</h1>
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
          isActiveTab === "Loss" ? "border-[#f84b4b]" : ""
        )}
        onClick={() => {
          router.push("/dashboard/simpleDashboard/losses")
          handleActiveTab("Loss")
        }}
      >
        <div className="flex items-center justify-between">
          <h4 className="font-bricolage font-semibold">Total Losses</h4>
          <div className="w-12 h-12 p-2 flex items-center justify-center rounded-[32px] bg-[#fddddd]">
            <LossesIcon color="red" />
          </div>
        </div>

        <div className="mt-[7px]">
          <h1 className="md:text-base text-[20px]">150</h1>
        </div>

        <div className="flex items-center gap-[7px] md:mt-[18px] mt-4">
          <UpArrow color="red" />

          <h4 className="text-red-500">MoM</h4>
          <h4 className="text-red-500">+40%</h4>
        </div>
      </div>

      <div
        className={cn(
          "border border-[#F2F2F2] rounded-2xl md:p-5 p-2 cursor-pointer",
          isActiveTab === "income" ? "border-[#f84b4b]" : ""
        )}
        onClick={() => {
          router.push("/dashboard/simpleDashboard/income")
          handleActiveTab("income")
        }}
      >
        <div className="flex items-center justify-between ">
          <h4 className="font-bricolage font-semibold">Total Income</h4>
          <div className="w-12 h-12 p-2 flex items-center justify-center rounded-[32px] bg-[#e4fdee]">
            <Wheat color="green" width={32} height={32} />
          </div>
        </div>

        <div className="mt-[7px]">
          <h1 className="md:text-base text-[20px]">80</h1>
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
          isActiveTab === "insurance" ? "border-[#f84b4b]" : ""
        )}
        onClick={() => {
          router.push("/insurance")
          handleActiveTab("insurance")
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

        <div className="flex items-center gap-[7px] md:mt-[25px] mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="green"
            viewBox="0 0 256 256"
          >
            <path d="M216,88H168V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V88H40a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16H88v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V168h48a16,16,0,0,0,16-16V104A16,16,0,0,0,216,88Zm0,64H160a8,8,0,0,0-8,8v56H104V160a8,8,0,0,0-8-8H40V104H96a8,8,0,0,0,8-8V40h48V96a8,8,0,0,0,8,8h56Z" />
          </svg>

          <h4 className="text-primary font-semibold font-bricolage md:text-xs text-[10px]">
            Farm Secure
          </h4>
          <h4 className="text-primary font-semibold font-bricolage text-xs">
            Reap Prosperity!
          </h4>
        </div>
      </div>
    </div>
  
  )
}

export default TopNav
