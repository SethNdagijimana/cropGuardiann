import Image from "next/image"

const Images = () => {
  return (
    <div className="mt-[77px] p-6 grid grid-cols-3 gap-[21px] h-[296px]">
      <div className="rounded-[16px] relative overflow-hidden">
        <Image
          src={"/1.png"}
          fill
          style={{ objectFit: "cover" }}
          priority
          alt="bg-image"
          className="block transition-all duration-300 transform scale-100 hover:scale-110 ease-in-out"
        />
      </div>

      <div className="rounded-[16px] relative overflow-hidden">
        {" "}
        <Image
          src={"/2.png"}
          fill
          style={{ objectFit: "cover" }}
          priority
          alt="bg-image"
          className="block transition-all duration-300 transform scale-100 hover:scale-110 ease-in-out"
        />
      </div>

      <div className="rounded-[16px] relative overflow-hidden">
        <Image
          src={"/3.png"}
          fill
          style={{ objectFit: "cover" }}
          priority
          alt="bg-image"
          className="block transition-all duration-300 transform scale-100 hover:scale-110 ease-in-out"
        />
      </div>
    </div>
  )
}

export default Images
