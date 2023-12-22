"use client"

import { FormField } from "@/components/FormField"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useState } from "react"

const SignUp = () => {
  const [showSignupPage, setShowSignupPage] = useState<boolean>(false)

  const handleSignUpPage = () => {
    setShowSignupPage(true)
  }

  return (
    <>
      {!showSignupPage ? (
        <>
          <div className="md:mt-[175px] mt-20">
            <h2 className="text-[36px] font-bricolage font-bold text-primary text-center">
              Crop guardian
            </h2>
          </div>

          <div className="md:mt-[158px] mt-20 md:p-8 p-4 border border-[#F1F1F1] w-[348px] mx-auto">
            <div className="md:mb-6 mb-4">
              <h3 className="font-bold text-center md:text-[20px] text-base font-bricolage">
                Create your account
              </h3>
            </div>

            <div className="flex items-center justify-center w-[224px] mx-auto">
              <Button
                text=" Sign up with an email"
                onClick={handleSignUpPage}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "h-10 rounded-[50px] bg-[#4397F7] text-sm font-medium text-white"
                )}
              />
            </div>

            <div className="md:space-y-6 space-y-4">
              <div className="mt-8 flex items-center justify-center">
                <h4 className="font-normal">
                  Already have an account?
                  <span className="text-[#4397F7]">
                    <Link href="/signin"> Sign in</Link>
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="md:mt-[175px] mt-20">
            <h2 className="md:text-[36px] text-[30px] font-bricolage font-bold text-primary text-center">
              Crop guardian
            </h2>
          </div>

          <div className="md:mt-20 mt-10 md:w-[348px] w-[300px] mx-auto border border-[#F1F1F1] rounded-[50px] p-6">
            <h3 className="text-center font-bold font-bricolage text-base md:text-[20px]">
              Create your account
            </h3>

            <div className="mt-6">
              <form>
                <div className="mb-6">
                  <FormField label="Name" type="text" />
                </div>

                <div className="mb-6">
                  <FormField label="Email" type="email" />
                </div>

                <div className="mb-6">
                  <FormField label="password" type="password" />
                </div>

                <div>
                  <FormField label="Re- type password" type="password" />
                </div>

                <div className="mt-8">
                  <Button
                    text="Sign Up"
                    className="w-full bg-[#4397F7] rounded-[50px] text-white"
                  />
                </div>
              </form>

              <div className="mt-8 flex items-center justify-center">
                <h4 className="font-normal">
                  Already have an account?
                  <span className="text-[#4397F7]">
                    <Link href="/signin"> Sign in</Link>
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default SignUp
