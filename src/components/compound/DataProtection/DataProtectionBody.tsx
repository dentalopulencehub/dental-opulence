import Link from 'next/link'
import React from 'react'

const DataProtectionBody = () => {
  return (
    <div className='lg:px-[100px] sm:px-[40px] px-[20px] py-20'>
        <div>
            <h2 className='font-Pangram-Bold text-[24px] font-[600]'>Introduction</h2>
            <p className='mt-2 text-[16px] font-[400] text-[#2D2D2D]'>Dental Opulence complies with the Data Protection Act 1998 and the Freedom of Information Act 2000. This policy outlines our procedures for ensuring that personal information about patients is processed fairly and lawfully. For additional information, you can refer to the <Link href={'https://gdpr-info.eu/'}>GDPR guidelines.</Link></p>
        </div>


        <div className='mt-8'>
            <h2 className='font-Pangram-Bold text-[24px] font-[600]'>Purpose of Data Collection</h2>
            <p className='mt-2 text-[16px] font-[400] text-[#2D2D2D]'>To provide you with a high standard of dental care and attention, we need to hold personal information about you. This personal data comprises:</p>
            <div className=''>
               <ul className='ml-7 text-[16px] font-[400] text-[#2D2D2D]'>
                 <li className='p-1 list-disc'>Personal details such as your name, age, address, telephone numbers, email address, and your general medical practitioner.</li>
                 <li className='p-1 list-disc'>Your past and current medical and dental condition.</li>
                 <li className='p-1 list-disc'>Radiographs, clinical photographs, and study models.</li>
                 <li className='p-1 list-disc'>Information about the treatment we have provided or propose to provide (and its cost).</li>
                 <li className='p-1 list-disc'>Notes of conversations or incidents that might occur for which a record needs to be kept.</li>
                 <li className='p-1 list-disc'>Records of consent to treatment.</li>
                 <li className='p-1 list-disc'>Any correspondence (relating to you) with other healthcare professionals, such as referrals to specialists, for example.</li>
               </ul>
            </div>
            <p className=' text-[16px] font-[400] text-[#2D2D2D]'>We need to keep comprehensive and accurate personal data about our patients in order to provide them with safe and appropriate dental care.</p>
        </div>


        <div className='mt-8'>
            <h2 className='font-Pangram-Bold text-[24px] font-[600]'>Processing of Personal Data</h2>
            <p className='mt-2 text-[16px] font-[400] text-[#2D2D2D]'>We will process personal data that we hold about you in the following way:</p>
            <div className=''>
               <ul className='ml-7 text-[16px] font-[400] text-[#2D2D2D]'>
                 <li className='p-1 list-disc'>We will retain your dental records while you are a practice patient. If you cease to be a patient, we will continue to hold them for at least another eleven years, or in the case of children until they reach the age of 25, whichever is longer.</li>
                 <li className='p-1 list-disc'>Personal data about you is held in the practice’s computer system and/or in a manual filing system. The information is not accessible to the public, and only authorised members of staff have access to it. Our computer system has secure audit trails, and we back up information every working day.</li>
               </ul>
            </div>
        </div>
     

        <div className='mt-8'>
            <h2 className='font-Pangram-Bold text-[24px] font-[600]'>Disclosure of Personal Data</h2>
            <p className='mt-2 text-[16px] font-[400] text-[#2D2D2D]'>In order to provide proper and safe dental care, we may need to disclose personal information about you to:</p>
            <div className=''>
               <ul className='ml-7 text-[16px] font-[400] text-[#2D2D2D]'>
                 <li className='p-1 list-disc'>Your general medical practitioner.</li>
                 <li className='p-1 list-disc'>The hospital or community dental services.</li>
                 <li className='p-1 list-disc'>Other health professionals caring for you.</li>
                 <li className='p-1 list-disc'>Dental insurance companies of which you are a member.</li>
                 <li className='p-1 list-disc'>Private dental schemes of which you are a member.</li>
                
               </ul>
            </div>
            <p className=' text-[16px] font-[400] text-[#2D2D2D]'>Disclosure will take place on a “need-to-know” basis. Information will only be given to those individuals/organisations who need it to provide care to you and for the proper administration of government, whose personnel are also covered by strict confidentiality rules. The recipient will only be given the information they need to know for these purposes.
            <br/>In very limited circumstances or when required by law or by a court order, personal data may have to be disclosed to a third party not connected with your dental care. In all other situations, disclosure that is not covered by this policy will occur only when we have your specific consent. Where possible, you will be informed of these requests for disclosure.    
            </p>
        </div>



        <div className='mt-8'>
           <h2 className='font-Pangram-Bold text-[24px] font-[600]'>Access to Personal Data</h2>
           <p className='mt-2 text-[16px] font-[400] text-[#2D2D2D]'>You have the right to access the data that we hold about you and to receive a copy. Access may be obtained by making a request in writing. We will levy a fee of £10 for records that are copied. If a request is made to copy X-rays, an extra charge of £40 will be made. We will provide a copy of the record within 40 days of receipt of the request and fee, along with an explanation of your record if you require it.
           If you move to another dental practice, we may (at our discretion) loan original X-rays and provide copy notes directly to that practice free of charge on receipt of a written request from them.</p>
        </div>


        <div className='mt-8'>
           <h2 className='font-Pangram-Bold text-[24px] font-[600]'>Your Rights</h2>
           <p className='mt-2 text-[16px] font-[400] text-[#2D2D2D]'>If you do not wish for the personal data we hold about you to be disclosed or used in the way described in this policy, please discuss the matter with your dentist. You have the right to object, but please remember that this may affect our ability to provide you with dental care.
           For further information on data protection and GDPR, please refer to the <Link href={'https://gdpr-info.eu/'}> GDPR guidelines.</Link></p>
        </div>



        <div className='mt-8'>
            <h2 className='font-Pangram-Bold text-[24px] font-[600]'>Contact Information</h2>
            <p className='mt-2 text-[16px] font-[400] text-[#2D2D2D]'>If you have any questions or concerns regarding this policy or your personal data, please contact us at:</p>
           
            <div>
               <ul className='ml-7 text-[16px] font-[400] text-[#2D2D2D] mt-2'>
                 <li className='p-1 list-disc'>Our Location</li>
                   <li className='p-1 list-disc ml-4'>1190 Stratford Road, Hall Green, Birmingham, B28 8AB</li>
               </ul>

               <ul className='ml-7 text-[16px] font-[400] text-[#2D2D2D] mt-2'>
                 <li className='p-1 list-disc'>Phone</li>
                   <li className='p-1 list-disc ml-4'>0121 272 9229</li>
                   <li className='p-1 list-disc ml-4'>+447301253447</li>
               </ul>

               <ul className='ml-7 text-[16px] font-[400] text-[#2D2D2D] mt-2'>
                 <li className='p-1 list-disc'>Email</li>
                   <li className='p-1 list-disc ml-4'>info@do.co.uk</li>
                   
               </ul>
            </div>
           <p className='mt-2 text-[16px] font-[400] text-[#2D2D2D]'>We are committed to ensuring your personal information is handled with the utmost care and respect.</p>
        </div>

     
    </div>
  )
}

export default DataProtectionBody