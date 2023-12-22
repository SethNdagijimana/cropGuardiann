"use client"

import { FormField } from "@/components/FormField"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useState } from "react"

const SignIn = () => {
  const [showSigninPage, setShowSigninPage] = useState<boolean>(false)

  const handleSignInPage = () => {
    setShowSigninPage(true)
  }

  return (
    <>
      {!showSigninPage ? (
        <>
          <div className="md:mt-[175px] mt-20">
            <h2 className="md:text-[36px] text-[30px] font-bricolage font-bold text-primary text-center">
              Crop guardian
            </h2>
          </div>

          <div className="md:mt-[158px] mt-20 md:p-8 p-4 border border-[#F1F1F1] md:w-[348px] w-[300px] mx-auto">
            <div className="md:mb-6 mb-4">
              <h3 className="font-bold text-center md:text-[20px] text-base font-bricolage">
                Log in to your account
              </h3>
            </div>

            <div className="flex items-center justify-center w-[224px] mx-auto">
              <Button
                text=" Sign in with an email"
                onClick={handleSignInPage}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "h-10 rounded-[50px] bg-[#4397F7] text-sm font-medium text-white"
                )}
              />
            </div>

            <div className="md:space-y-6 space-y-4">
              <div className="md:mt-8 mt-6 flex items-center justify-center">
                <h4 className="font-normal">
                  Don’t have an account?
                  <span className="text-[#4397F7]">
                    <Link href="/signup"> Sign up</Link>
                  </span>
                </h4>
              </div>

              <div className=" flex items-center justify-center">
                <h4 className="text-[#4397F7]">Forgot your password?</h4>
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
              Log in to your account
            </h3>

            <div className="mt-6">
              <form>
                <div className="mb-6">
                  <FormField label="Email" type="email" />
                </div>

                <div>
                  <FormField label="password" type="password" />
                </div>

                <div className="mt-8">
                  <Button
                    text="Sign In"
                    className="w-full bg-[#4397F7] rounded-[50px] text-white"
                  />
                </div>
              </form>

              <div className="mt-8 flex items-center justify-center">
                <h4 className="font-normal">
                  Don’t have an account?
                  <span className="text-[#4397F7]">
                    <Link href="/signup"> Sign up</Link>
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

export default SignIn
