import React, { useState } from 'react';
import VideoTestimonialStrokeLine from './videoTestimonialStrokeLine';
import VideoCard from './videoCard';


// Define videos with specific paths and titles
const videos = {
  all: [
    { src: `https://player.vimeo.com/progressive_redirect/playback/1007252296/rendition/1080p/file.mp4?loc=external&signature=a536a7f638b02c81477aeb5ad1597166cd0806ca6bd643d32b515788bdb05aec`, title: `Composite Veneers`, rating: 5 },
    { src: `https://player.vimeo.com/progressive_redirect/playback/1007252052/rendition/1080p/file.mp4?loc=external&signature=0c4a0ee8b166731ed261f0377b81a948f705f283778563e5e61306f10dca4dac`, title: `Composite Edge Bonding`, rating: 5 },
    { src: `https://player.vimeo.com/progressive_redirect/playback/1007251742/rendition/1080p/file.mp4?loc=external&signature=db3a783f46a92d91e479536069063be2509121da350d9bfb9dfe567cb949134c`, title: `Composite Veneers`, rating: 5 },
    { src: `https://player.vimeo.com/progressive_redirect/playback/1007250810/rendition/1080p/file.mp4?loc=external&signature=4daea12c843b028060f2219292a3e6752e15545fd00bc9e8ef866e5a41bd9ea9`, title: `Edge Bonding For Two Teeth`, rating: 5 },
    { src: `https://player.vimeo.com/progressive_redirect/playback/1007249288/rendition/1080p/file.mp4?loc=external&signature=ceb252194fdf9d8c70401d2bdb69dec9db3ee2b36c2f363d8bec421af2940e54`, title: `Composite Veneers`, rating: 5 },
    { src: `https://player.vimeo.com/progressive_redirect/playback/1007248948/rendition/1080p/file.mp4?loc=external&signature=ce2b8603d9488f4e2bc777f16262ab94c966d77c8f2ac346bae9aec10783b84b`, title: `Composite Veneers`, rating: 5 },
    { src: `https://player.vimeo.com/progressive_redirect/playback/1007248717/rendition/1080p/file.mp4?loc=external&signature=06256c575a952eecb2f7224941cb78405717a3ddf8ddf5308cce41bbcb63d880`, title: `Edge Bonding`, rating: 5 },
    { src: `https://player.vimeo.com/progressive_redirect/playback/1007248417/rendition/1080p/file.mp4?loc=external&signature=45b2ac88e5ae0223fe23cd6f5317db1dec02c3040de093647703a212354f462b`, title: `Edge Bonding`, rating: 5 },
    { src: `https://player.vimeo.com/progressive_redirect/playback/1007248225/rendition/1080p/file.mp4?loc=external&signature=4539990c0b849f67e98143043f64c7c951ac6064e42f936e70c3c4fad07a3422`, title: `Edge Bonding`, rating: 5 },
    { src: `https://player.vimeo.com/progressive_redirect/playback/1007246908/rendition/720p/file.mp4?loc=external&signature=78d9c28bc7b452b74da3ead60b4921c225c5fe0819364092bfb1a600cfeffafd`, title: `Edge Bonding`, rating: 5 },
    { src: `https://player.vimeo.com/progressive_redirect/playback/1007246267/rendition/720p/file.mp4?loc=external&signature=78119f5974af39b1feaf885e91d17aef13fe32fb958e9a51093cfaba2c8d23ac`, title: `Edge Bonding`, rating: 5 },
    { src: `https://player.vimeo.com/progressive_redirect/playback/1007245687/rendition/720p/file.mp4?loc=external&signature=9fa53bd9a342fbf8cf8911f43c75d733b1c56955454a7e9f4cc7ee7d587c335d`, title: `Edge Bonding`, rating: 5 },
    { src: `https://player.vimeo.com/progressive_redirect/playback/1007245281/rendition/720p/file.mp4?loc=external&signature=0486978a97719666e6de0d6b539d79ac7169b35a8fc765777e4c32cb4d8dc732`, title: `Composite Veneers`, rating: 5 },
  ],
  reactions: [
    { src: `https://player.vimeo.com/progressive_redirect/playback/1007246908/rendition/720p/file.mp4?loc=external&signature=78d9c28bc7b452b74da3ead60b4921c225c5fe0819364092bfb1a600cfeffafd`, title: `Composite Veneers`, rating: 5 },
    { src: `https://player.vimeo.com/progressive_redirect/playback/1007246267/rendition/720p/file.mp4?loc=external&signature=78119f5974af39b1feaf885e91d17aef13fe32fb958e9a51093cfaba2c8d23ac`, title: `Composite Edge Bonding`, rating: 5 },
    { src: `https://player.vimeo.com/progressive_redirect/playback/1007245687/rendition/720p/file.mp4?loc=external&signature=9fa53bd9a342fbf8cf8911f43c75d733b1c56955454a7e9f4cc7ee7d587c335d`, title: `Composite Veneers`, rating: 5 },
    { src: `https://player.vimeo.com/progressive_redirect/playback/1007245281/rendition/720p/file.mp4?loc=external&signature=0486978a97719666e6de0d6b539d79ac7169b35a8fc765777e4c32cb4d8dc732`, title: `Porcelain veneers`, rating: 5 },
  ],
  before: [
    { src: `https://player.vimeo.com/progressive_redirect/playback/1007252296/rendition/1080p/file.mp4?loc=external&signature=a536a7f638b02c81477aeb5ad1597166cd0806ca6bd643d32b515788bdb05aec`, title: `Edge Bonding For Two Teeth`, rating: 5 },
    { src: `https://player.vimeo.com/progressive_redirect/playback/1007252052/rendition/1080p/file.mp4?loc=external&signature=0c4a0ee8b166731ed261f0377b81a948f705f283778563e5e61306f10dca4dac`, title: `Composite Veneers`, rating: 5 },
    { src: `https://player.vimeo.com/progressive_redirect/playback/1007251742/rendition/1080p/file.mp4?loc=external&signature=db3a783f46a92d91e479536069063be2509121da350d9bfb9dfe567cb949134c`, title: `Composite Veneers`, rating: 5 },
    { src: `https://player.vimeo.com/progressive_redirect/playback/1007250810/rendition/1080p/file.mp4?loc=external&signature=4daea12c843b028060f2219292a3e6752e15545fd00bc9e8ef866e5a41bd9ea9`, title: `Edge Bonding`, rating: 5 },
    { src: `https://player.vimeo.com/progressive_redirect/playback/1007249288/rendition/1080p/file.mp4?loc=external&signature=ceb252194fdf9d8c70401d2bdb69dec9db3ee2b36c2f363d8bec421af2940e54`, title: `Edge Bonding`, rating: 5 },
    { src: `https://player.vimeo.com/progressive_redirect/playback/1007248948/rendition/1080p/file.mp4?loc=external&signature=ce2b8603d9488f4e2bc777f16262ab94c966d77c8f2ac346bae9aec10783b84b`, title: `Edge Bonding`, rating: 5 },
    { src: `https://player.vimeo.com/progressive_redirect/playback/1007248717/rendition/1080p/file.mp4?loc=external&signature=06256c575a952eecb2f7224941cb78405717a3ddf8ddf5308cce41bbcb63d880`, title: `Edge Bonding`, rating: 5 },
    { src: `/https://player.vimeo.com/progressive_redirect/playback/1007248417/rendition/1080p/file.mp4?loc=external&signature=45b2ac88e5ae0223fe23cd6f5317db1dec02c3040de093647703a212354f462b`, title: `Edge Bonding`, rating: 5 },
    { src: `https://player.vimeo.com/progressive_redirect/playback/1007248225/rendition/1080p/file.mp4?loc=external&signature=4539990c0b849f67e98143043f64c7c951ac6064e42f936e70c3c4fad07a3422`, title: `Edge Bonding`, rating: 5 },
  ],
};

const VideoGallary: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'reactions' | 'before'>('all');

  return (
    <div className="bg-[#100E10] lg:px-[100px] sm:px-[40px] px-[20px]">
      <div className="text-[#fff] md:container">
        <div>
          <VideoTestimonialStrokeLine />
        </div>
        <div className="flex justify-between gap-4 w-full py-7">
          {['all', 'reactions', 'before'].map((category) => (
            <button
              key={category}
              className={`w-full py-3 ${
                activeCategory === category
                  ? 'bg-white text-black text-[16px] font-[500]'
                  : 'bg-[#383638] text-[#AFAFAF] text-[16px] font-[500]'
              } rounded-full shadow`}
              onClick={() => setActiveCategory(category as 'all' | 'reactions' | 'before')}
            >
              {category === 'before' ? 'Before & After' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className="mb-14">
          <VideoTestimonialStrokeLine />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos[activeCategory].map((video, index) => (
            <VideoCard key={index} videoSrc={video.src} title={video.title} rating={video.rating} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGallary;
