"use client"
import React, { useRef, useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import pen_icon from "../../../../assets/images/pen-icon.svg";
import { gsap } from "../../../../lib/gsap";
import { NavigationLoader } from "../../molecule";
import { GlobalContext } from "../../../../context/GlobalContext";
import { handleSetPathToNavigate } from "../../../../context/action";
import tr_radius from "../../../../assets/images/Dental Opulence (1)/Vector-1.svg";
import bl_radius from "../../../../assets/images/Dental Opulence (1)/Vector-2.svg";
import br_radius from "../../../../assets/images/Dental Opulence (1)/Vector-3.svg";
import tl_radius from "../../../../assets/images/Dental Opulence (1)/Vector.svg";

import contact_info_button from "../../../../assets/contact_icons/contact_info_icon.svg";
import contact_cross_button from "../../../../assets/contact_icons/contact_cross_icon.svg";
import contact_page_button from "../../../../assets/contact_icons/contact_info_icon.svg";
import whatsapp_icon from "../../../../assets/contact_icons/whatsAppIcon.svg";
import call_icon from "../../../../assets/contact_icons/call_icon.svg";

import messageIcon from '../../../../assets/contact_icons/messageIcon.svg'

import contact_pen_icon from "../../../../assets/contact_icons/contact_pen_icon.svg";

interface Props {
  children: React.ReactNode;
}

const Index = ({ children }: Props) => {
  const { dispatch, menuOpen } = useContext(GlobalContext);
  const [isExpanded, setIsExpanded] = useState(false);
  const tl: any = useRef(null);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true });
    gsap.set(".contact-icon", { scale: 0.6 });

    let contact_icon = document.querySelector(".contact-icon");

    function learnMoreHover() {
      tl.current.to(contact_icon, 0.3, {
        scale: 1,
        duration: 0.3,
        ease: "back",
      });
      return tl.current;
    }

    contact_icon?.addEventListener("mouseover", () => {
      learnMoreHover().play();
    });

    contact_icon?.addEventListener("mouseleave", () => {
      learnMoreHover().reverse();
    });

    return () => {
      contact_icon?.removeEventListener("mouseover", () => {
        learnMoreHover().play();
      });

      contact_icon?.removeEventListener("mouseleave", () => {
        learnMoreHover().reverse();
      });
    };
  }, []);

  return (
    <main
      className={`sticky show-scrollbar`}
    >
      {/* <main className="fixed bg-white rounded-[24px] z-[700] w-full top-0 left-0 ">
        <div className="fixed bg-white w-screen h-[5px] top-0" />
        <Image src={tr_radius} className="fixed top-[5px] right-[5px]" alt="" />
        <Image src={bl_radius} className="fixed bottom-[5px] left-[5px]" alt="" />
        <Image src={br_radius} className="fixed bottom-[5px] right-[5px]" alt="" />
        <Image src={tl_radius} className="fixed top-[5px] left-[5px]" alt="" />

        <div className="fixed bg-white w-[5px] h-screen left-0 " />

        <div className="fixed bg-white w-[5px] h-screen right-0 " />
        <div className="fixed bg-white w-screen h-[5px] bottom-0 " />
      </main> */}

      <main className="relative w-[calc(100%)] mx-auto rounded-[24px] z-[690]">
        {children}
        <div className="fixed sm:bottom-10 bottom-3 right-[10px]">
          {isExpanded && (
            <div className="flex flex-col items-center space-y-2 mb-1">
              <Link href="tel:+441212729229" target="blank">
                <Image
                  className="w-[45px] h-[45px] cursor-pointer bg-[#000] rounded-full"
                  src={call_icon}
                  alt="Call Icon"
                />
              </Link>
              <Link href="https://wa.me/+447301253447" target="blank">
                <Image
                  className="w-[45px] h-[45px] cursor-pointer bg-[#000] rounded-full"
                  src={whatsapp_icon}
                  alt="WhatsApp Icon"
                />
              </Link>
              <Link href="/contact">
                <Image
                  className="w-[45px] h-[45px] cursor-pointer bg-[#000] rounded-full"
                  src={messageIcon}
                  alt="Contact Icon"
                />
              </Link>
            </div>
          )}
          <Image
            className="w-[86px] h-[86px] contact-icon cursor-pointer "
            src={isExpanded ? contact_cross_button : contact_pen_icon}
            alt="floating contact page button"
            onClick={toggleExpanded}
          />
        </div>
      </main>
    </main>
  );
};

export default Index;
