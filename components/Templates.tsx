"use client";

import React, { useState } from "react";
import { FilterTemplates, templateCardsData } from "@/app/utils/constants";
import ChooseCards from "./cards/ChooseCards";
import Image from "next/image";

const Templates = () => {
  const [activeTemplate, setActiveTemplate] = useState<string>("Business Tools");
  return (
    <div className="px-3 md:px-12">
      <div className="w-full max-w-[1560px] mx-auto mt-32">
        <div className="flex justify-center">
          <div className="">
            <div className="flex items-center gap-5">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold !leading-normal">
                <span className="bg-gradient-to-r from-[#8CE3E6] via-[#91BC5D] to-[#F3985B] bg-clip-text text-transparent">60+</span> Build-In Templates to Use
              </h1>
              <Image src="/union.svg" alt="union" width={140} height={2} />
            </div>
            <div className="flex flex-wrap gap-4 mt-4 md:mt-8">
              {FilterTemplates.map((filter) => (
                <button
                  onClick={() => setActiveTemplate(filter.text)}
                  key={filter.text}
                  className={`px-6 py-4 card-gradients rounded-xl ${activeTemplate === filter.text ? "gradient-sm-filter text-[#101010]" : ""}`}>
                  {filter.text}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
              {templateCardsData.map((item, i) => (
                <div key={i} className="w-full">
                  <ChooseCards iconUrl={item.iconUrl} title={item.title} description={item.description} buttonText="view" play={false} />
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <button className="border-gradient gradient-border p-4 w-full max-w-[200px] rounded-xl space-x-3 flex items-center justify-center">
                <span className="font-semibold bg-gradient-to-r from-[#8CE3E6] via-[#91BC5D] to-[#F3985B] bg-clip-text text-transparent">View more</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
