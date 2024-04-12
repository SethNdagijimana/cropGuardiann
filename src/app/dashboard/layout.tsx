

import { LeftSideBar } from "@/components/Sidebar"
import HeaderWidget from "./Widget"

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  
  return (
    <div className=" w-full overflow-hidden pt-[50px]">
      <HeaderWidget />
      

      <div className="h-full block md:flex relative container">
        <LeftSideBar />
        <div className="pt-14 md:flex-1 items-center justify-between p-8">
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
