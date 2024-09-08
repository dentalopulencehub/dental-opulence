// import React from "react";
// import { AboutTeamCard } from '../molecule'
// import { team } from '../../../constants'

// const AboutTeam = () => {
//   return (
//     <div className=" w-full">
//       <div className="bg-white w-full lg:px-[100px] sm:px-[40px] px-[20px] py-[80px] xl:gap-0">
//         <h2 className="text-[34px] text-[#161616] font-Pangram-Regular" >Meet Our Team</h2>
//         <div className="flex flex-wrap gap-10 mt-12">
//             {team.map((team, index) => (
//                 <AboutTeamCard key={index} {...team} />
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutTeam;


import { useState } from 'react';
import Person from '../molecule/meetOurTeam/person';
import LifeDescription from '../molecule/meetOurTeam/lifeDescription';

import firstBoxIcon from '../../../assets/ourTeam/meetOurTeamFirstBoxIcon.svg'
import Image from 'next/image';

const people = [
  { 
    id: 1,
    name: 'Dr Ali Al Hassan.', 
    description: "Ali graduated from Cardiff University with an honour’s degree, having achieved many awards such as the Margaret Probert Prize. Since then Ali has dedicated himself to learning the most up to date and cutting-edge techniques in Dentistry. Early on Ali worked in Hospital helping those most vulnerable where he completed his sedation training and the Member of the Faculty of Dental Surgery (MFDS) Examination from the Royal College of Surgeons, Glagow. After gaining an acute insight into pain management, surgery and Sedation Ali moved on to follow his passion – Cosmetic Dentistry. Since then Ali has completed numerous courses in Cosmetic Dentistry, most recently a Post Graduate Diploma in the Progressive Management of Advanced Aesthetic Restorative Dentistry with distinction. Ali is very passionate about his profession with a particular emphasis on minimally invasive restorative treatment, Invisalign, Bonding and the management of anxious patients. He has invested heavily in postgraduate education with some of the best in the country and prides himself on keeping up to date with new treatments to offer the highest quality evidence-based care for his patients. Ali won Best Young Dentist as voted by The Dentistry Awards, recognising his achievements to date. Furthermore, he is a multiple published author in leading publications such as Nature, The British Dental Journal and Young Dentist Magazine. Perhaps Ali’s best quality is he gets on really well with everyone he meets and is easy to talk to. He loves putting patients at ease. Ali believes that it is important that he gets to know you so I can find the best treatment for you. He will always take the time to listen to you, to fully understand your needs, and discuss all of the options available to you. In his spare time Ali loves sports, he can talk about it all day!",
    designation:"Co-Founder / Clinical Director"
  },
  { 
    id: 2, 
    name: 'Adam Samar', 
    description: "As the Operations Director at a leading specialist medical accountancy firm, Adam Samar brings over a decade of expertise, particularly in the dental industry. His passion for brand growth and development has been instrumental in building Dental Opulence, a premier dental practice, from the ground up alongside co-founder Dr Ali Al Hassan. From the inception of Dental Opulence, Adam has driven its growth and established it as one of the leading providers of cosmetic and general dentistry. His strategic vision and hands-on approach have enabled the practice to flourish, ensuring every aspect of the operation runs smoothly and efficiently. With a robust background in finance, Adam has managed teams of over 30 professionals, ensuring operational excellence and financial stability. His experience includes overseeing financial operations, streamlining processes, and implementing best practices to drive efficiency and growth. This expertise has been crucial in the development and success of Dental Opulence, where financial acumen and strategic planning go hand in hand. Building a culture that prioritises patient satisfaction and care has been a cornerstone of Adam’s approach. By focusing on personalised service and maintaining high standards of clinical excellence, Dental Opulence has earned a loyal client base and recognition from other leaders in the industry. Together with Dr Ali Al Hassan, he has recruited and developed a team of skilled professionals who share their vision and values. Always seeking to enhance the patient experience, Adam has implemented the latest technologies and treatment methodologies. This forward-thinking approach ensures that Dental Opulence stays ahead in the competitive landscape of dental care. His role encompasses strategic planning, business development, and continuous improvement. His ability to navigate the complexities of the dental industry and drive sustainable growth has been pivotal to the success of Dental Opulence. Through dedication, innovative thinking, and a relentless pursuit of excellence, Adam Samar has played a key role in transforming Dental Opulence into a distinguished dental practice that sets the standard for quality care and operational efficiency.",
    designation:"Co-Founder / Managing Director"
   },
  {
     id: 3,
     name: 'Amelia Jamil', 
     description: "Amelia started as a Dental Nurse in February 2023, she has worked in both NHS and private dentistry. Amelia started at Dental Opulence as one of the first nurses to come on board back in November 2023. Amelia loves to assist in many treatments. In general dentistry her favourite treatments to assist in are Extractions and Root Canals. And in Cosmetic Dentistry her favourite treatment to assist in is Composite Bonding! In her spare time she enjoys going to the gym, baking, reading books and painting.", 
     designation:"Nurse"
    },
  { 
    id: 4, 
    name: 'Hassan Karim', 
    description: "Hassan is our head of patient experience and such is dedicated to making the patient journey as smooth as possible. From site management, social media and security Hassan ensured that patients have a flawless, punctual and safe experience here at Dental Opulence. You can always identify Hassan from his amazing wit and infectious smile!", 
    designation:"Operational Manager"
  },
  { 
    id: 5, 
    name: 'Dr. Asad Abbas', 
    description: "Dr. Asad Abbas is a passionate, dedicated, and personable dentist who approaches the quest for a beautiful smile with both success and fun. His love for people is only matched by his enthusiasm and energy for dentistry. Dr. Abbas embraces challenges and opportunities with unparalleled commitment to helping each patient achieve their dental goals. After completing his Bachelor of Dental Surgery at the University of Manchester, Dr. Abbas was invited to work in the West Midlands, where he spent his early years training and gaining valuable experience in cosmetic dentistry and dental implantology. Dr. Abbas has had the privilege of working with many master technicians and ceramists, leading to genuine friendships and a shared passion for creating unique cosmetic results for each patient. Over the years, their collaboration has resulted in countless new smiles for their patients. Actively involved in the dental community, Dr. Abbas is a member of the Local Dental Committee and participates in various West Midlands study clubs and dental organisations. Committed to continuous learning, he continuously enhances his knowledge by attending courses worldwide, including completing a Practical Implantology course in Egypt. In addition to his own education, Dr. Abbas also finds joy in teaching others. Since 2021, he has been serving as a PLVE Trainer, a prestigious role that involves training and mentoring newly qualified dentists from his practice. Outside of dentistry, Dr. Abbas enjoys spending quality time with his family and friends. He is also an avid footballer and plays for a local team on weekends. Dr. Asad Abbas BDS is a well-rounded individual dedicated to both his profession and personal interests.", 
    designation:"Cosmetic / General Dentist"
  },
  { 
    id: 6, 
    name: 'Dr Nazar Syed', 
    description: "Since graduating in 2013, Nazar has undertaken extensive training in oral surgery in several hospitals. This has involved participating in major deformity, trauma and cancer surgeries. During his hospital posts, Nazar also became involved in training and teaching of younger colleagues in oral surgery. This passion for teaching led Nazar to complete a post graduate certificate in medical education and he now runs hands-on oral surgery courses for dentists as well mentoring dentists in oral surgery and sedation. He has also undertaken training and post graduate qualifications in dental implants and conscious sedation for very anxious patients. Nazar's clinical practice is limited to oral surgery, implant dentistry and sedation dentistry. He is very experienced with dealing with nervous patients and receives a large number of referrals from other dentists to help treat anxious and nervous patients. Nazar has attended national and international conferences both as a contributor and as an attendee.Outside of work, Nazar enjoys an active lifestyle with a particular passion for both playing and watching football. His other great love is travelling and food, and his dream job is to be a travelling food journalist/chef like the Hairy Bikers!", 
    designation:"Implantologist "
  },
  { 
    id: 7, 
    name: 'Betul Sitki ', 
    description: "Betul Sitki graduated from dental school in 2020 in Istanbul, Turkey. She actively worked until September 2023 and is currently pursuing a master's in Advanced General Dentistry. Her hobbies include long-distance running, cycling, and swimming (she attends races in different cities), playing the piano, and traveling. She grew up in Canada. After graduating from dental school, she mainly focused on aesthetic dentistry and developed a passion for dental photography.", 
    designation:"Nurse "
  },
  { 
    id: 8, 
    name: 'Inayah Sajad', 
    description: "Inayah joined Dental Opulence in January 2024 as a Dental Nurse. Inayah has always enjoyed dentistry and found it very interesting. She qualified in 2021 and has been working as a Dental Nurse since.Cosmetic Dentistry is her favourite! Although she has nursed for all types of dental treatments including implants, surgical extractions and even procedures done under sedation. Inayah likes to spend her free time going out with friends and family." ,
    designation:"Nurse"
  },
  { 
    id: 9, 
    name: 'Anahita Salehi ', 
    description: "Anahita Salehi graduated from Birjand Dental School in Iran in 2019 and worked as a dedicated dental professional until 2023. Currently, she is pursuing a master's degree in Dental Materials at the University of Birmingham.In her free time, Anahita enjoys painting, hitting the gym, and she has a particular passion for reading, and discovering new cuisines. After graduation, Anahita gained extensive experience in various areas of dentistry, including aligners, aesthetic dentistry, and general dental treatments." ,
    designation:"Nurse"
  },
  
];

