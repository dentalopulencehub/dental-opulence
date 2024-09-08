import React from "react";
import Image from "next/image";
import underline_vector_dark from "../../../../../assets/images/underline-vector-dark.svg";
import slider_arrow_left from "../../../../../assets/images/service-slider-left.svg";
import slider_arrow_right from "../../../../../assets/images/service-slider-right.svg";
import result_logo_mini from "../../../../../assets/images/result-mini-logo.svg";
import result_logo_micro from "../../../../../assets/images/result-logo-micro.svg";

import Carousel from "@/components/helper/carousel";
import { composite_veneers_images, home_result_images, invisalign_our_cases_images, white_fillings_our_cases_images } from "../../../../../constants";

type dir = "Left" | "right";

const CompositeVeneersOurCases = () => {
  const [direction, setDirection] = React.useState<dir | null>(null);

  const handleOuterLeftClick = () => {
    setDirection("Left");
  };

  const handleOuterRightClick = () => {
    setDirection("right");
  };

  return (
    <div className="w-full">
      <div className="w-full lg:px-[100px] sm:px-[40px] px-[20px] pt-[80px] bg-white flex  flex-col lg:flex-row justify-between items-center">
        <div className="">
          <p className="flex flex-col">
            <span className={`text-[#4e4e4e] text-base font-Pangram-Regular`}>
              Our Cases
            </span>
            <Image src={underline_vector_dark} alt="" />
          </p>
          <h2
            className={`mt-4 text-[#100E10] text-[32px] leading-[38px] font-Pangram-Bold xs:w-[412px] w-full`}
          >
            Transforming Smiles with Exceptional Care{" "}
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <Image
            src={slider_arrow_left}
            alt=""
            onClick={handleOuterLeftClick}
            className="cursor-pointer"
          />
          <Image
            src={slider_arrow_right}
            alt=""
            onClick={handleOuterRightClick}
            className="cursor-pointer"
          />
        </div>
      </div>

      <div className="mt-6">
        <Carousel direction={direction} setDirection={setDirection}>
          {composite_veneers_images.map((data, index, arr) => (
            <div
              className={`lg:w-[280px] w-fit rounded-3xl overflow-hidden mx-auto card flex-shrink-0 ${
                index !== arr.length - 1 ? "lg:mr-[40px]" : "lg:mr-[130px]"
              }`}
              key={index}
            >
              <div className="bg-[#100E10]  px-[20px] py-[15px] flex items-center rounded-t-2xl">
                <Image src={result_logo_micro} alt="Result logo micro" />
                <p className="text-xs font-Pangram-Regular text-white ml-3">
                  dentalopulence
                </p>
              </div>
              <div className="relative overflow-hidden">
                <Image src={data} alt="Result Image" className="w-full" />
                <Image
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src={result_logo_mini}
                  alt=""
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CompositeVeneersOurCases;
