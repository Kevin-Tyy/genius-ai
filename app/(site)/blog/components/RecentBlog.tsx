import React from "react";
import Image from "next/image";
import { blogs } from "./constants/blogs";

const RecentBlogs = () => {
  return (
    <div className="w-full rounded-[30px] bg-gradient-to-tr from-[#171b27] via-[#11141dc2] to-[#1a1d2b59] backdrop-blur-3xl card-border-gradients p-6 min-[400px]:p-10 space-y-8">
      <h1 className="text-2xl">Recent Blogs</h1>
      <div className="h-[2px] relative">
        <div className="w-full h-[4px] flex justify-center blur-[2px] styled-border" />
        <div className="w-full h-[2px] flex justify-center opacity-50 absolute top-0.5 blur-[0.7px] rounded-full styled-border z-[1]" />
      </div>
      <div className="space-y-7">
        {blogs.slice(0, 3).map(({ image, date, title }, index) => (
          <div key={index} className="rounded-3xl border-gradient-dark bg-gradient-to-b from-[#313a5b31] via-[#313a5b70] to-[#313A5B] mt-3 p-4 min-[400px]:p-6">
            <div className="flex items-center space-x-5 w-full h-auto ">
              <Image src={image} alt="ait-art" width={100} height={100} className="rounded-2xl h-[80px] w-[80px] object-cover" />
              <div className="text-start">
                <h1 className="text-lg font-semibold line-clamp-2 overflow-hidden text-ellipsis">{title}</h1>
                <span className="items-center space-x-1 mt-2 hidden min-[373px]:flex">
                  <Image src="/svgs/calendar.svg" alt="" width={20} height={20} />
                  <p className="text-white text-xs">{date} - present</p>
                </span>
              </div>
            </div>
            <span className="items-center justify-end space-x-1 mt-2 flex min-[373px]:hidden">
              <Image src="/svgs/calendar.svg" alt="" width={20} height={20} />
              <p className="text-white text-xs">{date} - present</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