const AboutTeam = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <div className="md:grid md:grid-cols-12 w-full lg:px-[100px] sm:px-[40px] px-[20px] py-[90px] gap-6 ">

<div className='md:grid col-span-6 gap-6 md:h-[860px]'>
  <div className='bg-[#F3F3F3] p-10 rounded-[16px] md:h-[330px]'>
     <div className='flex justify-between '>
       <h3 className='font-[700] text-[28px] text-[#222222]'>Meet Our Team</h3>
       <Image src={firstBoxIcon} alt='firstBoxIcon'/>
     </div>
     <div className='mt-5'>
        <h2 className='md:text-[48px] text-[38px] font-[700] text-[#222222]'>Leadership Rooted <br/>in Experience</h2>
     </div>
  </div>

  <div className="md:flex md:flex-wrap grid grid-cols-2 w-full bg-[#F3F3F3] p-10 rounded-[16px] md:mt-0 mt-5 md:h-[530px]">
    {people.map((person) => (
      <Person
        key={person.id}
        id={person.id}
        name={person.name}
        onClick={() => setSelectedPerson(person)}
        active={selectedPerson.id === person.id}
      />
    ))}
  </div>
</div>


 
      <div className="md:col-span-6 w-full md:mt-0 mt-5">
        <LifeDescription name={selectedPerson.name} description={selectedPerson.description} designation={selectedPerson.designation}/>
      </div>

    </div>
  );
};

export default AboutTeam;