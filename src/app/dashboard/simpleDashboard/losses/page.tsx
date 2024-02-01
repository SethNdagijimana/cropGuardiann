import { ChartComponent } from "@/components/Chart"
import TotalIcon from "@/components/Icon/TotalIcon"
import { SoilAnalysis } from "@/components/SoilAnalysis"

const Losses = () => {
  return (
    <>
      <div className="gap-8 space-y-4 md:space-y-0 md:flex items-center ">
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
