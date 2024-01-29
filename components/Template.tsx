import React, { useState } from 'react';
import { FilterTemplates, templateCardsData } from "@/app/utils/constants";
import ChooseCards from './cards/ChooseCards';


const Templates = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='flex justify-center'>
      <div className='p-4 md:p-8 lg:px-20 mt-10'>
        <h1 className="text-2xl md:text-3xl font-bold">
          <span className="gradient-text">60+</span> Build-In Templates to Use
        </h1>
        <div className='flex flex-wrap gap-2 mt-4 md:mt-8'>
          {FilterTemplates.map((filter) => (
            <button
              key={filter.text}
              className={`p-1 border-2 border-[#8CE3E6] rounded-md ${filter.text === "Business Tool" ? "gradient-sm-filter" : ""
                }`}
            >
              {filter.text}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {templateCardsData.map((item, i) => (
            <div key={i} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
              <ChooseCards
                isActive={i === activeCardIndex}
                onClick={() => handleCardClick(i)}
                iconUrl={item.iconUrl}
                title={item.title}
                description={item.description}
                buttonText='view'
                play={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Templates;
