import React from "react";
import Image from "next/image";
import case_hero_ill from "../../../assets/images/cases-hero-illustration.svg";
import stroke_hero_text_testi from "../../../assets/fonts/stroke_hero_text_testi.svg";

const VideoTestHero = () => {
  return (
    <div className="bg-white ">
      <div className="bg-[#100E10] rounded-t-[24px] pt-[220px] pb-[100px] w-full h-full xl:items-center flex xl:flex-row flex-col justify-between lg:px-[100px] sm:px-[40px] px-[20px] gap-[42px]">
        <div className="flex flex-col xl:items-end" >
          <h1 className="xs:text-[104px] text-[64px] font-Pangram-Bold flex-wrap flex">
            <span className="text-[#605E60] font-black mr-[26px]">OUR</span>
            <span className="text-white font-black">SUCCESS</span>
          </h1>
          <Image src={stroke_hero_text_testi} alt="" />
        </div>
        <Image src={case_hero_ill} alt="Case Hero Illustration" />
      </div>
    </div>
  );
};

export default VideoTestHero;
