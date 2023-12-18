import { ChartComponent } from "@/components/Chart"
import LossesIcon from "@/components/Icon/LossesIcon"
import TotalIcon from "@/components/Icon/TotalIcon"
import TotalIncome from "@/components/Icon/TotalIncome"
import UpArrow from "@/components/Icon/UpArrow"
import { SoilAnalysis } from "@/components/SoilAnalysis"

const Income = () => {
  return (
    <>
      <div className="flex items-center gap-[36px]">
        <div className="border border-[#F2F2F2] rounded-2xl gap-[7px] w-[250px] p-5 space-y-[22px]">
          <div className="flex items-center justify-between">
            <h4 className="font-bricolage font-semibold">Total Income</h4>
            <div className="w-12 h-12 p-2 flex items-center justify-center rounded-[32px] bg-[#EEFAFA]">
              <TotalIncome />
            </div>
          </div>

          <div className="mt-[7px]">
            <h1 className="text-[40px]">982</h1>
          </div>

          <div className="flex items-center gap-[7px] mt-[18px]">
            <UpArrow color="#54D2D1" />

            <h4 className="text-[#54D2D1]">MoM</h4>
            <h4 className="text-[#54D2D1]">+30%</h4>
          </div>
        </div>

        <div className="border border-[#F2F2F2] rounded-2xl gap-[7px] w-[250px] p-5 space-y-[22px]">
          <div className="flex items-center justify-between">
            <h4 className="font-bricolage font-semibold">Predictions</h4>
            <div className="w-12 h-12 p-2 flex items-center justify-center rounded-[32px] bg-[#EEFAFA]">
              <LossesIcon color="#54D2D1" />
            </div>
          </div>

          <div className="mt-[7px]">
            <h1 className="text-[40px]">982</h1>
          </div>

          <div className="flex items-center gap-[7px] mt-[18px]">
            <UpArrow color="#54D2D1" />

            <h4 className="text-[#54D2D1]">MoM</h4>
            <h4 className="text-[#54D2D1]">+30%</h4>
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
            label="Total Income Per Month"
          />
        </div>

        <SoilAnalysis />
      </div>
    </>
  )
}

export default Income
