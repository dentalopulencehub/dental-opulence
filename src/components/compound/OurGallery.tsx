import Image from 'next/image'
import React from 'react'
import image from "../../../assets/images/Video.png"
const OurGallery = () => {
  return (

        <div className='w-full'>
            <h3 className='w-full mx-auto z-[5] text-center text-5xl font-semibold'>Explore our gallery</h3>
            <Image src={image} height={1024} alt='gallery' className='w-full h-full p-8' width={1920}/>
        </div>
  
  )
}

export default OurGallery