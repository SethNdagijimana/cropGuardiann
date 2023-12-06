"use client"

import {
  AboveRisk,
  AverageRisk,
  LowRisk,
  ModerateRisk
} from "@/components/Risk"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { useState } from "react"

const RiskAssessment = () => {
  const router = useRouter()
  const [activeRisk, setActiveRisk] = useState("low")
  const riskLevels = ["low", "moderate", "average", "aboveAverage", "high"]

  const handleNextClick = () => {
    const currentIndex = riskLevels.indexOf(activeRisk)
    const nextIndex = (currentIndex + 1) % riskLevels.length
    setActiveRisk(riskLevels[nextIndex])
  }

  const handleBackClick = () => {
    const currentIndex = riskLevels.indexOf(activeRisk)
    const nextIndex = (currentIndex - 1) % riskLevels.length
    setActiveRisk(riskLevels[nextIndex])
  }

  return (
    <div>
      <div className="mt-8 px-[138px]">
        <Button
          text="Dashboard"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="#fff"
              viewBox="0 0 256 256"
            >
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" />
            </svg>
          }
          iconPosition="left"
          onClick={router.back}
          variant={"default"}
          className="text-white rounded-[4px] w-[150px]"
        />
      </div>
      <div className="w-[629px] mx-auto mt-[120px] space-y-8">
        <h2 className="font-bold text-center">Investment Risk Profile</h2>
        <p className="text-[#666] text-center">
          Based on the information gathered in this questionnaire an don the
          determined Investor Risk Profile score the client agrees to the
          following risk profile level for this assets held with the bank.{" "}
        </p>
      </div>

      <div className="grid grid-cols-5 px-[138px] mt-[92px] gap-6">
        <div className="space-y-4">
          <h4>Low Risk</h4>
          <div className="flex items-center justify-center gap-6">
            <div
              className={cn(
                "h-8 w-8 p-4 p flex items-center justify-center rounded-[32px]",
                activeRisk === "low" ? "bg-[#54D2D1]" : " bg-[#FADC2E]"
              )}
            >
              <p className="font-bold text-white">1</p>
            </div>

            <span
              className={cn(
                "w-[165px]",
                activeRisk === "low" ? "text-[#54D2D1]" : "text-[#FADC2E]"
              )}
            >
              ---------------------
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <h4>Moderate Risk</h4>
          <div className="flex items-center justify-center gap-6">
            <div
              className={cn(
                "h-8 w-8 p-4 p flex items-center justify-center rounded-[32px]",
                activeRisk === "moderate" ? "bg-[#54D2D1]" : " bg-[#FADC2E]"
              )}
            >
              <p className="font-bold text-white">2</p>
            </div>

            <span
              className={cn(
                "w-[165px]",
                activeRisk === "moderate" ? "text-[#54D2D1]" : "text-[#FADC2E]"
              )}
            >
              ---------------------
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <h4>Average Risk</h4>
          <div className="flex items-center justify-center gap-6">
            <div
              className={cn(
                "h-8 w-8 p-4 p flex items-center justify-center rounded-[32px]",
                activeRisk === "average" ? "bg-[#54D2D1]" : " bg-[#FADC2E]"
              )}
            >
              <p className="font-bold text-white">3</p>
            </div>

            <span
              className={cn(
                "w-[165px]",
                activeRisk === "average" ? "text-[#54D2D1]" : "text-[#FADC2E]"
              )}
            >
              ---------------------
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <h4>Above average Risk</h4>
          <div className="flex items-center justify-center gap-6">
            <div
              className={cn(
                "h-8 w-8 p-4 p flex items-center justify-center rounded-[32px]",
                activeRisk === "aboveAverage" ? "bg-[#54D2D1]" : " bg-[#FADC2E]"
              )}
            >
              <p className="font-bold text-white">4</p>
            </div>

            <span
              className={cn(
                "w-[165px]",
                activeRisk === "aboveAverage"
                  ? "text-[#54D2D1]"
                  : "text-[#FADC2E]"
              )}
            >
              ---------------------
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <h4>High Risk</h4>

          <div
            className={cn(
              "h-8 w-8 p-4 p flex items-center justify-center rounded-[32px]",
              activeRisk === "high" ? "bg-[#54D2D1]" : " bg-[#FADC2E]"
            )}
          >
            <p className="font-bold text-white">5</p>
          </div>
        </div>
      </div>

      {activeRisk === "low" && (
        <div className="mt-[64px] px-[138px]">
          <LowRisk />
        </div>
      )}

      {activeRisk === "moderate" && (
        <div className="mt-[64px] px-[138px]">
          <ModerateRisk />
        </div>
      )}

      {activeRisk === "average" && (
        <div className="mt-[64px] px-[138px]">
          <AverageRisk />
        </div>
      )}

      {activeRisk === "aboveAverage" && (
        <div className="mt-[64px] px-[138px]">
          <AboveRisk />
        </div>
      )}

      {activeRisk === "high" && (
        <div className="mt-[64px] px-[138px]">
          <AboveRisk />
        </div>
      )}

      <div className="space-x-6 mt-[48px] flex items-center justify-end px-[138px] mb-6">
        <Button
          disabled={activeRisk === "low"}
          text="back"
          onClick={handleBackClick}
          variant={"outline"}
          className="text-black bg-[#F5F5F5] rounded-[4px] w-[88px]"
        />
        <Button
          text="Next"
          className="text-white bg-[#54D2D1] rounded-[4px] w-[88px]"
          onClick={handleNextClick}
        />
      </div>
    </div>
  )
}

export default RiskAssessment
