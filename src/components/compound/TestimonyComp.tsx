'use client'
import React, { useState, ReactNode, useEffect } from 'react'
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
  const [offset, setOffset] = useState(0);
  const [cardSize, setCardSize] = useState(340); // Default card size (including margin)
  const childrenArray = React.Children.toArray(children);
  const isMobile = width <= BREAKPOINTS.sm;
  const visibleCards = isMobile ? 1 : width > BREAKPOINTS.lg ? 3 : 2;
  
  useEffect(() => {
    // Adjust card size based on screen width
    if (isMobile) {
      setCardSize(width);
    } else {
      setCardSize(340); // Default desktop card size
    }
  }, [width, isMobile]);

  const CAN_SHIFT_LEFT = offset < 0;
  const CAN_SHIFT_RIGHT = Math.abs(offset) < cardSize * (childrenArray.length - visibleCards);
  
  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) return;
    setOffset((pv) => Math.min(0, pv + cardSize));
  };
  
  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) return;
    setOffset((pv) => Math.max(-(cardSize * (childrenArray.length - visibleCards)), pv - cardSize));
  };

  return (
    <section className="bg-transparent" ref={ref}>
      <div className="relative overflow-hidden">
        <div className="mx-auto lg:max-w-6xl">
          <motion.div
            animate={{ x: offset }}
            className="flex"
          >
            {React.Children.map(children, (child, index) => (
              <div 
                key={index} 
                style={{ 
                  width: cardSize, 
                  flexShrink: 0, 
                  padding: isMobile ? 0 : '0 10px',
                  height: isMobile ? 'auto' : '400px' // Fixed height for larger screens
                }}
                className="flex"
              >
                {child}
              </div>
            ))}
          </motion.div>
        </div>
        {childrenArray.length > visibleCards && (
          <>
            <motion.button
              initial={false}
              animate={{ x: CAN_SHIFT_LEFT ? "0%" : "-100%" }}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-30 rounded-r-xl bg-slate-100/30 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3"
              onClick={shiftLeft}
            >
              <FiChevronLeft />
            </motion.button>
            <motion.button
              initial={false}
              animate={{ x: CAN_SHIFT_RIGHT ? "0%" : "100%" }}
              className="absolute  right-0 lg:right-10 top-1/2 -translate-y-1/2 z-30 rounded-l-xl bg-slate-100/30 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3"
              onClick={shiftRight}
            >
              <FiChevronRight />
            </motion.button>
          </>
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
    <div className="md:container mx-auto md:px-14 px-5 mb-[6.6rem] md:mt-14 mt-10">
      <div>
        <p className="">
          <span className="text-[#000] font-Pangram-Regular text-[16px] font-[500]">Online Reviews</span>
          <Image src={underline_vector} alt="underline_vector" />
        </p>
        <div className='md:flex justify-between items-center'>
          <p className="md:text-[34px] text-[28px] font-encode font-[700] mt-3 leading-[42px]">
            Your Reliable Dentist for <br/>Optimal Oral Health
          </p>
          <Link href={'/testimonials'} className='flex gap-3 items-center  md:px-7 py-2 '>
            <SecondaryLink
              href="#"
              title="See Client Reactions"
              style="border border-[#100E10] hover:bg-[#100E10] hover:text-white flex flex-row gap-3 items-center justify-center rounded-[32px] w-[280px] h-[56px] duration-0"
              hovered={linkHover}
              setHovered={setLinkHover}
            />
          </Link>
        </div>
      </div>
      <div className='flex flex-col mt-6 md:flex-row items-center'>
        <GoogleCard />
        <div className="w-full flex-grow md:w-auto mt-6 md:mt-0">
        <CardCarousel>
  {reviews.map((review, i) => (
    <div
      key={i}
      className="w-full h-full flex-shrink-0"
    >
      <div className="h-full w-full rounded-[0.875rem] bg-black flex flex-col justify-between p-8">
        <div>
          <p className="text-yellow-400 font-encode font-medium text-xl md:text-2xl">
            {renderStars(review.rating)}
          </p>
          <p className="mt-6 font-Pangram-Light font-[200] text-white text-[14px]">
            {review.comment}
          </p>
        </div>
        <p className="text-white font-[500] text-[14px] md:text-[18px] uppercase mt-4">
          {review.name}
        </p>
      </div>
    </div>
  ))}
</CardCarousel>
        </div>
      </div>
    </div>
  )
}

export default TestimonyComp