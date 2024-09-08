import React from "react";
import Image from "next/image";
import { home_process } from "../../../constants";
import { ProcessCard } from "../molecule";

import arrow_right_light from "../../../assets/images/arrow-right.svg";
import { MagicContainer } from "../magicui/magic-card";

const OurProcess = () => {
  return (
    <div className="">
      <div className="w-full lg:px-[100px] sm:px-[40px] px-[20px] py-[80px] bg-[#100E10]">
        <div className="flex justify-center flex-wrap gap-6">

          <ProcessCard processes={home_process} title={""} description={""} image={undefined} href={""} price={""} />

        </div>
      </div>
    </div>
  );
};

export default OurProcess;