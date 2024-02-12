"use client";

import Image from "next/image";
import { useState } from "react";
import { faqs } from "./constants/faq";
import { Collapse } from "react-collapse";
import { Minus, Plus } from "lucide-react";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);
  return (
    <div className="px-3 md:px-12 mt-12 xl:mt-20">
      <div className="w-full max-w-[1560px] mx-auto h-full ">
        <div className="flex flex-wrap items-center gap-5">
          <h1 className="text-3xl md:text-5xl font-bold !leading-normal">
            Frequently Asked <span className="bg-gradient-to-r from-[#8CE3E6] via-[#91BC5D] to-[#F3985B] bg-clip-text text-transparent">Questions</span>
          </h1>
          <Image src="/union.svg" alt="union" width={140} height={2} />
        </div>
        <div className="overflow-hidden mt-8 md:mt-10">
          <table className="table-auto w-full md:w-full border-collapse border border-[#2A2B3A]">
            <colgroup>
              <col className="w-10" />
              <col className="w-auto" />
              <col className="w-10" />
            </colgroup>
            <thead>
              {faqs.map((faq, index) => (
                <tr key={index} className="border-b border-[#2A2B3A]">
                  <td className=" text-2xl cursor-pointer flex items-start h-full px-3 py-5 sm:px-6 sm:py-10">0{index + 1}</td>
                  <td className="border border-[#2A2B3A] p-5 sm:p-10">
                    <h1
                      className="font-semibold text-xl sm:text-2xl cursor-pointer leading-loose"
                      onClick={() => {
                        if (currentItem === index) {
                          return setIsOpen((prev) => !prev);
                        }
                        setIsOpen(true);
                        setCurrentItem(index);
                      }}>
                      {faq.question}
                    </h1>
                    <Collapse isOpened={isOpen && currentItem === index}>
                      <p className="leading-loose max-w-6xl text-[18px] text-[#F8F9FA] pt-6">{faq.answer}</p>
                    </Collapse>
                  </td>
                  <td
                    className=" text-3xl cursor-pointer flex items-start h-full  px-3 py-5 sm:px-6 sm:py-10"
                    onClick={() => {
                      if (currentItem === index) {
                        return setIsOpen((prev) => !prev);
                      }
                      setIsOpen(true);
                      setCurrentItem(index);
                    }}>
                    {isOpen && currentItem === index ? <Minus size={28} /> : <Plus size={28} />}
                  </td>
                </tr>
              ))}
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
