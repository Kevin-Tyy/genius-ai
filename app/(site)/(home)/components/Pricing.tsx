"use client";
import Image from "next/image";
import React from "react";
import PriceCards from "../../../../components/cards/PriceCards";
import { Switch } from "../../../../components/ui/switch";

const Pricing = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  const handleSwitchClick = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="relative px-3 md:px-16 mt-20 xl:mt-32">
      <div className="blurred-bg absolute z-[-1] h-24 w-24 bg-gradient-to-br from-[#8ce3e6] via-[#82b440c7] to-[#febf32] top-0 -left-10 opacity-70" />
      <div className="relative w-full max-w-[1560px] mx-auto space-y-10">
        <Image src="/svgs/dotted-line-green.svg" alt="" width={5} height={10} className="absolute top-20 -left-24" draggable={false} />

        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-5">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold !leading-normal">
              Pricing <span className="bg-gradient-to-r from-[#8CE3E6] via-[#91BC5D] to-[#F3985B] bg-clip-text text-transparent">Plans</span>
            </h1>
            <Image src="/union.svg" alt="union" width={140} height={2} />
          </div>
          <span className="flex flex-col md:flex-row flex-wrap gap-6 justify-between">
            <p className="text-[#F8F9FA] leading-loose">
              It is a long established fact that a reader will be distracted by the readable content of a <br /> page when looking at its layout.
            </p>
            <div className="flex  space-x-4">
              <p>Pay Monthly</p>
              <Switch checked={isChecked} onClick={handleSwitchClick} />
              <p className="mb-2 md:mb-0">Pay Yearly</p>
            </div>
          </span>
        </div>
        <PriceCards isChecked={isChecked} />
      </div>
    </div>
  );
};

export default Pricing;
