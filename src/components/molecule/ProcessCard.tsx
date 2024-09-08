import React from "react";
import Image from "next/image";
import { HomeOurServicesType } from "../../../types";
import { MagicCard, MagicContainer } from "../magicui/magic-card";
import arrow_right_light from '../../../assets/images/arrow-right.svg'
import Link from "next/link";
const ProcessCard = ({processes }: HomeOurServicesType) => {
  return (
    <MagicContainer
      className={
        "md:flex w-full gap-4 md:flex-row md:flex-wrap "
      }
    >
       <div className="xs:w-[394px] w-full  sm:h-[228px] h-full bg-[#161616] rounded-lg py-8 px-6 flex flex-col justify-between items-start border border-[#2D2D2D]">
            <p className="text-base font-Pangram-Bold text-[#AFAFAF] ">
              Our Process
            </p>
            <h3 className="xs:text-[36px] text-2xl font-Pangram-Bold text-white">
              Streamlined Dental Excellence
            </h3>
           <Link href={'/testimonials'}>
            <button className="flex flex-row items-center">
              <span className="text-xs font-Pangram-Regular text-white">Our story</span>
              <Image src={arrow_right_light} alt="" />
            </button>
           </Link> 
          
          </div>
            {processes.map((data:any, index:number) => (
               <MagicCard key={index} className="xs:w-[394px] md:my-0 my-5 w-full xs:h-[228px] h-full flex  cursor-pointer flex-col items-start justify-center overflow-hidden p-20 shadow-2xl">
                 <Image src={data.image} alt={data.title} />
                 <h3 className="font-Pangram-Regular text-2xl text-white mt-4">{data.title}</h3>
                 <p className="mt-6 text-[#C2C2C2] text-xs font-Pangram-Light">
                   {data.description}
                 </p>
               <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
             </MagicCard>
            ))}

      {/* <MagicCard className="xs:w-[394px] w-full xs:h-[228px] h-full flex  cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-2xl">
          <Image src={image} alt={title} />
          <h3 className="font-Pangram-Regular text-2xl text-white mt-4">{title}</h3>
          <p className="mt-6 text-[#C2C2C2] text-xs font-Pangram-Light">
            {description}
          </p>
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </MagicCard> */}

    </MagicContainer>
  );


};

export default ProcessCard;
