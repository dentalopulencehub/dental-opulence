import React, { useState } from 'react';
import { stepTwo } from "../../../../constants";
import { FormProps } from "../../../../types";

const FormThree = ({ handleStepChange, handleOptionSelect, handleOptionDeselect }: FormProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleOption = (label: string, title: string) => {
    if (selectedOptions.includes(label)) {
      setSelectedOptions(selectedOptions.filter(option => option !== label));
      if (handleOptionDeselect) {
        handleOptionDeselect(label, title);
      }
    } else {
      setSelectedOptions([...selectedOptions, label]);
      handleOptionSelect(label, title);
    }
  };

  const handleNext = () => {
    if (selectedOptions.length === 0) {
      // Maybe show an error message or alert
      return;
    }

    if (selectedOptions.length === 1) {
      const index = stepTwo.findIndex(item => item.label === selectedOptions[0]);
      handleStepChange(index === 0 ? "formFour" : "formFive");
    } else {
      // Both options selected, go to a new form
      handleStepChange("formCombined");  // Assuming "formSix" is the new form for both options
    }
  };

  return (
    <div className="flex flex-col gap-10 text-center" data-aos="fade-left">
      <h1 className="bold text-lg md:text-4xl xl:text-7xl text-white">{stepTwo[0].title}</h1>
      <div className="flex gap-2 md:gap-10 justify-center items-center">
        {stepTwo.map((item, index) => (
          <div key={index} className="btn mb-2 md:mb-4 relative">
            <div
              className={`contact-bg btn bg-[#2D2D2D] hover:bg-[#6b6969] light text-center cursor-pointer flex items-center gap-2 text-sm md:text-base px-4 md:px-12 lg:py-6 py-2 text-white rounded-full relative ${
                selectedOptions.includes(item.label) ? 'bg-[#6b6969]' : ''
              }`}
              onClick={() => toggleOption(item.label, item.title || "")}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 w-full flex justify-center items-center">
      <button onClick={() => {
          handleNext();
        }} type='button' className="text-white font-medium text-base rounded-full px-12 py-4 border-white border">Next</button>
      </div>
    </div>
  );
};

export default FormThree;