"use client";

import React, { useRef, useLayoutEffect } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import home_hero2_ill from "../../../assets/images/home-hero2-ill.svg";
import underline_vector from "../../../assets/images/underline-vector.svg";
import { useScroll, motion, useTransform } from "framer-motion";
import { useIsomorphicLayoutEffect } from "../../../hooks";
import PrimaryLink from "../atom/PrimaryLink";
//import { gsap, ScrollTrigger } from "../../../lib/gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const AboutWhoWeAre = () => {
  let value = `Our vision at Dental Opulence is to revolutionize the dental industry by providing unparalleled service and creating an environment of opulence and comfort for our patients. We strive to exceed expectations, delivering exceptional results and ensuring the utmost satisfaction of every individual who walks through our doors.`;

  let value2 = `Our mission is to elevate the dental experience by combining state-of-the-art technology with personalized care, tailored to the unique needs of each patient. We are dedicated to promoting oral health and enhancing smiles, empowering our patients to achieve optimal dental wellness and confidence. At Dental Opulence, we are committed to creating a luxurious and transformative journey towards a brighter, healthier smile.`;

  const element = useRef(null);
  const element2 = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.65", "start 0.15"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: element2,
    offset: ["start 0.5", "start 0.01"],
  });

  useIsomorphicLayoutEffect(() => {
    //scrollYProgress.on("change", (e) => console.log(e));
  }, []);

  const words = value.split(" ");
  const words2 = value2.split(" ");

  return (
    <div className="bg-white sm:px-5 px-2 w-full">
      <div className="bg-[#100E10] w-full lg:px-[100px] sm:px-[40px] px-[20px] py-[80px] flex xl:flex-row flex-col justify-between gap-[70px] xl:gap-0">
        <div className="elem-pin-about xl:max-w-[400px] md:w-[70%] h-fit w-[90%] xl:mx-0 mx-auto ">
          <p className=" text-white text-[32px] w-fit xl:mx-0 mx-auto flex items-center justify-center bg-[#2E2E2E] rounded-[40px] py-4 px-10 h-fit ">
            Who we are
          </p>
        </div>

        <div className="xl:max-w-[690px] w-[90%] mx-auto flex flex-col xl:items-start items-center">
          <p className="flex flex-col items-center">
            <span className="text-white font-Pangram-Regular">Our Vision</span>
            <Image src={underline_vector} alt="" />
          </p>
          <h4
            className="text-white font-Pangram-Regular mt-6 sm:text-[24px] text-[20px] sm:leading-[30px] leading-[28px] xl:text-left text-center flex flex-wrap"
            ref={element}
          >
            {words.map((word, index) => {
              const start = index / words.length;
              const end = start + 1 / words.length;
              //console.log(start, end);
              return (
                <Word
                  key={index}
                  range={[start, end]}
                  progress={scrollYProgress}
                >
                  {word}
                </Word>
              );
            })}
          </h4>

          <p className="flex flex-col items-center mt-10">
            <span className="text-white font-Pangram-Regular">Our Mission</span>
            <Image src={underline_vector} alt="" />
          </p>
          <h4
            className="text-white font-Pangram-Regular mt-[18px] sm:text-[24px] text-[20px] sm:leading-[30px] leading-[28px] xl:text-left text-center flex flex-wrap"
            ref={element2}
          >
            {words2.map((word, index) => {
              const start = index / words2.length;
              const end = start + 1 / words2.length;
              //console.log(start, end);
              return (
                <Word
                  key={index}
                  range={[start, end]}
                  progress={scrollYProgress2}
                >
                  {word}
                </Word>
              );
            })}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default AboutWhoWeAre;

const Word = ({
  children,
  range,
  progress,
}: {
  children: any;
  range: any;
  progress: any;
}) => {
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className="mr-2 mt-1.5">
      {characters.map((char: any, index: number) => {
        const start = range[0] + index * step;
        const end = range[0] + step * (index + 1);
        return (
          <Character key={index} range={[start, end]} progress={progress}>
            {char}
          </Character>
        );
      })}
    </span>
  );
};

const Character = ({
  children,
  range,
  progress,
}: {
  children: any;
  range: any;
  progress: any;
}) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return <motion.span style={{ opacity }}>{children}</motion.span>;
};
