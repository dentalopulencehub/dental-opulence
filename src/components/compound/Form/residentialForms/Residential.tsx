import { useState } from "react";
import { residentialForm } from "../../../../../constants";

import { FormProps } from "../../../../../types";

const FormFour = ({ handleStepChange, handleOptionSelect, handleOptionDeselect }: FormProps) => {
  const getNextForm = (index: number) => {
    switch (index) {
      case 0:
        return "formFive";
      case 1:
        return "formFive";
      case 2:
        return "checkPointFormOne";
      case 3:
        return "checkPointFormOne";
      default:
        return "";
    }
  };
  const [selectedIndex, setSelectedIndex] = useState<number[]>([]);

  return (
    <div className="flex flex-col gap-10 text-center" data-aos="fade-left">
      <div className="flex flex-col gap-2">
        <h1 className="bold text-lg md:text-4xl xl:text-7xl text-white">
          {residentialForm[0].title}{" "}
        </h1>
        <p className=" font-normal text-base md:text-2xl text-[#A2A2A2]">
          Select all applicable services.
        </p>
      </div>
      <div className="flex max-w-5xl flex-wrap gap-2 md:gap-4 justify-center items-center">
        {residentialForm.map((item, index) => (
          <div key={index} className="btn cursor-pointer relative">
            <div
              className={`${selectedIndex.includes(index) ? 'bg-white text-[#2D2D2D]' : 'bg-[#2D2D2D] text-white'}  justify-center hover:bg-[#6b6969] thin flex text-center items-center gap-2 text-base px-4 md:px-12 lg:py-6 py-2 rounded-full relative`}
              onClick={() => {
                if (selectedIndex.includes(index)) {
                  if (handleOptionDeselect) {
                    handleOptionDeselect(item.label, item.title || "")
                    const newList = selectedIndex.filter(item => item != index);
                    setSelectedIndex(newList)
                  }
                } else {
                  const newList = [...selectedIndex, index];;
                  setSelectedIndex(newList)
                  handleOptionSelect(item.label, item.title || "");

                }

              }}
            >


              {item.label}
            </div>
          </div>
        ))}
      </div>
      <div>
        <button onClick={() => {
          handleStepChange("formSix");
        }} type='button' className="text-white font-medium text-xs md:text-base rounded-full px-6 md:px-12 py-2 md:py-4 border-white border">Next</button>
      </div>
    </div>
  );
};

export default FormFour;

const YellowButton = () => {
  return (
    <div className="flex inset-y-0 items-center justify-center w-3 h-3 border-[0.5px] border-gray-600 rounded-full">
      <div className=" w-1 h-1 bg-yellow-600  rounded-full"></div>
    </div>
  );
};
