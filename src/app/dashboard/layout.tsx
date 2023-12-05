"use client"

import { LeftSideBar, RightSideBar } from "@/components/Sidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen w-full">
      <div className="h-full block md:flex md:pt-20 relative container">
        {/* left */}
        <LeftSideBar />

        <div className="pt-14 pb-16 md:flex-1 pl-0 md:pl-[22rem]">
          <div className="mx-auto dashboard-content">{children}</div>
        </div>

        {/* right */}
        <RightSideBar />
      </div>
    </div>
  )
}

export default DashboardLayout
