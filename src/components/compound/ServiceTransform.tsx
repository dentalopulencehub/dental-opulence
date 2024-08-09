import React from "react";
import Image from "next/image";
import PrimaryLink from "../atom/PrimaryLink";
import service_transform_image1 from "../../../assets/images/service_transform.png";

const ServiceTransform = () => {
  return (
    <div className="w-full">
      <div className="bg-white w-full lg:px-[100px] sm:px-[40px] px-[20px] lg:py-[40px]">
        <div className="bg-[#161616] rounded-2xl pt-[70px] relative overflow-hidden">
          <h2 className="text-[#5C5C5C] sm:text-[48px] sm:leading-[56px] p-2 text-[34px] leading-[40px] text-center sm:max-w-[643px] mx-auto">
            <span className="text-white">Transform</span> your smile today with
            Dental Opulence{" "}
          </h2>
          <div className="flex md:flex-row flex-col justify-center items-center gap-8 mt-[46px] mb-[77px]">
            <PrimaryLink
              href="https://book.do.co.uk/"
              title="Book now"
              style="py-4 px-[49px] xs:w-[276px] text-center rounded-[32px] bg-transparent text-white border border-[#fff] font-Pangram-Medium text-base hover:text-[#100E10] hover:bg-white duration-0"
            />
            <PrimaryLink
              href="/contact"
              title="Make An Enquiry"
              style="py-4 px-[49px] xs:w-[276px] text-center rounded-[32px] bg-white text-[#100E10] font-Pangram-Medium text-base hover:text-white hover:bg-transparent border border-transparent hover:border-white duration-0"
            />
          </div>
          <div className="w-full xl:h-[90px] relative">
            <Image 
              src={service_transform_image1} 
              alt="Transformed smile" 
              objectFit="cover"
              className="scale-[3] sm:scale-[3] md:scale-[3] lg:scale-[3] xl:scale-150 -bottom-4 sm:-bottom-6 md:-bottom-8 lg:-bottom-10 xl:bottom-24 left-0 right-0"
            />      

          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTransform;