"use client"

import { Collaboration } from "@/components/Collaboration"
import { GovernmentPolicy } from "@/components/GovernmentPolicy"
import { InsurancePolicy } from "@/components/InsurancePolicy"
import Supply from "@/components/Supply/Supply"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { useState } from "react"

const Insurance = () => {
  const router = useRouter()
  const [showPage, setShowPage] = useState<boolean>(false)
  const [showSupply, setShowSupply] = useState<boolean>(false)
  const [showCollaboration, setShowCollaboration] = useState<boolean>(false)
  const [isActiveTab, setIsActiveTab] = useState(null)

  const handleActiveTab = (activeTab: any) => {
    setIsActiveTab(isActiveTab === activeTab ? null : activeTab)
  }

  const handlePage = (page: any) => {
    setShowPage(true)

    if (page === "supply") {
      setShowSupply(true)
      setShowCollaboration(false)
    } else if (page === "collaboration") {
      setShowCollaboration(true)
      setShowSupply(false)
    } else {
      setShowSupply(false)
      setShowCollaboration(false)
    }
  }
  return (
    <div className="container">
      <div className="flex items-center justify-center gap-8 bg-transparent md:mt-[103px] mt-10">
        <Button
          className={cn(
            "border border-[#000000] rounded-[32px]",
            isActiveTab === "insurance" ? "border-[#54D2D1]" : ""
          )}
          text="Insurance"
          variant={"link"}
          onClick={() => {
            setShowPage(false)
            handleActiveTab("insurance")
          }}
        />
        <Button
          className={cn(
            "border border-[#000000] rounded-[32px]",
            isActiveTab === "government" ? "border-[#54D2D1]" : ""
          )}
          text="Government program"
          variant={"link"}
          onClick={() => {
            handlePage("government")
            handleActiveTab("government")
          }}
        />
        <Button
          className={cn(
            "border border-[#000000] rounded-[32px]",
            isActiveTab === "supply" ? "border-[#54D2D1]" : ""
          )}
          text="Supply chain"
          variant={"link"}
          onClick={() => {
            handlePage("supply")
            handleActiveTab("supply")
          }}
        />
    
      </div>

      {!showPage ? (
        <InsurancePolicy />
      ) : showSupply ? (
        <Supply />
      )  : (
        <GovernmentPolicy />
      )}
    </div>
  )
}

export default Insurance
