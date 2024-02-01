"use client"

import TopNav from "@/components/Sidebar/TopNav"

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className=" w-full overflow-hidden">
      <TopNav />
      <div className="pt-14 md:flex-1 items-center justify-between">
        <div className="">{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
