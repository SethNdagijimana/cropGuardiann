"use client"

import { FormField } from "@/components/FormField"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { resetPassword } from "@/services/user"
import { useRouter } from "next/navigation"
import { useState } from "react"



const ResetPasswordWidget = () => {
  const [email, setEmail] = useState("")
  const [emailSent, setEmailSent] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const router = useRouter()

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!email) {
      toast({
        variant: "destructive",
        description: "Email is required"
      })

      return
    }

    setIsLoading(true)

    try {
      const data = await resetPassword(email)

      if (data.error) {
        toast({
          variant: "destructive",
          description: data.message
        })

        setIsLoading(false)

        return
      }

      setIsLoading(false)
      setEmailSent(true)
    } catch (error) {
      toast({
        variant: "destructive",
        description: "An error occured. Please try again."
      })

      setIsLoading(false)
    }
  }

  if (emailSent) {
    return (
      <div className=" w-full grid place-items-center">
        <div className="w-full flex items-center justify-center">
          <Mail />
        </div>

        <div className="space-y-3 mt-9">
          <h1 className="text-black text-2xl md:text-4xl font-medium text-center">
          Check Your Email
          </h1>
          <h4 className="text-center text-[#949494] text-base font-medium">
          Please check the email address for instructions to reset your password.
          </h4>
        </div>

        <Button
          variant="default"
          className="w-1/5 mt-9"
          text="Done"
          onClick={() => router.push(`/signin`)}
        />
      </div>
    )
  }

  return (
    <>
        <div className="md:mt-[175px] mt-20">
            <h2 className="md:text-[36px] text-[30px] font-bricolage font-bold text-primary text-center">
              Crop guardian
            </h2>
          </div>

      <div className="md:mt-[158px] mt-20 md:p-8 p-4 border border-[#F1F1F1] md:w-[348px] w-[300px] mx-auto">
      <div className="container fixed top-0 left-0 w-full pl-[1rem] md:pl-28 pt-20">
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
      </div>

      <div className="space-y-3 text-center">
        <h1 className="text-black text-xl md:text-2xl font-medium">
        Reset your password
        </h1>

        <h4 className="text-[#949494] text-sm md:text-base font-medium">
        Enter your email address and we will send you instructions to reset your password.
        </h4>
      </div>

      <form onSubmit={onSubmitHandler} className="w-full mt-8">
        <fieldset className="space-y-[23px]" disabled={isLoading}>
          <FormField
            label="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            autoFocus
          />

          <Button
            variant="default"
            className="w-full"
            text="Continue"
            icon={
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.8656 12.3382L13.6812 17.8382C13.5781 17.9475 13.4094 18.0007 13.2969 18.0007C13.1723 18.0007 13.0472 17.9577 12.9481 17.8708C12.7365 17.6852 12.7208 17.3689 12.9132 17.1648L17.3094 12.5007H5.51844C5.23184 12.5007 5 12.2771 5 12.0288C5 11.7805 5.23191 11.5007 5.51844 11.5007H17.3091L12.9122 6.83503C12.7198 6.63093 12.7355 6.3144 12.9471 6.12909C13.1593 5.94453 13.4868 5.95818 13.6799 6.16328L18.8643 11.6633C19.0437 11.8538 19.0438 12.1475 18.8656 12.3382Z"
                  fill="white"
                />
              </svg>
            }
            iconPosition="right"
            loading={isLoading}
          />
        </fieldset>
      </form>
    </div>
    
    </>
  )
}

export default ResetPasswordWidget

const Mail = () => {
  return (
    <>
      <svg
        width={130}
        height={140}
        viewBox="0 0 130 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <svg
          width={130}
          height={140}
          viewBox="0 0 130 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5 134.5V78.5162C10.5 76.9333 11.2495 75.4439 12.5208 74.5007L69.3922 32.3058C71.222 30.9482 73.7383 30.9994 75.5115 32.4303L127.64 74.499C128.816 75.4482 129.5 76.8786 129.5 78.39V134.5C129.5 137.261 127.261 139.5 124.5 139.5H15.5C12.7386 139.5 10.5 137.261 10.5 134.5Z"
            fill="url(#paint0_linear_122_10791)"
            stroke="white"
          />
          <path
            d="M104.695 27.0273L73.7888 6.46181C73.3785 6.18915 72.9186 5.99998 72.4352 5.90513C71.9518 5.81027 71.4545 5.81159 70.9716 5.90899L26.8531 14.7723C24.9029 15.1641 23.1883 16.3145 22.0863 17.9705C20.9844 19.6265 20.5854 21.6524 20.9772 23.6026L37.2266 104.487C37.6184 106.437 38.7688 108.151 40.4248 109.253C42.0808 110.355 44.1068 110.754 46.0569 110.362L112.235 97.0674C114.185 96.6756 115.899 95.5252 117.001 93.8692C118.103 92.2132 118.502 90.1873 118.111 88.2371L106.293 29.4125C106.196 28.9294 106.005 28.4702 105.731 28.0609C105.457 27.6517 105.105 27.3005 104.695 27.0273Z"
            fill="url(#paint1_linear_122_10791)"
            stroke="white"
          />
          <g filter="url(#filter0_d_122_10791)">
            <path
              d="M74.7065 37.4907C72.5094 37.4921 70.3444 38.0176 68.3912 39.0235C66.4379 40.0294 64.7528 41.4867 63.4757 43.2744C62.1987 45.0622 61.3665 47.1288 61.0482 49.3026C60.73 51.4765 60.9349 53.6949 61.6459 55.7737L51.3037 66.1178C51.1045 66.3167 50.9924 66.5866 50.9922 66.8681V73.947C50.9922 74.2287 51.1041 74.4987 51.3032 74.6979C51.5023 74.897 51.7724 75.0089 52.054 75.0089H59.1329C59.4145 75.0089 59.6846 74.897 59.8837 74.6979C60.0829 74.4987 60.1948 74.2287 60.1948 73.947V70.7615H63.3803C63.6619 70.7615 63.932 70.6497 64.1311 70.4505C64.3302 70.2514 64.4421 69.9813 64.4421 69.6997V66.5142H67.6276C67.9091 66.5139 68.179 66.4019 68.378 66.2027L70.2273 64.3551C72.1234 65.0038 74.1379 65.232 76.131 65.0236C78.1241 64.8153 80.0479 64.1755 81.7688 63.1487C83.4897 62.1219 84.9664 60.7327 86.0963 59.0777C87.2262 57.4226 87.9822 55.5414 88.3117 53.5648C88.6413 51.5881 88.5366 49.5634 88.0047 47.6313C87.4729 45.6992 86.5268 43.9061 85.2322 42.3765C83.9375 40.8469 82.3253 39.6175 80.5077 38.7738C78.69 37.9301 76.7104 37.4923 74.7065 37.4907ZM74.7065 62.9747C73.2258 62.9774 71.7583 62.6968 70.3831 62.1483C70.1875 62.0631 69.9707 62.0388 69.7611 62.0786C69.5515 62.1184 69.3588 62.2204 69.208 62.3713L67.1869 64.3905H63.3803C63.0986 64.3905 62.8286 64.5024 62.6294 64.7015C62.4303 64.9007 62.3184 65.1707 62.3184 65.4524V68.6379H59.1329C58.8513 68.6379 58.5812 68.7497 58.3821 68.9489C58.183 69.148 58.0711 69.4181 58.0711 69.6997V72.8852H53.1159V67.3088L63.6298 56.7931C63.7807 56.6423 63.8827 56.4495 63.9225 56.2399C63.9622 56.0303 63.938 55.8136 63.8528 55.618C62.9278 53.2966 62.7717 50.7397 63.4075 48.323C64.0432 45.9063 65.4373 43.7572 67.3849 42.1915C69.3324 40.6257 71.7308 39.7258 74.2277 39.6241C76.7245 39.5223 79.1882 40.224 81.2567 41.6261C83.3252 43.0281 84.8896 45.0567 85.7199 47.4136C86.5502 49.7706 86.6027 52.3317 85.8697 54.7207C85.1367 57.1097 83.6569 59.2006 81.6476 60.6863C79.6382 62.172 77.2054 62.9741 74.7065 62.9747ZM80.0157 47.7551C80.0157 48.1051 79.9119 48.4473 79.7174 48.7383C79.5229 49.0294 79.2466 49.2562 78.9232 49.3901C78.5998 49.5241 78.244 49.5591 77.9007 49.4908C77.5574 49.4226 77.2421 49.254 76.9946 49.0065C76.747 48.759 76.5785 48.4437 76.5102 48.1004C76.4419 47.7571 76.477 47.4013 76.6109 47.0779C76.7449 46.7545 76.9717 46.4781 77.2627 46.2837C77.5538 46.0892 77.8959 45.9854 78.2459 45.9854C78.7153 45.9854 79.1654 46.1719 79.4973 46.5037C79.8292 46.8356 80.0157 47.2858 80.0157 47.7551Z"
              fill="#9A77FF"
            />
            <path
              d="M74.7064 37.2907L74.7066 37.2907C76.7396 37.2923 78.7479 37.7365 80.5919 38.5924C82.4359 39.4484 84.0714 40.6955 85.3848 42.2473C86.6983 43.799 87.6581 45.6182 88.1976 47.5782C88.7371 49.5383 88.8434 51.5924 88.509 53.5977C88.1747 55.603 87.4077 57.5114 86.2614 59.1904C85.1152 60.8694 83.6171 62.2787 81.8713 63.3204C80.1254 64.3621 78.1737 65.0112 76.1518 65.2225C74.1712 65.4296 72.1698 65.2118 70.2809 64.5843L68.5195 66.3441C68.5194 66.3441 68.5194 66.3441 68.5194 66.3441L68.5193 66.3442L68.378 66.2027C68.179 66.4019 67.9091 66.5139 67.6276 66.5142L74.7064 37.2907ZM74.7064 37.2907C72.4775 37.2921 70.2811 37.8252 68.2996 38.8457C66.3181 39.8661 64.6086 41.3445 63.313 43.1582C62.0174 44.9718 61.1732 47.0683 60.8503 49.2737C60.5335 51.4378 60.7278 53.6455 61.4168 55.7201L51.1623 65.9763C50.9256 66.2127 50.7925 66.5334 50.7922 66.868V66.8681V73.947C50.7922 74.2817 50.9251 74.6026 51.1618 74.8393C51.3984 75.0759 51.7194 75.2089 52.054 75.2089H59.1329C59.4676 75.2089 59.7885 75.0759 60.0252 74.8393C60.2618 74.6026 60.3948 74.2817 60.3948 73.947V70.9615M74.7064 37.2907L60.3948 70.9615M60.3948 70.9615H63.3803C63.7149 70.9615 64.0359 70.8286 64.2725 70.592C64.5091 70.3553 64.6421 70.0344 64.6421 69.6997V66.7142L60.3948 70.9615ZM74.7061 62.7747L74.7064 62.7747C77.1626 62.7741 79.5537 61.9857 81.5286 60.5255C83.5036 59.0652 84.9581 57.0101 85.6785 54.662C86.399 52.3139 86.3473 49.7966 85.5312 47.4801C84.7152 45.1635 83.1776 43.1697 81.1445 41.7916C79.1114 40.4136 76.6899 39.7239 74.2358 39.8239C71.7817 39.9239 69.4244 40.8084 67.5102 42.3473C65.596 43.8863 64.2258 45.9986 63.6009 48.3739C62.9763 50.7482 63.1293 53.2602 64.0374 55.5412C64.1376 55.7728 64.166 56.0292 64.119 56.2772C64.0717 56.5263 63.9505 56.7554 63.7712 56.9346L53.3159 67.3916V72.6852H57.8711V69.6997C57.8711 69.365 58.004 69.0441 58.2407 68.8074C58.4773 68.5708 58.7983 68.4379 59.1329 68.4379H62.1184V65.4524C62.1184 65.1177 62.2514 64.7967 62.488 64.5601C62.7246 64.3235 63.0456 64.1905 63.3803 64.1905H67.1041L69.0665 62.2299C69.0665 62.2299 69.0665 62.2299 69.0665 62.2298L69.0666 62.2298L69.208 62.3713C69.3588 62.2204 69.5515 62.1184 69.7611 62.0786C69.9707 62.0388 70.1875 62.0631 70.3831 62.1483L74.7061 62.7747ZM74.7061 62.7747C73.252 62.7773 71.8107 62.502 70.4599 61.9636L74.7061 62.7747ZM79.8837 48.8494C80.1001 48.5255 80.2157 48.1447 80.2157 47.7551C80.2157 47.2327 80.0081 46.7317 79.6387 46.3623C79.2693 45.9929 78.7683 45.7854 78.2459 45.7854C77.8564 45.7854 77.4755 45.9009 77.1516 46.1174C76.8277 46.3338 76.5752 46.6414 76.4261 47.0013C76.2771 47.3613 76.2381 47.7573 76.3141 48.1394C76.3901 48.5215 76.5777 48.8725 76.8531 49.1479C77.1286 49.4234 77.4796 49.611 77.8617 49.687C78.2438 49.763 78.6398 49.724 78.9997 49.5749C79.3596 49.4258 79.6673 49.1734 79.8837 48.8494Z"
              stroke="url(#paint2_linear_122_10791)"
              strokeWidth="0.4"
            />
          </g>
          <path
            d="M70.1368 106.299L13.4059 77.4764C12.0754 76.8004 10.5 77.7671 10.5 79.2595V134.5C10.5 137.261 12.7386 139.5 15.5 139.5H124.5C127.261 139.5 129.5 137.261 129.5 134.5V79.3903C129.5 77.8674 127.866 76.9032 126.533 77.6399L74.82 106.218C73.369 107.02 71.6148 107.05 70.1368 106.299Z"
            fill="url(#paint3_linear_122_10791)"
          />
          <path
            d="M119.508 25C119.51 25.3518 119.403 25.6957 119.202 25.9839C119 26.2721 118.713 26.4903 118.382 26.6081L111.581 29.0814L109.108 35.8816C108.987 36.2099 108.767 36.493 108.48 36.6929C108.192 36.8928 107.85 37 107.5 37C107.15 37 106.808 36.8928 106.521 36.6929C106.233 36.493 106.014 36.2099 105.892 35.8816L103.419 29.0739L96.6184 26.6081C96.2902 26.4863 96.007 26.2669 95.8071 25.9794C95.6072 25.6919 95.5 25.3502 95.5 25C95.5 24.6498 95.6072 24.3081 95.8071 24.0206C96.007 23.7331 96.2902 23.5137 96.6184 23.3919L103.426 20.9186L105.892 14.1184C106.014 13.7901 106.233 13.507 106.521 13.3071C106.808 13.1072 107.15 13 107.5 13C107.85 13 108.192 13.1072 108.48 13.3071C108.767 13.507 108.987 13.7901 109.108 14.1184L111.582 20.9261L118.382 23.3919C118.713 23.5097 119 23.7279 119.202 24.0161C119.403 24.3043 119.51 24.6482 119.508 25Z"
            fill="#9747FF"
            stroke="white"
          />
          <path
            d="M16.5048 108C16.5067 108.235 16.4354 108.464 16.3009 108.656C16.1664 108.848 15.9754 108.994 15.7544 109.072L11.2202 110.721L9.57208 115.254C9.49084 115.473 9.34458 115.662 9.15293 115.795C8.96129 115.929 8.73344 116 8.5 116C8.26656 116 8.03871 115.929 7.84707 115.795C7.65542 115.662 7.50916 115.473 7.42792 115.254L5.77907 110.716L1.24561 109.072C1.02676 108.991 0.838016 108.845 0.704729 108.653C0.571442 108.461 0.5 108.233 0.5 108C0.5 107.767 0.571442 107.539 0.704729 107.347C0.838016 107.155 1.02676 107.009 1.24561 106.928L5.78407 105.279L7.42792 100.746C7.50916 100.527 7.65542 100.338 7.84707 100.205C8.03871 100.071 8.26656 100 8.5 100C8.73344 100 8.96129 100.071 9.15293 100.205C9.34458 100.338 9.49084 100.527 9.57208 100.746L11.2209 105.284L15.7544 106.928C15.9754 107.006 16.1664 107.152 16.3009 107.344C16.4354 107.536 16.5067 107.765 16.5048 108Z"
            fill="#C191FF"
            stroke="white"
          />
          <defs>
            <filter
              id="filter0_d_122_10791"
              x="50.5918"
              y="37.0908"
              width="38.3076"
              height="39.3179"
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
              <feOffset dy={1} />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.411765 0 0 0 0 0.266667 0 0 0 0 0.835294 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_122_10791"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_122_10791"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_122_10791"
              x1="33.9394"
              y1="29.7192"
              x2="93.1993"
              y2="204.114"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E6DDFF" />
              <stop offset={1} stopColor="#6944D5" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_122_10791"
              x1="50.5"
              y1="32.5"
              x2="126.297"
              y2="142.946"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset={1} stopColor="#E6DDFF" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_122_10791"
              x1="69.7459"
              y1="37.4907"
              x2="69.7459"
              y2="75.0089"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset={1} stopColor="#8155FF" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_122_10791"
              x1="33.9394"
              y1="75.8372"
              x2="55.3383"
              y2="184.431"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset={1} stopColor="#6944D5" />
            </linearGradient>
          </defs>
        </svg>
      </svg>
    </>
  )
}