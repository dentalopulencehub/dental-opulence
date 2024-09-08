import Link from 'next/link'
import React from 'react'

const AppointmentTermsBody = () => {
  return (
    <div className='lg:px-[100px] sm:px-[40px] px-[20px] py-20'>
        <div>
            <h2 className='font-Pangram-Bold text-[24px] font-[600]'>Managing Missed and Cancelled Appointments at Dental Opulence</h2>
            <p className='mt-2 text-[16px] font-[400] text-[#2D2D2D]'>To manage our appointment system effectively and provide high-quality service, it is important that patients attend their appointments as planned. Appointments can be made or rescheduled by calling our practice. If you have any queries or concerns about an appointment, please call the practice to speak to our team.</p>
        </div>


        <div className='mt-8'>
            <h2 className='font-Pangram-Bold text-[24px] font-[600]'>Appointment Reminders</h2>
            <p className='mt-2 text-[16px] font-[400] text-[#2D2D2D]'>Email reminders are sent 24 hours before an appointment, and patients are requested to inform the practice of any changes to their contact details. Please note that email reminders are sent as a courtesy and may not be sent/received for reasons out of our control (IT failure, change in email address, etc.). Therefore, failure to attend due to not receiving an email will not be considered a valid exception to our policy.</p>
        </div>

        <div className='mt-8'>
            <h2 className='font-Pangram-Bold text-[24px] font-[600]'>Cancelling Appointments</h2>
            <p className='mt-2 text-[16px] font-[400] text-[#2D2D2D]'>If you are unable to keep your dental appointment, please call the practice giving us as much notice as possible—at least 2 full working days—so that we can offer your time slot to another patient. If less notice is given without a valid reason, the appointment will be considered to have been broken and may incur a charge.</p>
        </div>

        <div className='mt-8'>
            <h2 className='font-Pangram-Bold text-[24px] font-[600]'>Links to other websites</h2>
            <p className='mt-2 text-[16px] font-[400] text-[#2D2D2D]'>This privacy notice does not cover the links within this site linking to other websites. Those sites are not governed by this Privacy Policy, and if you have questions about how a site uses your information, you’ll need to check that site’s privacy statement.</p>
        </div>



  
        <div className='mt-8'>
            <h2 className='font-Pangram-Bold text-[24px] font-[600]'>Rescheduling or Delay of Appointments by the Practice</h2>
            <p className='mt-2 text-[16px] font-[400] text-[#2D2D2D]'>We will only reschedule or delay a patient’s appointment in unavoidable circumstances. In such cases, we will:</p>
            <div className=''>
               <ul className='ml-7 text-[16px] font-[400] text-[#2D2D2D]'>
                 <li className='p-1 list-disc'>Contact the patient as soon as we are aware of the need to reschedule or delay and explain the reason why.</li>
                 <li className='p-1 list-disc'>At the time of contact, offer the earliest next available appointment.</li>
                 <li className='p-1 list-disc'>If the patient is unable to commit to an appointment at that contact, we will ask the patient to contact us and will book a new appointment at the earliest time available.</li>
               </ul>
            </div>
            {/* <p className=' text-[16px] font-[400] text-[#2D2D2D]'>Please note that blocking all cookies will have a negative impact upon the usability of many websites. If you block cookies, you may not be able to use all the features on our website.</p> */}
        </div>
        

        <div className='mt-8'>
            <h2 className='font-Pangram-Bold text-[24px] font-[600]'>Cancellation of an Appointment or a Missed Appointment by the Patient</h2>
            <p className='mt-2 text-[16px] font-[400] text-[#2D2D2D]'>Failure to attend is defined as:</p>
            <div className=''>
               <ul className='ml-7 text-[16px] font-[400] text-[#2D2D2D]'>
                 <li className='p-1 list-disc'>Arriving late for an appointment (2 minutes late or more).</li>
                 <li className='p-1 list-disc'>Not arriving for an appointment.</li>
                 <li className='p-1 list-disc'>Not giving enough notice of not being able to attend – we require 2 full working days’ notice.</li>
                 <li className='p-1 list-disc'>Not arriving for an appointment.</li>
               </ul>
            </div>
            {/* <p className=' text-[16px] font-[400] text-[#2D2D2D]'>Please note that blocking all cookies will have a negative impact upon the usability of many websites. If you block cookies, you may not be able to use all the features on our website.</p> */}
        </div>
          
       
        <div className='mt-8'>
            <h2 className='font-Pangram-Bold text-[24px] font-[600]'>Private and Plan Appointments</h2>
            <p className='mt-2 text-[16px] font-[400] text-[#2D2D2D]'>Patients who attend a hygienist appointment pay a reservation fee. If you are unable to keep your appointment, please call the practice giving us as much notice as possible—at least 2 full working days—so that we can offer your time slot to another patient. If less notice is given without a valid reason, the appointment will be considered to have been broken, and the deposit will be lost. A new fee will need to be paid before a new appointment can be booked.
            If a patient fails to attend a private or plan dental appointment with the dentist, they will be charged for some or all of the cost of that appointment, in proportion to the length of the appointment and any laboratory fees incurred. The final decision is at the discretion of the practice owner. We reserve the right to ask for a deposit for private and plan appointments with our dentist, which will be forfeited in the event of failure to attend as outlined above. If more than two appointments are missed, future appointments may not be offered.</p>
        </div>

     
    </div>
  )
}

export default AppointmentTermsBody