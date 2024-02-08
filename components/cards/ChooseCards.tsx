import React, { useState } from "react";
import Image from "next/image";

interface ChooseCardProps {
  iconUrl: string;
  title: string;
  description: string;
  buttonText: string;
  play: boolean;
}

const ChooseCards = ({ iconUrl, title, description, buttonText, play }: ChooseCardProps) => {
  return (
    <div className={`${!play ? "bg-gradient-to-br from-[#313a5b54] to-[#313a5b00] border-2 border-[#5c6a9e30]" : "ring-1 ring-[#ffffff1a]"}  p-10 rounded-3xl`}>
      <Image src={iconUrl} alt={title} width={62} height={62} />
      <h1 className="my-5 text-2xl font-bold">{title}</h1>
      <div className="border-s-2"></div>
      <p className="text-[#F8F9FA]">{description}</p>
      <button className="w-full max-w-[268px] mt-8 button-gradient-sm px-12 py-4 rounded-lg space-x-3 flex items-center justify-center capitalize">
        {play && (
          <div className="-ml-4">
            <Image src="/left-play.svg" alt="search" width={24} height={24} />
          </div>
        )}
        <p>{buttonText}</p>
      </button>
    </div>
  );
};

export default ChooseCards;
