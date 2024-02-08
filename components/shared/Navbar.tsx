"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileSidebar from "./MobileSidebar";
import { navLinks } from "@/app/utils/constants";
import Button from "../buttons/Button";
import Logo from "./Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex justify-center absolute top-0 left-0 right-0 w-full">
      <header className="top-0 w-full px-4 md:px-16 py-6 z-[5]">
        <div className="max-w-[1560px] mx-auto">
          <nav className="w-full flex  items-center justify-between">
            <Logo />
            <div className="w-10 grid place-content-center ml-6 lg:hidden">
              <div
                className="flex flex-col items-end justify-center hover:bg-neutral-100/20 rounded-md transition duration-100 p-2 space-y-[7px] cursor-pointer group"
                onClick={() => setIsExpanded(true)}>
                <span
                  className={`w-5 relative h-[2px] bg-neutral-300 block transition rounded-full duration-[.3s] ${
                    isExpanded && "rotate-[135deg] translate-y-[9px] w-5"
                  }`}></span>
                <span
                  className={`w-4 relative h-[2px] bg-neutral-300 transition  rounded-full duration-[.1s] opacity-100 ${
                    isExpanded && "opacity-0 invisible"
                  } `}></span>
                <span
                  className={`w-5 relative h-[2px] bg-neutral-300 rounded-full transition duration-[.3s] ${
                    isExpanded && "-rotate-[135deg] -translate-y-[9px] w-5"
                  }`}></span>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-x-12">
              <div className="">
                <ul className="text-[#FFFFFFE5] flex items-center gap-x-10">
                  {navLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>
                        <span
                          className={`${
                            pathname === link.href &&
                            "transition duration-300 bg-gradient-to-r from-[#8CE3E6] via-[#91BC5D] to-[#F3985B] bg-clip-text text-transparent font-semibold "
                          }`}>
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-x-5">
                <button onClick={() => setIsModalOpen(true)} className="px-12 py-3 rounded-xl border-[3px] border-[#ffffff50] capitalize ">
                  <Link href="/login">LogIn</Link>
                </button>
                <button onClick={() => setIsModalOpen(true)} className="px-12 py-3 rounded-xl capitalize border-gradient gradient-border">
                  <Link href="/signup" className="bg-gradient-to-r from-[#8CE3E6] to-[#F38556] bg-clip-text text-transparent font-semibold ">
                    SignUp
                  </Link>
                </button>
              </div>
            </div>
          </nav>
        </div>
        <MobileSidebar openModal={() => setIsModalOpen(true)} onClose={() => setIsExpanded(false)} isOpen={isExpanded} />
      </header>
    </div>
  );
}
