"use client"

import { FormField } from "@/components/FormField"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { changePassword } from "@/services/user"

// import { changePassword } from "@/services/user"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface ChangePasswordPageWidgetProps {
  userId: string
 
}

const ChangePasswordPageWidget = ({
  userId,
 
}: ChangePasswordPageWidgetProps) => {
  const [currentPassword, setCurrentPassword] = useState<string>("")
  const [newPassword, setNewPassword] = useState<string>("")
  const [retypedNewPassword, setRetypedNewPassword] = useState<string>("")

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const router = useRouter()

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!currentPassword || !newPassword || !retypedNewPassword) {
      toast({
        variant: "destructive",
        description: "all-fields-are-required"
      })

      return
    }

    setIsLoading(true)

    try {
      const data = await changePassword({
        userId,
        currentPassword,
        newPassword,
        retypedNewPassword
      })

      if (data.error) {
        toast({
          variant: "destructive",
          description: data.message
        })

        setIsLoading(false)

        return
      }

      toast({
        description: data.message
      })

      router.push(`/account`)
    } catch (error) {
      toast({
        variant: "destructive",
        description: "error-message"
      })
    }

    setIsLoading(false)
  }

  return (
    <div className="container">
      <Button
        variant="outline"
        className="bg-white h-10"
        text="back"
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

      <div className="w-full md:w-[374px] mx-auto mt-14 md:mt-0">
        <h1 className="text-black text-[32px] md:text-4xl font-medium">
          update-password
        </h1>

        <form onSubmit={onSubmitHandler} className="mt-10 md:mt-8">
          <fieldset disabled={isLoading}>
            <FormField
              label="current-password"
              type="password"
              className="w-full"
              placeholder="************"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              onPaste={(e) => e.preventDefault()}
            />

            <FormField
              label="new-password"
              type="password"
              className="w-full mt-4"
              placeholder="************"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              onPaste={(e) => e.preventDefault()}
            />

            <FormField
              label="retype-password"
              type="password"
              className="w-full mt-4"
              placeholder="************"
              value={retypedNewPassword}
              onChange={(e) => setRetypedNewPassword(e.target.value)}
              onPaste={(e) => e.preventDefault()}
            />
          </fieldset>

          <Button
            variant="default"
            text="update"
            loading={isLoading}
            className="w-full mt-10"
          />
        </form>
      </div>
    </div>
  )
}

export default ChangePasswordPageWidget
