"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import { Line } from "react-chartjs-2"
import { Loader } from "../Loader"

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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface WeatherChartProps {
  temperature: number[]
  humidity: number[]
}

const WeatherChart = () => {
  const [weatherData, setWeatherData] = useState<WeatherChartProps>({
    temperature: [],
    humidity: []
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      try {
        const apiKey = "c5b9b8edf6531b1bc91417465a2fbd78"
        const city = "Republic of Rwanda, RW"
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
        )
        if (isMounted) {
          const data = response.data.list.map((item: any) => item.main.temp)
          const humidityData = response.data.list.map(
            (item: any) => item.main.humidity
          )
          setWeatherData({ temperature: data, humidity: humidityData })
          setLoading(false)
        }
      } catch (error) {
        console.error("Error fetching weather data:", error)
        setLoading(false)
      }
    }

    const timeoutId = setTimeout(() => {
      if (isMounted) {
        setLoading(false)
      }
    }, 60000)

    fetchData()

    return () => {
      isMounted = false
      clearTimeout(timeoutId)
    }
  }, [])

  if (loading) {
    return <Loader />
  } else if (
    weatherData.temperature.length === 0 ||
    weatherData.humidity.length === 0
  ) {
    return <h4>Check Your Connection</h4>
  }

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July"
  ]

  const chartData = {
    labels,
    datasets: [
      {
        label: "Temperature (°C)",
        data: weatherData.temperature,
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
        pointBorderWidth: 1,
        pointRadius: 4,
        yAxisID: "y"
      },
      {
        label: "Humidity (%)",
        data: weatherData.humidity,
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(75,192,192,1)",
        pointBorderWidth: 1,
        pointRadius: 4,
        yAxisID: "y1"
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
        },
        position: "left" as const
      },
      y1: {
        title: {
          display: true,
          text: "Humidity (%)"
        },
        position: "right" as const,
        grid: {
          drawOnChartArea: false
        }
      }
    }
  }

  return <Line data={chartData} options={chartOptions} />
}

export default WeatherChart
