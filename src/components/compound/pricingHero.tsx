import React, { useState } from "react";
import Image from "next/image";
import underline_vector from "../../../assets/images/underline-vector.svg";
import about_hero_image from "../../../assets/images/about-hero-image.svg";
import PrimaryLink from "../atom/PrimaryLink";
import CustomLink from "../atom/CustomLink";
import arrow_right_light from "../../../assets/images/arrow-right.svg";
import arrow_right_dark from "../../../assets/images/arrow-right-dark.svg";

const PricingHero = () => {
  const [linkHover, setLinkHover] = useState(false);
  return (
    <div className="w-full">
      <div className="bg-[#100E10] pt-[220px] pb-[120px] h-full xl:gap-[120px] gap-[40px] w-full items-center flex flex-col justify-between lg:px-[100px] sm:px-[40px] px-[20px]">
        <div className="flex flex-col items-center">
          <p className="flex flex-col items-center">
            <span className="text-white font-Pangram-Regular">Pricing</span>
            <Image src={underline_vector} alt="" />
          </p>
          <h1 className="font-Pangram-Bold mt-6 sm:text-[60px] text-center sm:leading-[64px] text-[44px] leading-[52px] text-white lg:w-[70%]">
            Affordable Excellence in Dental Care
          </h1>
          <PrimaryLink
            href="/contact"
            title="Contact Us"
            style="py-4 px-8 rounded-[34px] bg-white text-[#100E10] font-Pangram-Medium text-xs mt-6 hover:text-white hover:bg-transparent border border-transparent hover:border-white duration-0"
          />
          {/* <CustomLink
            title="Book Your Appointment Online"
            href="#"
            image={linkHover ? arrow_right_dark : arrow_right_light}
            style="bg-transparent hover:bg-white hover:text-[#100E10] text-white rounded-[32px] xs:w-fit xs:h-[64px] xs:px-[50px] px-[20px] xs:py-5 py-2 flex items-center justify-center mt-10 border border-white"
            textStyle="font-Pangram-Regular xs:text-[18px]"
            setHovered={setLinkHover}
          /> */}
        </div>
      
      </div>
    </div>
  );
};

export default PricingHero;
