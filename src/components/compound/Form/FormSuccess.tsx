import { useState } from "react";
import { FormProps } from "../../../../types";
import Link from "next/link";


const FormSuccess = ({ handleStepChange, handleOptionSelect, handleOptionDeselect }: FormProps) => {
 
  const [selectedIndex, setSelectedIndex] = useState<number[]>([]);
  return (
    <div className="flex flex-col gap-20 text-center" data-aos="fade-left">
      <div className="flex flex-col gap-2">
        <h1 className="bold text-lg md:text-4xl xl:text-7xl text-white">
        {'Your inquiry has been '}
        </h1>
        <h1 className="bold text-lg md:text-4xl xl:text-7xl text-white">
        {'received!'}
        </h1>
       
      </div>
      <div>
        <Link href={'/'} onClick={()=>{
          handleStepChange('formOne');
          handleOptionSelect('option','title')
          }}  type='button' className="text-black bg-white font-medium text-xs md:text-base rounded-full px-4 md:px-12 py-2 md;py-4 border-white border">Home page</Link>
      </div>
    </div>
  );
};

export default FormSuccess;

