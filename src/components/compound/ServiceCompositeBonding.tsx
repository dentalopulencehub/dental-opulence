import React from "react";
import Image from "next/image";
import about_mission_logo from "../../../assets/images/about-mission-logo.svg";
import service_composite_images from "../../../assets/images/service-composite-images.svg";
import checked_icon from "../../../assets/images/check-circle.svg";
import service_tooth_vector from "../../../assets/images/service-tooth-vector.svg";
import PrimaryLink from "../atom/PrimaryLink";
import { ServiceCompositeBondingType } from "../../../types";

const ServiceCompositeBonding = ({ 
  situationTitle,
  situationTitleData1,
  situationTitleData2,
  situationTitleData3,
  situationTitleData4,
  situationTitleData5,
  definationTitle,
  definationTitleDesc,
  verb, 
}: ServiceCompositeBondingType) => {
  return (
    <div className="w-full">
      <div className="w-full md:bg-[#100E10] lg:px-[100px] sm:px-[40px] px-[20px] pb-14 xl:py-[80px] flex flex-col justify-between gap-[30px] xl:gap-[70px]">
        <div className="flex flex-col xl:flex-row gap-6 w-full">
          <div className="flex flex-col gap-6 w-full xl:w-1/2">
            <div className="w-full bg-[#222222] rounded-2xl xs:p-8 p-7">
              <Image src={about_mission_logo} alt="" />
              <h3 className="text-white text-[28px] md:text-[34px] mt-[23px] leading-[36px] md:leading-[45px]">
                +1000 Happy smile{" "}
                <span className="text-[#8A8A8A] font-Pangram-Medium">around the world</span>
              </h3>
            </div>
            
            <div className="w-full bg-[#222222] rounded-2xl xs:p-8 p-5">
              <h3 className="text-[#8A8A8A] text-[26px] md:text-[34px] leading-[32px] md:leading-[39px]">
                Situation where{" "}
                <span className="text-white font-Pangram-Medium">{situationTitle} </span> 
                is suitable.
              </h3>

              <div className="flex flex-col mt-[24px] uppercase">
                {[situationTitleData1, situationTitleData2, situationTitleData3, situationTitleData4, situationTitleData5].map((data, index) => (
                  <div key={index} className={`flex items-center gap-4 ${index !== 4 ? 'border-b border-b-[#737373]' : ''} py-4`}>
                    <Image src={checked_icon} alt="Checked Icon" />
                    <p className="text-white text-sm md:text-base">{data}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-6 w-full xl:w-1/2">
            <div className="w-full bg-[#222222] rounded-2xl xs:pt-8 xs:px-10 pt-7 px-7">
              <h4 className="text-[#8A8A8A] text-[26px] md:text-[34px] leading-[32px] md:leading-[39px] sm:max-w-[571px] mx-auto text-center">
                What {verb} <span className="text-white">{definationTitle}?</span>{" "}
                <br/>A Simple Explanation.
              </h4>
              <p className="text-white text-center sm:max-w-[571px] mx-auto mt-[18px] text-[16px] md:text-[18px] font-Pangram-Regular">
                {definationTitleDesc}
              </p>
              <Image
                src={service_composite_images}
                alt=""
                className="mt-[15px] w-full h-auto"
              />
            </div>

            <div className="w-full bg-[#222222] rounded-2xl xs:p-8 p-7 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-[#8A8A8A] text-[26px] md:text-[34px] max-w-[80%] xl:max-w-[70%] leading-[32px] md:leading-[39px]">
                  <span className="text-white">Transform</span> Your Smile Today
                  with Dental Opulence!
                </h3>
                <PrimaryLink
                  href="/contact"
                  title="Contact Us"
                  style="py-4 px-8 rounded-[34px] text-[#100E10] bg-white font-Pangram-Medium text-xs mt-6 hover:text-[#fff] inline-block hover:bg-transparent border border-transparent hover:border-[#fff] cursor-pointer duration-0"
                />
              </div>
              <Image 
                src={service_tooth_vector} 
                alt="" 
                className="absolute top-0 right-0 w-1/3 md:w-1/4 xl:w-auto h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCompositeBonding;