"use client"

import { FormField } from "@/components/FormField"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger
} from "@/components/ui/sheet"
import Image from "next/image"

const FeedBack = () => {
  return (
    <div className="grid grid-cols-2 gap-[32px]">
      <div className="space-y-6 text-center flex items-center justify-center flex-col">
        <p className="text-2xl">Give Us A Feedback</p>

        <p className="text-xm font-normal">
          Beyond the farming community, agricultural investors find value in the
          system, gaining insights that guide their investment strategies.
        </p>

        <Sheet>
          <SheetTrigger className="w-full bg-black text-white p-3 rounded-[32px]">
            Send
          </SheetTrigger>

          <SheetContent className=" w-[537px] pt-[70px] px-[38px] pb-[293px] mx-auto">
            <SheetHeader className="mt-20">
              <SheetDescription>
                This action can be undone. This will automatically send us your
                feedback. after that we will reach out to you.
              </SheetDescription>
            </SheetHeader>

            <div className="h-[499px] w-[328px] rounded-[16px] mt-8 bg-gradient-to-b from-teal-900 via-teal-300 to-white">
              <div className="w-[327px] px-[10px] py-4 mx-auto flex items-center justify-center rounded-[10px]">
                <FormField
                  label="Send us your feedback"
                  isTextArea
                  className="mt-20 space-y-[10px] w-[300px]"
                  placeholder="Your feedback..."
                />
              </div>

              <div className="p-2 w-[300px] mx-auto flex items-center justify-center">
                <Button
                  text="Send"
                  icon={
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
                  }
                  iconPosition="right"
                  className="flex items-center justify-center w-full"
                />
              </div>
            </div>
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
