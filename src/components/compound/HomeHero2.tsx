import React, { useRef } from "react";
import Image from "next/image";
import home_hero2_ill from "../../../assets/images/home-hero2-ill.svg";
import underline_vector from "../../../assets/images/underline-vector.svg";
import { useScroll, motion, useTransform } from "framer-motion";
import { useIsomorphicLayoutEffect } from "../../../hooks";

const HomeHero2 = () => {
  let value = `Dental Opulence is a new dental clinic that offers a combination of
  general dentistry and cosmetic dentistry services. The clinic is
  equipped with modern facilities and technology to provide
  exceptional dental care. The team at Dental Opulence is dedicated to
  ensuring a comprehensive and comfortable dental experience for
  patients. The clinic's focus is on maintaining oral health and
  enhancing smiles through cosmetic procedures.`;

  const element = useRef(null);
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    container: container,
    target: element,
    offset: ["start 0.9", "start 0.15"],
  });

  /*   useIsomorphicLayoutEffect(() => {
    scrollYProgress.on("change", (e) => console.log(e));
  }, []); */

  const words = value.split(" ");

  return (
    <div className="w-full">
      <div className="bg-[#100E10] w-full lg:px-[100px] sm:px-[40px] px-[20px] py-[80px] flex xl:flex-row flex-col justify-between gap-[70px] xl:gap-0">
        <div className="xl:max-w-[600px] md:w-[70%] w-[90%]">
          <Image src={home_hero2_ill} alt="" className="mt-10 xl:w-[500px]" />
        </div>

        <div className="xl:max-w-[690px] w-[90%] mx-auto flex flex-col xl:items-start items-center">
          <p className="flex flex-col items-centehttp://localhost:3002/_next/static/media/home-hero2-ill.fd70e812.svgr">
            <span className="text-white font-Pangram-Regular">About us</span>
            <Image src={underline_vector} alt="" />
          </p>
          <h4
            className="text-white font-Pangram-Regular mt-6 sm:text-[25px] text-[20px] sm:leading-[36px] leading-[28px] xl:text-left text-center flex flex-wrap"
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
        </div>
      </div>
    </div>
  );
};

export default HomeHero2;

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
