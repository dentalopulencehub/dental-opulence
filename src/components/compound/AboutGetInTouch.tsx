"use client"
import Image from "next/image";
import React, { useState } from "react";
import about_mission_logo from "../../../assets/images/do_logo.png"

import email from "../../../assets/fonts/email.svg";
import call from "../../../assets/fonts/phone_call.svg";
import whatsApp from "../../../assets/images/Vector.png";
import location from "../../../assets/fonts/location.svg";
import Link from "next/link";

import mapWhatsApp from "../../../assets/mapSectionSocialIcon/WhatsAPP.svg";
import mapTickTok from "../../../assets/mapSectionSocialIcon/ticktok.svg";
import mapInstagram from "../../../assets/mapSectionSocialIcon/instagram.svg";
import mapFacebook from "../../../assets/mapSectionSocialIcon/facebook.svg";


import ig_logo from "../../../assets/images/instagram-icon.svg";

import ig_logo_dark from "../../../assets/images/instagram-icon-dark.svg";
import fb_logo from "../../../assets/images/facebook-icon.svg";
import fb_logo_dark from "../../../assets/images/facebook-icon-dark.svg";
import whatsapp_logo from "../../../assets/images/whatsapp-icon.svg";
import whatsapp_logo_dark from "../../../assets/images/whatsapp-icon-dark-footer.svg";
import tiktok_icon from "../../../assets/images/tiktok-icon.svg";
import titktok_icon_dark from "../../../assets/images/tiktok-icon-dark.svg";

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

const AboutGetInTouch = () => {

  const [hoverIndex, setHoverIndex] = useState<null | number>(null);

  return (
    <div className="text-[#fff] lg:px-[100px] sm:px-[40px] px-[20px] pb-28 pt-8">
      <div className="flex xl:flex-row flex-col gap-6 w-full">
        <div className="flex flex-col flex-wrap gap-6 justify-between xl:max-w-[425px] w-full">
          <div className="sm:max-w-[425px] w-full xl:h-[530px] bg-[#222222] rounded-2xl xs:p-10 p-5">
            <Image src={about_mission_logo} width={70} alt="" />
            <p className="text-[22px] font-[500] mt-7">
            To log in to the patient portal or make a new inquiry click the buttons below
            </p>
            <p className="text-sm text-[#C3C3C3] font-medium my-4">Note: New patients should click ‘contact us’ to start a new enquiry and existing patients can click ‘book now’</p>

            <div className="text-[13.5px]">
              <div className="flex gap-2 items-center">
                <Image src={email} alt="email" />
                <p>info@do.co.uk</p>
              </div>

              <div className="flex gap-2 items-center my-4">
                <Image src={call} alt="email" />
                <p>0121 272 9229</p>
              </div>
              <div className="flex gap-2 items-center ">
                <Image width={18} src={whatsApp} alt="email" />
                <p>+447301253447</p>
              </div>
              <div className="flex gap-2 items-center my-3">
                <Image src={location} alt="email" />
                <p>1190 Stratford Road, Hall Green, Birmingham, B28 8AB</p>
              </div>
            </div>

            <div className="flex gap-4 mt-1 items-center justify-between">
              <Link
                href={"https://book.do.co.uk/"}
                target="blank"
                className="bg-[#fff] px-10 py-2 rounded-full"
              >
                <button className="text-[#000] text-sm ">Book now</button>
              </Link>
              <Link
                href={"contact"}
                className="border border-white px-10 py-2 rounded-full"
              >
                <button className="text-white ">Contact us</button>
              </Link>
            </div>
          </div>

          <div className="w-full xl:min-h-[187px] bg-[#222222] rounded-2xl xs:p-10 p-7">
            <h4 className="text-white text-[17px]">Find us on social media </h4>
            {/* <div className="flex gap-3 mt-5 ">
              <Link href="https://wa.me/+447301253447" target="blank" className="hover:bg-white">
                <Image src={mapWhatsApp} alt="mapWhatsApp" />
              </Link>
              <Link href="https://www.tiktok.com/@dentalopulence">
                <Image src={mapTickTok} alt="mticktok" />
              </Link>
              <Link href="https://www.instagram.com/dentalopulence/">
                {" "}
                <Image src={mapInstagram} alt="instagram" />
              </Link>
              <Link href="https://www.facebook.com/DentalOpulence/"></Link>
              <Image src={mapFacebook} alt="facbook" />
            </div> */}
               <div className="flex items-center gap-4 mt-7">
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
        </div>
        <div className="flex flex-col gap-6 w-full">
          <div className="w-full xl:min-h-[360px] bg-[#222222] rounded-2xl xs:p-10 p-7">
            <h4 className="text-white text-[34px]">Get In Touch With Us</h4>

            <form className="mt-7">
             

              <div className="flex gap-10">
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="w-full bg-transparent border-b border-[#5C5C5C] text-[18px] font-[400] text-[#fff] placeholder-[#8A8A8A] focus:outline-none pb-2"
                 />

                <input
                  type="text"
                  placeholder="Your Email*"
                  className="w-full bg-transparent border-b border-[#5C5C5C] text-[18px] font-[400] text-[#fff] placeholder-[#8A8A8A] focus:outline-none pb-2"
                 />
               </div>  


               <div className="flex gap-10 mt-[44px]">
                 <input
                  type="number"
                  placeholder="Mobile Number*"
                  className="w-full bg-transparent border-b border-[#5C5C5C] text-[18px] font-[400] text-[#fff] placeholder-[#8A8A8A] focus:outline-none pb-2"
                 />

                <input
                  type="text"
                  placeholder="Enter Message here...*"
                  className="w-full bg-transparent border-b border-[#5C5C5C] text-[18px] font-[400] text-[#fff] placeholder-[#8A8A8A] focus:outline-none pb-2"
                 />
               </div>  

              <div className="mt-4">
                <button className="bg-[#fff] text-[#000] px-10 mt-5 py-3 rounded-full text-[16px] font-[500]">Submit</button>
              </div>
             
            </form>
          </div>

          <div className=" w-full xl:h-[360px] bg-[#222222] rounded-2xl flex sm:flex-row flex-col md:justify-around justify-between  sm:gap-0 gap-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.347447162731!2d-1.8491155230562837!3d52.43662054239905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bb5a9b427bd9%3A0x3b5cf1c19e6303b3!2sDental%20Opulence!5e0!3m2!1sen!2sbd!4v1719599974267!5m2!1sen!2sbd"
              style={{
                border: 0,
                width: "100%",
                height: "360px",
                borderRadius: "10px",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              frameBorder="0"
              aria-hidden="false"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGetInTouch;
