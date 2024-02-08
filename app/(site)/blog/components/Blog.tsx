import { blogs } from "@/app/(site)/blog/components/constants/blogs";
import BlogCard from "@/components/cards/BlogCard";
import Image from "next/image";
import React from "react";
import RecentBlogs from "./RecentBlog";
import Categories from "./Categories";
import Tags from "./Tags";
export default function Blog() {
  return (
    <div className="relative px-3 md:px-12">
      <div className="w-full max-w-[1560px] mx-auto h-full">
        <div>
          <form className="mt-16">
            <div className="flex w-full max-w-3xl mx-auto flex-row px-6 py-4 justify-between gap-2 items-center mt-12 border-top-gradient border-top-gradient-light rounded-3xl bg-gradient-to-r from-[#07070780] to-[#00000080]">
              <div className="w-full flex space-x-4 items-center justify-center">
                <span className="gradient-border rounded-full p-3 border-gradient-light-rounded">
                  <Image src="/search.svg" alt="search" width={32} height={32} />
                </span>
                <input type="email" placeholder="Search Blogs" className="bg-transparent outline-none text-white w-full h-[50px]" />
              </div>
              <button className="w-full max-w-[196px] gradient-border py-4 px-4 rounded-xl space-x-3 flex items-center justify-center button-gradient-sm">
                <p className="hidden md:block">Search</p>
              </button>
            </div>
          </form>
        </div>
        <div>
          <div className="flex justify-center mt-10 px-2 md:px-0">
            <div className={`relative w-full h-[60vh] rounded-[30px] overflow-hidden`}>
              <Image src={blogs[0].image} alt="" width={1500} height={1500} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute bottom-0 w-full">
                <div className="w-full rounded-[30px] bg-gradient-to-tr from-[#1d2130] via-[#11141dde] to-[#1a1d2b90] backdrop-blur-3xl card-border-gradients">
                  <div className="py-10">
                    <div className="max-w-7xl mx-auto space-y-10">
                      <div className="flex flex-col md:flex-row justify-between">
                        <h1 className="text-3xl font-bold text-white">{blogs[0].title}</h1>
                        <span className="flex space-x-2 items-center justify-center">
                          <Image src="/svgs/calendar.svg" alt="" width={24} height={24} />
                          <p className="text-white">{blogs[0].date} - present</p>
                        </span>
                      </div>
                      <div className="h-[2px] relative">
                        <div className="w-full h-[4px] flex justify-center blur-[3px] styled-border" />
                        <div className="w-full h-[2px] flex justify-center absolute top-0.5 blur-[0.7px] rounded-full styled-border z-[1]" />
                      </div>
                      <p className="text-[#F8F9FA] leading-loose text-lg">{blogs[0].content}</p>
                      <button className="py-4 w-full max-w-[216px] button-gradient-sm rounded-xl">Read More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-x-5 mt-10">
            <div className="w-full grid grid-cols-2 gap-5">
              {blogs.slice(1).map((blog, index) => (
                <BlogCard {...blog} key={index} />
              ))}
            </div>
            <div className="w-full max-w-[480px] space-y-6">
              <RecentBlogs />
              <Categories />
              <Tags />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}