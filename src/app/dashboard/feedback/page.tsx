"use client"

import { FormField } from "@/components/FormField"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { toast } from "@/components/ui/use-toast"
import { userFeedback } from "@/services/user"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

const FeedBack = () => {

  const [feedback, setIsFeedback] = useState("")
  const [email, setIsEmail] = useState("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const router = useRouter()


  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!feedback || !email) {
      toast({
        variant: "destructive",
        description: "email and FeedBack are required"
      })

      return
    }
  
    setIsLoading(true)

    try {
      const data = await userFeedback(email, feedback)

      console.log("Data from API:", data); 

      if (data.error) {
        
        toast({
          variant: "destructive",
          description: data.message
        })

        setIsLoading(false)

        return
      }

    
      router.push("/feedback")
    } catch (error) {
      console.error("Internal error:", error);
      toast({
        variant: "destructive",
        description: "internal error"
      })

      setIsLoading(false)
    }
  }

  return (
    <div className="grid grid-cols-2 gap-[32px]">
      <div className="space-y-6 text-center flex items-center justify-center flex-col">
        <p className="text-2xl font-bricolage font-bold">Give Us A Feedback</p>

        <p className="text-base font-bricolage font-semibold">
          Beyond the farming community, agricultural investors find value in the
          system, gaining insights that guide their investment strategies.
        </p>

        <Sheet>
          <SheetTrigger className="w-full bg-black text-white p-3 rounded-[32px]">
            Continue
          </SheetTrigger>

          <SheetContent className="w-[537px] pt-[70px] px-[38px] mx-auto">
        <form onSubmit={onSubmitHandler}>
        <div className="h-[499px] w-[328px] rounded-[16px]  bg-gradient-to-b from-teal-900 via-teal-700 to-[#DFEAF3]">
              <h2 className="p-8 text-center text-2xl text-white font-bricolage ">
                Hi there!! Your FeeBack is important to us
              </h2>

              {/* <div className="flex items-center justify-between px-4 py-[10px] w-[297px] rounded-[10px] bg-white mx-auto gap-2 mt-[98px]">
                <div className="space-y-[10px]">
                  <label className="text-sm font-light text-black">
                    Send us your feedback
                  </label>

                  <textarea
                    placeholder="your feedback"
                    className="w-full focus:outline-none bg-transparent placeholder:text-[#666]  placeholder:text-sm flex-1"
                  ></textarea>
                </div>

                <div className="cursor-pointer">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.7509 11.9895C21.7515 12.2567 21.6808 12.5193 21.546 12.7501C21.4112 12.9808 21.2171 13.1714 20.984 13.302L5.24242 22.3029C5.01625 22.4312 4.76085 22.499 4.50085 22.4998C4.26108 22.4993 4.02493 22.4413 3.81217 22.3308C3.59942 22.2202 3.41628 22.0602 3.27809 21.8643C3.1399 21.6684 3.0507 21.4421 3.01796 21.2046C2.98522 20.9671 3.00989 20.7252 3.08992 20.4992L5.65398 13.0039C5.67924 12.9297 5.7271 12.8653 5.79082 12.8198C5.85455 12.7742 5.93095 12.7497 6.00929 12.7498H12.7509C12.8537 12.75 12.9554 12.7291 13.0498 12.6883C13.1442 12.6476 13.2292 12.5879 13.2996 12.5129C13.3699 12.4379 13.4241 12.3492 13.4587 12.2524C13.4933 12.1556 13.5077 12.0527 13.5009 11.9501C13.4838 11.7572 13.3946 11.5779 13.251 11.4481C13.1074 11.3182 12.9201 11.2474 12.7265 11.2498H6.01585C5.93763 11.2499 5.86131 11.2256 5.7976 11.1802C5.73389 11.1348 5.68596 11.0706 5.66054 10.9967L3.08804 3.49667C2.98786 3.20928 2.97747 2.89821 3.05826 2.60478C3.13904 2.31135 3.30718 2.04943 3.54034 1.85381C3.77349 1.65819 4.06064 1.53812 4.36364 1.50955C4.66665 1.48098 4.97118 1.54526 5.23679 1.69385L20.9868 10.6835C21.2185 10.814 21.4113 11.0036 21.5455 11.2331C21.6798 11.4626 21.7507 11.7236 21.7509 11.9895Z"
                      fill="#0D0813"
                    />
                  </svg>
                </div>
              </div> */}

              <div className="w-full px-4 rounded-[10px]">

              <FormField
                  label="your user Email"
                  type="email"
                  className="mt-20  w-[300px]"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setIsEmail(e.target.value)}
                />


                <FormField
                  label="Send us your feedback"
                  isTextArea
                  className="mt-4 w-[300px]"
                  placeholder="Your feedback..."
                  value={feedback}
                  onChange={(e) => setIsFeedback(e.target.value)}
                />

                
              </div>

              <div className="p-2 w-full flex items-center justify-between">
                <Button
                  text="Send"
                  variant={"default"}
                  type="submit"
                  className=" w-full rounded-[32px]  text-center text-white"
                />
              </div>
            </div>
        </form>
          </SheetContent>
        </Sheet>
      </div>

      <div className="h-[550px] w-[550px] rounded-[16px] relative overflow-hidden">
        <Image
          src={"/ag.webp"}
          fill
          style={{ objectFit: "cover" }}
          priority
          alt="bg-image"
          className="block transition-all duration-300 transform scale-100 hover:scale-110 ease-in-out"
        />
      </div>
    </div>
  )
}

export default FeedBack
