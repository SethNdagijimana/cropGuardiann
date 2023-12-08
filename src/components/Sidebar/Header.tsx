"use client"

const Header = () => {
  return (
    <div className="flex items-center justify-between container">
      <h3 className="text-2xl font-bricolage font-bold text-center px-7">
        Crop Guardian
      </h3>

      <div className=" flex items-end justify-end left-0 gap-4">
        <p className="text-[#004064] text-[15px]">Ndagijimana Seth</p>
        <div className="w-8 h-8 p-4 flex items-center justify-center rounded-[66px] bg-black">
          <p className="text-lg text-white">K</p>
        </div>
      </div>
    </div>
  )
}

export default Header
