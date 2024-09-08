import React, { useRef, useState } from "react";
import Image from "next/image";

import arrow_right from "../../../../assets/images/arrow-right.svg";
import bordered_arrow_right from "../../../../assets/images/bordered-arrow-right.svg";

import { useGSAP } from "@gsap/react";

import Link from "next/link";
import { HomeOurServicesType } from "../../../../types";
import { gsap } from "../../../../lib/gsap";

const PricingCard2 = ({
  price,
  image,
  href,
  title,
  image_inverted,
  selectedTheme,
}: HomeOurServicesType & { selectedTheme: any }) => {
  const tl: any = useRef(null);
  const [hover, setHover] = useState(false);

  useGSAP(() => {
    tl.current = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      paused: true,
    });

    let service_cards = document.querySelectorAll(".service-card");

    service_cards?.forEach((card) => {
      let arrow_right = card.querySelector(".arrow-right");
      let bordered_arrow_right = card.querySelector(".bordered-arrow-right");
      let title = card.getElementsByTagName("h3");
      let text = card.getElementsByTagName("p");

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          background: "#F3F3F3",
          ease: "back.in",
          duration: 0.1,
        });
        gsap.to(title, {
          color: "#000000",
          duration: 0.1,
          ease: "power3.inOut",
        });
        gsap.to(text, {
          color: "#4E4E4E",
          duration: 0.1,
          ease: "power3.inOut",
        });
        gsap.to(arrow_right, {
          left: 0,
          opacity: 1,
          duration: 0.1,
          delay: 0.1,
          ease: "power3.inOut",
        });
        gsap.to(bordered_arrow_right, {
          left: 20,
          opacity: 0,
          duration: 0.2,
          ease: "power3.inOut",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, { background: "#222222" });
        gsap.to(title, { color: "#fff" });
        gsap.to(text, { color: "#B2B2B2" });
        gsap.to(arrow_right, { left: -16, opacity: 0 });
        gsap.to(bordered_arrow_right, { left: 0, opacity: 1, delay: 0.1 });
      });
    });
  }, []);

  return (
    <Link href={href}>
     <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`px-5 py-6  max-w-[400px] h-[115px]   bg-[#222222] border border-[#2D2D2D] rounded-xl  service-card`}
     >


<div className="flex justify-between items-center">
        <div className="flex items-center gap-6">
           <div>
             <Image src={hover ? image_inverted : image} alt="" className="w-[55px] h-[55px]" />
           </div> 
           <div>
           <h3 className="text-base text-[#fff] font-Pangram-Bold">{title}</h3>
             <p className=" text-[#B2B2B2] font-Pangram-Regular mt-1">{price}</p>
           </div>
        </div>

        <div className="relative self-end mb-1">
        <Image
          src={bordered_arrow_right}
          alt=""
          className="arrow-right -left-4 absolute opacity-0"
        />
        <Image
          src={arrow_right}
          alt=""
          className="relative   bordered-arrow-right"
        />
        </div> 
     </div>


      {/* <div className="">
        <Image src={hover ? image_inverted : image} alt="" className="" />
      </div>
      <div>
        <h3 className="text-base text-[#fff] font-Pangram-Bold">{title}</h3>
        <p className="text-sm text-[#B2B2B2] font-Pangram-Regular mt-1">
          {description}
        </p>
      </div>
      <div className="relative self-end mt-auto">
        <Image
          src={bordered_arrow_right}
          alt=""
          className="arrow-right -left-4 absolute opacity-0"
        />
        <Image
          src={arrow_right}
          alt=""
          className="relative   bordered-arrow-right"
        />
      </div> */}
    </div>

    </Link>
   
  );
};

export default PricingCard2;
