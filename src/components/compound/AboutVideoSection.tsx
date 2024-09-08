import React from "react";
import Image from "next/image";
import about_video from "../../../assets/images/about-video.svg";

const AboutVideoSection = () => {
  return (
    <div className="bg-white sm:px-5 px-2 w-full">
      <Image src={about_video} alt="" className="w-full " />
    </div>
  );
};

export default AboutVideoSection;
