"use client"

import { Collaboration } from "@/components/Collaboration"
import { GovernmentPolicy } from "@/components/GovernmentPolicy"
import { InsurancePolicy } from "@/components/InsurancePolicy"
import Supply from "@/components/Supply/Supply"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState } from "react"

const Insurance = () => {
  const router = useRouter()
  const [showPage, setShowPage] = useState<boolean>(false)
  const [showSupply, setShowSupply] = useState<boolean>(false)
  const [showCollaboration, setShowCollaboration] = useState<boolean>(false)

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
      <div className="flex items-center justify-center gap-8 bg-transparent mt-[103px]">
        <Button
          text="Insurance"
          variant={"link"}
          onClick={() => {
            router.push("/insurance")
            setShowPage(false)
          }}
        />
        <Button
          text="Government program"
          variant={"link"}
          onClick={() => handlePage("government")}
        />
        <Button
          text="Supply chain"
          variant={"link"}
          onClick={() => handlePage("supply")}
        />
        <Button
          text="Collaboration"
          variant={"link"}
          onClick={() => handlePage("collaboration")}
        />
      </div>

      {!showPage ? (
        <InsurancePolicy />
      ) : showSupply ? (
        <Supply />
      ) : showCollaboration ? (
        <Collaboration />
      ) : (
        <GovernmentPolicy />
      )}
    </div>
  )
}

export default Insurance
