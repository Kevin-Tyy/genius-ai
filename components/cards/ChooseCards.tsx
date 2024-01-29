import React, { useState } from 'react';
import Image from 'next/image';

interface ChooseCardProps {
  iconUrl: string;
  title: string;
  description: string;
  isActive: boolean;
  buttonText: string;
  onClick: () => void;
  play: boolean
}

const ChooseCards = ({ iconUrl, title, description, isActive, onClick, buttonText, play }: ChooseCardProps) => {

  return (
    <div
      className={`${isActive ? 'gradient-border w-80 h-72 rounded-md mt-10 p-4' : ' gradient-card w-80 h-72 rounded-md mt-10 p-4 border border-solid border-white border-opacity-0.00 border-t-1'
        }`}
      onClick={onClick}
    >
      <Image src={iconUrl} alt={title} width={50} height={50} />
      <h1 className='my-5'>{title}</h1>
      <div className='border-s-2'></div>
      <p>{description}</p>
      <button className={`mt-8 ${isActive ? " gradient-border p-2  h-10  w-44 rounded-lg space-x-3 flex items-center justify-center " : "gradient-button  h-10  w-44 rounded-lg  border p-2 shadow-xl space-x-3 flex items-center justify-center"}`}>
        {play && (
          <Image src="/left-play.svg" alt="search" width={24} height={24} />
        )}
        <p>{buttonText}</p>
      </button>
    </div>
  );
};

export default ChooseCards;
