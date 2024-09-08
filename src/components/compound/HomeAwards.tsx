import React from "react";
import Image from "next/image";
import { home_awards_images, homer_awards_images2 } from "../../../constants";
import Marquee from "react-fast-marquee";

const HomeAwards = () => {
  const repeatedAwards = Array.from({ length: 100 }, (_, index) => (
    homer_awards_images2.map((award, i) => (
      <Image
        key={`${index}-${i}`} // Use a combination of index and i to ensure unique keys
        src={award}
        alt={`Award ${index * homer_awards_images2.length + i}`} // Optional: alt text for each image
        className="ml-[10px] w-[120px]"
      />
    ))
  )).flat(); 
  return (
    <div className="w-full">
      <div className="bg-[#100E10] w-full py-[120px]">
        {/* <Marquee className="" speed={100}>
          {home_awards_images.map((award, index) => (
            <Image
              key={index}
              src={award}
              alt=""
              className="ml-[180px] w-[120px]"
            />
          ))}
        </Marquee> */}

        <div className="flex relative">
          <Marquee  className="" speed={60} direction="left">
            {repeatedAwards}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default HomeAwards;
