import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { people_slider } from "../../../constants";



const HomePeopleSlider = () => {
 

  return (
    <div className="w-full relative">
      <div className="bg-[#100E10] w-full py-[80px] border-b border-b-[#3D3D3D]">
        <Marquee speed={100} gradient={false} pauseOnHover={true} pauseOnClick={true}>
          <div className="flex gap-8">
            {people_slider.map((image, index) => (
              <div key={index} className="flex-shrink-0">
                <Image src={image} alt={`Image ${index + 1}`} />
              </div>
            ))}
            <div className="w-[2px]"></div> {/* Gap at the end of the Marquee */}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default HomePeopleSlider;

