"use client"

import BarChart from "@/components/Chart/BarChart"
import CropChart from "@/components/Chart/CropChart"
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
          <BarChart title="Prediction of Fibre" dataset1="Low" dataset2="High" dataset3="Normal" dataset4="Medium" dataset5="Risk"  />
        </div>

        <div className="p-50 pr-84.87 pb-51 pl-59 rounded-2xl bg-[#F9F9F9] flex items-center justify-center">
          <BarChart title="Prediction of Vitamins" dataset1="Low" dataset2="High" dataset3="Normal" dataset4="Medium" dataset5="Risk"/>
        </div>

        <div className="p-50 pr-84.87 pb-51 pl-59 rounded-2xl bg-[#F9F9F9] flex items-center justify-center">
          <BarChart title="Prediction of Fat" dataset1="Low" dataset2="High" dataset3="Normal" dataset4="Medium" dataset5="Risk"/>
        </div>

        <div className="p-50 pr-84.87 pb-51 pl-59 rounded-2xl bg-[#F9F9F9] flex items-center justify-center">
          <BarChart title="Prediction of Carboohydrate" dataset1="Low" dataset2="High" dataset3="Normal" dataset4="Medium" dataset5="Risk"/>
        </div>

        <div className="p-50 pr-84.87 pb-51 pl-59 rounded-2xl bg-[#F9F9F9] flex items-center justify-center">
          <BarChart title="Prediction of Protein" dataset1="Low" dataset2="High" dataset3="Normal" dataset4="Medium" dataset5="Risk"/>
        </div>

        <CropChart
          label="Crop Yield production per province"
          borderColor="#D25454"
          bgColor="#fff"
        />
      </div>
    </>
  )
}

export default Prediction
