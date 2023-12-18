"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { useState } from "react"

const PlansAndMitigation = () => {
  const [isActive, setIsActive] = useState(null)

  const router = useRouter()

  const handleButtonClick = (itemName: any) => {
    setIsActive(isActive === itemName ? null : itemName)
  }

  return (
    <>
      <div className="w-[572px] mx-auto space-y-8">
        <h2 className="text-center font-bricolage font-bold">
          Risk Mitigation Strategies
        </h2>
        <p className="text-center text-[#666] font-medium">
          When you find a vulnerability in your company, what do you do? Risk
          mitigation is the action you take to reduce threats and ensure
          resiliency. When you mitigate risk, you are taking steps to reduce
          adverse effects.
        </p>
      </div>

      {/* //TODO remove to another component */}

      <div className="grid grid-cols-2 mt-[42px] gap-4">
        <div className="p-6 border border-[#F2F2F2] rounded-[16px] bg-white">
          <p className="text-[#8452BF] font-bold">
            The Four Risk Mitigation Strategies
          </p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-1"
              onClick={() => handleButtonClick("item-1")}
            >
              <AccordionTrigger
                className={cn(
                  "text-sm font-bold",
                  isActive === "item-1"
                    ? "text-[#54D2D1] transition ease-in-out duration-300"
                    : "text-primary"
                )}
              >
                Risk Acceptance
              </AccordionTrigger>

              <AccordionContent className="text-primary text-sm">
                Risk acceptance does not reduce any effects however it is still
                considered a strategy. This strategy is a common option when the
                cost of other risk management options such as avoidance or
                limitation may outweigh the cost of the risk itself. A company
                that doesn’t want to spend a lot of money on avoiding risks that
                do not have a high possibility of occurring will use the risk
                acceptance strategy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              onClick={() => handleButtonClick("item-2")}
            >
              <AccordionTrigger
                className={cn(
                  "text-sm font-bold",
                  isActive === "item-2"
                    ? "text-[#54D2D1] transition ease-in-out duration-300"
                    : "text-primary"
                )}
              >
                Risk Avoidance
              </AccordionTrigger>

              <AccordionContent className="text-primary text-sm">
                Risk avoidance is the opposite of risk acceptance. It is the
                action that avoids any exposure to the risk whatsoever. It’s
                important to note that risk avoidance is usually the most
                expensive of all risk mitigation options.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              onClick={() => handleButtonClick("item-3")}
            >
              <AccordionTrigger
                className={cn(
                  "text-sm font-bold",
                  isActive === "item-3"
                    ? "text-[#54D2D1] transition ease-in-out duration-300"
                    : "text-primary"
                )}
              >
                Risk Limitation
              </AccordionTrigger>

              <AccordionContent className="text-primary text-sm">
                Risk limitation is the most common risk management strategy used
                by businesses. This strategy limits a company’s exposure by
                taking some action. It is a strategy employing a bit of risk
                acceptance along with a bit of risk avoidance or an average of
                both. An example of risk limitation would be a company accepting
                that a disk drive may fail and avoiding a long period of failure
                by having backups.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              onClick={() => handleButtonClick("item-4")}
            >
              <AccordionTrigger
                className={cn(
                  "text-sm font-bold",
                  isActive === "item-4"
                    ? "text-[#54D2D1] transition ease-in-out duration-300"
                    : "text-primary"
                )}
              >
                Risk Transference
              </AccordionTrigger>

              <AccordionContent className="text-primary text-sm">
                Risk transference is the involvement of handing risk off to a
                willing third party. For example, numerous companies outsource
                certain operations such as customer service, payroll services,
                etc. This can be beneficial for a company if a transferred risk
                is not a core competency of that company. It can also be used so
                a company can focus more on its core competencies.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="p-6 border border-[#F2F2F2] rounded-[16px] bg-white">
          <p className="text-[#8452BF] font-bold">
            How to Apply the Plan for the Four Risk Mitigation Types
          </p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-sm font-bold text-primary">
                Risk Acceptance Plan
              </AccordionTrigger>

              <AccordionContent className="text-primary text-sm space-y-4">
                <h4 className="leading-[18px]">
                  <span className="text-[#54D2D1]">Objective</span>: Accept the
                  risk of market price fluctuations for agricultural
                  commodities.
                </h4>

                <h4 className="leading-[18px]">
                  <span className="text-[#54D2D1]">Market Analysis</span>: Stay
                  informed about market trends and factors influencing commodity
                  prices
                </h4>

                <h4 className="leading-[18px]">
                  <span className="text-[#54D2D1] font-bold">
                    Diversification:
                  </span>
                  : Diversify the range of crops grown to spread the risk across
                  different commodities
                </h4>

                <h4 className="leading-[18px]">
                  <span className="text-[#54D2D1]">Financial Resilience</span>:
                  Develop a strategic marketing plan to capitalize on favorable
                  market conditions when they arise
                </h4>

                <h4 className="leading-[18px] font-bold">
                  Consider forward contracting or other risk management tools if
                  deemed appropriate
                </h4>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-sm font-bold text-primary">
                Risk Avoidance Plan
              </AccordionTrigger>

              <AccordionContent className="text-primary text-sm space-y-4">
                <h4 className="leading-[18px]">
                  <span className="text-[#54D2D1] font-bold">Objective</span>:
                  Avoid the risk of crop failure due to a specific pest
                </h4>

                <h4 className="leading-[18px]">
                  <span className="text-[#54D2D1] font-bold">
                    Identification of Risk
                  </span>
                  : Identify the pest that poses a significant threat to the
                  crop
                </h4>

                <h4 className="leading-[18px]">
                  <span className="text-[#54D2D1] font-bold">
                    Crop Rotation and Diversification:
                  </span>
                  : Develop a crop rotation plan that minimizes the risk of pest
                  infestation by disrupting the pest&apos;s life cycle
                </h4>

                <h4 className="leading-[18px]">
                  <span className="text-[#54D2D1] font-bold">
                    Monitoring and Early Detection
                  </span>
                  : Implement regular monitoring of the fields for signs of the
                  pest
                </h4>

                <h4 className="leading-[18px] font-bold">
                  If the risk is detected, make the decision to avoid planting
                  the vulnerable crop during the specific season when the pest
                  is prevalent
                </h4>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-sm font-bold text-primary">
                Risk Limitation Plan
              </AccordionTrigger>

              <AccordionContent className="text-primary text-sm space-y-4">
                <h4 className="leading-[18px]">
                  <span className="text-[#54D2D1] font-bold">Objective</span>:
                  Avoid the risk of crop failure due to a specific pest
                </h4>

                <h4 className="leading-[18px]">
                  <span className="text-[#54D2D1] font-bold">
                    Identification of Risk
                  </span>
                  : Reduce the risk of crop yield variability through precision
                  farming
                </h4>

                {/* //TODO animate the button */}

                <h4 className="leading-[18px] space-x-4">
                  <span className="text-[#54D2D1] font-bold">
                    Risk Assessment
                  </span>
                  : Identify factors contributing to yield variability, such as
                  soil quality and water availability
                  <Button
                    className="w-[200px] h-[40px] rounded-[16px] bg-transparent float-right text-black font-bold"
                    variant={"ghost"}
                    text="Check Risk Assessment"
                    onClick={() => router.push("/assessment")}
                  />
                </h4>

                <h4 className="leading-[18px] space-x-4">
                  <span className="text-[#54D2D1] font-bold">
                    Precision Farming Techniques
                  </span>
                  : Conduct soil testing to determine nutrient levels and pH
                  <Button
                    className="w-[200px] h-[40px] rounded-[16px] bg-transparent float-right text-black font-bold"
                    variant={"ghost"}
                    text="Check Soil Analysis"
                    onClick={() => router.push("/dashboard")}
                  />
                </h4>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-sm font-bold text-primary">
                Risk Transference Plan
              </AccordionTrigger>

              <AccordionContent className="text-primary text-sm space-y-4">
                <h4 className="leading-[18px]">
                  <span className="text-[#54D2D1] font-bold">Objective</span>:
                  Transfer the financial risk of crop loss due to adverse
                  weather conditions
                </h4>

                <h4 className="leading-[18px]">
                  <span className="text-[#54D2D1] font-bold">
                    Insurance Evaluation
                  </span>
                  : Research and select a suitable crop insurance policy that
                  covers weather-related risks
                </h4>

                {/* //TODO animate the button */}

                <h4 className="leading-[18px] space-x-4">
                  <span className="text-[#54D2D1] font-bold">
                    Documentation and Compliance
                  </span>
                  : Provide accurate and timely information to the insurance
                  company about crop conditions and practices
                </h4>

                <h4 className="leading-[18px] space-x-4">
                  <span className="text-[#54D2D1] font-bold">
                    Financial Planning
                  </span>
                  : Assess the potential impact of premium costs against the
                  financial protection provided by the insurance
                </h4>
                <Button
                  className="w-full h-[40px] rounded-[16px] bg-[#54D2D1] float-right text-black font-bold"
                  variant={"ghost"}
                  text="Check Insurance Plan"
                  onClick={() => router.push("/dashboard")}
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  )
}

export default PlansAndMitigation
