import React from "react";
import Image from "next/image";
import { ServiceElevateType } from "../../../types";


const ServiceElevateCard = ({
  description,
  number_img,
  title,
}: ServiceElevateType) => {
  return (
    <div className="w-full rounded-2xl bg-[#222222] p-8 relative z-[5]">
      <Image
        src={number_img}
        className="absolute z-[3] right-8 top-8"
        alt={title}
      />
      <h3 className="text-2xl text-white font-Pangram-Regular mt-11 z-[5] relative">
        {title}
      </h3>
      <p className="text-sm text-[#D0D0D0] mt-4">{description}</p>
    </div>
  );
};

export default ServiceElevateCard;

{
  /*
  <MagicContainer>
    <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-2xl">
        <p className="z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200">
          Demo
        </p>
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </MagicCard>
    </MagicContainer>*/
}
