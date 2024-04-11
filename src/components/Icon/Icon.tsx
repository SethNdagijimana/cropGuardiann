"use client"

import { cn } from "@/lib/utils"

import AreaOfDoubtIcon from "./AreaOfDoubtIcon"
import InsuranceIcon from "./InsuranceIcon"
import LossesIcon from "./LossesIcon"
import TotalIcon from "./TotalIcon"
import TotalIncome from "./TotalIncome"
import TotalLoss from "./TotalLoss"
import UpArrow from "./UpArrow"
import Wheat from "./Wheat"
import { MainIconProps } from "./icon.type"
import Edit from "./Edit"

const IconsMap = {
  wheat: Wheat,
  upArrow: UpArrow,
  areaOfDoubtIcon: AreaOfDoubtIcon,
  lossesIcon: LossesIcon,
  insuranceIcon: InsuranceIcon,
  totalIcon: TotalIcon,
  totalIncome: TotalIncome,
  totalLoss: TotalLoss,
  edit: Edit
}

interface IconProps extends MainIconProps {
  title: keyof typeof IconsMap
  className?: string
  isActive?: boolean
}

const Icon = ({
  title,
  onClick,
  className,
  isActive = false,
  ...rest
}: IconProps) => {
  const IconComponent = IconsMap[title] as React.FC<MainIconProps>

  return (
    <span
      className={cn(
        "p-1 bg-white dark:bg-[#0D0D0D] rounded-[8px] block [&_svg]:flex-shrink-0 cursor-pointer border-2 border-transparent ring-transparent hover:bg-[#DADADA]  dark:hover:bg-[#58595E] transition duration-500 ease-in-out",
        className,
        isActive &&
          "border-2 border-primary dark:border-[#34D631] rounded-[8px] ring-primary active-shadow [&_path]:fill-[#34D631] dark:[&_path]:fill-[#34D631] dark:ring-primary"
      )}
      onClick={() => onClick && onClick()}
    >
      <IconComponent {...rest} />
    </span>
  )
}

export default Icon
