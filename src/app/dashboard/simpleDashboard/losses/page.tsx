import { ChartComponent } from "@/components/Chart"
import LossesIcon from "@/components/Icon/LossesIcon"
import TotalIcon from "@/components/Icon/TotalIcon"
import TotalLoss from "@/components/Icon/TotalLoss"
import UpArrow from "@/components/Icon/UpArrow"
import { SoilAnalysis } from "@/components/SoilAnalysis"

const Losses = () => {
  return (
    <>
      <div className="md:flex items-center gap-[36px] md:space-y-0 space-y-4">
        <div className="border border-[#F2F2F2] rounded-2xl gap-[7px] w-[250px] md:p-5 p-2 space-y-[22px]">
          <div className="flex items-center justify-between">
            <h4 className="font-bricolage font-semibold">Total Losses</h4>
            <div className="w-12 h-12 p-2 flex items-center justify-center rounded-[32px] bg-[#EEFAFA]">
              <TotalLoss />
            </div>
          </div>

          <div className="md:mt-[7px] mt-1">
            <h1 className="md:text-[40px] text-xl">982</h1>
          </div>

          <div className="flex items-center gap-[7px] mt-[18px]">
            <UpArrow color="#D25454" />

            <h4 className="text-[#D25454]">MoM</h4>
            <h4 className="text-[#D25454]">+30%</h4>
          </div>
        </div>

        <div className="border border-[#F2F2F2] rounded-2xl gap-[7px] w-[250px] md:p-5 p-2 md:space-y-[22px]">
          <div className="flex items-center justify-between">
            <h4 className="font-bricolage font-semibold">Predictions</h4>
            <div className="w-12 h-12 p-2 flex items-center justify-center rounded-[32px] bg-[#EEFAFA]">
              <LossesIcon color="#54D2D1" />
            </div>
          </div>

          <div className="md:mt-[7px] mt-1">
            <h1 className="md:text-[40px] text-xl">982</h1>
          </div>

          <div className="flex items-center gap-[7px] mt-[18px]">
            <UpArrow color="#4397F7" />

            <h4 className="text-[#4397F7]">MoM</h4>
            <h4 className="text-[#4397F7]">+30%</h4>
          </div>
        </div>
      </div>

      <div className="md:mt-[85px] mt-10 gap-8 space-y-4 md:space-y-0 md:flex items-center ">
        <div className="md:px-6 px-2 py-4 md:py-[27px] rounded-[16px] border border-[#F2F2F2] md:w-[661px] w-[300px]">
          <div className="flex items-center gap-[10px]">
            <TotalIcon color="#D25454" />

            <p className="md:text-base text-sm">Total Losses</p>
          </div>

          <ChartComponent
            bgColor="#d2545433"
            borderColor="#D25454"
            label="Total Losses Per Month"
          />
        </div>

        <SoilAnalysis />
      </div>
    </>
  )
}

export default Losses
