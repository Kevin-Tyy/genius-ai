import Image from "next/image";
import React, { useRef } from "react";
import styled from "styled-components";

const Intro = () => {
  const scroll = useRef<any>(null);

  const ScrollButton = styled.button`
    filter: drop-shadow(0px -4px 4px rgba(248, 249, 250, 0.2));
  `;
  const handleArrowDown = () => {
    if (scroll.current) {
      const rect = scroll.current.getBoundingClientRect();
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="relative px-3 md:px-12 h-screen overflow-hidden">
        <div className="w-full max-w-[1560px] mx-auto h-full ">
          <div className="flex items-center h-full">
            <div className="relative text-white max-w-4xl">
              <button className="px-6 py-4 mb-4 rounded-xl space-x-3 border-gradient-light bg-gradient-to-b from-[#ffffff20] to-[#ffffff15] flex items-center justify-center">
                <Image src="/circle.svg" alt="search" width={24} height={24} />
                <p className="text-[#F8F9FA] text-sm">No #1 Tool for AI</p>
              </button>
              <h1 className="text-3xl md:text-5xl xl:text-[58px] font-bold !leading-normal">
                Use AI to Generate Creative{" "}
                <span className="bg-gradient-to-r from-[#8CE3E6] via-[#91BC5D] to-[#F3985B] bg-clip-text text-transparent">Blog Ideas & Outlines</span>
              </h1>
              <p className="mt-4 md:mt-8 text-lg leading-loose text-[#F8F9FA]">
                AI Copywriting is revolutionizing the way content is created. AI can create content for <br />
                blogs, articles, websites, social media and more.
              </p>
              <form>
                <div className="flex w-full max-w-3xl flex-row px-4 sm:px-8 py-6 justify-between gap-2 items-center mt-12 border-top-gradient border-top-gradient-light rounded-3xl bg-gradient-to-r from-[#11101800] to-[#11101882]">
                  <div className="w-full flex space-x-2 sm:space-x-4 items-center justify-center">
                    <span className="gradient-border rounded-full p-3 border-gradient-light-rounded">
                      <Image src="/search.svg" alt="search" width={32} height={32} />
                    </span>
                    <input type="email" placeholder="Write Your Email Adress" className="bg-transparent outline-none text-white w-full h-[50px]" />
                  </div>
                  <button className="w-full max-w-fit gradient-border py-4 px-4 sm:px-8 rounded-xl space-x-3 flex items-center justify-center button-gradient-sm">
                    <Image src="/play.svg" alt="search" width={24} height={24} />
                    <p>Start Free Trial</p>
                  </button>
                </div>
              </form>
              <div className="blurred-bg absolute z-[-1] h-24 w-24 bg-gradient-to-br from-[#8ce3e6] via-[#82b440c7] to-[#febf32] top-0 right-16" />
            </div>
          </div>
          <div className="absolute inset-0 bg-black/40 z-[-2]" />
          <Image src="/computer.png" alt="computer" className="absolute inset-0 z-[-3] h-full w-full object-cover" width={1920} height={1080} />
        </div>
      </div>
      <div className="flex justify-center items-center relative overflow-" ref={scroll}>
        <ScrollButton className="bg-[#141416] p-7 rounded-full -mt-[36px] relative z-[1]" onClick={handleArrowDown} aria-label="Scroll down">
          <Image src="/arrow-down.svg" alt="search" width={28} height={28} />
        </ScrollButton>
        <div className="h-1 w-4/5 absolute top-0 right-0 bg-gradient-to-r from-transparent to-[#F3965B] blur-md" />
        <div className="h-[2px] w-4/5 absolute right-0 top-0 bg-gradient-to-r from-transparent to-[#d788c680] blur-[2px] rounded-full" />
      </div>
    </>
  );
};

export default Intro;
