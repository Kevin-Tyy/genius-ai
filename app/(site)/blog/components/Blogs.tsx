"use client";

import { blogs } from "@/app/(site)/blog/components/constants/blogs";
import BlogCard from "@/components/cards/BlogCard";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import RecentBlogs from "./RecentBlog";
import Categories from "./Categories";
import Tags from "./Tags";
import Pagination from "./Pagination";
import { BlogType } from "@/types";
import Loader from "@/components/client/Loader";
import Motion from "@/providers/Motion";
export default function Blogs() {
  const blogsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsInView, setBlogsInView] = useState<Array<BlogType> | null>(null);

  useEffect(() => {
    setBlogsInView(blogs.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage));
  }, [currentPage]);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className="relative px-3 md:px-12">
      <div className="w-full max-w-[1560px] mx-auto h-full">
        <div>
          <form className="mt-16">
            <div className="flex w-full max-w-3xl mx-auto flex-row px-3 sm:px-6 py-4 justify-between gap-2 items-center mt-12 border-top-gradient border-top-gradient-light rounded-3xl bg-gradient-to-r from-[#07070780] to-[#00000080]">
              <div className="w-full flex space-x-2 sm:space-x-4 items-center justify-center">
                <span className="gradient-border rounded-full p-3 border-gradient-light-rounded">
                  <Image src="/search.svg" alt="search" width={32} height={32} />
                </span>
                <input type="email" placeholder="Search Blogs" className="bg-transparent outline-none text-white w-full h-[50px]" />
              </div>
              <button className="w-full max-w-[130px] sm:max-w-[196px] gradient-border py-4 px-4 rounded-xl space-x-3 flex items-center justify-center button-gradient-sm">
                <p>Search</p>
              </button>
            </div>
          </form>
        </div>
        <div>
          <div className="flex justify-center mt-10 px-2 md:px-0">
            <div className={`relative w-full h-[764px] lg:h-[60vh] rounded-[30px] overflow-hidden`}>
              <Image src={blogs[0].image} alt="" width={1500} height={1500} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute bottom-0 w-full">
                <div className="w-full rounded-[30px] bg-gradient-to-tr from-[#1d2130] via-[#11141dde] to-[#1a1d2b90] backdrop-blur-3xl card-border-gradients">
                  <div className="p-6 min-[400px]:p-10">
                    <div className="max-w-7xl mx-auto space-y-10">
                      <div className="flex flex-col-reverse md:flex-row gap-y-4  justify-between">
                        <h1 className="text-2xl md:text-3xl font-bold text-white leading-relaxed">{blogs[0].title}</h1>
                        <span className="flex space-x-2 items-start md:justify-center">
                          <Image src="/svgs/calendar.svg" alt="" width={24} height={24} />
                          <p className="text-white">{blogs[0].date} - present</p>
                        </span>
                      </div>
                      <div className="h-[2px] relative">
                        <div className="w-full h-[4px] flex justify-center blur-[3px] styled-border" />
                        <div className="w-full h-[2px] flex justify-center absolute top-0.5 blur-[0.7px] rounded-full styled-border z-[1]" />
                      </div>
                      <p className="text-[#F8F9FA] leading-loose text-lg line-clamp-4 overflow-hidden text-ellipsis md:line-clamp-none">{blogs[0].content}</p>
                      <button className="py-4 w-full max-w-[216px] button-gradient-sm rounded-xl">Read More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-y-8 gap-x-5 mt-10">
            <div className="w-full">
              {!blogsInView ? (
                <div className="h-[40vh] w-full grid place-content-center">
                  <Loader />
                </div>
              ) : (
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
                  {blogsInView.slice(1).map((blog, index) => (
                    <Motion transition={{ duration: 0.5, delay: 0.2 * index }} variants={{ hidden: { opacity: 0, x: -25 }, visible: { opacity: 1, x: 0 } }}>
                      <BlogCard {...blog} key={index} />
                    </Motion>
                  ))}
                </div>
              )}
              <Pagination currentPage={currentPage} totalPages={totalPages} onChangePage={handlePageChange} />
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
