import Image from "next/image";
import React from "react";

interface ReviewCardProps {
  company: string;
  description: string;
  position: string;
  fullName: string;
  profileUrl: string;
}
const ReviewCard = ({ company, description, position, fullName, profileUrl }: ReviewCardProps) => {
  return (
    <div className="space-y-5 rounded-2xl min-h-[340px] w-full p-10 border border-solid border-white/10 bg-[#adceff14] flex flex-col">
      <h1 className="text-xl font-semibold">{company}</h1>
      <div className="h-[2px] bg-white bg-opacity-5"></div>
      <div className="h-full flex flex-1 flex-col justify-between">
        <p className="text-[#F8F9FA] leading-[1.7]">{description}</p>
        <div className="flex space-x-7">
          <Image src={profileUrl} alt="profile" width={50} height={30} className="rounded-full" />
          <span className="space-y-1">
            <h1>{fullName}</h1>
            <p className="text-[#FFFFFF]/80 text-sm">{position}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
