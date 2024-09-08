import { useRef, useState } from 'react';
import Image from 'next/image';
import videoPlayButton from '../../../assets/fonts/Testimonial_Play button.svg';

interface VideoProps {
  src: string;
  title: string;
  description: string;
}

const videos: VideoProps[] = [
  { src: '/videoTestimonials/video1.mp4', title: 'Akhmed Yakoob', description: 'Director Of Mourice Andrews' },
  { src: '/videoTestimonials/video2.mp4', title: 'Luis Hasanaj', description: 'Director Lintech Group' },
  { src: '/videoTestimonials/video3.mp4', title: 'Luis Hasanaj', description: 'Director Lintech Group' },
  { src: '/videoTestimonials/video4.mp4', title: 'Luis Hasanaj', description: 'Director Lintech Group' },
  { src: '/videoTestimonials/video5.mp4', title: 'Luis Hasanaj', description: 'Director Lintech Group' },
];

const VideoTestimonials = () => {
  return (
   <div className=''>
   
 <div className="grid grid-cols-1 md:grid-cols-2 text-[#fff] lg:grid-cols-3 gap-5 p-4 w-full lg:px-[100px] sm:px-[40px] px-[20px] bg-[#100E10]">

      {videos.map((video, index) => (
        <VideoCard key={index} {...video} />
      ))}
    </div>
   </div> 
   
  );
};

const VideoCard: React.FC<VideoProps> = ({ src, title, description }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="relative ">
      <video
        ref={videoRef}
        src={src}
        className="w-[390px] h-[395px] object-cover  rounded-[7px]"
        controls={false}
      />
      <button
        onClick={togglePlayPause}
        className="absolute inset-0 flex items-center justify-center bg-transparent mb-20 mr-3"
      >
        {!isPlaying && (
          <Image
            src={videoPlayButton}
            alt="Play Button"
            width={50}
            height={50}
          />
        )}
      </button>
      <div className="p-2 my-5">
        <h3 className="text-[22px] font-bold">{title}</h3>
        <p  className='text-[15px] text-[#AFAFAF] mt-1'>{description}</p>
        <div className="flex space-x-1 mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-yellow-500"
            >
              <path d="M12 2a1 1 0 01.894.553l3.147 6.385 7.065.646a1 1 0 01.568 1.762l-5.225 4.718 1.535 6.772a1 1 0 01-1.517 1.092L12 19.63l-5.467 3.298a1 1 0 01-1.517-1.092l1.535-6.772-5.225-4.718a1 1 0 01.568-1.762l7.065-.646L11.106 2.553A1 1 0 0112 2z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonials;


// import React, { useRef, useState } from "react";
// import { BsPlayCircleFill } from "react-icons/bs";


// interface VideoRefs {
//   video1: React.RefObject<HTMLVideoElement>;
//   video2: React.RefObject<HTMLVideoElement>;
//   video3: React.RefObject<HTMLVideoElement>;
//   video4: React.RefObject<HTMLVideoElement>;
//   video5: React.RefObject<HTMLVideoElement>;
// }

// interface IsPlayingState {
//   video1: boolean;
//   video2: boolean;
//   video3: boolean;
//   video4: boolean;
//   video5: boolean;
// }

// const VideoTestimonials: React.FC = () => {
//   const [isPlaying, setIsPlaying] = useState<IsPlayingState>({ video1: false, video2: false, video3: false, video4: false, video5: false });
//   const videoRefs: VideoRefs = {
//     video1: useRef<HTMLVideoElement>(null),
//     video2: useRef<HTMLVideoElement>(null),
//     video3: useRef<HTMLVideoElement>(null),
//     video4: useRef<HTMLVideoElement>(null),
//     video5: useRef<HTMLVideoElement>(null),
//   };

//   const handlePlayPause = (videoId: keyof VideoRefs) => {
//     const videoElement = videoRefs[videoId].current;

//     if (videoElement) {
//       if (isPlaying[videoId]) {
//         videoElement.pause();
//       } else {
//         videoElement.play();
//       }

//       setIsPlaying((prev) => ({ ...prev, [videoId]: !prev[videoId] }));
//     }
//   };

//   return (
//     <div className={`w-full mt-24 mb-14`}>
//       <div className="w-full lg:px-[100px] sm:px-[40px] px-[20px] py-[80px] bg-[#000]">
//         <div className="mt-12 flex flex-col items-center">
          
          
//           <h2 className="font-Pangram  font-bold md:text-[48px] text-[42px] leading-[53px] text-[#100E10] text-center sm:max-w-[593px]">
//             Our patient success story showcase
//           </h2>
//           <p className="text-[#4C4C4C] text-[18px] font-Pangram-Regular text-center sm:max-w-[453px] mt-4 mb-14">
//               Dental Opulence and Smile Transformation,Take a look at some of our results below
//           </p>
          



//           <div className="grid md:grid-cols-3 gap-5 ">
//         {['video1', 'video2', 'video3', 'video4', 'video5'].map((videoId, index) => (
//           <div key={videoId} className="relative mx-auto my-4">
//             <video
//               ref={videoRefs[videoId as keyof VideoRefs]}
//               id={videoId}
//               className="w-full h-full object-cover rounded-lg"
//               playsInline
//               controls={false}
//               onClick={() => handlePlayPause(videoId as keyof VideoRefs)}
//             >
//               <source src={`/videoTestimonials/${videoId}.mp4`} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//             {!isPlaying[videoId as keyof IsPlayingState] && (
//               <div
              
//                 className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-lg"
//                 onClick={() => handlePlayPause(videoId as keyof VideoRefs)}
//               >
//                 <BsPlayCircleFill className="text-white text-6xl" />
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoTestimonials;



// components/VideoTestimonials.tsx

