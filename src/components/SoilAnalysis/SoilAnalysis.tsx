"use client"

import { Progress } from "../ui/progress"

const SoilAnalysis = () => {
  return (
    <div className="border border-[#F2F2F2] rounded-[16px] p-[14.3px] w-[372px]">
      <div className="flex items-start justify-between">
        <h4 className="font-bricolage font-semibold">
          Soil analysis (per hectal)
        </h4>

        <div className="flex items-start flex-col">
          <div className="flex items-center justify-center gap-[5px]">
            <svg
              width={18}
              height={6}
              viewBox="0 0 18 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.621582"
                y="0.927368"
                width="16.6983"
                height="4.77095"
                rx="2.38547"
                fill="#54D2D1"
              />
            </svg>

            <h5 className="text-[10px]">Income</h5>
          </div>

          <div className="flex items-center justify-center gap-[5px]">
            <svg
              width={18}
              height={6}
              viewBox="0 0 18 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.621582"
                y="0.927368"
                width="16.6983"
                height="4.77095"
                rx="2.38547"
                fill="#CEBAE5"
              />
            </svg>

            <h5 className="text-[10px]">Losses</h5>
          </div>
        </div>
      </div>

      <div className="mt-[31px] space-y-8">
        <div className="flex items-center gap-[13px]">
          <div className="w-[35px] h-[35px] flex items-center justify-center rounded-[19px] bg-[#54D2D1] ">
            <h4 className="text-white text-[11px]">C</h4>
          </div>

          <div className="flex items-center justify-between w-full">
            <div className="space-y-1">
              <h4 className="text-xs font-bricolage">Carbohydrate</h4>
              <Progress value={70} />
              <Progress value={33} />
            </div>

            <div className="flex items-center justify-center gap-[10px]">
              <div>
                <p className="text-[11px] leading-none">70%</p>
                <p className="text-[11px] text-[#9F9F9F]">33%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[13px]">
          <div className="w-[35px] h-[35px] flex items-center justify-center rounded-[19px] bg-[#4397F7] ">
            <h4 className="text-white text-[11px]">P</h4>
          </div>

          <div className="flex items-center justify-between w-full">
            <div className="space-y-1">
              <h4 className="text-xs font-bricolage">Protein</h4>
              <Progress value={80} />
              <Progress value={20} />
            </div>

            <div className="flex items-center justify-center gap-[10px]">
              <div>
                <p className="text-[11px] leading-none">80%</p>
                <p className="text-[11px] text-[#9F9F9F]">20%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[13px]">
          <div className="w-[35px] h-[35px] flex items-center justify-center rounded-[19px] bg-[#1BAB53] ">
            <h4 className="text-white text-[11px]">F</h4>
          </div>

          <div className="flex items-center justify-between w-full">
            <div className="space-y-1">
              <h4 className="text-xs font-bricolage">Fat</h4>
              <Progress value={90} />
              <Progress value={40} />
            </div>

            <div className="flex items-center justify-center gap-[10px]">
              <div>
                <p className="text-[11px] leading-none">90%</p>
                <p className="text-[11px] text-[#9F9F9F]">40%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[13px]">
          <div className="w-[35px] h-[35px] flex items-center justify-center rounded-[19px] bg-[#006885] ">
            <h4 className="text-white text-[11px]">PH</h4>
          </div>

          <div className="flex items-center justify-between w-full">
            <div className="space-y-1">
              <h4 className="text-xs font-bricolage">Fibre</h4>
              <Progress value={90} />
              <Progress value={10} />
            </div>

            <div className="flex items-center justify-center gap-[10px]">
              <div>
                <p className="text-[11px] leading-none">90%</p>
                <p className="text-[11px] text-[#9F9F9F]">10%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[13px]">
          <div className="w-[35px] h-[35px] flex items-center justify-center rounded-[19px] bg-[#327E7D] ">
            <h4 className="text-white text-[11px]">V</h4>
          </div>

          <div className="flex items-center justify-between w-full">
            <div className="space-y-1">
              <h4 className="text-xs font-bricolage">Vitamins</h4>
              <Progress value={60} />
              <Progress value={40} />
            </div>

            <div className="flex items-center justify-center gap-[10px]">
              <div>
                <p className="text-[11px] leading-none">60%</p>
                <p className="text-[11px] text-[#9F9F9F]">40%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SoilAnalysis
