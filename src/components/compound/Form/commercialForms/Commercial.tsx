import { useState } from "react";
import { commercialForm } from "../../../../../constants";

import { FormProps } from "../../../../../types";

const CommercialForm = ({ handleStepChange, handleOptionSelect, handleOptionDeselect }: FormProps) => {
  const getNextForm = (index: number) => {
    switch (index) {
      case 0:
        return "formEight";
      case 1:
        return "formNine";
      case 2:
        return "formTen";
      case 3:
        return "form11";

      default:
        return "";
    }
  };
  const [selectedIndex, setSelectedIndex] = useState<number[]>([]);
  return (
    <div className="flex flex-col gap-10 text-center" data-aos="fade-left">
      <div className="flex flex-col gap-2">
        <h1 className="bold text-4xl xl:text-7xl text-white">
          {commercialForm[0].title}{" "}
        </h1>
        <p className=" font-normal text-2xl text-[#A2A2A2]">
          Select all applicable services.
        </p>
      </div>
      <div className="flex gap-2 flex-wrap md:gap-4 justify-center items-center">
        {commercialForm.map((item, index) => (
          <div key={index} className="btn cursor-pointer relative">
            <div
              className={`${selectedIndex.includes(index) ? 'bg-white text-[#2D2D2D]' : 'bg-[#2D2D2D] text-white'} sm:w-[250px] justify-center hover:bg-[#6b6969] thin flex text-center items-center gap-2 text-base px-12 lg:py-6 py-3 rounded-full relative`}
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
        }} type='button' className="text-white font-medium text-base rounded-full px-12 py-4 border-white border">Next</button>
      </div>
    </div>
  );
};

export default CommercialForm;

