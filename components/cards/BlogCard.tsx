import Image from "next/image";
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import styled from "styled-components";

interface Props {
  image: string;
  title: string;
  date: string;
  content: string;
}
const StyledBorder = styled.div`
  background: linear-gradient(90deg, rgba(249, 248, 247, 0) 0%, #fbfafa 9.09%, rgba(249, 248, 247, 0) 100%);
  height: 5px;
`;

const StyledButton = styled.button`
  box-shadow: 0px 14px 20px 0px rgba(42, 51, 83, 0.8);
`;

export default function BlogCard({ image, content, date, title }: Props) {
  return (
    <div className="flex justify-center px-2 md:px-0">
      <div className={`relative w-full md:max-h-[764px] rounded-xl overflow-hidden`}>
        <Image src={image} alt="" width={1400} height={1400} className="rounded-t-[30px]" />
        <div className="relative -top-14 w-full rounded-[30px] bg-gradient-to-tr from-[#171b27] via-[#11141dc2] to-[#1a1d2b59] backdrop-blur-3xl card-border-gradients p-10 space-y-6">
          <div className="flex flex-col justify-between gap-5">
            <span className="flex space-x-2 items-center">
              <Image src="/svgs/calendar.svg" alt="" width={24} height={24} />
              <p className="text-white">{date} - present</p>
            </span>
            <h1 className="text-2xl font-bold text-white leading-relaxed">{title}</h1>
          </div>
          <div className="h-[2px] relative">
            <div className="w-full h-[4px] flex justify-center blur-[3px] styled-border" />
            <div className="w-full h-[2px] flex justify-center absolute top-0.5 blur-[0.7px] rounded-full styled-border z-[1]" />
          </div>
          <p className="text-[#F8F9FA] leading-loose line-clamp-4 overflow-hidden text-ellipsis text-lg">{content}</p>
          <button className="py-4 w-full max-w-[216px] button-gradient-sm rounded-xl">Read More</button>
        </div>
      </div>
    </div>
  );
}
