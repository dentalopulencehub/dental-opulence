import Image from 'next/image'
import React from 'react'
import image from "../../../assets/images/Video.png"
const OurGallery = () => {
  return (

        <div className='w-full lg:pt-12'>
            <h3 className='w-full absolute xl:-mb-20 -mb-10 mx-auto z-[5] text-center lg:text-5xl text-3xl font-inter font-semibold'>Explore our gallery</h3>
            <Image src={image} height={1024} alt='gallery' className='w-full h-full px-5 py-4' width={1920}/>
        </div>
  
  )
}

export default OurGallery