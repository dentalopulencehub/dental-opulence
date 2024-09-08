import React, { useContext } from "react";
import { TestiVideoStudyTypeProp } from "../../../types";
import { GlobalContext } from "../../../context/GlobalContext";
import { handleSetSelectedVideoTestiCaseStudy } from "../../../context/action";


const VideoTestiCaseButton = ({ videos, name, type }: TestiVideoStudyTypeProp) => {
  const { dispatch, selectedCase } = useContext(GlobalContext);

  let selected: boolean = selectedCase?.type === type;

  return (
    <button
      onClick={() =>
        handleSetSelectedVideoTestiCaseStudy(dispatch, { videos, name, type })
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

export default VideoTestiCaseButton;
