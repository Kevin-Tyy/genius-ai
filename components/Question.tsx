import Image from "next/image";
import React from "react";

const Question = () => {
  return (
    <div className="px-3 md:px-12 mt-20">
      <div className="w-full max-w-[1560px] mx-auto h-full ">
        <div className="relative w-full flex justify-center items-center rounded-3xl mx-auto bg-gradient-to-br from-[#313a5b54] to-[#313a5b00] border-2 border-[#5c6a9e30] px-5 sm:px-10 py-20">
          <Image src="/svgs/stars.svg" alt="" width={300} height={300} draggable={false} className="absolute left-4 select-none" />
          <div className="w-full relative z-[1]">
            <div>
              <h1 className="text-center text-3xl md:text-5xl font-bold !leading-normal">
                Have a question? <span className="bg-gradient-to-r from-[#8CE3E6] via-[#91BC5D] to-[#F3985B] bg-clip-text text-transparent">Call us 24/7</span>
              </h1>
              <p className="text-center mt-4 md:mt-8 text-lg md:text-xl">+91-45345217</p>
            </div>
            <form className="w-full">
              <div className="bg-gradient-to-r from-[#11101800] to-[#00000080] flex w-full max-w-3xl mx-auto flex-row px-3 sm:px-6 py-4 justify-between gap-2 items-center mt-12 border-top-gradient border-top-gradient-dark rounded-3xl">
                <div className="w-full flex space-x-2  sm:space-x-4 items-center justify-center">
                  <span className="gradient-border rounded-full p-3 border-gradient-light-rounded">
                    <Image src="/mail.svg" alt="search" width={32} height={32} />
                  </span>
                  <input type="email" placeholder="Write Your Email Adress" className="bg-transparent outline-none text-white w-full h-[50px]" />
                </div>
                <button className="w-full max-w-[150px] sm:max-w-[216px] shadow-lg shadow-black gradient-border py-4 px-4 rounded-xl space-x-3 flex items-center justify-center button-gradient-sm">
                  <p>Get Started</p>
                </button>
              </div>
            </form>
          </div>
          <Image src="/svgs/stars.svg" alt="" width={300} height={300} draggable={false} className="absolute right-4 select-none" />
        </div>
      </div>
    </div>
  );
};

export default Question;
