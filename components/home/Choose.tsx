import React, { useState } from 'react';
import { ChooseCardData } from '@/app/utils/constants';
import ChooseCards from '../cards/ChooseCards';

const Choose = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='flex justify-center'>
      <div className='p-4 md:p-8 lg:px-20'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>
          Why Choose <span className='gradient-text'>ToolsAi</span>
        </h1>
        <p className='text-sm md:text-base lg:text-lg'>
          It is a long established fact that a reader will be distracted by the readable content of a
          page when looking at its layout.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
          {ChooseCardData.map((item, i) => (
            <div key={i} className='w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0'>
              <ChooseCards
                isActive={i === activeCardIndex}
                onClick={() => handleCardClick(i)}
                iconUrl={item.iconUrl}
                title={item.title}
                description={item.description}
                buttonText='Learn More'
                play={true}
              />
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default Choose;
