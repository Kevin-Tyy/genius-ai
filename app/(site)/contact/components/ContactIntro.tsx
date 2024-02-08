import Image from "next/image";
import React, { useRef } from "react";
import styled from "styled-components";

const ContactIntro = () => {
  const scroll = useRef<any>(null);

  const handleArrowDown = () => {
    if (scroll.current) {
      const rect = scroll.current.getBoundingClientRect();
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };
  const ScrollButton = styled.button`
    filter: drop-shadow(0px -4px 4px rgba(248, 249, 250, 0.2));
  `;

  return (
    <>
      <div className="relative px-3 md:px-12 h-auto md:h-[52vh] bg-black">
        <div className="w-full max-w-[1560px] mx-auto h-full ">
          <div className="flex items-center h-full">
            <div className="w-full">
              <button className="px-6 py-4 mb-4 rounded-xl space-x-3 border-gradient-light bg-gradient-to-b from-[#ffffff20] to-[#ffffff15] flex items-center justify-center">
                <Image src="/circle.png" alt="search" width={24} height={24} />
                <p className="block">
                  <span className="opacity-80">Home</span> {">"} Template
                </p>
              </button>
              <h1 className="text-3xl md:text-5xl xl:text-[58px] font-bold !leading-normal">
                <span className="bg-gradient-to-r from-[#8CE3E6] via-[#91BC5D] to-[#F3985B] bg-clip-text text-transparent">Contact</span> Us
              </h1>
            </div>
            <Image src="/contact.svg" alt="search" width={300} height={500} />
          </div>
        </div>
        <div className="flex justify-center items-center" ref={scroll}>
          <ScrollButton className="bg-[#141416] p-7 rounded-full -mt-[36px]" onClick={handleArrowDown} aria-label="Scroll down">
            <Image src="/arrow-down.svg" alt="search" width={28} height={28} />
          </ScrollButton>
        </div>
      </div>
    </>
  );
};
export default ContactIntro;