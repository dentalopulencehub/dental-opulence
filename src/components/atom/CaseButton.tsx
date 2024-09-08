import React, { useContext } from "react";
import { CaseStudyTypeProp } from "../../../types";
import { GlobalContext } from "../../../context/GlobalContext";
import { handleSetSelectedCaseStudy } from "../../../context/action";

const CaseButton = ({ images, name, type }: CaseStudyTypeProp) => {
  const { dispatch, selectedCase } = useContext(GlobalContext);

  let selected: boolean = selectedCase?.type === type;

  return (
    <button
      onClick={() =>
        handleSetSelectedCaseStudy(dispatch, { images, name, type })
      }
      className={`px-4 py-3 ${
        selected ? "bg-[#ffffff]" : "bg-[#383638]"
      } flex items-center justify-center rounded-[40px] cursor-pointer w-full`}
    >
      <span className={`${selected ? "text-[#100E10]" : "text-[#AFAFAF]"}`}>
        {name}
      </span>
    </button>
  );
};

export default CaseButton;
