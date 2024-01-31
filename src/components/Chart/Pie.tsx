import {
  ArcElement,
  ChartConfiguration,
  Chart as ChartJS,
  Legend,
  Tooltip
} from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

const generateRandomNumber = () => Math.floor(Math.random() * 100)

const labels = ["High Rate", "Medium Rate", "Risk", "Normal Rate", "Low Rate"]

const PieChartComponent = {
  labels,

  datasets: [
    {
      data: labels.map(() => generateRandomNumber()),
      backgroundColor: ["#54D2D1", "#71CC94", "#F77", "#E6DDFF", "#FFD986"],
      borderColor: ["#54D2D1", "#71CC94", "#F77", "#E6DDFF", "#FFD986"],
      borderWidth: 1
    }
  ]
}

const PieChart = () => {
  const options: ChartConfiguration<"doughnut">["options"] = {
    plugins: {
      legend: {
        display: true,
        position: "right"
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.parsed.toFixed(2)
          }
        }
      }
    }
  }
  return (
    <div className="w-[500px] h-[500px] flex items-center justify-center">
      <Doughnut data={PieChartComponent} options={options} />
    </div>
  )
}

export default PieChart
