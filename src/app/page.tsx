import { Images } from "@/components/Images"
import { Navbar } from "@/components/Navbar"
import { Testimonials } from "@/components/Testimonials"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="md:w-[867px] mx-auto md:mt-[89px] mt-12 container">
        <h2
          id="home"
          className="md:text-[32px] text-[20px] md:leading-[54px] leading-[30px] font-medium text-primary text-center"
        >
          Step into a world of agricultural excellence with Crop Guardian, where
          we cultivate success and innovation hand in hand.
        </h2>
      </div>

      <div className="md:w-[566px] mx-auto mt-[21px] container">
        <p className="text-[#494949] text-center font-normal md:text-base text-sm">
          Join us in cultivating a green future, where agricultural excellence
          is not just a goal but a way of life.
        </p>
      </div>

      <div className="flex items-center justify-center mt-[52px]">
        <Link
          href="/signup"
          className={cn(
            buttonVariants({ variant: "default" }),
            "h-[54px] md:w-[341px] w-[250px] rounded-[50px]"
          )}
        >
          <span className="md:px-2 md:py-[2px] font-medium text-base text-white">
            Continue
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

      <Images />

      <h1 className="font-bricolage font-bold text-center md:text-[48px] text-[32px] md:mt-[200px] mt-[40px]">
        Target Audience
      </h1>

      <div className="grid md:grid-cols-2 grid-cols-1 md:px-[80px] px-[40px] md:mt-[118px] mt-[60px] gap-[32px]">
        <div className="space-y-6 text-[#878787]">
          <p className="md:text-2xl text-base font-normal md:leading-[36px] leading-[26px]">
            The financial risk assessment system developed by Crop Guardian is
            tailored to meet the needs of a diverse audience within the
            agricultural landscape. Primarily designed for farmers and
            agricultural producers, the platform empowers them to make informed
            investment decisions by leveraging financial and market data.
          </p>

          <p className="md:text-2xl text-base font-normal md:leading-[36px] leading-[26px]">
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

      <div className="md:mt-[172px] mt-[100px]">
        <h1
          id="about-us"
          className="text-center font-bricolage font-bold md:text-[48px] text-[32px]"
        >
          About Us
        </h1>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 md:px-[95px] px-[40px] gap-[44px] md:mt-[111px] mt-[40px]">
        <div className="border border-[#E1E1E1] rounded-2xl p-4 space-y-4">
          <h3 className="text-primary text-2xl font-bold">Our Mission</h3>

          <p className="text-[#878787] md:text-[16px] text-sm leading-[28px]">
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

          <p className="text-[#878787] md:text-[16px] text-sm leading-[28px]">
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

          <p className="text-[#878787] md:text-[16px] text-sm leading-[28px]">
            Together, this diverse and skilled team collaborates to realize the
            vision of Crop Guardian, providing a comprehensive solution to
            financial risk management for farmers and contributing to the
            sustainable growth of the agricultural industry.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 h-[350px] md:px-[163px] px-[40px] md:mt-[154px] mt-[80px] gap-[32px]">
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

      <div className="md:mt-[180px] mt-[100px] mb-[40px] md:mb-0">
        <h1 className="font-bricolage text-primary font-bold text-center md:text-[48px] text-[32px]">
          Hear from our happy customer
        </h1>
      </div>

      <Testimonials />

      {/* footer */}

      <div className="md:mt-[230px] mt-[140px] relative">
        <div className="bg-[#D1FFFF] md:h-16 h-10 rotate-[3.512deg] flex items-center justify-center relative z-20">
          <div className="flex items-center justify-center md:gap-[149px] gap-4">
            <h3 className="md:text-[24px] text-sm font-bricolage font-medium text-primary">
              Crop guardian
            </h3>

            <div className="flex items-center justify-center md:gap-[15px] gap-[8px]">
              <p className="md:text-xs text-[10px] font-medium font-bricolage">
                Copyright © {new Date().getFullYear()} CropGuardian.
              </p>

              <p className="md:text-xs text-[10px] font-medium ">
                All rights reserved
              </p>
            </div>
          </div>
        </div>

        <span className="bg-[#A4E2E2] md:h-16 h-10 rotate-[-3deg] absolute inset-0 z-10"></span>
      </div>
    </>
  )
}
