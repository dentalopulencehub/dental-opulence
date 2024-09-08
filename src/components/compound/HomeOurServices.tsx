import React, { useRef, useState } from "react";
import { our_services, our_services2 } from "../../../constants";
import { OurServiceCard, OurServiceCardDark } from "../molecule";

type Theme = "light" | "dark";

const HomeOurServices: React.FC = () => {
  const tl: any = useRef(null);
  const [selectedTheme, setSelectedTheme] = useState<Theme>("dark");

  const handleSetSelectedTheme = (theme: Theme) => {
    setSelectedTheme(theme);
  };

  return (
    <div className={`w-full`}>
      <div className={`flex sm:flex-row sm:items-end items-start mt-6 sm:mt-10 gap-2 sm:gap-4 justify-center relative`}>
        <div
          onClick={() => handleSetSelectedTheme("dark")}
          className={`flex gap-3 flex-row items-center justify-center service-tooth-div
          bg-[#161616] border-t border-x border-[#161616]
          rounded-t-xl px-4 md:py-[9px] py-2 cursor-pointer
          ${selectedTheme === "dark" ? "border-b-0" : ""}`}
        >
          <p className={`md:text-[18px] text-[14px] text-white`}>
            Cosmetic Treatments
          </p>
        </div>
        <div
          onClick={() => handleSetSelectedTheme("light")}
          className={`flex gap-3 flex-row items-center justify-center service-tooth-div
          rounded-t-xl px-4 cursor-pointer
          ${
            selectedTheme === "dark"
              ? "border-t border-x border-[#000000] bg-[#fff] py-2 md:py-[9px] "
              : " border-t bg-white border-x border-[#000000] border-b-0 md:py-[9px] py-2 z-[50]"
          }`}
        >
          <p
            className={`md:text-[18px] text-[14px] ${
              selectedTheme === "dark" ? "text-[#000000]" : "text-gray-800"
            }`}
          >
            General Treatments
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#000000]"></div>
      </div>
      <div
        className={`w-full md:py-[120px] py-[80px] lg:px-[100px] sm:px-[40px] px-[20px] ${
          selectedTheme === "light" ? "bg-white" : "bg-[#161616]"
        }`}
      >
        {selectedTheme === "light" ? (
          <div className="md:flex md:flex-wrap grid grid-cols-2 md:gap-6 gap-4 justify-center items-center">
            {our_services.map((service, index) => (
              <OurServiceCard
                key={index}
                {...service}
                selectedTheme={selectedTheme}
              />
            ))}
          </div>
        ) : (
          <div className="md:flex md:flex-wrap grid grid-cols-2 md:gap-6 gap-4 justify-center items-center">
            {our_services2.map((service, index) => (
              <OurServiceCardDark
                key={index}
                {...service}
                selectedTheme={selectedTheme}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeOurServices;