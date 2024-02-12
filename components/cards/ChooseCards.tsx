import Image from "next/image";
import { useState } from "react";

interface ChooseCardProps {
  iconUrl: string;
  title: string;
  description: string;
  buttonText: string;
  play: boolean;
}

const ChooseCards = ({ iconUrl, title, description, buttonText, play }: ChooseCardProps) => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setIsActive(true);
        setActiveCard(title);
      }}
      onMouseLeave={() => {
        setIsActive(false);
        setActiveCard(null);
      }}
      className={`${
        !play
          ? "bg-gradient-to-br from-[#313a5b54] to-[#313a5b00] border-2 border-[#5c6a9e30]"
          : `ring-1 ring-[#ffffff1a] ${isActive && activeCard === title && "bg-gradient-to-b from-[#313a5b00] via-[#313a5b70] to-[#313A5B]"}`
      }  p-10 rounded-3xl transition duration-300`}>
      <Image src={iconUrl} alt={title} width={62} height={62} />
      <h1 className="my-5 text-2xl font-bold">{title}</h1>
      <div className="bg-gradient-to-r from-transparent via-[#f3ac6013] to-transparent h-[2px] w-full my-6" />
      <div className="border-s-2"></div>
      <p className="text-[#F8F9FA]">{description}</p>
      <button
        className={`w-full max-w-[268px] mt-8 button-gradient-sm px-12 py-4 rounded-xl space-x-3 flex items-center justify-center capitalize ${
          play && isActive && activeCard === title && "border-gradient gradient-border shadow-xl shadow-[#0f121bcc]"
        }`}>
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
