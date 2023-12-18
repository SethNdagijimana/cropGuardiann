"use client"

import { MainIconProps } from "./icon.type"

const UpArrow = ({ width = 16, height = 16, color }: MainIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.4613 10.1913C13.4235 10.2826 13.3594 10.3607 13.2772 10.4157C13.195 10.4707 13.0983 10.5 12.9994 10.5H2.99942C2.90047 10.5001 2.80372 10.4708 2.72143 10.4159C2.63913 10.361 2.57498 10.2828 2.53711 10.1914C2.49923 10.1 2.48933 9.99942 2.50865 9.90237C2.52798 9.80533 2.57566 9.7162 2.64567 9.64628L7.64567 4.64628C7.6921 4.59979 7.74725 4.56291 7.80795 4.53775C7.86865 4.51259 7.93371 4.49963 7.99942 4.49963C8.06512 4.49963 8.13019 4.51259 8.19089 4.53775C8.25159 4.56291 8.30673 4.59979 8.35317 4.64628L13.3532 9.64628C13.4231 9.71624 13.4707 9.80537 13.4899 9.90238C13.5091 9.99939 13.4992 10.0999 13.4613 10.1913Z"
        fill={color}
      />
    </svg>
  )
}

export default UpArrow
