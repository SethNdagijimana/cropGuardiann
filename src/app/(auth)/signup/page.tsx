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
          <div className="mt-[175px]">
            <h2 className="text-[36px] font-bricolage font-bold text-primary text-center">
              Crop guardian
            </h2>
          </div>

          <div className="mt-[158px] p-8 border border-[#F1F1F1] w-[348px] mx-auto">
            <div className="mb-6">
              <h3 className="font-medium text-center">Create your account</h3>
            </div>

            <div className="flex items-center justify-center w-[224px] mx-auto">
              <Button
                text=" Sign up with an email"
                onClick={handleSignUpPage}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "h-10 rounded-[50px] bg-[#4397F7] text-sm font-medium"
                )}
              />
            </div>

            <div className="space-y-6">
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
          <div className="mt-[175px]">
            <h2 className="text-[36px] font-bricolage font-bold text-primary text-center">
              Crop guardian
            </h2>
          </div>

          <div className="mt-20 w-[348px] mx-auto border border-[#F1F1F1] rounded-[50px] p-6">
            <h3 className="text-center font-medium">Create your account</h3>

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
                    className="w-full bg-[#4397F7] rounded-[50px]"
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
