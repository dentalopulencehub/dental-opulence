import React, { useRef } from "react";
import Image from "next/image";
import service_her2_ill from "../../../assets/DO Format/3.jpg";
import underline_vector from "../../../assets/images/underline-vector.svg";
import { useScroll, motion, useTransform } from "framer-motion";
import { useIsomorphicLayoutEffect } from "../../../hooks";
import { ServiceHero2TextDesc } from "../../../types";

const ServiceHero2 = ({ 
  textDes
}: ServiceHero2TextDesc) => {
  let value = textDes;

  const element = useRef(null);
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    container: container,
    target: element,
    offset: ["start 0.9", "start 0.15"],
  });

  /* useIsomorphicLayoutEffect(() => {
    scrollYProgress.on("change", (e) => console.log(e));
  }, []); */

  const words = value.split(" ");

  return (
    <div className="w-full">
      <div className="bg-[#fff] w-full lg:px-[100px] sm:px-[40px] px-[20px] py-[80px] flex xl:flex-row flex-col justify-between gap-[70px] xl:gap-0">
        <div className="xl:max-w-[400px] md:w-[70%] w-[90%]">
          <h2 className="text-[34px] text-[#100E10] font-Pangram-Medium sm:w-[309px] w-full">
            Restore Your Smile&apos;s Integrity
          </h2>
          <Image src={service_her2_ill} alt="" className="mt-8" />
        </div>

        <div className="xl:max-w-[690px] w-[90%] mx-auto flex flex-col xl:items-start items-center">
          <h4
            className="text-[#161616] font-Pangram-Regular sm:text-[24px] text-[20px] sm:leading-[30px] leading-[28px] xl:text-left text-center flex flex-wrap"
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

export default ServiceHero2;

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
