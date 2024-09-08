"use client";
import React, { useRef, useState } from "react";
import { BsPlayCircleFill } from "react-icons/bs";


interface VideoRefs {
  video1: React.RefObject<HTMLVideoElement>;
  video2: React.RefObject<HTMLVideoElement>;
  video3: React.RefObject<HTMLVideoElement>;
}

interface IsPlayingState {
  video1: boolean;
  video2: boolean;
  video3: boolean;
}

const CompositeBondingHowLong: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<IsPlayingState>({ video1: false, video2: false, video3: false });
  const videoRefs: VideoRefs = {
    video1: useRef<HTMLVideoElement>(null),
    video2: useRef<HTMLVideoElement>(null),
    video3: useRef<HTMLVideoElement>(null),
  };

  const handlePlayPause = (videoId: keyof VideoRefs) => {
    const videoElement = videoRefs[videoId].current;

    if (videoElement) {
      if (isPlaying[videoId]) {
        videoElement.pause();
      } else {
        videoElement.play();
      }

      setIsPlaying((prev) => ({ ...prev, [videoId]: !prev[videoId] }));
    }
  };

  return (
    <div className={`w-full md:mt-24 mb-14`}>
      <div className="w-full lg:px-[100px] sm:px-[40px] px-[20px] py-[80px] bg-white">
        <div className="mt-12 flex flex-col items-center">
          
          
          <h2 className="font-Pangram  font-bold md:text-[48px] text-[35px] leading-[53px] text-[#100E10] text-center sm:max-w-[593px]">
            Our Patients’<br/> Success Stories
          </h2>
          <p className="text-[#4C4C4C] text-[18px] font-Pangram-Regular text-center sm:max-w-[453px] mt-4 mb-14">
             Explore Our Smile Transformations at Dental Opulence. View our impressive results below.
          </p>
          



          <div className="grid md:grid-cols-3 gap-6 ">
        {['video1', 'video2', 'video3'].map((videoId, index) => (
          <div key={videoId} className="relative mx-auto my-4">
            <video
              ref={videoRefs[videoId as keyof VideoRefs]}
              id={videoId}
              className="w-full h-full object-cover rounded-lg"
              playsInline
              controls={false}
              onClick={() => handlePlayPause(videoId as keyof VideoRefs)}
            >
              <source 
                src={
                  videoId === "video1" 
                    ? `https://player.vimeo.com/progressive_redirect/playback/1007244718/rendition/1080p/file.mp4?loc=external&signature=338dd884244b3928a1892afd0b982d5c010646b43bbcbd965b44f485b0ca6075` 
                    : videoId === "video2" 
                    ? `https://player.vimeo.com/progressive_redirect/playback/1007244473/rendition/1080p/file.mp4?loc=external&signature=5ab98ed61b8caaa110eb6e514e84eaaa6af70518e81c11da6677a00e3600bc15` 
                    : `https://player.vimeo.com/progressive_redirect/playback/1007243878/rendition/1080p/file.mp4?loc=external&signature=1ab524e2fb5c0892ad29aa36accd451173f0469e793154e59e9663146f0354d5`
                } 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
            {!isPlaying[videoId as keyof IsPlayingState] && (
              <div
              
                className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-lg"
                onClick={() => handlePlayPause(videoId as keyof VideoRefs)}
              >
                <BsPlayCircleFill className="text-white text-6xl" />
              </div>
            )}
          </div>
        ))}
      </div>












        </div>
      </div>
    </div>
  );
};

export default CompositeBondingHowLong;

