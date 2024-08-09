import React, { useContext } from "react";
import Image from "next/image";
import service_hero_image from "../../../assets/images/service-hero-image.svg";
import { GlobalContext } from "../../../../../context/GlobalContext";
import PrimaryLink from "@/components/atom/PrimaryLink";
import bridges_service_hero_image from "../../../../../assets/HeroSectionImages/bridge-service-hero-image.svg"
import right_thick from '../../../../../assets/images/right_thick.svg'
import Link from "next/link";

const BridgesHeroSection = () => {
  return (
    <div className="w-full">
      <div className="bg-[#FFFFFF] lg:gap-20  rounded-t-[24px] pt-[100px] pb-[100px] h-full w-full items-center flex xl:flex-row flex-col justify-between xl:px-[100px] sm:px-[40px] px-[20px]">
        <div className="flex flex-col xl:items-start items-center w-full xl:w-[50%] py-8">
          <div className="flex flex-row items-center gap-4">
            <h1 className="font-Pangram-Bold sm:text-[60px] w-full sm:leading-[64px] text-[44px] xl:text-left text-center text-[#161616]">
            Bridges
                        </h1>
          </div>
          <p className="text-[18px] text-[#161616] mt-6 lg:text-left text-center">
          At our dental practice, we understand that missing teeth can affect not only your oral health but also your self-confidence. That’s why we offer dental bridges as a solution for replacing missing teeth.
          </p>

          <div className="mt-6 flex flex-col items-center xl:items-start">
            <div className="flex gap-2 items-center">
              <Image src={right_thick} alt="right_thick" />
              <p className="text-[16px] text-[#161616] lg:text-left text-center">0% Finance Options</p>
            </div>

            <div className="flex gap-2 items-center mt-3">
              <Image src={right_thick} alt="right_thick" />
              <p className="text-[16px] text-[#161616] lg:text-left text-center">Evening and weekend appointments</p>
            </div>
          </div>

          <div className="flex sm:flex-row gap-4 xs:mt-[56px] mt-[32px] sm:mx-0 mx-auto">
      <Link
        href="https://book.do.co.uk/"
        target="_blank"
        title="Book now"
        className="py-4 px-8 rounded-[34px] font-Pangram-Medium text-xs inline-flex items-center justify-center min-w-[120px] text-white bg-[#100E10] hover:text-[#100E10] hover:bg-transparent border border-[#100E10] transition-colors duration-300 ease-in-out"
      >
        Book now
      </Link>
      <PrimaryLink
        href="/about"
        title="About us"
        style="py-4 px-8 rounded-[34px] font-Pangram-Medium text-xs inline-flex items-center justify-center min-w-[120px] border border-[#100E10] bg-transparent text-[#100E10] hover:text-white hover:bg-[#100E10] transition-colors duration-300 ease-in-out"
      />
    </div>
        </div>
        <div className="flex justify-center w-full xl:w-[50%] mt-8 xl:mt-0">
          <Image src={bridges_service_hero_image} alt="Composite Bonding Hero Image" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default BridgesHeroSection;
