import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip
} from "chart.js"
import { Bar } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const generateRandomNumber = () => Math.floor(Math.random() * 100)

const labels = ["North", "South", "East", "West", "Kigali city"]

interface BarChartProps {
  title: string
  dataset1?: string
  dataset2?: string
}

const BarChart = ({ title, dataset1, dataset2 }: BarChartProps) => {
  const data = {
    labels,
    datasets: [
      {
        label: dataset1,
        data: labels.map(() => generateRandomNumber()),
        backgroundColor: "rgba(255, 99, 132, 0.5)"
      },
      {
        label: dataset2,
        data: labels.map(() => generateRandomNumber()),
        backgroundColor: "rgba(53, 162, 235, 0.5)"
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const
      },
      title: {
        display: true,
        text: title
      }
    },
    scales: {
      x: {
        beginAtZero: true
      },
      y: {
        beginAtZero: true
      }
    }
  }

  return <Bar options={options} data={data} />
}

export default BarChart
