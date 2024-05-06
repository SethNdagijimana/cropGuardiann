"use client"

import { cn } from "@/lib/utils"

interface WrapperProps {
  children: React.ReactNode
  className?: string
  name?: string
  perc?: string
  number?: string
  
}

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div
      className={cn(
        "w-[20rem] h-full pt-14 pb-96 top-20 overflow-y-auto hidden md:block",
        className
      )}
    >
      {children}
    </div>
  )
}

export default Wrapper
