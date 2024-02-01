"use client"

import BarChart from "@/components/Chart/BarChart"
import PieChart from "@/components/Chart/Pie"
import { useRouter } from "next/navigation"

const Prediction = () => {
  const router = useRouter()
  return (
    <>
      <div className="mt-[25px] grid grid-cols-2 gap-[33px]">
        <div className="p-50 pr-84.87 pb-51 pl-59 rounded-2xl bg-[#F9F9F9] flex items-center justify-center">
          <PieChart />
        </div>

        <div className="p-50 pr-84.87 pb-51 pl-59 rounded-2xl bg-[#F9F9F9] flex items-center justify-center">
          <BarChart title="Prediction of Fibre" />
        </div>

        <div className="p-50 pr-84.87 pb-51 pl-59 rounded-2xl bg-[#F9F9F9] flex items-center justify-center">
          <BarChart title="Prediction of Vitamins" />
        </div>

        <div className="p-50 pr-84.87 pb-51 pl-59 rounded-2xl bg-[#F9F9F9] flex items-center justify-center">
          <BarChart title="Prediction of Fat" />
        </div>

        <div className="p-50 pr-84.87 pb-51 pl-59 rounded-2xl bg-[#F9F9F9] flex items-center justify-center">
          <BarChart title="Prediction of Carboohydrate" />
        </div>

        <div className="p-50 pr-84.87 pb-51 pl-59 rounded-2xl bg-[#F9F9F9] flex items-center justify-center">
          <BarChart title="Prediction of Protein" />
        </div>
      </div>
    </>
  )
}

export default Prediction
