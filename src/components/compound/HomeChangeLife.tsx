import React from "react";
import Image from "next/image";
import change_life_logo from "../../../assets/images/change-life-logo.svg";
import change_life_whatsapp_logo from "../../../assets/images/change-life-whatsapp-logo.svg";
import { change_life } from "../../../constants";
import { ChangeLifeCard } from "../molecule";

const HomeChangeLife = () => {
  return (
    <div className="w-full">
      <div className="w-full lg:px-[100px] sm:px-[40px] px-[20px] pt-[120px] bg-white">
        <div className="flex flex-row flex-wrap justify-center gap-7 items-center">
          <div className="w-full md:w-[23%] h-[284px] bg-[#100E10] p-8 rounded-lg flex flex-col justify-between">
            <h3 className="text-white font-Pangram-Bold text-[32px] leading-[44px]">
              Change Your Life With us
            </h3>
            <div className="flex justify-between items-center">
              <Image src={change_life_logo} alt="" />
              {/* <Image src={change_life_whatsapp_logo} alt="" /> */}
            </div>
          </div>

          
            {change_life.map((data, index) => (
              <ChangeLifeCard key={index} {...data} />
            ))}
         
        </div>
      </div>
    </div>
  );
};

export default HomeChangeLife;
