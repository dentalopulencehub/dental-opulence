import { stepOne } from "../../../../constants";

import { FormProps } from "../../../../types";

const FormTwo = ({ handleStepChange, handleOptionSelect }: FormProps) => {
  const getNextForm = (index: number) => {
    switch (index) {
      case 1:
        return "formThree";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col gap-10 text-center" data-aos="fade-left">
      <h1 className="bold text-lg md:text-4xl xl:text-7xl text-white">{stepOne[0].title}</h1>
      <div className="flex flex-wrap gap-2 md:gap-10 justify-center items-center">
        {stepOne.map((item, index) => (
          <div key={index} className="btn mb-2 md:mb-4 relative">
            <div
              className="contact-bg  btn bg-[#2D2D2D] hover:bg-[#6b6969] light text-center  cursor-pointer flex items-center gap-2 text-sm md:text-base md:px-12 lg:py-6 py-2 text-white rounded-full relative"
              onClick={() => {
                if(index==0){
                return  window.open('https://book.do.co.uk/', '_newtab');
                }
                const nextForm = getNextForm(index);
                handleStepChange(nextForm);
                handleOptionSelect(item.label, item.title || "");  
                
              }}
            >
           
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormTwo;


const YellowButton = () => {
  return (
    <div className="flex inset-y-0 items-center justify-center w-3 h-3 border-[0.5px] border-gray-600 rounded-full">
      <div className=" w-1 h-1 bg-yellow-600  rounded-full"></div>
    </div>
  );
};