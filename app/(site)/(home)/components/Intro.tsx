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
      <div className="relative px-3 md:px-12 h-[85vh] overflow-hidden">
        <div className="w-full max-w-[1560px] mx-auto h-full ">
          <div className="flex items-center h-full">
            <div className=" text-white max-w-4xl">
              <button className="px-6 py-4 mb-4 rounded-xl space-x-3 border-gradient-light bg-gradient-to-b from-[#ffffff20] to-[#ffffff15]  flex items-center justify-center">
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
            </div>
          </div>
          <div className="absolute inset-0 bg-black/40 z-[-1]" />
          <Image
            src="/computer.png"
            alt="computer"
            layout="responsive"
            className="absolute inset-0 z-[-2] h-full w-full max-h-[85vh] object-cover"
            width={600}
            height={600}
          />
        </div>
      </div>
      <div className="flex justify-center items-center" ref={scroll}>
        <ScrollButton className="bg-[#141416] p-7 rounded-full -mt-[25px]" onClick={handleArrowDown} aria-label="Scroll down">
          <Image src="/arrow-down.svg" alt="search" width={28} height={28} />
        </ScrollButton>
      </div>
    </>
  );
};

export default Intro;
