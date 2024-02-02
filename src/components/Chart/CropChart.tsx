"use client"

import { Chart } from "chart.js/auto" // Import Chart from "chart.js/auto" to include all required scale modules
import { Line } from "react-chartjs-2"

import {
  CategoryScale,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip
} from "chart.js"

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

interface CropChartProps {
  bgColor?: string
  borderColor: string
  label: string
}

const generateRandomNumber = () => Math.floor(Math.random() * 500)

const CropChart = ({ bgColor, borderColor, label }: CropChartProps) => {
  const labels = ["North", "East", "West", "South", "Kigali City"]

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: `${label}`,
        data: labels.map(() => generateRandomNumber()),
        borderColor: `${borderColor}`,
        backgroundColor: `${bgColor}`
      }
    ]
  }

  return <Line data={data} />
}

export default CropChart
