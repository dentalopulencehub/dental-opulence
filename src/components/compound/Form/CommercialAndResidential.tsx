import { useState } from "react";
import { residentialForm, commercialForm } from "../../../../constants";
import { FormProps } from "../../../../types";

const CombinedForm = ({ handleStepChange, handleOptionSelect, handleOptionDeselect }: FormProps) => {
  // Combine residential and commercial forms
  const combinedForm = [...residentialForm, ...commercialForm];

  // State to manage selected indices
  const [selectedIndex, setSelectedIndex] = useState<number[]>([]);

  const handleSelect = (index: number, item: any) => {
    if (selectedIndex.includes(index)) {
      // Deselect item
      if (handleOptionDeselect) {
        handleOptionDeselect(item.label, item.title || "");
      }
      setSelectedIndex(selectedIndex.filter(i => i !== index));
    } else {
      // Select item
      setSelectedIndex([...selectedIndex, index]);
      handleOptionSelect(item.label, item.title || "");
    }
  };

  const handleNextStep = () => {
    // Determine the next form based on selections
    if (selectedIndex.some(index => index < residentialForm.length)) {
      handleStepChange("formSix");
    } else {
      handleStepChange("formThree");
    }
  };

  return (
    <div>
      <p className="bold text-4xl xl:text-5xl text-white pb-8 text-center w-full" >Select all applicable services.</p>
      <div className="flex gap-2 flex-wrap md:gap-4 justify-center items-center overflow-y-scroll show-scrollbar h-60">
        {combinedForm.map((item, index) => (
          <div key={index} className="btn cursor-pointer relative">
          <div
            className={`${selectedIndex.includes(index) ? 'bg-white text-[#2D2D2D]' : 'bg-[#2D2D2D] text-white'} sm:w-[250px] justify-center hover:bg-[#6b6969] thin flex text-center items-center gap-2 text-base px-6 lg:py-3 py-3 rounded-full relative`}
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
      <div className="w-full flex items-center justify-center pt-6">
      <button onClick={handleNextStep} className="text-white font-medium text-base rounded-full px-12 py-4 border-white border">
        Next
      </button>
      </div>
    </div>
  );
};

export default CombinedForm;
