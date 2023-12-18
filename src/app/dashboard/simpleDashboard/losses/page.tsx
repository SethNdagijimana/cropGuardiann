import { ChartComponent } from "@/components/Chart"
import LossesIcon from "@/components/Icon/LossesIcon"
import TotalIcon from "@/components/Icon/TotalIcon"
import TotalLoss from "@/components/Icon/TotalLoss"
import UpArrow from "@/components/Icon/UpArrow"
import { SoilAnalysis } from "@/components/SoilAnalysis"

const Losses = () => {
  return (
    <>
      <div className="flex items-center gap-[36px]">
        <div className="border border-[#F2F2F2] rounded-2xl gap-[7px] w-[250px] p-5 space-y-[22px]">
          <div className="flex items-center justify-between">
            <h4 className="font-bricolage font-semibold">Total Losses</h4>
            <div className="w-12 h-12 p-2 flex items-center justify-center rounded-[32px] bg-[#EEFAFA]">
              <TotalLoss />
            </div>
          </div>

          <div className="mt-[7px]">
            <h1 className="text-[40px]">982</h1>
          </div>

          <div className="flex items-center gap-[7px] mt-[18px]">
            <UpArrow color="#D25454" />

            <h4 className="text-[#D25454]">MoM</h4>
            <h4 className="text-[#D25454]">+30%</h4>
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
            <UpArrow color="#4397F7" />

            <h4 className="text-[#4397F7]">MoM</h4>
            <h4 className="text-[#4397F7]">+30%</h4>
          </div>
        </div>
      </div>

      <div className="mt-[85px] gap-8 flex items-center ">
        <div className="px-6 py-[27px] rounded-[16px] border border-[#F2F2F2] w-[661px]">
          <div className="flex items-center gap-[10px]">
            <TotalIcon color="#D25454" />

            <p>Total Losses</p>
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
