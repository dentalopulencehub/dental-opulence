import React from "react";
import Image from "next/image";
import faq_close_icon from "../../../assets/images/faq-close-icon.svg";
import faq_open_icon from "../../../assets/images/faq-open-icon.svg";
import faq_bullet_icon from "../../../assets/images/faq_bullets_icon.svg";
import { FaqType } from "../../../types";

const FaqAccordion = ({ answer, question }: FaqType) => {
  return (
    <div className="py-[37px] px-5 accordion-group rounded-lg cursor-pointer bg-[#282828]">
      <h3 className="accordion-menu flex flex-row items-center justify-between">
        <span className="text-white sm:text-[18px] text-sm font-Inter flex items-center gap-2">
          {" "}
          <Image src={faq_bullet_icon} alt="" />
          <span className="sm:text-2xl text-[18px]">{question}</span>
        </span>
        <Image src={faq_close_icon} alt="Plus" className="faq-plus" />
      </h3>
      {/*  <div className="faq_divider bg-[#CFCFCF] h-[1px] w-full mt-8" /> */}
      <p className="accordion-content h-0 overflow-hidden text-[#C2C0C0] font-light text-sm font-Inter">
        {answer}
      </p>
    </div>
  );
};

export default FaqAccordion;
