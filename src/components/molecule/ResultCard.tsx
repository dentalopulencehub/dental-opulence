import React from "react";
import Image from "next/image";
import result_logo_mini from "../../../assets/images/result-mini-logo.svg";
import result_logo_micro from "../../../assets/images/result-logo-micro.svg";

const ResultCard = ({ image }: { image: any }) => {
  return (
    <div className="w-[289px] h-fit rounded-2xl">
      <div className="bg-[#100E10] px-[20px] py-[15px] flex items-center rounded-t-2xl">
        <Image src={result_logo_micro} alt="Result logo micro" />
        <p className="text-xs font-Pangram-Regular text-white ml-3">
          dentalopulence
        </p>
      </div>
      <div className="relative">
        <Image src={image} alt="Result Image" className="w-full" />
        <Image
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src={result_logo_mini}
          alt=""
        />
      </div>
    </div>
  );
};

export default ResultCard;
