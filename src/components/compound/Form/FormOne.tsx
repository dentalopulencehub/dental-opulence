

export interface HelpSelectItem {
  id: number;
  label: string;
}

interface FormOneProps {
  helpSelect: HelpSelectItem[];
  handleStepChange: (step: string) => void;
  handleOptionSelect: (option: string, title: string) => void;
}


const getNextForm = (index: number) => {
  switch (index) {
    case 0:
      return "formTwo";
    case 1:
      return "formThree";

    default:
      return "";
  }
};



const FormOne = ({ 
  helpSelect,
   handleStepChange,
   handleOptionSelect,
   }: FormOneProps) => {
  return (
    <div className="flex flex-col gap-10 text-center">
      <h1 className="bold text-lg md:text-4xl xl:text-7xl text-white" data-aos="fade-up-right">
        Are you?
      </h1>
      <div className="flex flex-wrap gap-2 md:gap-5 justify-center items-center">
        {helpSelect?.map((item:any, index) => (
            <div
            key={index}
              className="contact-bg  btn bg-[#2D2D2D] hover:bg-[#6b6969] light text-center  cursor-pointer flex items-center gap-2 text-sm md:text-base p-2 md:px-12 lg:py-6  text-white rounded-full relative"
              onClick={() => {
                let gottenForm = getNextForm(index)
                handleStepChange(gottenForm);
                handleOptionSelect(item.label, item?.title || "");  
              }}
            >
              {item.label}
            </div>
        ))}
      </div>
    </div>
  );
};

export default FormOne;
