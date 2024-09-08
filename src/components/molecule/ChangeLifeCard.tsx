import React from "react";
import Image from "next/image";
import { HomePopularServicesType } from "../../../types";

const ChangeLifeCard = ({
  description,
  image,
  title,
}: HomePopularServicesType) => {
  return (
    <div className="w-full md:w-[23%] h-[284px] pb-8 pt-4 flex flex-col items-start border-b bg-[#FFFFFF] border-b-[#E5E5E5]">
      <Image src={image} alt="" />
      <h3 className="text-[34px] font-Pangram-Bold text-[#161616] font-normal mt-3 w-full leading-[42px]">{title}</h3>
      <p className="text-[18px] text-[#454545] font-Pangram-Regular mt-4">
        {description}
      </p>
    </div>
  );
};

export default ChangeLifeCard;
