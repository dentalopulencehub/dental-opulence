import React from "react";
import Image from "next/image";
import home_hero_ill from "../../../assets/DO Format/DO 1.png";
import PrimaryLink from "../atom/PrimaryLink";

import right_thick from '../../../assets/fonts/right_thick_home.svg';
import Link from "next/link";

const HomeHero = () => {
  return (
    <div className="show-scrollbar">
      <div className="bg-[#100E10] pt-[220px] pb-[100px] w-full h-full items-center flex xl:flex-row flex-col justify-between lg:px-[100px] sm:px-[40px] px-[20px]">
        <div className="flex flex-col max-w-[539px]">
          <h1 className="font-Pangram-Bold sm:text-[64px] text-[44px] xl:text-left text-center sm:leading-[76px] leading-[56px] text-white">
            Elevate Your Smile with Dental Opulence
          </h1>
          <p className="mt-6 sm:text-[18px] sm:leading-8 text-base leading-7 text-white xl:text-left text-center">
            Welcome to Dental Opulence, where we blend everyday dentistry with
            cosmetic artistry to create your perfect smile. Our modern clinic
            offers cutting-edge technology and amenities for your comfort.
            Achieve your perfect smile with us.
          </p>

          <div className="mt-6">
            <div className="flex gap-2 items-center">
              <Image src={right_thick} alt="right_thick" />
              <p className="text-[16px] text-[#fff] lg:text-left text-center">0% Finance Options</p>
            </div>

            <div className="flex gap-2 items-center mt-3">
              <Image src={right_thick} alt="right_thick" />
              <p className="text-[16px] text-[#fff] lg:text-left text-center">Evening and weekend appointments</p>
            </div>
          </div>

          <div className="flex gap-6 xs:mt-[56px] mt-[32px] xl:mx-0 mx-auto xs:flex-row flex-col">
            <Link
              href="https://book.do.co.uk/"
              target="_blank"
              title="Book now"
              className="py-4 px-[49px] rounded-[32px] bg-white text-[#100E10] font-Pangram-Medium text-base hover:text-white hover:bg-transparent border border-transparent hover:border-white duration-0"
            >
              Book now
            </Link>
               
            <PrimaryLink
              href="/about"
              title="About us"
              style="py-4 px-[49px] rounded-[32px] bg-transparent text-white border border-[#fff] font-Pangram-Medium text-base hover:text-[#100E10] hover:bg-white duration-0"
            />
          </div>
        </div>
        <Image
          src={home_hero_ill}
          alt="Home hero illustration"
          className="xxl:mt-0 mt-12 w-[50%] h-auto"
        />
      </div>
    </div>
  );
};

export default HomeHero;
