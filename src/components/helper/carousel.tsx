import useCarousel from "../../../hooks/useCarousel";
import React, { ReactNode } from "react";

const Carousel = ({
  children,
  className,
  direction,
  setDirection
}: {
  children: ReactNode;
  className?: string;
  direction: "Left" | "right" | null;
  setDirection: React.Dispatch<React.SetStateAction<"Left" | "right" | null>>;
}) => {
  const { carouselRef, next, prev } = useCarousel();

  React.useEffect(() => {
    if (direction === "Left") {
      prev();
      setDirection(null);
    } else if (direction === "right") {
      next();
      setDirection(null);
    }
  }, [direction]);

  return (
    <div className={`relative ${className}`}>
     {/*  <button
        className="absolute left-0 top-1/3 text-2xl z-[45] text-[#F46329] prev"
        onClick={prev}
      >
        {"<"}
      </button>
      <button
        className="absolute right-0 top-1/3 text-2xl z-[45] text-[#F46329] next"
        onClick={next}
      >
        {">"}
      </button> */}
      <div className="carousel no-scrollbar relative py-2">
        <div className="lg:mx-auto pl-4 container overflow-x-visible relative">
          <ul
            ref={carouselRef}
            className=" w-screen md:pl-10 flex flex-col items-center lg:flex-row gap-5 relative transition-transform duration-[0.2s] ease-[ease-in-out]"
          >
            {children}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
