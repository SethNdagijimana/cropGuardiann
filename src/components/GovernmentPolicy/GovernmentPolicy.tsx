import { getSupport } from "@/services/user"
import { useState } from "react"
import { FormField } from "../FormField"
import { Button } from "../ui/button"
import { toast } from "../ui/use-toast"
import Policy from "./Policy"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Loader } from "../Loader"


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
  const [alertAdded, setAlertAdded] = useState<boolean>(false)
  const router = useRouter()

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (
      !userName ||
      !userEmail ||
      !phoneNumber ||
      !location ||
      !userId ||
      !insurance ||
      !support ||
      !message
    ) {
      toast({
        variant: "destructive",
        description: "All fields are required"
      })

      return
    }

    setIsLoading(true)

    try {
      const data = await getSupport(
        userName,
        userEmail,
        phoneNumber,
        location,
        userId,
        insurance,
        support,
        message
      )

      if (data.error) {
        toast({
          variant: "destructive",
          description: data.message
        })

        setIsLoading(false)
        return
      }

      toast({
        variant: "default",
        description: "Support request sent successfully!"
      })

      router.push("/dashboard")  // Redirect to the dashboard

    } catch (error: any) {
      toast({
        variant: "destructive",
        description: error.message
      })

      setIsLoading(false)
    }
  }

  const handleAlert = () => {
    setAlertAdded(true)
    toast({
      variant: "default",
      description: "You will receive a notification if anything is changed"
    })
  }

  return (
    <>
      <div className="grid md:grid-cols-2 md:px-[100px] md:py-[80px] md:gap-16 gap-4 md:mt-[30px] mt-4 py-0 px-0">
        <Policy />

        <div className="bg-[#F2F2F2] rounded-2xl p-6 md:w-full">
          <div className="md:w-[484px] w-[280px] md:space-y-6 space-y-3">
            <h3 className="text-[24px] text-primary">Get Your Support</h3>

            <h4 className="font-normal h-[61px] md:leading-[24px] leading-4">
              To ensure the most accurate and relevant response, we will forward
              your inquiries to the cooperative with whom you are associated
              with.
            </h4>
          </div>

          <div className="bg-white rounded-2xl md:p-6 md:space-y-6 md:mt-6 p-3 space-y-3 mt-2">
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

              <FormField
                label="Insurance"
                placeholder="Enter your Insurance"
                value={insurance}
                onChange={(e) => setInsurance(e.target.value)}
              />

              <FormField
                label="Support"
                placeholder="Request Support"
                value={support}
                onChange={(e) => setSupport(e.target.value)}
              />

              <FormField
                isTextArea
                label="If you choose Other"
                placeholder="Tell us what you need we will get back to you shortly"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <div className="flex items-center gap-1">
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
                  type="submit"
                  disabled={
                    isLoading || 
                    !( 
                      userName &&
                      userEmail &&
                      phoneNumber &&
                      location &&
                      userId &&
                      insurance &&
                      support &&
                      message
                    )
                  }
                  className="bg-[#0C3E0A] rounded-2xl"
                >
                  {isLoading ? <Loader /> : "Send"}
                </Button>
              </div>
            </form>
          </div>

          <div className="mt-8">
            <p className="font-semibold">Government Support Alert</p>

            <div className="flex items-center justify-between md:p-6 p-2 rounded-2xl bg-[#F5F6F8] border border-[#0E4D0C] mt-2">
              <h4 className="md:w-[300px] w-[200px] text-center">
                Set your government alert to receive upcoming deadlines and
                changes
              </h4>
              <Button className={cn("rounded-2xl",alertAdded ? "bg-[#0C3E0A]" : "")} onClick={handleAlert} >
                {alertAdded ? "Alert Added" : "Add Alert"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GovernmentPolicy
