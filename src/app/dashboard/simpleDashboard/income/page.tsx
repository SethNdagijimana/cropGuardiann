import { ChartComponent } from "@/components/Chart"
import LossesIcon from "@/components/Icon/LossesIcon"
import TotalIcon from "@/components/Icon/TotalIcon"
import TotalIncome from "@/components/Icon/TotalIncome"
import UpArrow from "@/components/Icon/UpArrow"
import { SoilAnalysis } from "@/components/SoilAnalysis"

const Income = () => {
  return (
    <>
      <div className="md:flex items-center gap-[36px] space-y-4 md:space-y-0">
        <div className="border border-[#F2F2F2] rounded-2xl gap-[7px] w-[250px] md:p-5 p-2 space-y-[22px]">
          <div className="flex items-center justify-between">
            <h4 className="font-bricolage font-semibold">Total Income</h4>
            <div className="w-12 h-12 p-2 flex items-center justify-center rounded-[32px] bg-[#EEFAFA]">
              <TotalIncome />
            </div>
          </div>

          <div className="mt-[7px]">
            <h1 className="md:text-[40px] text-xl">982</h1>
          </div>

          <div className="flex items-center gap-[7px] mt-[18px]">
            <UpArrow color="#54D2D1" />

            <h4 className="text-[#54D2D1]">MoM</h4>
            <h4 className="text-[#54D2D1]">+30%</h4>
          </div>
        </div>

        <div className="border border-[#F2F2F2] rounded-2xl gap-[7px] w-[250px] md:p-5 px-2 space-y-[22px]">
          <div className="flex items-center justify-between">
            <h4 className="font-bricolage font-semibold">Predictions</h4>
            <div className="w-12 h-12 p-2 flex items-center justify-center rounded-[32px] bg-[#EEFAFA]">
              <LossesIcon color="#54D2D1" />
            </div>
          </div>

          <div className="mt-[7px]">
            <h1 className="md:text-[40px] text-xl">982</h1>
          </div>

          <div className="flex items-center gap-[7px] mt-[18px]">
            <UpArrow color="#54D2D1" />

            <h4 className="text-[#54D2D1]">MoM</h4>
            <h4 className="text-[#54D2D1]">+30%</h4>
          </div>
        </div>
      </div>

      <div className="md:mt-[85px] mt-10 gap-8 md:flex items-center space-y-4 md:space-y-0">
        <div className="md:px-6 px-2 md:py-[27px] py-4 rounded-[16px] border border-[#F2F2F2] md:w-[661px] w-[300px]">
          <div className="flex items-center gap-[10px]">
            <TotalIcon color="#54D2D1" />

            <p className="md:text-base text-sm">Total Earnings</p>
          </div>

          <ChartComponent
            bgColor="#54d2d133"
            borderColor="#54D2D1"
            label="Total Income Per Month"
          />
        </div>

        <SoilAnalysis />
      </div>
    </>
  )
}

export default Income
