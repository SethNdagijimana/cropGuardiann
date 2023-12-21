import Image from "next/image"
import Link from "next/link"

const InsurancePolicy = () => {
  return (
    <>
      <div className="w-[967px] mx-auto mt-[77px]">
        <h1 className="text-primary font-semibold font-bricolage text-center">
          Get your Insurance
        </h1>

        <h3 className="text-center leading-[36px] mt-6">
          Agricultural insurance plays a crucial role in mitigating financial
          risks for farmers by providing protection against various perils that
          can adversely impact crop production and income. Here are key aspects
          and considerations related to agricultural insurance and Types of
          Agricultural Insurance:
        </h3>
      </div>

      <div className="mt-20 px-[140px] flex items-center justify-between gap-6  w-full">
        <div className="space-y-6">
          <h2 className="text-center mb-8 font-bold font-bricolage">
            Types of insurance
          </h2>

          <div className="p-5 rounded-2xl border border-[#F2F2F2] bg-white space-y-6">
            <p className="font-bold font-bricolage">Crop Insurance</p>
            <p className="text-xs">
              Protects against losses in crop yields due to natural disasters,
              adverse weather conditions, pests, and diseases
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#F2F2F2] bg-white space-y-6">
            <p className="font-bold font-bricolage">Livestock Insurance</p>
            <p className="text-xs">
              Covers losses in the value of livestock due to events like disease
              outbreaks, accidents, or natural disasters
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#F2F2F2] bg-white space-y-6">
            <p className="font-bold font-bricolage">Revenue Insurance</p>
            <p className="text-xs">
              Safeguards against fluctuations in commodity prices, ensuring
              farmers receive a guaranteed level of revenue for their crops
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#F2F2F2] bg-white space-y-6">
            <p className="font-bold font-bricolage">
              Multi-Peril Crop Insurance
            </p>
            <p className="text-xs">
              Comprehensive coverage against multiple risks, including
              weather-related events, pests, and price fluctuations
            </p>
          </div>
        </div>

        <div className="rounded-[16px] relative overflow-hidden h-[400px] w-[70%]">
          <Image
            src={"/crop2.jpeg"}
            fill
            style={{ objectFit: "contain" }}
            priority
            alt="bg-image"
            className="h-full"
          />
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-center mb-8 font-bold font-bricolage">
          Key Aspects of Agricultural Insurance
        </h2>

        <div className="grid grid-cols-2 gap-[43px] px-[140px]">
          <div className="p-5 rounded-2xl border border-[#F2F2F2] bg-white space-y-6">
            <p className="font-bold font-bricolage">Premiums</p>
            <p className="text-xs">
              Farmers pay premiums to the insurance provider based on factors
              such as the type of coverage, historical risk data, and the
              insured amount
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#F2F2F2] bg-white space-y-6">
            <p className="font-bold font-bricolage">Coverage Limits</p>
            <p className="text-xs">
              Policies specify the maximum amount that will be paid out in the
              event of a covered loss
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#F2F2F2] bg-white space-y-6">
            <p className="font-bold font-bricolage">Deductibles</p>
            <p className="text-xs">
              The deductible is the portion of the loss that the farmer must
              bear before the insurance coverage kicks in
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#F2F2F2] bg-white space-y-6">
            <p className="font-bold font-bricolage">Indemnity Payments</p>
            <p className="text-xs">
              In the event of a covered loss, the insurance company makes
              indemnity payments to compensate the farmer for the incurred
              losses
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-center mb-8 font-bold font-bricolage">
          Benefits of Agricultural Insurance
        </h2>

        <div className="grid grid-cols-4 gap-[43px] px-[140px]">
          <div className="p-5 rounded-2xl border border-[#F2F2F2] bg-white space-y-6">
            <p className="font-bold font-bricolage">Financial Stability</p>
            <p className="text-xs">
              Provides financial stability by mitigating the impact of
              unforeseen events on crop yields or livestock losses
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#F2F2F2] bg-white space-y-6">
            <p className="font-bold font-bricolage">Risk Management</p>
            <p className="text-xs">
              Enables farmers to manage and transfer risks associated with
              unpredictable factors such as weather, pests, and market
              fluctuations.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#F2F2F2] bg-white space-y-6">
            <p className="font-bold font-bricolage">Credit Access</p>
            <p className="text-xs">
              Farmers with insurance coverage may find it easier to access
              credit as it demonstrates a commitment to managing risks, making
              them more attractive to lenders
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#F2F2F2] bg-white space-y-6">
            <p className="font-bold font-bricolage">Stimulates Investment</p>
            <p className="text-xs">
              Encourages farmers to invest in modern agricultural practices and
              technologies, knowing that they have a safety net in case of
              adverse events
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 px-[140px] flex items-center justify-between gap-6  w-full">
        <div className="space-y-6">
          <h2 className="text-center mb-8 font-bold font-bricolage">
            Challenges and Considerations
          </h2>

          <div className="p-5 rounded-2xl border border-[#F2F2F2] bg-white space-y-6">
            <p className="font-bold font-bricolage">Premium Affordability</p>
            <p className="text-xs">
              Farmers in some regions may find insurance premiums challenging to
              afford, leading to lower participation rates
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#F2F2F2] bg-white space-y-6">
            <p className="font-bold font-bricolage">Risk Assessment Accuracy</p>
            <p className="text-xs">
              The accuracy of risk assessment and premium calculations is
              crucial for the sustainability of agricultural insurance programs.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#F2F2F2] bg-white space-y-6">
            <p className="font-bold font-bricolage">Data Availability</p>
            <p className="text-xs">
              Availability and accuracy of historical data on weather patterns,
              crop yields, and other relevant factors are essential for
              effective risk modeling
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#F2F2F2] bg-white space-y-6">
            <p className="font-bold font-bricolage">Policy Design</p>
            <p className="text-xs">
              Developing policies that are both comprehensive and accessible to
              a wide range of farmers is a continuous challenge
            </p>
          </div>
        </div>
        <div className="rounded-[16px] relative overflow-hidden h-[400px] w-[70%]">
          <Image
            src={"/crop.jpeg"}
            fill
            style={{ objectFit: "contain" }}
            priority
            alt="bg-image"
            className="h-full"
          />
        </div>
      </div>

      <div className="mt-20">
        <div className=" mb-8 text-center font-bold font-bricolage">
          <h2>How do I apply?</h2>
          <p> Below is our easy step by step application process:</p>
        </div>

        <div className="grid grid-cols-2 gap-6 px-[147px]">
          <div className="p-5 rounded-2xl border border-[#F2F2F2] bg-green-950 space-y-6 text-white">
            <p className="font-bold font-bricolage">Step 1</p>
            <p className="text-xs">Request for quotation</p>
          </div>

          <div className="p-5 rounded-2xl border border-[#F2F2F2] bg-green-950 space-y-6 text-white">
            <p className="font-bold font-bricolage">Step 2</p>
            <p className="text-xs">Fill proposal form</p>
          </div>

          <div className="p-5 rounded-2xl border border-[#F2F2F2] bg-green-950 space-y-6 text-white">
            <p className="font-bold font-bricolage">Step 3</p>
            <p className="text-xs">Premium payment</p>
          </div>

          <div className="p-5 rounded-2xl border border-[#F2F2F2] bg-green-950 space-y-6 text-white">
            <p className="font-bold font-bricolage">Step 4</p>
            <p className="text-xs">
              Provide ID for individuals, RCA certificate for cooperative & RDB
              certificate for corporate
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#F2F2F2] bg-green-950 space-y-6 text-white">
            <p className="font-bold font-bricolage">Step 5</p>
            <p className="text-xs">Sign contract</p>
          </div>

          <div className="p-5 rounded-2xl border border-[#F2F2F2] bg-green-950 space-y-6 text-white">
            <p className="font-bold font-bricolage">Step 6</p>

            <p className="text-xs">
              For More Information check our Government Program{" "}
              <Link href={"#gov"}>Click Here</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default InsurancePolicy
