"use client"

import { LineChart } from "@/components/Chart"
import BarChart from "@/components/Chart/BarChart"
import TotalIcon from "@/components/Icon/TotalIcon"
import { Button } from "@/components/ui/button"

const MarketAnalysis = () => {
  return (
    <>
      <div className="mt-[48px] bg-[#F9F9F9] p-8">
        <div className="grid grid-cols-3 gap-6">
          <div className="p-5 bg-[#FFF] rounded-2xl">
            <div className="flex items-center justify-between">
              <p>Cost per product</p>
            </div>

            <div className="mt-[9px]">
              <div className="flex items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="green"
                    viewBox="0 0 256 256"
                  >
                    <path d="M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z" />
                  </svg>
                </span>
                <h2 className="text-primary font-bold font-bricolage">13%</h2>
              </div>
              <p className="text-[10px] text-[#667085] font-normal">
                vs previous 30 days
              </p>
            </div>
          </div>

          <div className="p-5 bg-[#FFF] rounded-2xl">
            <div className="flex items-center justify-between">
              <p>Cost per Kg</p>
            </div>

            <div className="mt-[9px]">
              <div className="flex items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="red"
                    viewBox="0 0 256 256"
                  >
                    <path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z" />
                  </svg>
                </span>
                <h2 className="text-primary font-bold font-bricolage">1%</h2>
              </div>
              <p className="text-[10px] text-[#667085] font-normal">
                vs previous 30 days
              </p>
            </div>
          </div>

          <div className="p-5 bg-[#FFF] rounded-2xl">
            <div className="flex items-center justify-between">
              <p>Cost on Market</p>
            </div>

            <div className="mt-[9px]">
              <div className="flex items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="green"
                    viewBox="0 0 256 256"
                  >
                    <path d="M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z" />
                  </svg>
                </span>
                <h2 className="text-primary font-bold font-bricolage">7%</h2>
              </div>
              <p className="text-[10px] text-[#667085] font-normal">
                vs previous 30 days
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-[15px]">
          <TotalIcon color="#54D2D1" />

          <p className="md:text-base text-sm">Market Data </p>
        </div>

        <BarChart
          title="Market Prediction"
          dataset1="Current Market"
          dataset2="Market Prediction "
        />

        <div className="bg-[#fff] rounded-2xl">
          <div className="flex items-center gap-[10px] mt-8 p-4">
            <TotalIcon color="#54D2D1" />

            <p className="md:text-base text-sm">Market Analysis Price</p>
          </div>

          <LineChart />
        </div>
      </div>

      <div className="mt-12 font-medium font-bricolage">
        <h3>Market Alert</h3>
      </div>

      <div className="rounded-2xl bg-[#F9F9F9] p-8 flex items-center justify-between mt-4">
        <p className="w-[344px]">
          Set up your Market alerts to begin receiving notifications on changes
          of price on market.
        </p>

        <Button text="Add Market Alert" className="rounded-[8px]" />
      </div>
    </>
  )
}

export default MarketAnalysis
