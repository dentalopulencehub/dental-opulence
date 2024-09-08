import React from "react";
import Image from "next/image";
import { AboutAwardType } from "../../../types";

const AboutAwardCard = ({ detail, image, title }: AboutAwardType) => {
  return (
    <div className="bg-[#F4F4F4] rounded-xl py-6 px-[50px] h-fit w-[262px] flex flex-col items-center justify-between">
      <h3 className="text-[64px] text-[#100E10] font-Pangram-Bold">{title}</h3>
      <p className="text-[20px] text-[#878687] ">{detail}</p>
      <Image src={image} alt="" />
    </div>
  );
};

export default AboutAwardCard;
