import Image from "next/image"

const Images = () => {
  return (
    <div className="md:mt-[77px] mt-[68px] p-6 grid md:grid-cols-3 grid-cols-1 gap-[21px] md:h-[296px] h-[700px]">
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
          src={"/7.jpg"}
          fill
          style={{ objectFit: "cover" }}
          priority
          alt="bg-image"
          className="block transition-all duration-300 transform scale-100 hover:scale-110 ease-in-out"
        />
      </div>

      <div className="rounded-[16px] relative overflow-hidden">
        <Image
          src={"/ag.webp"}
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
