import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HomePopularServicesType } from "../../../types";
import pointer_right_dark from "../../../assets/images/pointer-right-dark.svg";

const PopularServiceCard = ({
  description,
  href,
  image,
  title,
  image_inverted,
}: HomePopularServicesType) => {
  const [hover, setHover] = useState(false);

  // Function to truncate text to a specific length
  const truncateText = (text: string, length: number) => {
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  return (
    <Link href={href}>
      <div
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        className="w-full  p-6  hover:bg-[#000000] hover:shadow-xl ease-in-out transition border border-[#E8E8E8] rounded-[24px] duration-0 flex flex-col sm:items-start items-center lg:h-auto h-[320px]" // Set a fixed height here
      >
        {/* Hide the image on mobile devices */}
        <div className="sm:block hidden">
          <Image src={hover ? image_inverted : image} alt={title} />
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <h3
            className={` ${
              hover ? "text-white" : "text-[#100E10]"
            } text-[18px] sm:text-[24px] font-inter font-semibold text-center sm:text-left`}
          >
            {title}
          </h3>
          <p
            className={`mt-4 lg:hidden block text-[14px] sm:text-[14px] font-Pangram-Regular text-center sm:text-left ${
              hover ? "text-[#D6D6D6]" : "text-[#4E4E4E] leading-[22px]"
            } flex-grow`}
          >
            {truncateText(description, 80)} {/* Truncate the description to 80 characters */}
          </p>

          <p
            className={`mt-4 hidden lg:block text-[14px] sm:text-[14px] font-Pangram-Regular text-center sm:text-left ${
              hover ? "text-[#D6D6D6]" : "text-[#4E4E4E] leading-[22px]"
            } flex-grow`}
          >
            {description} {/* Truncate the description to 80 characters */}
          </p>
        </div>
        <Link href={href} className="mt-auto">
          <button
            className={`py-2 px-4 border border-[#100E10] lg:mt-7 rounded-[32px] ${
              hover ? "bg-white" : "bg-transparent"
            }`}
          >
            <p className="flex items-center gap-[10px]  justify-center sm:justify-start">
              <span
                className={`text-xs ${
                  hover ? "text-[#100E10]" : "text-[#100E10]"
                }`}
              >
                More Info
              </span>
              <Image src={pointer_right_dark} alt="" />
            </p>
          </button>
        </Link>
      </div>
    </Link>
  );
};

export default PopularServiceCard;
