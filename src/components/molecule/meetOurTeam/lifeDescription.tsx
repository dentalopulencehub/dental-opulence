import React from 'react';

import firstBoxIcon from '../../../../assets/ourTeam/meetOurTeamFirstBoxIcon.svg'
import Image from 'next/image';

interface DescriptionProps {
  description: string;  
  name: string;
  designation:string;
}

const LifeDescription: React.FC<DescriptionProps> = ({ name, description,designation }) => {
  return (
    <div className="py-8 px-10 bg-[#F3F3F3] rounded-[16px] w-full">
      <p className="mt-2 text-[19px] font-[500] ">{description}</p>
      <div className='flex justify-between items-center mt-7'>
        <h2 className="text-2xl font-bold ">{name}</h2>
        <Image src={firstBoxIcon} alt='firstBoxIcon' className=''/>
      </div>
      
      <p className='text-[16px] font-[400] mt-2'>{designation}</p>
    </div>
  );
};

export default LifeDescription;

