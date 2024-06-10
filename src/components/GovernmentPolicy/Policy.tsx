import { ChartComponent } from "../Chart"
import Wheat from "../Icon/Wheat"

const Policy = () => {
  return (
    <div className="bg-[#F2F2F2] rounded-2xl md:p-6 p-2 w-full">
      <div className="md:w-[484px] w-[200px] md:space-y-6 space-y-3">
        <h3 className="md:text-[24px] text-base text-primary">
          Government programs of getting agriculture support
        </h3>

        <h4 className="font-normal h-[61px] md:leading-[24px] leading-[16px]">
          To ensure the most accurate and relevant response, we&apos;ve
          forwarded your inquiry to the cooperative with whom you are
          associated.
        </h4>
      </div>

      <div className="grid md:grid-cols-2 md:gap-4 gap-2 mt-6">
        <div className="bg-white p-5 space-y-4 rounded-2xl border border-[#0E4D0C] text-xs">
          <Wheat color="#0E4D0C" width={32} height={32} />
          <h4 className="text-xs font-bold font-bricolage">
            Financial Empowerment and Loans
          </h4>
          <h4 className="text-xs">Loans for Farmers</h4>
          <h4 className="text-xs">Investing in Technology</h4>
          <h4 className="text-xs">Crop Insurance:</h4>
          <h4 className="text-xs">Financial Literacy Programs</h4>
          <h4 className="text-xs">Venturing into Livestock or Agribusiness</h4>
          <h4 className="text-xs">Farmers&apos; Cooperatives</h4>
          <h4 className="text-xs">Women Empowerment</h4>
        </div>

        <div className="bg-white p-5 space-y-4 rounded-2xl border border-[#0E4D0C]">
          <Wheat color="#0E4D0C" width={32} height={32} />
          <h4 className="text-xs font-bold font-bricolage">
            Encourage Partnership with Private Sector
          </h4>
          <h4 className="text-xs">Policy Support</h4>
          <h4 className="text-xs">Financial Incentives</h4>
          <h4 className="text-xs">Technology Sharing</h4>
          <h4 className="text-xs">Public Infrastructure</h4>
          <h4 className="text-xs">Training Programs</h4>
        </div>

        <div className="bg-white p-5 space-y-4 rounded-2xl border border-[#0E4D0C]">
          <Wheat color="#0E4D0C" width={32} height={32} />
          <h4 className="text-xs font-bold font-bricolage">Security</h4>
          <h4 className="text-xs">Farm Infrastructure</h4>
          <h4 className="text-xs">Perimeter Security</h4>
          <h4 className="text-xs">Crop Insurance:</h4>
          <h4 className="text-xs">Livestock Protection</h4>
          <h4 className="text-xs">Water and Resource Security</h4>
          <h4 className="text-xs">Supply Chain Security</h4>
        </div>

        <div className="bg-white p-5 space-y-4 rounded-2xl border border-[#0E4D0C]">
          <Wheat color="#0E4D0C" width={32} height={32} />
          <h4 className="text-xs font-bold font-bricolage">
            Agricultural Policy
          </h4>
          <h4 className="text-xs">Subsidies and Financial Support</h4>
          <h4 className="text-xs">Trade Policies</h4>
          <h4 className="text-xs">Market Access</h4>
          <h4 className="text-xs">Research and Innovation</h4>
          <h4 className="text-xs">Environmental Conservation</h4>
          <h4 className="text-xs">Rural Development</h4>
          <h4 className="text-xs">Climate Change Adaptation</h4>
        </div>
      </div>

      <div className="mt-6">
        <ChartComponent
          bgColor="#54d2d133"
          borderColor="#6CD365"
          label="Total Government support $"
        />
      </div>
    </div>
  )
}

export default Policy
