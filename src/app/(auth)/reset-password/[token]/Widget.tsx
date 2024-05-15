"use client"

import { FormField } from "@/components/FormField"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { updatePassword } from "@/services/user"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface ResetPasswordTokenPageWidgetProps {
  userId: string
}

const ResetPasswordTokenPageWidget = ({
  userId,
}: ResetPasswordTokenPageWidgetProps) => {
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const router = useRouter()

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!password || !confirmPassword) {
      toast({
        variant: "destructive",
        description: "all-fields-are-required"
      })

      return
    }

    if (password !== confirmPassword) {
      toast({
        variant: "destructive",
        description:"passwords-do-not-match"
      })

      return
    }

    setIsLoading(true)

    try {
      const data = await updatePassword({ userId, password, confirmPassword })

      if (data.error) {
        toast({
          variant: "destructive",
          description: data.message
        })

        setIsLoading(false)

        return
      }

      router.push(`/signin`)
    } catch (error) {
      toast({
        variant: "destructive",
        description: "error-message"
      })

      setIsLoading(false)
    }
  }

  return (
    <div className="w-full md:w-[374px]">
      <div className="container fixed top-0 left-0 w-full pl-[1rem] md:pl-28 pt-20">
        <Button
          variant="outline"
          className="bg-white"
          text="Back"
          icon={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.13389 11.6623L10.3183 6.16234C10.4214 6.05296 10.5901 5.99984 10.7026 5.99984C10.8272 5.99984 10.9523 6.04281 11.0514 6.12971C11.263 6.31527 11.2787 6.63159 11.0863 6.83565L6.69014 11.4998L18.4811 11.4998C18.7677 11.4998 18.9995 11.7234 18.9995 11.9717C18.9995 12.22 18.7676 12.4998 18.4811 12.4998L6.69045 12.4998L11.0873 17.1655C11.2797 17.3696 11.264 17.6861 11.0524 17.8714C10.8402 18.056 10.5127 18.0423 10.3196 17.8372L5.1352 12.3372C4.95576 12.1467 4.95576 11.853 5.13389 11.6623Z"
                fill="#212121"
              />
            </svg>
          }
          iconPosition="left"
          onClick={() => router.back()}
        />
      </div>

      <div className="space-y-3">
        <h1 className="text-black text-2xl md:text-4xl font-medium text-center">
          Reset your password
        </h1>
        <h4 className="text-center text-[#949494] text-base font-medium">
          Enter your new password below to change your password your password.
        </h4>
      </div>

      <form onSubmit={onSubmitHandler} className="w-full space-y-[23px] mt-9">
        <fieldset className="space-y-[23px]" disabled={isLoading}>
          <FormField
            label="New password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <FormField
            label="Re-enter new password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />

          <Button
            variant="default"
            className="w-full"
            text="Update password"
            iconPosition="right"
            loading={isLoading}
          />
        </fieldset>
      </form>
    </div>
  )
}

export default ResetPasswordTokenPageWidget
