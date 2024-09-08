import React, {  } from 'react'
import { testi_video_studies } from '../../../constants'
import CaseButton from '../atom/CaseButton'
import VideoTestiCaseButton from '../atom/videoTestiCaseButton'



const VideoTestimonialSelectOption = () => {

  
    return (
        <div className='bg-white' >
            <div className='bg-[#100E10]  w-full h-full lg:px-[100px] sm:px-[40px] px-[20px] gap-[42px] relative' >
                <div className='border-y border-y-[#605E60] overflow-x-scroll flex flex-row gap-[10px] py-8 whitespace-nowrap' >
                    {testi_video_studies.map((study, index) => <VideoTestiCaseButton key={index} {...study} /> )}
                </div>
            </div>
        </div>
    )
}

export default VideoTestimonialSelectOption
