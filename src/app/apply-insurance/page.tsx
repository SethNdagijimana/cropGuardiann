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
import { useRouter } from "next/navigation"

const ApplyInsurance = () => {
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
