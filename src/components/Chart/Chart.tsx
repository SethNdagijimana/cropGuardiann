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

interface ChartComponentProps {
  bgColor: string
  borderColor: string
}

const generateRandomNumber = () => Math.floor(Math.random() * 500)

const ChartComponent = ({ bgColor, borderColor }: ChartComponentProps) => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July"
  ]

  const data = {
    labels,

    datasets: [
      {
        fill: true,
        label: "Total Earning per month",
        data: labels.map(() => generateRandomNumber()),
        borderColor: `${borderColor}`,
        backgroundColor: `${bgColor}`
      }
    ]
  }

  return <Line data={data} />
}

export default ChartComponent
