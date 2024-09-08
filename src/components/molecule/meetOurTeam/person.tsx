import Image from 'next/image';
import React from 'react';

import img1 from '../../../../assets/ourTeam/img-1.svg';
import img2 from '../../../../assets/ourTeam/img-2.svg';
import img3 from '../../../../assets/ourTeam/img-3.svg';
import img4 from '../../../../assets/ourTeam/img-4.svg';
import img5 from '../../../../assets/ourTeam/img-5.svg';
import img6 from '../../../../assets/ourTeam/img-6.svg';
import img7 from '../../../../assets/ourTeam/img-7.svg';
import img8 from '../../../../assets/ourTeam/img-8.svg';
import img9 from '../../../../assets/ourTeam/img-9.svg';


const images = [img1, img2, img3, img4, img5, img6, img7, img8,img9];

interface PersonProps {
  id: number;
  name: string;
  onClick: () => void;
  active: boolean;
}

const Person: React.FC<PersonProps> = ({ id, name, onClick, active }) => {
  return (
    <div className="p-2 bg-[#F3F3F3] ">
      <div
        className={`h-[120px] w-[120px] rounded-full overflow-hidden cursor-pointer border-4 border-[#F3F3F3]${
          active ? 'border-4 border-[#C9C9C9]' : ''
        }`}
        onClick={onClick}
      >
        <Image
          width={120}
          height={120}
          src={images[id - 1]} // Use the imported images array
          alt={name}
          className={`h-[120px] w-[120px] rounded-full ${active ? 'filter hover:filter-none' : 'grayscale'}`}
        />
      </div>
    </div>
  );
};

export default Person;



