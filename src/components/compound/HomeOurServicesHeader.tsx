import React from "react";
import Image from "next/image";
import underline_vector_dark from "../../../assets/images/underline-vector-dark.svg";

const HomeOurServicesHeader = () => {
  return (
    <div className="w-full">
      <div className="w-full lg:px-[100px] sm:px-[40px] px-[20px] pt-[80px] bg-white">
        <p className="flex flex-col">
          <span className={`text-[#4e4e4e] text-base font-Pangram-Regular`}>
            Our Services
          </span>
          <Image src={underline_vector_dark} alt="" />
        </p>
        <h2
          className={`mt-4 text-[#100E10] text-[32px] leading-[38px] font-Pangram-Bold xs:w-[412px] w-full`}
        >
          Demand meets excellence at Dental Opulence.
        </h2>
      </div>
    </div>
  );
};

export default HomeOurServicesHeader;
