import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip
} from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const
    },
    title: {
      display: true,
      text: "Market Analysis Price"
    }
  }
}

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Dec"
]
const generateRandomNumber = () => Math.floor(Math.random() * 500)
export const data = {
  labels,
  datasets: [
    {
      label: "Current Market Price",
      data: labels.map(() => generateRandomNumber()),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)"
    },
    {
      label: "Market Price Prediction",
      data: labels.map(() => generateRandomNumber()),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)"
    }
  ]
}
const LineChart = () => {
  return <Line options={options} data={data} />
}

export default LineChart
