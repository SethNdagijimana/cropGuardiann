"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const router = useRouter()
  return (
    <div className="h-full container">
      <div className="py-8">
        <Button
          text="Back"
          variant={"ghost"}
          onClick={router.back}
          className="p-4 rounded-2xl"
        />
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
