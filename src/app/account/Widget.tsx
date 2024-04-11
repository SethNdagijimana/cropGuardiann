"use client"

import { FormField } from "@/components/FormField"
import Edit from "@/components/Icon/Edit"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import {  useTransition } from "react"

interface AccountPageWidgetProps { 
  userEmail: string
}

const AccountPageWidget = ({

  userEmail,

}: AccountPageWidgetProps) => {
 

  const [isPending, startTransition] = useTransition()

  const isMutating = isPending

  const router = useRouter()


  return (
    <div className="container">
      <Button
        variant="outline"
        className="bg-white h-10"
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

      <div className="w-full md:w-[427px] space-y-7 md:space-y-[40px] mx-auto mt-12 md:mt-0">
        <div className="flex items-center space-x-3 md:space-x-[24px]">
          <Avatar className="w-16 md:w-[86px] h-16 md:h-[86px] rounded-full flex items-center justify-center">
            <AvatarImage className="object-cover" src="/user.png" alt="@shadcn" />

            <AvatarFallback className="w-full h-full flex items-center justify-center">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_128_4921)">
                  <g clipPath="url(#clip0_128_4921)">
                    <rect
                      x={7}
                      y={4}
                      width={86}
                      height={86}
                      rx={43}
                      fill="#F2EEFF"
                    />
                    <rect
                      x="44.5269"
                      y="117.944"
                      width={46}
                      height={101}
                      transform="rotate(-135 44.5269 117.944)"
                      fill="#E6DDFF"
                    />
                  </g>
                  <rect
                    x={5}
                    y={2}
                    width={90}
                    height={90}
                    rx={45}
                    stroke="white"
                    strokeWidth={4}
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_128_4921"
                    x="0.393939"
                    y={0}
                    width="99.2121"
                    height="99.2121"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="2.60606" />
                    <feGaussianBlur stdDeviation="1.30303" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.592157 0 0 0 0 0.278431 0 0 0 0 1 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_128_4921"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_128_4921"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_128_4921">
                    <rect
                      x={7}
                      y={4}
                      width={86}
                      height={86}
                      rx={43}
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </AvatarFallback>
          </Avatar>

          <div className="space-y-[2px] md:space-y-1.5">
            <h2 className="text-base md:text-xl text-black font-medium lowercase">
              {userEmail}
            </h2>

            <p className="text-xs md:text-sm text-[#9D97AC]">
              This is The Email Attached to your Account
            </p>
          </div>
        </div>

        <div className="relative">
          <FormField
            label="update-password"
            className="w-full"
            placeholder="**************"
            disabled={true}
          />

          <div
            className="absolute top-0 right-0 rounded-full"
            onClick={() => router.push(`/account/update-password`)}
          >
            <Edit />
          </div>
        </div>

        <div>
          <Button
            variant="outline"
            className="bg-white h-10"
            text="Log Out"
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.8661 12.3377L13.6817 17.8377C13.5786 17.947 13.4099 18.0002 13.2974 18.0002C13.1728 18.0002 13.0477 17.9572 12.9486 17.8703C12.737 17.6847 12.7213 17.3684 12.9137 17.1644L17.3099 12.5002H5.51893C5.23233 12.5002 5.00049 12.2766 5.00049 12.0283C5.00049 11.78 5.23239 11.5002 5.51893 11.5002H17.3096L12.9127 6.83454C12.7203 6.63044 12.736 6.31391 12.9476 6.1286C13.1598 5.94404 13.4873 5.9577 13.6804 6.16279L18.8648 11.6628C19.0442 11.8533 19.0442 12.147 18.8661 12.3377Z"
                  fill="#212121"
                />
              </svg>
            }
            iconPosition="right"
            onClick={() => signOut({ callbackUrl: `/signin` })}
          />
        </div>
      </div>
    </div>
  )
}

export default AccountPageWidget
