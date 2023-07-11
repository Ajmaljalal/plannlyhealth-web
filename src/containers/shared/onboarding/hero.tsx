import Image from "next/image";

const Hero = ({ image, title, description }: { image: any; title: string; description: string; }) => {
  return (
    <div className="flex flex-col justify-center items-center pb-[50px]">
      <Image src={image} alt="company-details-illustration" width={200} height={184} />
      <h2 className="text-center mb-[8px] mt-[24px]">{title}</h2>
      <p className="text-center text-basic_grey_1 mt-[8px]">{description}</p>
    </div>
  );
}


export default Hero;