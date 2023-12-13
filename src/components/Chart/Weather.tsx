"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import { Line } from "react-chartjs-2"

interface WeatherData {
  temperature: number
}

const WeatherChart: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = "https://api.weatherbit.io/v2.0/current"
        const city = "Kigali"
        const response = await axios.get(
          `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${apiKey}`
        )

        const data = response.data.data.map((day: any) => day.temp)

        setWeatherData(data)
      } catch (error) {
        console.error("Error fetching weather data:", error)
      }
    }

    fetchData()
  }, [])

  if (weatherData.length === 0) {
    return <p>Loading...</p>
  }

  const chartData = {
    labels: Array.from({ length: weatherData.length }, (_, i) => i + 1),
    datasets: [
      {
        label: "Temperature (°C)",
        data: weatherData,
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(75,192,192,1)",
        pointBorderWidth: 1,
        pointRadius: 4
      }
    ]
  }

  const chartOptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Time (3-hour intervals)"
        }
      },
      y: {
        title: {
          display: true,
          text: "Temperature (°C)"
        }
      }
    }
  }

  return (
    <div>
      <h2>Weather Chart</h2>
      <Line data={chartData} options={chartOptions} />
    </div>
  )
}

export default WeatherChart
