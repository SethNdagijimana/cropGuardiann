"use client"

import { FormField } from "@/components/FormField"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { getInsurance } from "@/services/user"
import { InsuranceType } from "@prisma/client"
import { useRouter } from "next/navigation"
import { useState } from "react"

const ApplyInsurance = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [contact, setContact] = useState("")
  const [userId, setUserId] = useState("")
  const [prime, setPrime] = useState("")
  const [sonarwa, setSonarwa] = useState("")
  const [radiant, setRadiant] = useState ("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [insurance, setInsurance] = useState<InsuranceType | "">("");



  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (
      !name ||
      !email ||
      !contact ||
      !userId ||
      !insurance
     
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

    

    setIsLoading(true)

    try {
      const data = await getInsurance(
        name,
        email,
        contact,
        userId,
       insurance
       
      )

      if (data.error) {
        toast({
          variant: "destructive",
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

  // const handleInsuranceChange = (value: string) => {
  //   setInsurance(value)
  // }



  const router = useRouter()
  return (
    <>
      <Button text="Back to Dashboard" onClick={router.back} />
      <div className="mt-10">
        <h1 className="font-bricolage text-center">Insurance Application</h1>
      </div>

      <div className="flex justify-center items-center  m-24">
        <div className="grid grid-cols-2 gap-10">
          <div className="bg-[#F2F2F2] rounded-2xl p-6">
            <h3 className="font-bricolage font-semibold">
              Crop & LiveStock Insurance 
            </h3>

            <div className="mt-8 flex items-center justify-center gap-4">
              <label
                htmlFor="file-upload"
                className="w-[56px] h-[56px] bg-[#ffff] rounded-full flex items-center justify-center overflow-hidden relative"
              >
                <input
                  type="file"
                  id="upload"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <svg
                  className="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="#06f94f"
                  viewBox="0 0 256 256"
                >
                  <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z" />
                </svg>
              </label>

              <div>
                <p className="text-primary font-semibold">
                  Upload RCA Certificate & RDB Certificate
                </p>
                <h4 className="text-[#767676]">
                  Ensure file uploaded are not greater than 2mb each.
                </h4>
              </div>
            </div>

            <form className="space-y-6 mt-4" onSubmit={onSubmitHandler}>
              <FormField
                label="Enter your name here"
                placeholder="Your FullName"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <FormField
                type="email"
                label="Enter your email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <FormField
                label="Enter your Contact"
                placeholder="Your Contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />

              <FormField label="Id Number" placeholder="Enter your Id" value={userId} onChange={(e) => setUserId(e.target.value)}/>

              <Select >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select you Insurance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Insurance</SelectLabel>
                    <SelectItem value="prime" onChange={(e) => setPrime((e.target as HTMLSelectElement).value)}>PRIME</SelectItem>
                    <SelectItem value="sonarwa" onChange={(e) => setSonarwa((e.target as HTMLSelectElement).value)}>SONARWA</SelectItem>
                    <SelectItem value="radiant" onChange={(e) => setRadiant((e.target as HTMLSelectElement).value)}>Radiant</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <div className="flex items-center justify-start gap-4">
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

          <div className="bg-[#F2F2F2] rounded-2xl p-6">
            <h3 className="font-bricolage font-semibold">
              Equipment Insurance
            </h3>

            <div className="mt-8 flex items-center justify-center gap-4">
              <label
                htmlFor="file-upload"
                className="w-[56px] h-[56px] bg-[#ffff] rounded-full flex items-center justify-center overflow-hidden relative"
              >
                <input
                  type="file"
                  id="upload"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <svg
                  className="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="#06f94f"
                  viewBox="0 0 256 256"
                >
                  <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z" />
                </svg>
              </label>

              <div>
                <p className="text-primary font-semibold">
                  Upload RCA Certificate & RDB Certificate
                </p>
                <h4 className="text-[#767676]">
                  Ensure file uploaded are not greater than 2mb each.
                </h4>
              </div>
            </div>

            <form className="space-y-6 mt-4">
              <FormField
                label="Enter your name here"
                placeholder="Your FullName"
              />

              <FormField
                type="email"
                label="Enter your email"
                placeholder="Your Email"
              />

              <FormField
                label="Enter your Contact"
                placeholder="Your Contact"
              />

              <FormField label="Id Number" placeholder="Enter your Id" />

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select you Insurance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Insurance</SelectLabel>
                    <SelectItem value="prime">PRIME</SelectItem>
                    <SelectItem value="sonarwa">SONARWA</SelectItem>
                    <SelectItem value="radiant">Radiant</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your Equipment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Insurance</SelectLabel>
                    <SelectItem value="prime">Tractor</SelectItem>
                    <SelectItem value="sonarwa">Sprayer</SelectItem>
                    <SelectItem value="radiant">Backhoe</SelectItem>
                    <SelectItem value="radiant">Farm Truck</SelectItem>
                    <SelectItem value="radiant">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <FormField
                label="Mention other equipment not listed above"
                placeholder="other"
                type="text"
                isTextArea
              />

              <div className="flex items-center justify-start gap-4">
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
        </div>
      </div>
    </>
  )
}

export default ApplyInsurance
