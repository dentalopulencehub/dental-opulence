import Link from 'next/link'
import React from 'react'

const HealthSafetyBody = () => {
  return (
    <div className='lg:px-[100px] sm:px-[40px] px-[20px] py-20'>
        <div>
            <h2 className='font-Pangram-Bold text-[24px] font-[600]'>Your Health and Safety</h2>
            <p className='mt-2 text-[16px] font-[400] text-[#2D2D2D]'>Your health and safety are of paramount importance to us and are constantly reviewed in line with current regulations. Please notify a member of staff if you notice any area of concern so immediate action can be taken.</p>
        </div>
  
        <div className='mt-8'>
            <h2 className='font-Pangram-Bold text-[24px] font-[600]'>Patient Safety Charter</h2>
            <p className='mt-2 text-[16px] font-[400] text-[#2D2D2D]'>At Dental Opulence, we have a safety culture which ensures that patient safety is at the forefront of everyone’s minds, not only when delivering healthcare but also when setting objectives, developing procedures, and purchasing new products and equipment. Our culture is open and fair, allowing team members to discuss the challenges they face at work for the best interests of our patients.</p>
            <p>For patient safety, we:</p>
            <div className=''>
               <ul className='ml-7 text-[16px] font-[400] text-[#2D2D2D]'>
                 <li className='p-1 list-disc'>Follow the latest infection prevention guidelines, including those from NHS England.</li>
                 <li className='p-1 list-disc'>Use dental instruments that are single-use or are sterilised after use.</li>
                 <li className='p-1 list-disc'>Decontaminate work areas, including the dental chair, handheld equipment, and cupboard handles, between patients.</li>
                 <li className='p-1 list-disc'>Maintain a high standard of personal hygiene, including clinical clothing and the restricted wearing of jewellery.</li>
                 <li className='p-1 list-disc'>Monitor practice water for quality. Dental unit waterlines are disinfected and kept clear.</li>
                 <li className='p-1 list-disc'>Handle waste according to current regulations and dispose of it with appropriate carriers.</li>
                 <li className='p-1 list-disc'>Take expert advice if a team member may have a blood-borne infection. The team member will have an occupational health examination and follow the advice on their role in treating patients.</li>
                 <li className='p-1 list-disc'>Ensure all our team members are trained in safeguarding children and vulnerable adults and follow the practice safeguarding procedures, which are regularly monitored and reviewed</li>
               </ul>
            </div>
            {/* <p className=' text-[16px] font-[400] text-[#2D2D2D]'>Please note that blocking all cookies will have a negative impact upon the usability of many websites. If you block cookies, you may not be able to use all the features on our website.</p> */}
        </div>
        
          
        <div>
            <h2 className='font-Pangram-Bold text-[24px] font-[600]'>Clinical Governance System</h2>
            <p className='mt-2 text-[16px] font-[400] text-[#2D2D2D]'>We run a clinical governance system that uses integrated risk management to identify, assess, analyse, and manage all risks and incidents. The goal is continuous improvement in our care and service to you.</p>
        </div>
        <div>
            <h2 className='font-Pangram-Bold text-[24px] font-[600]'>Responsibility and Support</h2>
            <p className='mt-2 text-[16px] font-[400] text-[#2D2D2D]'>The Practice Manager has overall responsibility at the practice. The team is supported through regular meetings, staff training, personal development, and regular appraisals. The practice always welcomes questions, comments, and suggestions from patients.
            Please contact the Practice Manager if you have any questions or concerns.</p>
        </div>

     
    </div>
  )
}

export default HealthSafetyBody