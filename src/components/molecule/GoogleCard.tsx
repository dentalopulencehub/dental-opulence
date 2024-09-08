import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import googleLogo from "../../../assets/images/logos_google.svg"

const GoogleCard: React.FC = () => {
  const arr = ['', '', '', '', '']
  return (
    <div className="w-full md:max-w-[19.64rem] md:mr-[1.4rem] flex-shrink-0">
      <div className="md:pt-[2.625rem] pt-[1rem] card pb-[2rem] md:pb-[2.933rem] w-full md:h-full md:min-h-[24.5rem] min-h-[16rem] md:px-8 px-4 rounded-[0.875rem] bg-gray-100 flex flex-col justify-between group google-card">
        <div className="flex items-center gap-4">
          <FcGoogle size={48} className="md:w-[60px] md:h-[60px]"/>
          <div className="text-xl font-encode text-[#BDBDBD] group-hover:text-[#FEC600]">
            <div className="flex gap-1">
              {arr.map((star, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 29 29"
                  className="transition-all md:w-[20px] md:h-[20px]"
                  fill="none"
                >
                  <g clipPath="url(#clip0_550_1606)">
                    <path
                      d="M28.9242 11.1232C28.7332 10.5359 28.2124 10.1202 27.5986 10.0647L19.2272 9.30465L15.9187 1.55891C15.6745 0.989844 15.1187 0.622559 14.5 0.622559C13.8814 0.622559 13.3254 0.989844 13.0827 1.55891L9.77423 9.30465L1.40145 10.0647C0.787689 10.1213 0.267959 10.537 0.0759084 11.1232C-0.115036 11.7104 0.0613055 12.3544 0.525501 12.7616L6.85365 18.3104L4.9878 26.5283C4.85128 27.1326 5.08581 27.7574 5.58718 28.1198C5.85667 28.3156 6.17329 28.4134 6.49101 28.4134C6.76404 28.4134 7.03729 28.3409 7.28134 28.1948L14.5 23.8786L21.7174 28.1948C22.2469 28.5112 22.9126 28.4822 23.4129 28.1198C23.9143 27.7574 24.1488 27.1326 24.0123 26.5283L22.1464 18.3104L28.4746 12.7616C28.9386 12.3544 29.1151 11.7117 28.9242 11.1232Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_550_1606">
                      <rect width="29" height="29" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              ))}
            </div>
            <p className="text-[#1E1E1E] mt-2 text-xs md:text-sm"> 30+ reviews </p>
          </div>
        </div>
        <Link href='https://rb.gy/20dj6m' target='blank' className="mt-auto">
          <div className="flex border-black border-b pb-3 items-center">
          <Image src={googleLogo} alt="Google" className="w-24 md:w-32" />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default GoogleCard