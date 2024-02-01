"use client"

import TopBar from "@/components/Sidebar/TopBar"

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="w-full overflow-hidden">
      <TopBar />
      <div className="">{children}</div>
    </div>
  )
}

export default DashboardLayout
