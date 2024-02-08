import Image from "next/image";
import React from "react";
import PriceCards from "./cards/PriceCards";
import { Switch } from "./ui/switch";

const Pricing = () => {
  return (
    <div className="px-3 md:px-16 mt-32">
      <div className="w-full max-w-[1560px] mx-auto space-y-10">
        <div className="space-y-6">
          <div className="flex items-center gap-5">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold !leading-normal">
              Pricing <span className="bg-gradient-to-r from-[#8CE3E6] via-[#91BC5D] to-[#F3985B] bg-clip-text text-transparent">Plans</span>
            </h1>
            <Image src="/union.svg" alt="union" width={140} height={2} />
          </div>
          <span className="flex flex-col md:flex-row justify-between">
            <p className="text-[#F8F9FA] leading-loose">
              It is a long established fact that a reader will be distracted by the readable content of a <br /> page when looking at its layout.
            </p>
            <div className="flex  space-x-4">
              <p>Pay Monthly</p>
              <Switch id="" />
              <p className="mb-2 md:mb-0">Pay Yearly</p>
            </div>
          </span>
        </div>
        <PriceCards />
      </div>
    </div>
  );
};

export default Pricing;
