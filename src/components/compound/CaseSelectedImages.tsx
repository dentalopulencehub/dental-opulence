import React, { useContext } from "react";
import Image from "next/image";
import { GlobalContext } from "../../../context/GlobalContext";

const CaseSelectedImages = () => {
  const { selectedCase } = useContext(GlobalContext);

  return (
    <div className="bg-white">
      <div className="bg-[#100E10] pt-10 w-full h-full lg:px-[100px] sm:px-[40px] px-[20px] gap-[42px] relative">
        <div className="flex flex-wrap items-center lg:justify-center justify-start gap-10">
          {selectedCase?.images.map((image: any, index: number) => (
            <Image
              src={image}
              alt="images"
              key={index}
              loading="lazy"
              width={580}
              height={326}
              className="rounded-2xl"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseSelectedImages;
