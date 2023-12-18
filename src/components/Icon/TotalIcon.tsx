"use client"

import { MainIconProps } from "./icon.type"

const TotalIcon = ({ width = 6, height = 18, color }: MainIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 6 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.5" width={6} height={18} rx={3} fill={color} />
    </svg>
  )
}

export default TotalIcon
