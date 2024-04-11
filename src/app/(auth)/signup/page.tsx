"use client"

import { FormField } from "@/components/FormField"
import { Button, buttonVariants } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { signUp } from "@/services/user"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

const SignUp = () => {
  const [showSignupPage, setShowSignupPage] = useState<boolean>(false)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [retypedPassword, setRetypedPassword] = useState("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const router = useRouter()

  const handleSignUpPage = () => {
    setShowSignupPage(true)
  }

  //Todo change alerts messages

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!name || !email || !password || !retypedPassword) {
      toast({
        variant: "destructive",
        description: "all fields are-required"
      })

      return
    }

    if (password !== retypedPassword) {
      toast({
        variant: "destructive",
        description: "Passwords do not match"
      })

      return
    }

    setIsLoading(true)

    try {
      const data = await signUp({name, email, password, retypedPassword })

      if (data.error) {
        toast({
          variant: "destructive",
          description: data.message
        })

        setIsLoading(false)

        return
      }

      const result = await signIn("credentials", {
        email,
        password,
        redirect: false
      })

      if (result?.error) {
        toast({
          variant: "destructive",
          description: result.error
        })

        setIsLoading(false)

        return
      }
      router.push("/signin")
    } catch (error) {
      toast({
        variant: "destructive",
        description: "error-message"
      })

      setIsLoading(false)
    }
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
              <form onSubmit={onSubmitHandler} className="space-y-[1.813rem]">
                <fieldset className="space-y-[1.813rem]" disabled={isLoading}>
                  <div className="mb-6">
                    <FormField
                      label="Enter your full name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="mb-6">
                    <FormField
                      label="Email"
                      type={"email"}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="mb-6">
                    <FormField
                      label="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div>
                    <FormField
                      label="Re-type password"
                      type="password"
                      value={retypedPassword}
                      onChange={(e) => setRetypedPassword(e.target.value)}
                      onPaste={(e) => e.preventDefault()}
                    />
                  </div>
                </fieldset>

                <div className="mt-8">
                  <Button
                    text="Sign Up"
                    className="w-full bg-[#4397F7] rounded-[50px] text-white"
                    loading={isLoading}
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
