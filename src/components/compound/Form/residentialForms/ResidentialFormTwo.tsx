import { residentialFormTwo } from "../../../../../constants";

import { FormProps } from "../../../../../types";
 

const FormSix = ({
  handleStepChange,
  handleOptionSelect,
}: FormProps) => {
  return (
    <div className="flex flex-col gap-10 text-center" data-aos="fade-left">
      <h1 className="bold text-2xl  sm:text-4xl xl:text-7xl">
        {residentialFormTwo[0].title}
      </h1>
      <div className="flex sm:flex-wrap flex-col sm:flex-row   sm:gap-10 justify-center items-center">
        {residentialFormTwo.map((item, index) => (
          <div key={index} className="btn mb-4 relative">
            <div
              className="contact-bg hover:bg-gray-800 thin flex  items-center gap-2 text-lg xl:text-3xl px-12 py-3 xl:py-6 text-white rounded-full relative"
              onClick={() => {
                handleStepChange("formSeven");
                handleOptionSelect(item.label, item.title || "");  

              }}
            >
              <span>
                <YellowButton />
              </span>

              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormSix;

const YellowButton = () => {
  return (
    <div className="flex inset-y-0 items-center justify-center w-3 h-3 border-[0.5px] border-gray-600 rounded-full">
      <div className=" w-1 h-1 bg-yellow-600  rounded-full"></div>
    </div>
  );
};
