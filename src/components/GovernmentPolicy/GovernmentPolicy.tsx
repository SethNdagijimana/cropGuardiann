import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { ChartComponent } from "../Chart"
import { FormField } from "../FormField"
import Wheat from "../Icon/Wheat"
import { Button } from "../ui/button"

const GovernmentPolicy = () => {
  return (
    <>
      <div className="grid grid-cols-2 px-[100px] py-[80px] gap-16 mt-[30px]">
        <div className="bg-[#F2F2F2] rounded-2xl p-6 w-full">
          <div className="w-[484px] space-y-6">
            <h3 className="text-[24px] text-primary">
              Government programs of getting agriculture support
            </h3>

            <h4 className="font-normal h-[61px] leading-[24px]">
              To ensure the most accurate and relevant response, we&apos;ve
              forwarded your inquiry to the cooperative with whom you are
              associated.
            </h4>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-white p-5 space-y-4 rounded-2xl border border-[#E5E5E5] text-xs">
              <Wheat color="#54D2D1" width={32} height={32} />
              <h4 className="text-xs font-bold font-bricolage">
                Financial Empowerment and Loans
              </h4>
              <h4 className="">Loans for Farmers</h4>
              <h4 className="text-xs">Investing in Technology</h4>
              <h4 className="text-xs">Crop Insurance:</h4>
              <h4 className="text-xs">Financial Literacy Programs</h4>
              <h4 className="text-xs">
                Venturing into Livestock or Agribusiness
              </h4>
              <h4 className="text-xs">Farmers&apos; Cooperatives</h4>
              <h4 className="text-xs">Women Empowerment</h4>
            </div>

            <div className="bg-white p-5 space-y-4 rounded-2xl border border-[#E5E5E5]">
              <Wheat color="#54D2D1" width={32} height={32} />
              <h4 className="text-xs font-bold font-bricolage">
                Encourage Partnership with Private Sector
              </h4>
              <h4 className="text-xs">Policy Support</h4>
              <h4 className="text-xs">Financial Incentives</h4>
              <h4 className="text-xs">Technology Sharing</h4>
              <h4 className="text-xs">Public Infrastructure</h4>
              <h4 className="text-xs">Training Programs</h4>
            </div>

            <div className="bg-white p-5 space-y-4 rounded-2xl border border-[#E5E5E5]">
              <Wheat color="#54D2D1" width={32} height={32} />
              <h4 className="text-xs font-bold font-bricolage">Security</h4>
              <h4 className="text-xs">Farm Infrastructure</h4>
              <h4 className="text-xs">Perimeter Security</h4>
              <h4 className="text-xs">Crop Insurance:</h4>
              <h4 className="text-xs">Livestock Protection</h4>
              <h4 className="text-xs">Water and Resource Security</h4>
              <h4 className="text-xs">Supply Chain Security</h4>
            </div>

            <div className="bg-white p-5 space-y-4 rounded-2xl border border-[#E5E5E5]">
              <Wheat color="#54D2D1" width={32} height={32} />
              <h4 className="text-xs font-bold font-bricolage">
                Agricultural Policy
              </h4>
              <h4 className="text-xs">Subsidies and Financial Support</h4>
              <h4 className="text-xs">Trade Policies</h4>
              <h4 className="text-xs">Market Access</h4>
              <h4 className="text-xs">Research and Innovation</h4>
              <h4 className="text-xs">Environmental Conservation</h4>
              <h4 className="text-xs">Rural Development</h4>
              <h4 className="text-xs">Climate Change Adaptation</h4>
            </div>
          </div>

          <div className="mt-6">
            <ChartComponent
              bgColor="#54d2d133"
              borderColor="#54D2D1"
              label="Total Government support $"
            />
          </div>
        </div>

        <div className="bg-[#F2F2F2] rounded-2xl p-6 w-full">
          <div className="w-[484px] space-y-6">
            <h3 className="text-[24px] text-primary">Get Your Support</h3>

            <h4 className="font-normal h-[61px] leading-[24px]">
              To ensure the most accurate and relevant response, we will forward
              your inquiries to the cooperative with whom you are associated
              with.
            </h4>
          </div>

          {/* <div className="bg-white rounded-2xl p-6 space-y-6">
            <p className="text-center font-bold font-bricolage">
              If you don’t have insurance You can Apply for one
            </p>

            <form className="space-y-6">
              <FormField
                label="Enter your name here"
                placeholder="Your FullName"
              />
              <FormField
                type="email"
                label="Enter your email"
                placeholder="Your Email"
              />

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

              <FormField
                label="Enter your Contact"
                placeholder="Your Contact"
              />

              <div className="flex items-center gap-1">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="#54D2D1"
                  viewBox="0 0 256 256"
                >
                  <path d="M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z" />
                </svg>
                <p className="text-xs text-[#878787]">
                  Please note that this action is for requesting an Insurance
                </p>
              </div>

              <div className="flex items-center justify-end gap-4">
                <Button
                  variant={"ghost"}
                  text="Cancel"
                  className="bg-[#F9F9F9] text-black rounded-[32px]"
                />
                <Button
                  variant={"ghost"}
                  text="Send"
                  type="submit"
                  className="bg-[#54D2D1] text-black rounded-[32px]"
                />
              </div>
            </form>
          </div> */}

          <div className="bg-white rounded-2xl p-6 space-y-6 mt-6">
            <p className="text-center font-bold font-bricolage">
              Request your support
            </p>

            <form className="space-y-6">
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

              <FormField label="Location" placeholder="Enter your location" />
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
                  <SelectValue placeholder="Select you Support" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Support</SelectLabel>
                    <SelectItem value="prime">Equipment</SelectItem>
                    <SelectItem value="sonarwa">Seeds</SelectItem>
                    <SelectItem value="radiant">Advisor</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <FormField
                isTextArea
                label="If you choose Other"
                placeholder="Tell us what you need we will get back to you shortly"
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
