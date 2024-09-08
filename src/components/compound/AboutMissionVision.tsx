import React, { ReactNode, useRef, useState } from "react";
import Image from "next/image";
import about_mission_logo from "../../../assets/images/do_logo.png";
import expert_dentist_img from "../../../assets/images/expert-dentists-img.svg";
import twoK_review_image from "../../../assets/images/2k-review-img.svg";
import threeK_clients_image from "../../../assets/images/3k-client-img.svg";
import { useScroll, motion, useTransform } from "framer-motion";
import AboutGetInTouch from "./AboutGetInTouch";

const AboutMissionVision = () => {
  const [showOverlay, setShowOverlay] = useState<any>(false)
  let value = `Our mission is to elevate the dental experience by combining state-of-the-art technology with personalised care, tailored to the unique needs of each patient. We are dedicated to promoting oral health and enhancing smiles, empowering our patients to achieve optimal dental wellness and confidence. At Dental Opulence, we are committed to creating a luxurious and transformative journey towards a brighter, healthier smile.`;

  let value2 = `Our vision at Dental Opulence is to revolutionise the dental industry by providing unparalleled service and creating an environment of opulence and comfort for our patients. We strive to exceed expectations, delivering exceptional results and ensuring the utmost satisfaction of every individual who walks through our doors.`;

  const element = useRef(null);
  const element2 = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.37", "start 0.15"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: element2,
    offset: ["start 0.95", "start 0.15"],
  });

  const words = value2.split(" ");
  const words2 = value.split(" ");
  const Card = ({ index,title, icon, activeIcon }: { index:number,title: string, icon: any, activeIcon: any }) => {
    return <div onClick={()=>setShowOverlay(index)} className='cursor-pointer rounded-lg group hover:bg-white w-full md:w-[25%] bg-[#2D2D2D] font-medium text-[#D0D0D0] hover:text-[#161616] flex flex-col gap-8 items-center aspect-[4/3] justify-center'>
      <div className="group-hover:hidden">{icon}</div>
      <div className="hidden group-hover:flex">{activeIcon}</div>
      <p>{title}</p>
    </div>
  }

  const Overlay = ({ children }: { children: ReactNode }) => {
    return <div onClick={()=>setShowOverlay(false)} className="fixed top-0 z-50 bg-transparent backdrop-blur-sm w-[100vw] h-[100vh] flex items-center justify-center">
      <div onClick={(e) => e.stopPropagation()} className="bg-[#222222] w-[30%] aspect-[2/1] flex flex-col items-center text-[#F2F2F2] p-8 justify-center rounded-xl text-l">
        <div className="flex w-full justify-end mb-4">
        <button onClick={()=>setShowOverlay(false)}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.16655 0.833286L0.833252 9.16659M0.833217 0.833252L9.16652 9.16655" stroke="white" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </button>
        </div>
        {children}
      </div>
    </div>
  }
  return (
    <div className="w-full bg-[#100E10]">
     {showOverlay && <Overlay>
        {showOverlay==1&&<p>Enter post code B28 8AB in your navigation or map application. You will arrive outside the practice where you can park for free (subject to availability).</p>}
        {showOverlay==2&&<p>We are a 3 minute walk from Hall Green Train Station. You can travel in from Snow Hill & Moor Street Stations via a 10 minute train ride.</p>}
        {showOverlay==3&&<p>We are situated on Stratford Road and have plenty of free parking for patients on site. This is subject to availability.</p>}
        {showOverlay==4&&<p>To streamline our appointment scheduling, please be aware of our 48-hour cancellation policy and the necessity of deposits when booking appointments. We understand the financial considerations of dental care and are pleased to offer 0% financing options for your convenience. Thank you for choosing our dental practice, where your oral health and convenience are our top priorities.</p>}
      </Overlay>}
      <div className=" w-full lg:px-[100px] sm:px-[40px] px-[20px] py-[80px] flex xl:flex-row flex-col justify-between gap-[70px] xl:gap-0">
        <div className="flex xl:flex-row flex-col gap-6 w-full">
          <div className="flex flex-col flex-wrap gap-6 justify-between xl:max-w-[425px] w-full">
            <div className="sm:max-w-[425px] w-full xl:h-[225px] bg-[#222222] rounded-2xl xs:p-10 p-7">
              <Image width={100} src={about_mission_logo} alt="" />
              <h3 className="text-white text-[30px] md:text-[48px] mt-[38px]">Who we are</h3>
            </div>
            <div className="w-full xl:min-h-[388px] bg-[#222222] rounded-2xl xs:p-10 p-7">
              <h4 className="text-white text-[34px]">Vision</h4>
              <h4
                className="text-white font-Pangram-Regular mt-6 text-[18px] leading-[23px] xl:text-left text-center flex flex-wrap"
                ref={element}
              >
                {words.map((word, index) => {
                  const start = index / words.length;
                  const end = start + 1 / words.length;
                  //console.log(start, end);
                  return (
                    <Word
                      key={index}
                      range={[start, end]}
                      progress={scrollYProgress}
                    >
                      {word}
                    </Word>
                  );
                })}
              </h4>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <div className=" w-full xl:min-h-[310px] bg-[#222222] rounded-2xl xs:p-10 p-7">
              <h4 className="text-white text-[34px]">Mission</h4>
              <h4
                className="text-white font-Pangram-Regular mt-6 text-[18px] leading-[23px] xl:text-left text-center flex flex-wrap"
                ref={element2}
              >
                {words2.map((word, index) => {
                  const start = index / words2.length;
                  const end = start + 1 / words2.length;
                  //console.log(start, end);
                  return (
                    <Word
                      key={index}
                      range={[start, end]}
                      progress={scrollYProgress2}
                    >
                      {word}
                    </Word>
                  );
                })}
              </h4>
            </div>
            <div className=" w-full xl:h-[310px] bg-[#222222] rounded-2xl flex sm:flex-row flex-col md:justify-around justify-between xs:p-10 p-7 sm:gap-0 gap-10">
              <div className="flex flex-col items-center justify-center gap-2">
                <Image src={expert_dentist_img} alt="" />
                <h3 className="text-[48px] text-white">3+</h3>
                <p className="text-base text-center mr-3 font-Pangram-Regular text-[#D0D0D0]">
                CLIENT SATISFACTION
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <Image src={twoK_review_image} alt="" />
                <div className="flex ">
                 <h3 className="text-[48px] text-white">5</h3>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="mt-3">
                   <path d="M12 2.5l2.47 7.68h8.07l-6.53 4.75 2.47 7.68L12 17.86 5.52 22.61 8 14.93 1.47 10.18h8.07L12 2.5z"/>
                  </svg>
                 </div>
               

                <p className="text-base font-Pangram-Regular text-[#D0D0D0]">
                  RATING
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <Image src={threeK_clients_image} alt="" />
                <h3 className="text-[48px] text-white">500+</h3>
                <p className="text-base font-Pangram-Regular text-[#D0D0D0]">
                  SMILE TRANSMORMATIONS
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="flex gap-4 px-4 md:px-24 mb-12">
        <Card index={1} title="Arriving by Car" icon={<svg width="60" height="48" viewBox="0 0 60 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.6204 47.2907H6.58398C8.44183 47.2907 9.8979 45.8592 9.8979 44.0014V39.7832C15.4736 40.1346 23.534 40.3853 29.9872 40.3853C36.4661 40.3853 44.5265 40.1346 50.1022 39.7832V44.0014C50.1022 45.8592 51.5336 47.2907 53.4161 47.2907H56.3797C58.2633 47.2907 59.7193 45.8592 59.7193 44.0014V29.5124C59.7193 25.2932 58.8654 22.9071 56.5308 19.8942L54.4211 17.1567C53.4922 12.6374 51.8347 7.89101 50.9561 6.03316C49.6243 3.19494 47.0133 1.51173 43.6736 1.06066C41.9915 0.859229 36.4918 0.709229 29.9872 0.709229C23.5093 0.709229 18.0086 0.884943 16.3265 1.06066C12.9868 1.46244 10.3758 3.19494 9.04505 6.03208C8.16648 7.89101 6.5079 12.6374 5.57898 17.1567L3.46933 19.8942C1.13362 22.9082 0.280762 25.2932 0.280762 29.5124V44.0014C0.280762 45.8592 1.7379 47.2907 3.6204 47.2907ZM10.6522 15.0728C11.2543 12.3107 12.4597 8.71923 13.2879 7.26209C13.9661 6.08351 14.6947 5.57994 16.0511 5.4053C17.9583 5.12887 22.2279 4.9778 29.9872 4.9778C37.7722 4.9778 42.0408 5.07851 43.95 5.4053C45.2808 5.60566 46.0083 6.08244 46.7122 7.26316C47.5661 8.69458 48.6954 12.3096 49.3479 15.0728C49.575 16.0017 49.1979 16.3532 48.2186 16.2782C44.0508 16.0274 39.0783 15.751 29.9872 15.751C20.9229 15.751 15.9504 16.0274 11.7815 16.2782C10.8022 16.3532 10.4508 16.0017 10.6511 15.0728M11.6797 33.8817C9.29469 33.8817 7.51183 32.0732 7.51183 29.7128C7.51183 27.3267 9.29469 25.5449 11.6797 25.5449C14.0658 25.5449 15.8486 27.3267 15.8486 29.7128C15.8486 32.0732 14.0658 33.8807 11.6808 33.8807M48.3193 33.8807C45.9333 33.8807 44.1515 32.0721 44.1515 29.7117C44.1515 27.3257 45.9333 25.5439 48.3193 25.5439C50.6797 25.5439 52.4872 27.3257 52.4872 29.7117C52.4872 32.0721 50.6797 33.8807 48.3193 33.8807ZM23.3336 32.7246C21.5754 32.7246 20.3443 31.4689 20.3443 29.7107C20.3443 27.9278 21.5754 26.6978 23.3336 26.6978H36.6675C38.4247 26.6978 39.6558 27.9278 39.6558 29.7107C39.6558 31.4678 38.4247 32.7246 36.6665 32.7246H23.3336Z" fill="#fff" />
        </svg>
        } activeIcon={<svg width="60" height="48" viewBox="0 0 60 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.6204 47.2907H6.58398C8.44183 47.2907 9.8979 45.8592 9.8979 44.0014V39.7832C15.4736 40.1346 23.534 40.3853 29.9872 40.3853C36.4661 40.3853 44.5265 40.1346 50.1022 39.7832V44.0014C50.1022 45.8592 51.5336 47.2907 53.4161 47.2907H56.3797C58.2633 47.2907 59.7193 45.8592 59.7193 44.0014V29.5124C59.7193 25.2932 58.8654 22.9071 56.5308 19.8942L54.4211 17.1567C53.4922 12.6374 51.8347 7.89101 50.9561 6.03316C49.6243 3.19494 47.0133 1.51173 43.6736 1.06066C41.9915 0.859229 36.4918 0.709229 29.9872 0.709229C23.5093 0.709229 18.0086 0.884943 16.3265 1.06066C12.9868 1.46244 10.3758 3.19494 9.04505 6.03208C8.16648 7.89101 6.5079 12.6374 5.57898 17.1567L3.46933 19.8942C1.13362 22.9082 0.280762 25.2932 0.280762 29.5124V44.0014C0.280762 45.8592 1.7379 47.2907 3.6204 47.2907ZM10.6522 15.0728C11.2543 12.3107 12.4597 8.71923 13.2879 7.26209C13.9661 6.08351 14.6947 5.57994 16.0511 5.4053C17.9583 5.12887 22.2279 4.9778 29.9872 4.9778C37.7722 4.9778 42.0408 5.07851 43.95 5.4053C45.2808 5.60566 46.0083 6.08244 46.7122 7.26316C47.5661 8.69458 48.6954 12.3096 49.3479 15.0728C49.575 16.0017 49.1979 16.3532 48.2186 16.2782C44.0508 16.0274 39.0783 15.751 29.9872 15.751C20.9229 15.751 15.9504 16.0274 11.7815 16.2782C10.8022 16.3532 10.4508 16.0017 10.6511 15.0728M11.6797 33.8817C9.29469 33.8817 7.51183 32.0732 7.51183 29.7128C7.51183 27.3267 9.29469 25.5449 11.6797 25.5449C14.0658 25.5449 15.8486 27.3267 15.8486 29.7128C15.8486 32.0732 14.0658 33.8807 11.6808 33.8807M48.3193 33.8807C45.9333 33.8807 44.1515 32.0721 44.1515 29.7117C44.1515 27.3257 45.9333 25.5439 48.3193 25.5439C50.6797 25.5439 52.4872 27.3257 52.4872 29.7117C52.4872 32.0721 50.6797 33.8807 48.3193 33.8807ZM23.3336 32.7246C21.5754 32.7246 20.3443 31.4689 20.3443 29.7107C20.3443 27.9278 21.5754 26.6978 23.3336 26.6978H36.6675C38.4247 26.6978 39.6558 27.9278 39.6558 29.7107C39.6558 31.4678 38.4247 32.7246 36.6665 32.7246H23.3336Z" fill="#161616" />
        </svg>} />
        <Card index={2} title="Arriving by Train" icon={<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9391 48.9305C14.7451 48.5037 13.7644 47.9065 12.9289 47.0711C10.4931 44.6352 10.083 40.9648 10.014 34.375H49.986C49.917 40.9648 49.5069 44.6352 47.0711 47.0711C46.2358 47.9064 45.2553 48.5035 44.0616 48.9303L46.6775 54.1619C47.1406 55.0881 46.7651 56.2144 45.8389 56.6775C44.9127 57.1406 43.7865 56.7652 43.3234 55.8389L40.2635 49.7192C37.6426 50 34.315 50 30 50C25.6854 50 22.3581 50 19.7373 49.7193L16.6775 55.8389C16.2144 56.7652 15.0881 57.1406 14.1619 56.6775C13.2357 56.2144 12.8603 55.0881 13.3234 54.1619L15.9391 48.9305ZM36.875 40C36.875 38.9645 37.7145 38.125 38.75 38.125H42.5C43.5355 38.125 44.375 38.9645 44.375 40C44.375 41.0355 43.5355 41.875 42.5 41.875H38.75C37.7145 41.875 36.875 41.0355 36.875 40ZM17.5 38.125C16.4645 38.125 15.625 38.9645 15.625 40C15.625 41.0355 16.4645 41.875 17.5 41.875H21.25C22.2855 41.875 23.125 41.0355 23.125 40C23.125 38.9645 22.2855 38.125 21.25 38.125H17.5Z" fill="white" />
          <path d="M50 30.625V25C50 15.5719 50 10.8579 47.0711 7.92893C44.8739 5.73172 41.672 5.1828 36.2291 5.04567C35.5539 5.02866 35 5.57454 35 6.25C35 9.01143 32.7614 11.25 30 11.25C27.2386 11.25 25 9.01143 25 6.25C25 5.57454 24.4461 5.02866 23.7709 5.04567C18.328 5.1828 15.1261 5.73172 12.9289 7.92893C10 10.8579 10 15.5719 10 25V30.625H50Z" fill="white" />
        </svg>
        } activeIcon={<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9391 48.9305C14.7451 48.5037 13.7644 47.9065 12.9289 47.0711C10.4931 44.6352 10.083 40.9648 10.014 34.375H49.986C49.917 40.9648 49.5069 44.6352 47.0711 47.0711C46.2358 47.9064 45.2553 48.5035 44.0616 48.9303L46.6775 54.1619C47.1406 55.0881 46.7651 56.2144 45.8389 56.6775C44.9127 57.1406 43.7865 56.7652 43.3234 55.8389L40.2635 49.7192C37.6426 50 34.315 50 30 50C25.6854 50 22.3581 50 19.7373 49.7193L16.6775 55.8389C16.2144 56.7652 15.0881 57.1406 14.1619 56.6775C13.2357 56.2144 12.8603 55.0881 13.3234 54.1619L15.9391 48.9305ZM36.875 40C36.875 38.9645 37.7145 38.125 38.75 38.125H42.5C43.5355 38.125 44.375 38.9645 44.375 40C44.375 41.0355 43.5355 41.875 42.5 41.875H38.75C37.7145 41.875 36.875 41.0355 36.875 40ZM17.5 38.125C16.4645 38.125 15.625 38.9645 15.625 40C15.625 41.0355 16.4645 41.875 17.5 41.875H21.25C22.2855 41.875 23.125 41.0355 23.125 40C23.125 38.9645 22.2855 38.125 21.25 38.125H17.5Z" fill="#161616" />
          <path d="M50 30.625V25C50 15.5719 50 10.8579 47.0711 7.92893C44.8739 5.73172 41.672 5.1828 36.2291 5.04567C35.5539 5.02866 35 5.57454 35 6.25C35 9.01143 32.7614 11.25 30 11.25C27.2386 11.25 25 9.01143 25 6.25C25 5.57454 24.4461 5.02866 23.7709 5.04567C18.328 5.1828 15.1261 5.73172 12.9289 7.92893C10 10.8579 10 15.5719 10 25V30.625H50Z" fill="#161616" />
        </svg>
        } />
        <Card index={3} title="Parking your Car" icon={<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 10C35.3044 10 40.3914 12.1071 44.1422 15.8579C47.8929 19.6086 50 24.6957 50 30C50 35.3043 47.8929 40.3914 44.1422 44.1421C40.3914 47.8929 35.3044 50 30 50C24.6957 50 19.6086 47.8929 15.8579 44.1421C12.1072 40.3914 10 35.3043 10 30C10 24.6957 12.1072 19.6086 15.8579 15.8579C19.6086 12.1071 24.6957 10 30 10ZM8.00002 13.5C8.19302 13.2271 8.43878 12.9957 8.72277 12.8194C9.00677 12.6431 9.32323 12.5256 9.65344 12.4737C9.98365 12.4219 10.3209 12.4368 10.6453 12.5175C10.9696 12.5983 11.2745 12.7433 11.5418 12.9439C11.8092 13.1445 12.0336 13.3967 12.2017 13.6856C12.3699 13.9745 12.4784 14.2941 12.5209 14.6257C12.5634 14.9572 12.539 15.2939 12.4491 15.6159C12.3592 15.9378 12.2056 16.2384 11.9975 16.5C9.07092 20.3916 7.49206 25.1308 7.50002 30C7.50002 35.0675 9.17502 39.7375 11.9975 43.5C12.3953 44.0304 12.5662 44.6972 12.4724 45.3536C12.3786 46.0099 12.028 46.6022 11.4975 47C10.9671 47.3978 10.3003 47.5686 9.64397 47.4749C8.98759 47.3811 8.39535 47.0304 7.99752 46.5C4.42181 41.7429 2.49206 35.9511 2.50002 30C2.50002 23.8125 4.54752 18.095 8.00002 13.5ZM48.5 13C49.0305 12.6022 49.6972 12.4314 50.3536 12.5251C51.01 12.6189 51.6022 12.9696 52 13.5C55.5766 18.2567 57.5073 24.0486 57.5 30C57.5 36.1875 55.4525 41.905 52 46.5C51.807 46.7729 51.5613 47.0044 51.2773 47.1806C50.9933 47.3569 50.6768 47.4744 50.3466 47.5263C50.0164 47.5781 49.6791 47.5632 49.3548 47.4825C49.0304 47.4017 48.7256 47.2567 48.4582 47.0561C48.1909 46.8555 47.9665 46.6033 47.7983 46.3144C47.6301 46.0255 47.5216 45.7059 47.4791 45.3743C47.4366 45.0428 47.4611 44.7061 47.551 44.3841C47.6409 44.0622 47.7944 43.7616 48.0025 43.5C50.9291 39.6084 52.508 34.8692 52.5 30C52.5 24.9325 50.825 20.2625 48.0025 16.5C47.6047 15.9696 47.4339 15.3028 47.5277 14.6464C47.6214 13.9901 47.9696 13.3978 48.5 13ZM32.5 20H26.25C25.3178 20 24.419 20.3473 23.729 20.974C23.0389 21.6008 22.607 22.4621 22.5175 23.39L22.5 23.75V37.5C22.5007 38.1372 22.7447 38.7501 23.1821 39.2134C23.6196 39.6768 24.2174 39.9556 24.8535 39.9929C25.4896 40.0303 26.116 39.8233 26.6046 39.4143C27.0932 39.0054 27.4073 38.4252 27.4825 37.7925L27.5 37.5V35H32.5C33.4849 35 34.4602 34.806 35.3701 34.4291C36.2801 34.0522 37.1069 33.4997 37.8033 32.8033C38.4998 32.1069 39.0522 31.2801 39.4291 30.3701C39.806 29.4602 40 28.4849 40 27.5C40 26.5151 39.806 25.5398 39.4291 24.6299C39.0522 23.7199 38.4998 22.8931 37.8033 22.1967C37.1069 21.5003 36.2801 20.9478 35.3701 20.5709C34.4602 20.194 33.4849 20 32.5 20ZM32.5 25C33.1372 25.0007 33.7501 25.2447 34.2134 25.6821C34.6768 26.1195 34.9556 26.7174 34.993 27.3535C35.0303 27.9896 34.8233 28.6159 34.4144 29.1046C34.0054 29.5932 33.4253 29.9072 32.7925 29.9825L32.5 30H27.5V25H32.5Z" fill="white" />
        </svg>
        } activeIcon={<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 10C35.3044 10 40.3914 12.1071 44.1422 15.8579C47.8929 19.6086 50 24.6957 50 30C50 35.3043 47.8929 40.3914 44.1422 44.1421C40.3914 47.8929 35.3044 50 30 50C24.6957 50 19.6086 47.8929 15.8579 44.1421C12.1072 40.3914 10 35.3043 10 30C10 24.6957 12.1072 19.6086 15.8579 15.8579C19.6086 12.1071 24.6957 10 30 10ZM8.00002 13.5C8.19302 13.2271 8.43878 12.9957 8.72277 12.8194C9.00677 12.6431 9.32323 12.5256 9.65344 12.4737C9.98365 12.4219 10.3209 12.4368 10.6453 12.5175C10.9696 12.5983 11.2745 12.7433 11.5418 12.9439C11.8092 13.1445 12.0336 13.3967 12.2017 13.6856C12.3699 13.9745 12.4784 14.2941 12.5209 14.6257C12.5634 14.9572 12.539 15.2939 12.4491 15.6159C12.3592 15.9378 12.2056 16.2384 11.9975 16.5C9.07092 20.3916 7.49206 25.1308 7.50002 30C7.50002 35.0675 9.17502 39.7375 11.9975 43.5C12.3953 44.0304 12.5662 44.6972 12.4724 45.3536C12.3786 46.0099 12.028 46.6022 11.4975 47C10.9671 47.3978 10.3003 47.5686 9.64397 47.4749C8.98759 47.3811 8.39535 47.0304 7.99752 46.5C4.42181 41.7429 2.49206 35.9511 2.50002 30C2.50002 23.8125 4.54752 18.095 8.00002 13.5ZM48.5 13C49.0305 12.6022 49.6972 12.4314 50.3536 12.5251C51.01 12.6189 51.6022 12.9696 52 13.5C55.5766 18.2567 57.5073 24.0486 57.5 30C57.5 36.1875 55.4525 41.905 52 46.5C51.807 46.7729 51.5613 47.0044 51.2773 47.1806C50.9933 47.3569 50.6768 47.4744 50.3466 47.5263C50.0164 47.5781 49.6791 47.5632 49.3548 47.4825C49.0304 47.4017 48.7256 47.2567 48.4582 47.0561C48.1909 46.8555 47.9665 46.6033 47.7983 46.3144C47.6301 46.0255 47.5216 45.7059 47.4791 45.3743C47.4366 45.0428 47.4611 44.7061 47.551 44.3841C47.6409 44.0622 47.7944 43.7616 48.0025 43.5C50.9291 39.6084 52.508 34.8692 52.5 30C52.5 24.9325 50.825 20.2625 48.0025 16.5C47.6047 15.9696 47.4339 15.3028 47.5277 14.6464C47.6214 13.9901 47.9696 13.3978 48.5 13ZM32.5 20H26.25C25.3178 20 24.419 20.3473 23.729 20.974C23.0389 21.6008 22.607 22.4621 22.5175 23.39L22.5 23.75V37.5C22.5007 38.1372 22.7447 38.7501 23.1821 39.2134C23.6196 39.6768 24.2174 39.9556 24.8535 39.9929C25.4896 40.0303 26.116 39.8233 26.6046 39.4143C27.0932 39.0054 27.4073 38.4252 27.4825 37.7925L27.5 37.5V35H32.5C33.4849 35 34.4602 34.806 35.3701 34.4291C36.2801 34.0522 37.1069 33.4997 37.8033 32.8033C38.4998 32.1069 39.0522 31.2801 39.4291 30.3701C39.806 29.4602 40 28.4849 40 27.5C40 26.5151 39.806 25.5398 39.4291 24.6299C39.0522 23.7199 38.4998 22.8931 37.8033 22.1967C37.1069 21.5003 36.2801 20.9478 35.3701 20.5709C34.4602 20.194 33.4849 20 32.5 20ZM32.5 25C33.1372 25.0007 33.7501 25.2447 34.2134 25.6821C34.6768 26.1195 34.9556 26.7174 34.993 27.3535C35.0303 27.9896 34.8233 28.6159 34.4144 29.1046C34.0054 29.5932 33.4253 29.9072 32.7925 29.9825L32.5 30H27.5V25H32.5Z" fill="#161616" />
        </svg>
        } />
        <Card index={4} title="Important Information" icon={<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.9999 0.75C33.9624 0.75 40.6396 3.51581 45.5628 8.439C50.486 13.3622 53.2518 20.0394 53.2518 27.0019C53.2518 33.9643 50.486 40.6416 45.5628 45.5647C40.6396 50.4879 33.9624 53.2537 26.9999 53.2537C20.0375 53.2537 13.3602 50.4879 8.43704 45.5647C3.51386 40.6416 0.748047 33.9643 0.748047 27.0019C0.748047 20.0394 3.51386 13.3622 8.43704 8.439C13.3602 3.51581 20.0375 0.75 26.9999 0.75ZM30.9374 16.8675C32.8874 16.8675 34.4699 15.5137 34.4699 13.5075C34.4699 11.5012 32.8837 10.1475 30.9374 10.1475C28.9874 10.1475 27.4124 11.5012 27.4124 13.5075C27.4124 15.5137 28.9874 16.8675 30.9374 16.8675ZM31.6237 37.9687C31.6237 37.5675 31.7624 36.525 31.6837 35.9325L28.6012 39.48C27.9637 40.1512 27.1649 40.6162 26.7899 40.4925C26.6198 40.4299 26.4776 40.3086 26.3889 40.1505C26.3002 39.9924 26.2709 39.8078 26.3062 39.63L31.4437 23.4C31.8637 21.3412 30.7087 19.4625 28.2599 19.2225C25.6762 19.2225 21.8737 21.8437 19.5599 25.17C19.5599 25.5675 19.4849 26.5575 19.5637 27.15L22.6424 23.5987C23.2799 22.935 24.0224 22.4662 24.3974 22.5937C24.5822 22.6601 24.7336 22.7962 24.8191 22.9728C24.9046 23.1495 24.9175 23.3527 24.8549 23.5387L19.7624 39.69C19.1737 41.58 20.2874 43.4325 22.9874 43.8525C26.9624 43.8525 29.3099 41.295 31.6274 37.9687H31.6237Z" fill="white" />
        </svg>
        } activeIcon={<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.9999 0.75C33.9624 0.75 40.6396 3.51581 45.5628 8.439C50.486 13.3622 53.2518 20.0394 53.2518 27.0019C53.2518 33.9643 50.486 40.6416 45.5628 45.5647C40.6396 50.4879 33.9624 53.2537 26.9999 53.2537C20.0375 53.2537 13.3602 50.4879 8.43704 45.5647C3.51386 40.6416 0.748047 33.9643 0.748047 27.0019C0.748047 20.0394 3.51386 13.3622 8.43704 8.439C13.3602 3.51581 20.0375 0.75 26.9999 0.75ZM30.9374 16.8675C32.8874 16.8675 34.4699 15.5137 34.4699 13.5075C34.4699 11.5012 32.8837 10.1475 30.9374 10.1475C28.9874 10.1475 27.4124 11.5012 27.4124 13.5075C27.4124 15.5137 28.9874 16.8675 30.9374 16.8675ZM31.6237 37.9687C31.6237 37.5675 31.7624 36.525 31.6837 35.9325L28.6012 39.48C27.9637 40.1512 27.1649 40.6162 26.7899 40.4925C26.6198 40.4299 26.4776 40.3086 26.3889 40.1505C26.3002 39.9924 26.2709 39.8078 26.3062 39.63L31.4437 23.4C31.8637 21.3412 30.7087 19.4625 28.2599 19.2225C25.6762 19.2225 21.8737 21.8437 19.5599 25.17C19.5599 25.5675 19.4849 26.5575 19.5637 27.15L22.6424 23.5987C23.2799 22.935 24.0224 22.4662 24.3974 22.5937C24.5822 22.6601 24.7336 22.7962 24.8191 22.9728C24.9046 23.1495 24.9175 23.3527 24.8549 23.5387L19.7624 39.69C19.1737 41.58 20.2874 43.4325 22.9874 43.8525C26.9624 43.8525 29.3099 41.295 31.6274 37.9687H31.6237Z" fill="#161616" />
        </svg>
        } />
      </div>
      <AboutGetInTouch />

    </div>
  );
};

export default AboutMissionVision;

const Word = ({
  children,
  range,
  progress,
}: {
  children: any;
  range: any;
  progress: any;
}) => {
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className="mr-2">
      {characters.map((char: any, index: number) => {
        const start = range[0] + index * step;
        const end = range[0] + step * (index + 1);
        return (
          <Character key={index} range={[start, end]} progress={progress}>
            {char}
          </Character>
        );
      })}
    </span>
  );
};

const Character = ({
  children,
  range,
  progress,
}: {
  children: any;
  range: any;
  progress: any;
}) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return <motion.span style={{ opacity }}>{children}</motion.span>;
};
