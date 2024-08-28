import Image from "next/image";

export const TagCard = ({ text, imageSrc }) => {
  return (
    <div className="tag-card bg-[#0A0708] h-96 md:h-64 w-64 md:w-[496px] border rounded-lg shadow-custom mt-12 px-4 py-8 transition-transform transform hover:scale-105">
      <div className="flex flex-col max-md:gap-y-4 md:flex-row justify-center items-center">
        <p className="text-lg md:text-xl w-32 md:w-full text-white text-center">{text}</p>
        <Image src={imageSrc} height={150} width={150} alt={text} className="max-md:mb-4" />
      </div>
    </div>
  );
};
