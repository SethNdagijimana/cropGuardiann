"use client"

import {
  BarController,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip
} from "chart.js"
import { Chart } from "react-chartjs-2"

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
)

const labels = ["January", "February", "March", "April", "May", "June", "July"]

const generateRandomNumber = () => Math.floor(Math.random() * 100)

export const data = {
  labels,
  datasets: [
    {
      type: "line" as const,
      label: "Dataset 1",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 2,
      fill: false,
      data: labels.map(() => generateRandomNumber())
    },
    {
      type: "bar" as const,
      label: "Dataset 2",
      backgroundColor: "rgb(75, 192, 192)",
      data: labels.map(() => generateRandomNumber()),
      borderColor: "white",
      borderWidth: 2
    }
  ]
}

const MultiChart = () => {
  return <Chart type="bar" data={data} />
}

export default MultiChart
