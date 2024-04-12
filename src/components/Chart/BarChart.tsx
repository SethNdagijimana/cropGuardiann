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
  dataset3?: string
  dataset4?: string
  dataset5?: string
}

const BarChart = ({ title, dataset1, dataset2, dataset3, dataset4, dataset5 }: BarChartProps) => {
  const data = {
    labels,
    datasets: [
      {
        label: dataset1,
        data: labels.map(() => generateRandomNumber()),
        backgroundColor: "#FFD986"
      },
      {
        label: dataset2,
        data: labels.map(() => generateRandomNumber()),
        backgroundColor: "#54D2D1"
      },
      {
        label: dataset3,
        data: labels.map(() => generateRandomNumber()),
        backgroundColor: "#E6DDFF"
      },
      {
        label: dataset4,
        data: labels.map(() => generateRandomNumber()),
        backgroundColor: "#71CC94"
      },
      {
        label: dataset5,
        data: labels.map(() => generateRandomNumber()),
        backgroundColor: "#FF7777"
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
