import React from "react";
import { ChooseCardData } from "@/app/utils/constants";
import ChooseCards from "./cards/ChooseCards";
import Image from "next/image";

const Choose = () => {
  return (
    <div className="px-3 md:px-12">
      <div className="w-full max-w-[1560px] mx-auto mt-10">
        <div className="w-full">
          <div className="space-y-8">
            <div className="flex items-center gap-5">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold !leading-normal">
                Why Choose <span className="bg-gradient-to-r from-[#8CE3E6] via-[#91BC5D] to-[#F3985B] bg-clip-text text-transparent">ToolsAi</span>
              </h1>
              <Image src="/union.svg" alt="union" width={140} height={2} />
            </div>
            <p className="text-[#F8F9FA] md:text-base lg:text-lg max-w-3xl leading-loose fontno">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {ChooseCardData.map((item, i) => (
                <div key={i} className="w-full mb-4 md:mb-0">
                  <ChooseCards iconUrl={item.iconUrl} title={item.title} description={item.description} buttonText="Learn More" play={true} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
