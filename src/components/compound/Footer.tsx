import React, { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import footer_logo from "../../../assets/images/do_logo.png";

import footer_text from "../../../assets/images/Dental Opulence.svg";
import ig_logo from "../../../assets/images/instagram-icon.svg";
import ig_logo_dark from "../../../assets/images/instagram-icon-dark.svg";
import fb_logo from "../../../assets/images/facebook-icon.svg";
import fb_logo_dark from "../../../assets/images/facebook-icon-dark.svg";
import whatsapp_logo from "../../../assets/images/whatsapp-icon.svg";
import whatsapp_logo_dark from "../../../assets/images/whatsapp-icon-dark-footer.svg";
import tiktok_icon from "../../../assets/images/tiktok-icon.svg";
import titktok_icon_dark from "../../../assets/images/tiktok-icon-dark.svg";
import letter_icon from "../../../assets/images/Letter.svg";
import location_icon from "../../../assets/images/Map Point.svg";

import phone_icon from "../../../assets/images/call-calling.svg";
import whatsapp_icon_mini from "../../../assets/images/whatsapp-icon-mini.svg";
import { handleSetPathToNavigate } from "../../../context/action";
import { GlobalContext } from "../../../context/GlobalContext";

import logo_Link1 from "../../../assets/fonts/footer-logo-link1.svg";
import logo_Link2 from "../../../assets/fonts/footer-logo-link2.svg";
import logo_Link3 from "../../../assets/fonts/footer-logo-link3.svg";

const hoverLinks = [
  {
    image: ig_logo,
    image_inverted: ig_logo_dark,
    link: "https://www.instagram.com/dentalopulence/",
  },
  {
    image: fb_logo,
    image_inverted: fb_logo_dark,
    link: "https://www.facebook.com/DentalOpulence/",
  },
  {
    image: whatsapp_logo,
    image_inverted: whatsapp_logo_dark,
    link: "https://wa.me/+447301253447",
  },
  {
    image: tiktok_icon,
    image_inverted: titktok_icon_dark,
    link: "https://www.tiktok.com/@dentalopulence",
  },
];

const Footer = () => {
  const { dispatch } = useContext(GlobalContext);

  const [hoverIndex, setHoverIndex] = useState<null | number>(null);

  return (
    <div className="w-full">
      <div className="bg-[#100E10] w-full py-[80px] md:px-[90px] sm:px-[40px] px-4">
        <div className="flex xl:flex-row flex-col md:gap-[90px] gap-[50px] items-start">
          <div>
            <div className="flex gap-4"><Image src={footer_logo} height={60} alt="" /> <Image src={footer_text} alt="Dental Opulence" /></div>
            <div className="flex flex-col md:gap-0 gap-[40px] justify-between mt-10">
              <div className="">
                <h3 className="text-white  text-sm">
                  Find us on social media
                </h3>
                <div className="flex items-center gap-4 mt-4">
                  {hoverLinks.map((item, index) => (
                    <div
                      key={index}
                      onMouseOver={() => setHoverIndex(index)}
                      onMouseOut={() => setHoverIndex(null)}
                      className="w-10 h-10 p-[13px] rounded-full border border-[#fff] cursor-pointer hover:bg-white"
                    >
                      <Link href={item.link} target="blank">
                        <Image
                          src={
                            hoverIndex === index
                              ? item.image_inverted
                              : item.image
                          }
                          alt=""
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:flex items-center gap-2 md:mt-10 h-full w-full">
                <Link href="https://test.cqc.org.uk/location/1-17708997775/contact">
                  <Image
                    src={logo_Link1}
                    alt=""
                    className="w-[100px]"
                  />
                </Link>
                {/* <Link href='https://www.gdc-uk.org'>
                  <Image src={logo_Link2} alt="" className="w-[190px] h-[80px]  md:my-0 my-3"/>
                </Link>
                <Link href='https://gdpr-info.eu'>
                  <Image src={logo_Link3} alt="" className="w-[190px] h-[80px]"/>
                </Link> */}
              </div>
            </div>
          </div>
          <div className="w-full font-inter">
            <div className="flex flex-wrap md:gap-[49px] justify-between">
              <div className="flex flex-col gap-10  w-[176px]">
                <div>
                  <h3 className="text-white font-inter  text-xl">
                    Quick Links
                  </h3>
                  <div onClick={() => handleSetPathToNavigate(dispatch, null)}>
                    <p className="text-sm font-light  font-inter text-[#A2A2A2] font-inter cursor-pointer  mt-5">
                      Home
                    </p>
                  </div>
                  <div
                    onClick={() => handleSetPathToNavigate(dispatch, "/about")}
                  >
                    <p className="text-sm text-[#A2A2A2] font-inter cursor-pointer   mt-5">
                      About us
                    </p>
                  </div>

                  <div
                    onClick={() =>
                      handleSetPathToNavigate(dispatch, "/our-pricing")
                    }
                  >
                    <p className="text-sm text-[#A2A2A2] font-inter cursor-pointer   mt-5">
                      Pricing
                    </p>
                  </div>

                  <div
                    onClick={() => handleSetPathToNavigate(dispatch, "/cases")}
                  >
                    <p className="text-sm text-[#A2A2A2] font-inter cursor-pointer   mt-5">
                      Cases
                    </p>
                  </div>
                  <div
                    onClick={() =>
                      handleSetPathToNavigate(dispatch, "/testimonials")
                    }
                  >
                    <p className="text-sm text-[#A2A2A2] font-inter cursor-pointer   mt-5">
                      Testimonials
                    </p>
                  </div>
                  <div
                    onClick={() =>
                      handleSetPathToNavigate(dispatch, "/contact")
                    }
                  >
                    <p className="text-sm text-[#A2A2A2] font-inter cursor-pointer   mt-5">
                      Contact us
                    </p>
                  </div>
                </div>
               
              </div>
              <div className="">
  <h3 className="text-white font-inter text-xl mb-5">
    Opening Hours
  </h3>
  <div className="grid grid-cols-[1fr,10px,1fr] text-sm text-[#A2A2A2] font-inter">
    <div className="space-y-5">
      <p>Sunday</p>
      <p>Monday</p>
      <p>Tuesday</p>
      <p>Wednesday</p>
      <p>Thursday</p>
      <p>Friday</p>
      <p>Saturday</p>
    </div>
    <div className="space-y-5">
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
    <div className="space-y-5">
      <p>Closed</p>
      <p>Closed</p>
      <p>9am - 5pm</p>
      <p>Closed</p>
      <p>9am - 5pm</p>
      <p>9am - 5pm</p>
      <p>9am - 5pm</p>
    </div>
  </div>
</div>
              <div className="flex flex-col gap-10 w-[176px] md:mt-0 mt-8">
                <div>
                  <h3 className="text-white   font-inter text-xl">
                    Legal
                  </h3>
                  <div
                    onClick={() =>
                      handleSetPathToNavigate(dispatch, "/privacy-policy")
                    }
                  >
                    <p className="text-sm text-[#A2A2A2] font-inter cursor-pointer   mt-5">
                      Privacy Policy
                    </p>
                  </div>
                  <div
                    onClick={() =>
                      handleSetPathToNavigate(dispatch, "/complaints-procedure")
                    }
                  >
                    <p className="text-sm text-[#A2A2A2] font-inter cursor-pointer   mt-5">
                      Complaints Procedure
                    </p>
                  </div>

                  <div
                    onClick={() =>
                      handleSetPathToNavigate(dispatch, "/terms-of-use")
                    }
                  >
                    <p className="text-sm text-[#A2A2A2] font-inter cursor-pointer   mt-5">
                      Terms of Use
                    </p>
                  </div>

                  <div
                    onClick={() =>
                      handleSetPathToNavigate(dispatch, "/health-and-safety")
                    }
                  >
                    <p className="text-sm text-[#A2A2A2] font-inter cursor-pointer   mt-5">
                      Health & Safety
                    </p>
                  </div>
                  <div
                    onClick={() =>
                      handleSetPathToNavigate(dispatch, "/appointment-terms")
                    }
                  >
                    <p className="text-sm text-[#A2A2A2] font-inter cursor-pointer   mt-5">
                      Appointment Terms
                    </p>
                  </div>

                  <div
                    onClick={() =>
                      handleSetPathToNavigate(dispatch, "/data-protection")
                    }
                  >
                    <p className="text-sm text-[#A2A2A2] font-inter cursor-pointer   mt-5">
                      Data Protection
                    </p>
                  </div>
                  <div
                    onClick={() =>
                      handleSetPathToNavigate(dispatch, "/cookie-policy")
                    }
                  >
                    <p className="text-sm text-[#A2A2A2] font-inter cursor-pointer   mt-5">
                      Cookie Policy
                    </p>
                  </div>

                  <div
                    onClick={() =>
                      handleSetPathToNavigate(
                        dispatch,
                        "/competitions-and-offer-terms"
                      )
                    }
                  >
                    <p className="text-sm text-[#A2A2A2] font-inter cursor-pointer   mt-5">
                      Competitions & Offers Terms
                    </p>
                  </div>
                </div>
              </div>
              <div>
                  <h3 className="text-white  font-inter text-xl">
                    Our Info
                  </h3>
                  <div onClick={() => handleSetPathToNavigate(dispatch, null)}>
                    <p className="text-sm text-[#A2A2A2] font-inter cursor-pointer   mt-5 flex items-center gap-2">
                      <Image src={letter_icon} alt="" />
                      <span className="font-inter">info@do.co.uk
                      </span>
                    </p>
                  </div>
                  <div onClick={() => handleSetPathToNavigate(dispatch, null)}>
                    <p className="text-sm text-[#A2A2A2] font-inter cursor-pointer   mt-5 flex items-center gap-2">
                      <Image src={phone_icon} alt="" />
                      <span  className="font-inter">0121 272 9229</span>
                    </p>
                  </div>
                  <div onClick={() => handleSetPathToNavigate(dispatch, null)}>
                    <p className="text-sm text-[#A2A2A2] font-inter cursor-pointer   mt-5 flex items-center gap-2">
                      <Image src={whatsapp_icon_mini} alt="" />
                      <span className="font-inter">+447301253447</span>
                    </p>
                  </div>
                  <div onClick={() => handleSetPathToNavigate(dispatch, null)}>
                    <p className="text-sm text-[#A2A2A2] font-inter cursor-pointer   mt-5 flex items-start gap-2">
                      <Image src={location_icon} alt="" />
                      <span className="font-inter">1190 Stratford Rd,<br/> Birmingham B28 8AB,<br/> United Kingdom</span>
                    </p>
                  </div>
                  
                </div>
            </div>
          </div>
        </div>

        <div className="bg-[#454545] w-full h-[1px] mt-[60px]" />
        <p className="text-center text-sm font-light  font-inter max-w-[788px] mx-auto text-white mt-[60px]">
          Copyright © {new Date().getFullYear()} John Clive Industries Ltd.
          Registered in England and Wales, UK. All rights reserved. Website
          Developed by Lintech Group
        </p>
      </div>
    </div>
  );
};

export default Footer;
