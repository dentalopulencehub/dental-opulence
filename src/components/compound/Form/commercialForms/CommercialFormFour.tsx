import { commercialFormOne } from "../../../../../constants";
import { useState, ChangeEvent, FormEvent } from "react";
import { FormProps } from "../../../../../types";
import Image from "next/image";

const CommercialFormFour = ({
  handleStepChange,
  handleOptionSelect,
}: FormProps) => {

  const [textareaValue, setTextareaValue] = useState<string>("");

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (textareaValue.trim() === "") {
      alert("Please fill in the textarea.");
      return;
    }
    const title = commercialFormOne[3].title;
    handleStepChange("form13");
    handleOptionSelect(textareaValue, title);
  };
  


  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-10 text-center" data-aos="fade-left">
        <h1 className="bold text-4xl xl:text-7xl">
          {commercialFormOne[3].title}
        </h1>
        {/* OPTIONS */}
        <div className="flex sm:flex-wrap flex-col  gap-4  sm:gap-10 justify-center items-center">
          <textarea placeholder="fill in a number...." className="contact-bg w-1/2 text-center md:min-h-[200px] rounded-md px-6 py-3 text-base focus:outline-none"
           value={textareaValue} onChange={handleTextareaChange} required> </textarea>

          <button type="submit" className="border p-3 rounded-full" data-state="1" >
            <div className=" transform -rotate-100">
              <i className="icon"></i>
              <span>
                <Image src="/icons/arrow-hex-1.svg"  alt="Arrow icon with hexagon tip"  className="w-6 h-3  sm:w-[20px] sm:h-[20px]" width={30}  height={30}
                />
              </span>
            </div>
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommercialFormFour;
