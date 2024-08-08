'use client'
import React, { useState, ReactNode, useEffect, useRef } from 'react'
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import GoogleCard from '../molecule/GoogleCard'
import underline_vector from "../../../assets/fonts/underlineBlackStoke.svg";
import Image from 'next/image'
import Link from 'next/link';
import SecondaryLink from '../atom/SecondaryLink';


const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

interface CardCarouselProps {
  children: ReactNode;
}

const CardCarousel: React.FC<CardCarouselProps> = ({ children }) => {
  const [ref, { width }] = useMeasure();
  const childrenArray = React.Children.toArray(children);
  const isMobile = width <= BREAKPOINTS.sm;
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = isMobile ? width : 340;
      const newPosition = direction === "left" ? scrollPosition - scrollAmount : scrollPosition + scrollAmount;
      containerRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  if (isMobile) {
    return (
      <section className="bg-transparent flex-1" ref={ref}>
        <div className="relative overflow-x-auto">
          <div 
            ref={containerRef}
            className="flex space-x-4 px-2 overflow-x-auto scroll-smooth"
          >
            {React.Children.map(children, (child, index) => (
              <div
                key={index}
                style={{
                  width: '100%',
                  flexShrink: 0,
                  height: 'auto',
                }}
                className="flex"
              >
                {child}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-transparent flex-1" ref={ref}>
      <div className="relative">
        <div
          ref={containerRef}
          className="flex space-x-4 px-2 overflow-x-hidden scroll-smooth"
        >
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              style={{
                width: 340,
                flexShrink: 0,
                height: '400px',
              }}
              className="flex"
            >
              {child}
            </div>
          ))}
        </div>

        {/* Left Button */}
        {scrollPosition > 0 && (
          <motion.button
            onClick={() => scrollBy("left")}
            className="absolute left-1 top-1/2 transform -translate-y-1/2 p-2 bg-gray-400/70 text-white rounded-full"
          >
            <FiChevronLeft size={24} />
          </motion.button>
        )}

        {/* Right Button */}
        {scrollPosition < (containerRef.current?.scrollWidth || 0) - (containerRef.current?.clientWidth || 0) && (
          <motion.button
            onClick={() => scrollBy("right")}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 p-2 bg-gray-400/70 text-white rounded-full"
          >
            <FiChevronRight size={24} />
          </motion.button>
        )}
      </div>
    </section>
  );
};



interface Review {
  name: string;
  rating: number;
  comment: string;
}

const TestimonyComp = () => {
  const [linkHover, setLinkHover] = useState(false);

  const reviews = [
    {
      name: 'Kristie',
      rating: 5,
      comment:
       "Fantastic service from start to finish. I previously had  composite bonding veneers to my front 6 teeth at another dentists, but was very unhappy with the overall look and poor finish. When I spoke to Dr Ali about correcting this work, he was really helpful, explained the process well and made me feel at ease.  I’m now really happy with the more natural composite edge bonding he has given me.",
    },
    {
      name: 'Mohammed',
      rating: 5,
      comment:
        "Booked in for a scale and polish for my composite veneers. I was pleasantly surprised with how friendly and professional the staff were. The practice seems like it is built around the patient for a one to one service. This was the best experience I have ever had at a dentist.",
    },
    {
      name: 'Ahmad',
      rating: 5,
      comment:
       "Extremely welcoming and professional at the same time. The whole team are very friendly and take care of you to the highest of standards. Very happy with my visit and would definitely recommend Dental Opulence to everyone.",
    },
    {
      name: 'Lucy',
      rating: 5,
      comment:
       "My smile white experience with Dr Asad Abbas has been amazing. He is the nicest dentist I've ever had especially when you aren't a fan of dentists he's super reassuring and very gentle. The dental nurses and reception staff are also lovely and will continue to go to them after my treatment is done."
    },
    {
      name: 'Hope',
      rating: 5,
      comment:
       "Had my smile white experience at dental oppulance. Cannot recommend enough. All the staff were friendly and answered all questions I had! I’ll be coming back for composite edge bonding once after my aligners.",
    },
    {
      name: 'Stevie',
      rating: 5,
      comment:
       "Just had my checkup here and it was an amazing experience! Clinic is so nice and modern compared to other practices I’ve been to and really liked the personalised service. I really felt valued rather than being on a conveyor belt and the dentist has won so many awards! Just wanted a checkup but now decided to get my teeth sorted as I think I’ve finally found a dental practice I can trust! Definitely recommend.",
    },
    {
      name: 'Jack',
      rating: 5,
      comment:
       "The practice's service is truly exemplary; the dentist I saw truly appreciated my time as a patient and listened to all my concerns and has clearly put a lot of time into perfecting his skills. 10/10 would defo recommend coming here.",
    },
    {
      name: 'Kashif',
      rating: 5,
      comment:
       "Went in on Saturday for consultation and received great service from the receptionist to the dentist. Treated well and would recommend.",
    },
    {
      name: 'Fawziyah',
      rating: 5,
      comment:
       "Been to dental opulence twice now and felt very welcomed, the clinic was giving me aesthetic vibes as it was so clean. Had a good experience the first time i been here also. Theres even a TV on the ceiling once you go in for your treatment which is cool. Dr Abbas and his team were friendly and professional would highly recommend dental opulence to anyone you wont be disappointed! 🤭",
    },

    {
      name: 'Naheed',
      rating: 5,
      comment:
       "I had my first consultation today with Dr Ali, it was amazing. He made me feel at ease during the consultation and recommended a treatment plan that was tailored to my needs to achieve my dream smile. Really excited and can't wait to see the outcome!!",
    },
 
 

  ]

  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className=" max-w-7xl lg:my-20 w-full p-5 lg:p-0 mx-auto overflow-hidden">
    <div>
      <p className="">
        <span className="text-[#000] font-Pangram-Regular text-[16px] font-[500]">Online Reviews</span>
        <Image src={underline_vector} alt="underline_vector" />
      </p>
      <div className='md:flex justify-between items-center'>
        <p className="md:text-[34px] text-[28px] font-inter font-[700] mt-3 leading-[42px]">
          Your Reliable Dentist for <br/>Optimal Oral Health
        </p>
        <Link href={'/testimonials'} className='xl:flex gap-3 hidden  items-center '>
          <SecondaryLink
            href="#"
            title="See Client Reactions"
            style="border border-[#100E10] hover:bg-[#100E10] hover:text-white flex flex-row gap-3 items-center justify-center rounded-full p-3 px-6 duration-0"
            hovered={linkHover}
            setHovered={setLinkHover}
          />
        </Link>
      </div>
    </div>
      
      <div className="w-full flex-1 mt-6 md:mt-10">
      <CardCarousel>
      <GoogleCard />
{reviews.map((review, i) => (
  <div
    key={i}
    className="w-full -ml-6 xl:-ml-0 aspect-[3/4] h-full flex-shrink-0"
  >
    <div className="h-full w-full rounded-[0.875rem] bg-black flex flex-col justify-between p-8">
      <div>
        <p className="text-yellow-400 font-encode font-medium text-xl md:text-2xl">
          {renderStars(review.rating)}
        </p>
        <p className="mt-6 font-Pangram-Light font-[200] text-white text-sm md:text-[14px]">
          {review.comment}
        </p>
      </div>
      <p className="text-white font-[400] text-[18px] uppercase mt-4">
        {review.name}
      </p>
    </div>
  </div>
))}
</CardCarousel>
<Link href={'/testimonials'} className='flex gap-3 my-6 xl:hidden  items-center '>
          <SecondaryLink
            href="#"
            title="See Client Reactions"
            style="border border-[#100E10] hover:bg-[#100E10] hover:text-white flex flex-row gap-3 items-center justify-center rounded-full p-3 px-6 duration-0"
            hovered={linkHover}
            setHovered={setLinkHover}
          />
        </Link>
    </div>
  </div>
  )
}

export default TestimonyComp