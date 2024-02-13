import React from "react";
import { ChooseCardData } from "@/app/utils/constants";
import ChooseCards from "./cards/ChooseCards";
import Image from "next/image";
import Motion from "@/providers/Motion";

const Choose = () => {
  return (
    <div className="relative px-3 md:px-12">
      <div className="blurred-bg absolute z-[-1] h-24 w-24 bg-gradient-to-br from-[#8ce3e6] via-[#82b440c7] to-[#febf32] top-0 left-0 opacity-60" />
      <Image src="/svgs/asset-1.svg" alt="union" width={140} height={2} className="absolute right-20 top-10 select-none" draggable={false} />
      <div className="relative w-full max-w-[1560px] mx-auto mt-10">
        <Image src="/svgs/dotted-line-green.svg" alt="" width={5} height={10} className="absolute top-0 -left-24" draggable={false} />

        <div className="w-full">
          <div className="space-y-8">
            <div className=" flex items-center gap-5">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold !leading-normal">
                Why Choose <span className="bg-gradient-to-r from-[#8CE3E6] via-[#91BC5D] to-[#F3985B] bg-clip-text text-transparent">ToolsAi</span>
              </h1>
              <Image src="/union.svg" alt="union" width={140} height={2} />
            </div>
            <p className="text-[#F8F9FA] md:text-base lg:text-lg max-w-3xl leading-loose fontno">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
              {ChooseCardData.map((item, i) => (
                <Motion key={i} transition={{ duration: 0.5, delay: 0.1 * i }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                  <div className="w-full mb-4 md:mb-0">
                    <ChooseCards iconUrl={item.iconUrl} title={item.title} description={item.description} buttonText="Learn More" play={true} />
                  </div>
                </Motion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
