"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { getSupport } from "@/services/user"
import { InsuranceType, SupportType } from "@prisma/client"
import { useState } from "react"
import { FormField } from "../FormField"
import { Button } from "../ui/button"
import { toast } from "../ui/use-toast"
import Policy from "./Policy"

const GovernmentPolicy = () => {
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [location, setLocation] = useState("")
  const [userId, setUserId] = useState("")
  const [insurance, setInsurance] = useState("")
  const [support, setSupport] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (
      !userName ||
      !userEmail ||
      !phoneNumber ||
      !location ||
      !userId ||
      !insurance ||
      !support
    ) {
      toast({
        variant: "destructive",
        description: "all fields are-required"
      })

      return
    }

    if (!(insurance in InsuranceType)) {
      toast({
        variant: "destructive",
        description: "Invalid insurance option"
      })
    }

    if (!(support in SupportType)) {
      toast({
        variant: "destructive",
        description: "Invalid support option"
      })
    }

    setIsLoading(true)

    try {
      const data = await getSupport(userEmail)

      if (data.error) {
        toast({
          variant: "default",
          description: data.message
        })

        setIsLoading(false)

        return
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        description: error.message
      })

      setIsLoading(false)
    }
  }

  const handleInsuranceChange = (value: string) => {
    setInsurance(value)
  }

  const handleSupportChange = (value: string) => {
    setSupport(value)
  }

  return (
    <>
      <div className="grid grid-cols-2 px-[100px] py-[80px] gap-16 mt-[30px]">
        <Policy />

        <div className="bg-[#F2F2F2] rounded-2xl p-6 w-full">
          <div className="w-[484px] space-y-6">
            <h3 className="text-[24px] text-primary">Get Your Support</h3>

            <h4 className="font-normal h-[61px] leading-[24px]">
              To ensure the most accurate and relevant response, we will forward
              your inquiries to the cooperative with whom you are associated
              with.
            </h4>
          </div>

          <div className="bg-white rounded-2xl p-6 space-y-6 mt-6">
            <p className="text-center font-bold font-bricolage">
              Request your support
            </p>

            <form className="space-y-6" onSubmit={onSubmitHandler}>
              <FormField
                label="Enter your name here"
                placeholder="Your FullName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />

              <FormField
                type="email"
                label="Enter your email"
                placeholder="Your Email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />

              <FormField
                label="Enter your Phone Number"
                placeholder="Your Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />

              <FormField
                label="Location"
                placeholder="Enter your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />

              <FormField
                label="Id Number"
                placeholder="Enter your Id"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />

              <Select
                onValueChange={(value) => {
                  handleInsuranceChange(value)
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your Insurance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Insurance</SelectLabel>
                    {Object.values(InsuranceType).map((insuranceType) => (
                      <SelectItem key={insuranceType} value={insuranceType}>
                        {insuranceType}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Select
                onValueChange={(value) => {
                  handleSupportChange(value)
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your Support" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Support</SelectLabel>
                    {Object.values(SupportType).map((supportType) => (
                      <SelectItem key={supportType} value={supportType}>
                        {supportType}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              <FormField
                isTextArea
                label="If you choose Other"
                placeholder="Tell us what you need we will get back to you shortly"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <div className="flex items-center gap-1">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="red"
                  viewBox="0 0 256 256"
                >
                  <path d="M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z" />
                </svg>
                <p className="text-xs text-[#878787]">
                  Please note that this action can be undone if you have no
                  insurance
                </p>
              </div>

              <div className="flex items-center justify-end gap-4">
                <Button
                  variant={"ghost"}
                  text="Cancel"
                  className="bg-[#F9F9F9] text-black rounded-[32px]"
                />
                <Button
                  text="Send"
                  type="submit"
                  className="bg-[#54D2D1] rounded-2xl"
                />
              </div>
            </form>
          </div>

          <div className="mt-8">
            <p className="font-semibold">Government Support Alert</p>

            <div className="flex items-center justify-between p-6 rounded-2xl bg-[#fff] mt-2">
              <h4 className="w-[291px]">
                set your government alert to receive upcoming deadlines and
                changes
              </h4>
              <Button text="Add Alert" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GovernmentPolicy
function setInsurance(value: any) {
  throw new Error("Function not implemented.")
}
