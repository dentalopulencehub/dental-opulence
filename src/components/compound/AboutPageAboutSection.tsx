import React, { useRef } from "react";
import Image from "next/image";
import home_hero2_ill from "../../../assets/images/home-hero2-ill.svg";
import underline_vector from "../../../assets/images/underline-vector.svg";
import { useScroll, motion, useTransform } from "framer-motion";
import { useIsomorphicLayoutEffect } from "../../../hooks";
import PrimaryLink from "../atom/PrimaryLink";

const AboutPageAboutSection = () => {
  let value = `Welcome to Dental Opulence, your premier dental clinic for general and cosmetic dentistry. With state-of-the-art technology and modern facilities, we provide exceptional care. Our experienced team is committed to maintaining your oral health and enhancing your smile. Whether you need routine check-ups or advanced cosmetic procedures, we offer personalised care tailored to you. Visit us today to achieve a healthy, beautiful smile that boosts your confidence.`;

  let value2 = `From routine check-ups to advanced cosmetic procedures, their skilled team ensures comprehensive and comfortable dental experiences. Combining a focus on general dentistry with the artistry of cosmetic dentistry, Dental Opulence prioritizes both oral health and aesthetic aspirations in an opulent environment.`;

  const element = useRef(null);
  const element2 = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.15"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: element2,
    offset: ["start 0.4", "start start"],
  });

  useIsomorphicLayoutEffect(() => {
    //scrollYProgress.on("change", (e) => console.log(e));
  }, []);

  const words = value.split(" ");
  const words2 = value2.split(" ");

  return (
    <div className="w-full">
      <div className="bg-[#100E10] w-full lg:px-[100px] sm:px-[40px] px-[20px] py-[80px] flex xl:flex-row flex-col justify-between gap-[70px] xl:gap-0">
        <div className="xl:max-w-[400px] md:w-[70%] w-[90%]">
          <h2 className="sm:text-[34px] sm:leading-[42px] text-[28px] text-white font-Pangram-Bold">
            Experience Dental Opulence: Radiant Smiles, Optimal Oral Health
          </h2>
          <Image src={home_hero2_ill} alt="" className="mt-10" />
        </div>

        <div className="xl:max-w-[584px] w-[90%] mx-auto flex flex-col xl:items-start items-center">
          <p className="flex flex-col items-center">
            <span className="text-white font-Pangram-Regular">About us</span>
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

        {/*   <h4
            className="text-white font-Pangram-Regular mt-6 sm:text-[24px] text-[20px] sm:leading-[30px] leading-[28px] xl:text-left text-center flex flex-wrap"
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
          </h4> */}
         {/*  <PrimaryLink
            href="#"
            title="Contact us"
            style="py-4 px-[49px] mt-12 rounded-[32px] bg-transparent text-white border border-[#fff] font-Pangram-Medium text-base hover:text-[#100E10] hover:bg-white"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default AboutPageAboutSection;

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
