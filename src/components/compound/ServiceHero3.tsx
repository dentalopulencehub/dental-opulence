import React, { useState, useRef, useContext } from "react";
import PrimaryLink from "../atom/PrimaryLink";
import { GlobalContext } from "../../../context/GlobalContext";
import videoPlayButton from "../../../assets/videoPlayButton/videoPlayButton.svg";
import Image from "next/image";

type VideoTitle =
  | "Bridges"
  | "Crowns"
  | "Dentures"
  | "Examination"
  | "Extractions"
  | "Hygienist"
  | "White Fillings"
  | "Root Canal Treatments"
  | "Invisalign"
  | "Fixed Retainers"
  | "Teeth Whitening"
  | "Vivera Retainers"
  | "CrownsVeneers"
  | "Composite Veneers"
  | "Composite Bonding"
  | "Routine Examination"
  | "Internal Tooth Whitening"
  | "Composite Edge Bonding";

const videoPaths: Record<VideoTitle, string> = {
  Bridges: "/videos/DentalAllServicesVideo/GeneralTreatmentCompress/Bridges.mp4",
  Crowns: "/videos/DentalAllServicesVideo/GeneralTreatmentCompress/CrownsAndVeneers.mp4",
  Dentures: "/videos/DentalAllServicesVideo/GeneralTreatmentCompress/Dentures.mp4",
  Examination: "/videos/DentalAllServicesVideo/GeneralTreatmentCompress/Examination.mp4",
  Extractions: "/videos/DentalAllServicesVideo/GeneralTreatmentCompress/Extraction.mp4",
  Hygienist: "/videos/DentalAllServicesVideo/GeneralTreatmentCompress/Hygeinist.mp4",
  "White Fillings": "/videos/DentalAllServicesVideo/GeneralTreatmentCompress/WhiteFillings.mp4",
  "Root Canal Treatments": "/videos/DentalAllServicesVideo/GeneralTreatmentCompress/RootCanalTreatment.mp4",
  Invisalign: "/videos/DentalAllServicesVideo/CosmaticTreatmentCompressed/Invisalign.mp4",
  "Fixed Retainers": "/videos/DentalAllServicesVideo/CosmaticTreatmentCompressed/FixedRetainers.mp4",
  "Teeth Whitening": "/videos/DentalAllServicesVideo/CosmaticTreatmentCompressed/TeethWhitening.mp4",
  "Vivera Retainers": "/videos/DentalAllServicesVideo/CosmaticTreatmentCompressed/ViveraRetainers.mp4",
  CrownsVeneers: "/videos/DentalAllServicesVideo/CosmaticTreatmentCompressed/CrownsVeneers.mp4",
  "Composite Veneers": "/videos/DentalAllServicesVideo/CosmaticTreatmentCompressed/CompositeVeneers.mp4",
  "Composite Bonding": "/videos/DentalAllServicesVideo/CosmaticTreatmentCompressed/CompositeEdgeBonding.mp4",
  "Routine Examination": "/videos/DentalAllServicesVideo/CosmaticTreatmentCompressed/RoutineExamiination.mp4",
  "Internal Tooth Whitening": "/videos/DentalAllServicesVideo/CosmaticTreatmentCompressed/InternalToothWhitening.mp4",
  "Composite Edge Bonding": "/videos/DentalAllServicesVideo/CosmaticTreatmentCompressed/CompositeEdgeBonding.mp4",
};

const ServiceHero3 = () => {
  const { servicePageData } = useContext(GlobalContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const title = servicePageData?.title as VideoTitle | undefined;
  const videoPath = title ? videoPaths[title] : undefined;

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

  return (
    <div className="w-full">
      <div className="bg-white w-full lg:px-[100px] sm:px-[40px] px-[20px] py-[80px] flex flex-col items-center justify-between sm:gap-[64px] gap-[37px]">
        <h2 className="text-[#100E10] sm:text-[34px] text-[26px] font-normal font-Pangram-Medium md:w-[650px] text-center w-full">
          Discover Your Perfect Smile at Dental Opulence
        </h2>
        <div className="relative mx-auto my-4">
          <video
            ref={videoRef}
            className="object-cover rounded-2xl w-full h-full opacity-1"
            onClick={handleVideoClick}
            playsInline
          >
            {videoPath && <source src={videoPath} type="video/mp4" />}
            Your browser does not support the video tag.
          </video>
          {!isPlaying && (
            <div
              className="absolute inset-0 flex justify-center items-center cursor-pointer"
              onClick={handleVideoClick}
            >
              <Image src={videoPlayButton} alt="videoPlayButton" />
            </div>
          )}
        </div>
        <PrimaryLink
          href="/contact"
          title="Contact us"
          style="py-4 px-8 rounded-[34px] w-fit text-white bg-[#100E10] font-Pangram-Medium text-xs mt-6 hover:text-[#100E10] hover:bg-transparent border border-transparent hover:border-[#100E10] duration-0"
        />
      </div>
    </div>
  );
};

export default ServiceHero3;






   {/* <h2>{servicePageData.price}</h2> */}
        {/* <video
          autoPlay={true}
          loop
          height="470"
          className="object-cover rounded-2xl w-full h-[600px]"
          id="video1"
          playsInline
        
          onClick={(e) => {
            if (e.currentTarget.paused) {
              e.currentTarget.play();
            } else {
              e.currentTarget.pause();
            }
          }}
        >
          <source src={servicePageData?.serviceVideo} type="video/mp4" />
          <source src="example.webm" type="video/mp4" />
          <track kind="captions" />
          Your browser does not support the video tag.
        </video> */}