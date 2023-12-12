import ChartComponent from "@/components/Chart/Chart"

const Test = () => {
  return (
    <div className="grid grid-cols-2  gap-[58px]">
      <div className="px-6 py-[27px] rounded-[16px] border border-[#F2F2F2] ">
        <div className="flex items-center gap-[10px]">
          <svg
            width={6}
            height={19}
            viewBox="0 0 6 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.5" width={6} height={18} rx={3} fill="#54D2D1" />
          </svg>

          <p>Total Earnings</p>
        </div>

        <ChartComponent bgColor="#54d2d133" borderColor="#54D2D1" />
      </div>

      <div>2</div>
    </div>
  )
}

export default Test
