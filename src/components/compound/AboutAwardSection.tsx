import React from "react";
import Image from "next/image";
import { about_award_winning } from "../../../constants";
import logo from "../../../assets/images/nav-logo.svg";
import { AboutAwardCard } from "../molecule";

const AboutAwardSection = () => {
  return (
    <div className="bg-white sm:px-5 px-2 w-full">
      <div className="bg-[#100E10] -top-[1px] relative w-full lg:px-[100px] pb-[33px] sm:px-[40px] px-[20px] flex xl:flex-row xl:items-center flex-col justify-between gap-[70px] xl:gap-0">
        <div className="xl:mt-0 mt-[50px]" >
          <h3 className="text-white text-[32px] font-Pangram-Bold xs:w-[245px]">
            Award Winning Excellence
          </h3>
          <Image src={logo} alt="Logo" className="mt-6" />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {about_award_winning.map((data, index) => (
            <AboutAwardCard key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutAwardSection;
