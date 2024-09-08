import React from "react";
import Image from "next/image";
import service_scribble_underline_vector from "../../../assets/images/service-scribble-underline-vector.svg";
import service_01 from "../../../assets/images/service-01.svg";
import service_02 from "../../../assets/images/service-02.svg";
import service_03 from "../../../assets/images/service-03.svg";

import { ServiceElevateType } from "../../../types";

import { ServiceElevateCard } from "../molecule";
import OurProcess from "./OurProcess";


const ServiceElevate = ({ service_elevate }: { service_elevate: ServiceElevateType[] }) => {
  let isTopTitleRendered = false;
  
  return (
    <div className="w-full bg-[#100E10]">
    <div className="w-full lg:px-[100px] sm:px-[40px] px-[20px] py-[80px]">
      <div className="flex flex-col items-start">
        <p className="text-white text-base">Elevate Your Smile</p>
        <Image
          src={service_scribble_underline_vector}
          alt="scribble underline vector"
        />
      </div>
      <div className="text-white text-[34px] sm:max-w-[357px] mt-4">
        {service_elevate.map((service: ServiceElevateType, index: number) => {
          if (!isTopTitleRendered && service.topTitle) {
            isTopTitleRendered = true;
            return (
              <div key={index}>
                Discover the Benefits of {service.topTitle}
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="grid md:grid-cols-3 auto-cols-fr gap-6 mt-16 justify-center w-full">
        {service_elevate.map((service: ServiceElevateType, index: number) => (
          <ServiceElevateCard key={index} {...service} />
        ))}
      </div>
    </div>
    <OurProcess />
  </div>
  );
};

export default ServiceElevate;
