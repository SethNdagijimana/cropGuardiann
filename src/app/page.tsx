import { Images } from "@/components/Images"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="container pt-[44px]">
        <div className="flex items-center justify-between">
          <div className="text-[32px] font-bold font-bricolage">
            CropGuardian
          </div>

          <ul className="flex items-center justify-center gap-6">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">
              <Link href="#about-us">About Us</Link>
            </li>
          </ul>

          <div className="flex items-center justify-center gap-6">
            <Link
              href="/signin"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "bg-[#F5F5F5] text-[#212121] hover:bg-[#F5F5F5] hover:opacity-70 transition h-10 rounded-[50px]"
              )}
            >
              <span className="px-2 py-[2px] text-[#212121] font-medium text-base">
                Sign in
              </span>
            </Link>

            <Link
              href="/signup"
              className={cn(
                buttonVariants({ variant: "default" }),
                "h-10 rounded-[50px]"
              )}
            >
              <span className="px-2 py-[2px] font-medium text-base">
                Create account
              </span>
              <svg
                width={25}
                height={24}
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.3656 12.3381L14.1812 17.8381C14.0781 17.9474 13.9094 18.0006 13.7969 18.0006C13.6723 18.0006 13.5472 17.9576 13.4481 17.8707C13.2365 17.6851 13.2208 17.3688 13.4132 17.1647L17.8094 12.5006H6.01844C5.73184 12.5006 5.5 12.277 5.5 12.0287C5.5 11.7804 5.73191 11.5006 6.01844 11.5006H17.8091L13.4122 6.83494C13.2198 6.63084 13.2355 6.31431 13.4471 6.129C13.6593 5.94444 13.9868 5.95809 14.1799 6.16319L19.3643 11.6632C19.5437 11.8537 19.5438 12.1474 19.3656 12.3381Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[867px] mx-auto mt-[89px]">
        <h2 className="font-medium text-primary text-center">
          Step into a world of agricultural excellence with Crop Guardian, where
          we cultivate success and innovation hand in hand.
        </h2>
      </div>

      <div className="w-[566px] mx-auto mt-[21px]">
        <p className="text-[#494949] text-center font-normal">
          Join us in cultivating a green future, where agricultural excellence
          is not just a goal but a way of life.
        </p>
      </div>

      <div className="flex items-center justify-center mt-[52px]">
        <Link
          href="/signup"
          className={cn(
            buttonVariants({ variant: "default" }),
            "h-[54px] w-[341px] rounded-[50px]"
          )}
        >
          <span className="px-2 py-[2px] font-medium text-base">Continue</span>
          <svg
            width={25}
            height={24}
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.3656 12.3381L14.1812 17.8381C14.0781 17.9474 13.9094 18.0006 13.7969 18.0006C13.6723 18.0006 13.5472 17.9576 13.4481 17.8707C13.2365 17.6851 13.2208 17.3688 13.4132 17.1647L17.8094 12.5006H6.01844C5.73184 12.5006 5.5 12.277 5.5 12.0287C5.5 11.7804 5.73191 11.5006 6.01844 11.5006H17.8091L13.4122 6.83494C13.2198 6.63084 13.2355 6.31431 13.4471 6.129C13.6593 5.94444 13.9868 5.95809 14.1799 6.16319L19.3643 11.6632C19.5437 11.8537 19.5438 12.1474 19.3656 12.3381Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>

      <Images />

      <h1 className="font-bricolage font-bold text-center mt-[200px]">
        Target Audience
      </h1>

      <div className="grid grid-cols-2 px-[80px] mt-[118px] gap-[32px]">
        <div className="space-y-6 text-[#878787]">
          <p className="text-2xl font-normal leading-[36px]">
            The financial risk assessment system developed by Crop Guardian is
            tailored to meet the needs of a diverse audience within the
            agricultural landscape. Primarily designed for farmers and
            agricultural producers, the platform empowers them to make informed
            investment decisions by leveraging financial and market data.
          </p>

          <p className="text-2xl font-normal leading-[36px]">
            Beyond the farming community, agricultural investors find value in
            the system, gaining insights that guide their investment strategies.
          </p>
        </div>

        <div className="h-[514px] rounded-[16px] relative overflow-hidden">
          <Image
            src={"/4.png"}
            fill
            style={{ objectFit: "cover" }}
            priority
            alt="bg-image"
            className="block transition-all duration-300 transform scale-100 hover:scale-110 ease-in-out"
          />
        </div>
      </div>

      <div className="mt-[172px]">
        <h1 id="about-us" className="text-center font-bricolage font-bold ">
          About Us
        </h1>
      </div>

      <div className="grid grid-cols-2 px-[95px] gap-[44px] mt-[111px]">
        <div className="border border-[#E1E1E1] rounded-2xl p-4 space-y-4">
          <h3 className="text-primary text-2xl font-bold">Our Mission</h3>

          <p className="text-xs text-[#878787]">
            Blockchain implementation of usePage3 with Sacffold eth :
            https://github.com/Maker-Studios/usepage3-scaffold
          </p>

          <p className="text-[#878787]">
            In the heart of our agricultural journey, Crop Guardian sprouted
            from a shared passion for cultivating not just crops but
            opportunities for farmers worldwide. Our story begins with a group
            of dedicated individuals who envisioned a future where financial
            risks in farming could be mitigated, and farmers could thrive with
            confidence. Driven by a commitment to innovation and sustainability,
            Crop Guardian emerged as a beacon for those tending to the fields
          </p>
        </div>

        <div className="border border-[#E1E1E1] rounded-2xl p-4 space-y-4">
          <h3 className="text-primary text-2xl font-bold">Our story</h3>

          <p className="text-xs text-[#878787]">
            Blockchain implementation of usePage3 with Sacffold eth :
            https://github.com/Maker-Studios/usepage3-scaffold
          </p>

          <p className="text-[#878787]">
            To empower farmers worldwide by providing innovative financial
            solutions and data-driven insights, enabling them to make informed
            decisions, manage risks effectively, and cultivate sustainable and
            prosperous agricultural practices. Our mission is rooted in a
            commitment to the well-being of farmers, the resilience of the
            agricultural industry, and the global pursuit of food security.
          </p>
        </div>

        <div className="border border-[#E1E1E1] rounded-2xl p-4 space-y-4">
          <h3 className="text-primary text-2xl font-bold">Our team</h3>

          <p className="text-xs text-[#878787]">
            Blockchain implementation of usePage3 with Sacffold eth :
            https://github.com/Maker-Studios/usepage3-scaffold
          </p>

          <p className="text-[#878787]">
            Together, this diverse and skilled team collaborates to realize the
            vision of Crop Guardian, providing a comprehensive solution to
            financial risk management for farmers and contributing to the
            sustainable growth of the agricultural industry.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 h-[350px] px-[163px] mt-[154px] gap-[32px]">
        <div className="rounded-[16px] relative overflow-hidden">
          <Image
            src={"/9.webp"}
            fill
            style={{ objectFit: "cover" }}
            priority
            alt="bg-image"
            className="block transition-all duration-300 transform scale-100 hover:scale-110 ease-in-out"
          />
        </div>

        <div className="rounded-[16px] relative overflow-hidden">
          <Image
            src={"/8.webp"}
            fill
            style={{ objectFit: "cover" }}
            priority
            alt="bg-image"
            className="block transition-all duration-300 transform scale-100 hover:scale-110 ease-in-out"
          />
        </div>
      </div>

      <div className="mt-[180px]">
        <h1 className="font-bricolage text-primary font-bold text-center">
          Hear from our happy customer
        </h1>
      </div>

      {/* testimonials */}

      <div className="grid grid-cols-2 mt-[97px] px-[81px] gap-[44px]">
        <div className="border border-[#E1E1E1] rounded-2xl p-4 space-y-4">
          <div className=" flex items-center justify-between">
            <div className="flex items-center justify-center gap-[11px]">
              <div className="p-6 rounded-[50px] overflow-hidden relative">
                <Image
                  src={"/7.jpg"}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  alt="bg-image"
                  className="block transition-all duration-300 transform scale-100 hover:scale-110 ease-in-out"
                />
              </div>

              <div className="gap-2 flex items-center justify-center">
                <h4 className="text-[15px] font-medium text-primary">
                  Karigirwa Rachel
                </h4>

                <span className="cursor-pointer">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_398_6053)">
                      <path
                        d="M6 10C6 8.1144 6 7.1716 6.58579 6.58579C7.1716 6 8.1144 6 10 6H10.6667C12.5523 6 13.4951 6 14.0809 6.58579C14.6667 7.1716 14.6667 8.1144 14.6667 10V10.6667C14.6667 12.5523 14.6667 13.4951 14.0809 14.0809C13.4951 14.6667 12.5523 14.6667 10.6667 14.6667H10C8.1144 14.6667 7.1716 14.6667 6.58579 14.0809C6 13.4951 6 12.5523 6 10.6667V10Z"
                        stroke="#141B34"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.3329 5.99992C11.3313 4.02853 11.3015 3.00739 10.7277 2.30821C10.6169 2.17318 10.4931 2.04937 10.3581 1.93856C9.62047 1.33325 8.52467 1.33325 6.33301 1.33325C4.14135 1.33325 3.04553 1.33325 2.30796 1.93856C2.17293 2.04937 2.04913 2.17318 1.93831 2.30821C1.33301 3.04577 1.33301 4.1416 1.33301 6.33325C1.33301 8.52492 1.33301 9.62072 1.93831 10.3583C2.04912 10.4933 2.17293 10.6171 2.30796 10.7279C3.00715 11.3018 4.02828 11.3316 5.99967 11.3332"
                        stroke="#141B34"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_398_6053">
                        <rect width={16} height={16} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>

            <h4 className="text-[#475467]">Jan 6, 2022</h4>
          </div>

          <p className="text-xs text-[#878787]">
            Blockchain implementation of usePage3 with Sacffold eth :
            https://github.com/Maker-Studios/usepage3-scaffold
          </p>

          <p className="text-[#878787]">
            Together, this diverse and skilled team collaborates to realize the
            vision of Crop Guardian, providing a comprehensive solution to
            financial risk management for farmers and contributing to the
            sustainable growth of the agricultural industry.
          </p>
        </div>

        <div className="border border-[#E1E1E1] rounded-2xl p-4 space-y-4">
          <div className=" flex items-center justify-between">
            <div className="flex items-center justify-center gap-[11px]">
              <div className="p-6 rounded-[50px] overflow-hidden relative">
                <Image
                  src={"/7.jpg"}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  alt="bg-image"
                  className="block transition-all duration-300 transform scale-100 hover:scale-110 ease-in-out"
                />
              </div>

              <div className="gap-2 flex items-center justify-center">
                <h4 className="text-[15px] font-medium text-primary">
                  Karigirwa Rachel
                </h4>

                <span className="cursor-pointer">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_398_6053)">
                      <path
                        d="M6 10C6 8.1144 6 7.1716 6.58579 6.58579C7.1716 6 8.1144 6 10 6H10.6667C12.5523 6 13.4951 6 14.0809 6.58579C14.6667 7.1716 14.6667 8.1144 14.6667 10V10.6667C14.6667 12.5523 14.6667 13.4951 14.0809 14.0809C13.4951 14.6667 12.5523 14.6667 10.6667 14.6667H10C8.1144 14.6667 7.1716 14.6667 6.58579 14.0809C6 13.4951 6 12.5523 6 10.6667V10Z"
                        stroke="#141B34"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.3329 5.99992C11.3313 4.02853 11.3015 3.00739 10.7277 2.30821C10.6169 2.17318 10.4931 2.04937 10.3581 1.93856C9.62047 1.33325 8.52467 1.33325 6.33301 1.33325C4.14135 1.33325 3.04553 1.33325 2.30796 1.93856C2.17293 2.04937 2.04913 2.17318 1.93831 2.30821C1.33301 3.04577 1.33301 4.1416 1.33301 6.33325C1.33301 8.52492 1.33301 9.62072 1.93831 10.3583C2.04912 10.4933 2.17293 10.6171 2.30796 10.7279C3.00715 11.3018 4.02828 11.3316 5.99967 11.3332"
                        stroke="#141B34"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_398_6053">
                        <rect width={16} height={16} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>

            <h4 className="text-[#475467]">Jan 6, 2022</h4>
          </div>

          <p className="text-xs text-[#878787]">
            Blockchain implementation of usePage3 with Sacffold eth :
            https://github.com/Maker-Studios/usepage3-scaffold
          </p>

          <p className="text-[#878787]">
            Together, this diverse and skilled team collaborates to realize the
            vision of Crop Guardian, providing a comprehensive solution to
            financial risk management for farmers and contributing to the
            sustainable growth of the agricultural industry.
          </p>
        </div>

        <div className="border border-[#E1E1E1] rounded-2xl p-4 space-y-4">
          <div className=" flex items-center justify-between">
            <div className="flex items-center justify-center gap-[11px]">
              <div className="p-6 rounded-[50px] overflow-hidden relative">
                <Image
                  src={"/7.jpg"}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  alt="bg-image"
                  className="block transition-all duration-300 transform scale-100 hover:scale-110 ease-in-out"
                />
              </div>

              <div className="gap-2 flex items-center justify-center">
                <h4 className="text-[15px] font-medium text-primary">
                  Karigirwa Rachel
                </h4>

                <span className="cursor-pointer">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_398_6053)">
                      <path
                        d="M6 10C6 8.1144 6 7.1716 6.58579 6.58579C7.1716 6 8.1144 6 10 6H10.6667C12.5523 6 13.4951 6 14.0809 6.58579C14.6667 7.1716 14.6667 8.1144 14.6667 10V10.6667C14.6667 12.5523 14.6667 13.4951 14.0809 14.0809C13.4951 14.6667 12.5523 14.6667 10.6667 14.6667H10C8.1144 14.6667 7.1716 14.6667 6.58579 14.0809C6 13.4951 6 12.5523 6 10.6667V10Z"
                        stroke="#141B34"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.3329 5.99992C11.3313 4.02853 11.3015 3.00739 10.7277 2.30821C10.6169 2.17318 10.4931 2.04937 10.3581 1.93856C9.62047 1.33325 8.52467 1.33325 6.33301 1.33325C4.14135 1.33325 3.04553 1.33325 2.30796 1.93856C2.17293 2.04937 2.04913 2.17318 1.93831 2.30821C1.33301 3.04577 1.33301 4.1416 1.33301 6.33325C1.33301 8.52492 1.33301 9.62072 1.93831 10.3583C2.04912 10.4933 2.17293 10.6171 2.30796 10.7279C3.00715 11.3018 4.02828 11.3316 5.99967 11.3332"
                        stroke="#141B34"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_398_6053">
                        <rect width={16} height={16} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>

            <h4 className="text-[#475467]">Jan 6, 2022</h4>
          </div>

          <p className="text-xs text-[#878787]">
            Blockchain implementation of usePage3 with Sacffold eth :
            https://github.com/Maker-Studios/usepage3-scaffold
          </p>

          <p className="text-[#878787]">
            Together, this diverse and skilled team collaborates to realize the
            vision of Crop Guardian, providing a comprehensive solution to
            financial risk management for farmers and contributing to the
            sustainable growth of the agricultural industry.
          </p>
        </div>

        <div className="border border-[#E1E1E1] rounded-2xl p-4 space-y-4">
          <div className=" flex items-center justify-between">
            <div className="flex items-center justify-center gap-[11px]">
              <div className="p-6 rounded-[50px] overflow-hidden relative">
                <Image
                  src={"/7.jpg"}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  alt="bg-image"
                  className="block transition-all duration-300 transform scale-100 hover:scale-110 ease-in-out"
                />
              </div>

              <div className="gap-2 flex items-center justify-center">
                <h4 className="text-[15px] font-medium text-primary">
                  Karigirwa Rachel
                </h4>

                <span className="cursor-pointer">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_398_6053)">
                      <path
                        d="M6 10C6 8.1144 6 7.1716 6.58579 6.58579C7.1716 6 8.1144 6 10 6H10.6667C12.5523 6 13.4951 6 14.0809 6.58579C14.6667 7.1716 14.6667 8.1144 14.6667 10V10.6667C14.6667 12.5523 14.6667 13.4951 14.0809 14.0809C13.4951 14.6667 12.5523 14.6667 10.6667 14.6667H10C8.1144 14.6667 7.1716 14.6667 6.58579 14.0809C6 13.4951 6 12.5523 6 10.6667V10Z"
                        stroke="#141B34"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.3329 5.99992C11.3313 4.02853 11.3015 3.00739 10.7277 2.30821C10.6169 2.17318 10.4931 2.04937 10.3581 1.93856C9.62047 1.33325 8.52467 1.33325 6.33301 1.33325C4.14135 1.33325 3.04553 1.33325 2.30796 1.93856C2.17293 2.04937 2.04913 2.17318 1.93831 2.30821C1.33301 3.04577 1.33301 4.1416 1.33301 6.33325C1.33301 8.52492 1.33301 9.62072 1.93831 10.3583C2.04912 10.4933 2.17293 10.6171 2.30796 10.7279C3.00715 11.3018 4.02828 11.3316 5.99967 11.3332"
                        stroke="#141B34"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_398_6053">
                        <rect width={16} height={16} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>

            <h4 className="text-[#475467]">Jan 6, 2022</h4>
          </div>

          <p className="text-xs text-[#878787]">
            Blockchain implementation of usePage3 with Sacffold eth :
            https://github.com/Maker-Studios/usepage3-scaffold
          </p>

          <p className="text-[#878787]">
            Together, this diverse and skilled team collaborates to realize the
            vision of Crop Guardian, providing a comprehensive solution to
            financial risk management for farmers and contributing to the
            sustainable growth of the agricultural industry.
          </p>
        </div>
      </div>

      {/* footer */}

      <div className="mt-[230px] relative">
        <div className="bg-[#D1FFFF] h-16 rotate-[3.512deg] flex items-center justify-center relative z-20">
          <div className="flex items-center justify-center gap-[149px]">
            <h3 className="text-[24px] font-bricolage text-primary">
              Crop guardian
            </h3>

            <div className="flex items-center justify-center gap-[15px]">
              <p className="text-xs font-medium">
                Copyright © 2023 cropguardian.
              </p>

              <p className="text-xs font-medium "> All rights reserved</p>
            </div>
          </div>
        </div>

        <div className="bg-[#A4E2E2] h-16 rotate-[-3deg] absolute inset-0 z-10"></div>
      </div>
    </>
  )
}
