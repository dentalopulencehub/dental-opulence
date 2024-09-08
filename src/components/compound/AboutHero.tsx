"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import underline_vector from "../../../assets/images/underline-vector.svg";
import about_hero_image from "../../../assets/images/about-hero-image.svg";
import PrimaryLink from "../atom/PrimaryLink";
import CustomLink from "../atom/CustomLink";
import arrow_right_light from "../../../assets/images/arrow-right.svg";
import arrow_right_dark from "../../../assets/images/arrow-right-dark.svg";
import about_us_poster from "../../../assets/images/about_us_poster.png";

import videoPlayButton from "../../../assets/videoPlayButton/videoPlayButton.svg";
import speakerIcon from "../../../assets/speakerIcon/speakerIcon.svg";
import speakerMuteIcon from "../../../assets/speakerIcon/speakerMuteIcon.svg";

const AboutHero = () => {
  const [linkHover, setLinkHover] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="w-full">
      <div className="bg-[#100E10] pt-[220px] pb-[120px] h-full xl:gap-[120px] gap-[40px] w-full items-center flex flex-col justify-between lg:px-[100px] sm:px-[40px] px-[20px]">
        <div className="flex flex-col items-center">
          <p className="flex flex-col items-center">
            <span className="text-white font-Pangram-Regular">About us</span>
            <Image src={underline_vector} alt="" />
          </p>
          <h1 className="font-Pangram-Bold mt-6 sm:text-[60px] text-center sm:leading-[64px] text-[44px] leading-[52px] text-white lg:w-[70%]">
            Discover Your Brightest Smile with Dental Opulence
          </h1>
          <PrimaryLink
            href="/contact"
            title="Contact Us"
            style="py-4 px-8 rounded-[34px] bg-white text-[#100E10] font-Pangram-Medium text-xs mt-6 hover:text-white hover:bg-transparent border border-transparent hover:border-white duration-0"
          />
          {/* <CustomLink
            title="Book Your Appointment Online"
            href="#"
            image={linkHover ? arrow_right_dark : arrow_right_light}
            style="bg-transparent hover:bg-white hover:text-[#100E10] text-white rounded-[32px] xs:w-fit xs:h-[64px] xs:px-[50px] px-[20px] xs:py-5 py-2 flex items-center justify-center mt-10 border border-white"
            textStyle="font-Pangram-Regular xs:text-[18px]"
            setHovered={setLinkHover}
          /> */}
        </div>
        <div className="relative mx-auto my-4 w-full">
          <iframe
            src="https://player.vimeo.com/video/1006670545?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            width="100%"
            height="700"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="DOREELHORI_LQ"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
