import { ChartComponent } from "@/components/Chart"
import TotalIcon from "@/components/Icon/TotalIcon"
import { SoilAnalysis } from "@/components/SoilAnalysis"

const Income = () => {
  return (
    <>
      <div className="gap-8 md:flex items-center space-y-4 md:space-y-0">
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
