
import React, { useState } from 'react';
import videoPlayButton from '../../../assets/fonts/Testimonial_Play button.svg';
import Image from 'next/image';

interface VideoCardProps {
  videoSrc: string;
  title: string;
  rating: number;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoSrc, title, rating }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
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
    <div className="p-4 rounded-lg">
      <div className="relative">
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full h-full rounded"
          onClick={togglePlayPause}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
        />
        {!isPlaying && (
          <Image
            src={videoPlayButton}
            alt="Play Button"
            className="absolute inset-0 m-auto cursor-pointer"
            onClick={togglePlayPause}
          />
        )}
      </div>
      <h3 className="mt-2 text-lg font-bold">{title}</h3>
      <div className="flex mt-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927C9.349 2.129 10.651 2.129 10.951 2.927L12.3 6.424L16.05 6.817C16.946 6.908 17.292 8.052 16.662 8.621L13.85 11.065L14.6 14.72C14.79 15.625 13.879 16.296 13.05 15.875L9.999 14.32L6.949 15.876C6.119 16.297 5.208 15.626 5.398 14.721L6.148 11.065L3.336 8.621C2.705 8.053 3.052 6.908 3.949 6.817L7.699 6.424L9.049 2.927Z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default VideoCard;
