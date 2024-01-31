"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileSidebar from "./MobileSidebar";
import { navLinks } from "@/app/utils/constants";
import Button from "../styles/Button";
import Logo from "./Logo";




export default function Navbar() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex justify-center">
      <header className="top-0 w-full px-4 md:px-16 py-6 z-[5]">
      <div className="max-w-[1720px] mx-auto">
        <nav className="w-full flex  items-center justify-between">
          <Logo />
          <div className="w-10 grid place-content-center ml-6 lg:hidden">
            <div
              className="flex flex-col items-end justify-center hover:bg-neutral-100/20 rounded-md transition duration-100 p-2 space-y-[7px] cursor-pointer group"
              onClick={() => setIsExpanded(true)}>
              <span
                className={`w-5 relative h-[2px] bg-neutral-300 block transition rounded-full duration-[.3s] ${isExpanded && "rotate-[135deg] translate-y-[9px] w-5"
                  }`}></span>
              <span
                className={`w-4 relative h-[2px] bg-neutral-300 transition  rounded-full duration-[.1s] opacity-100 ${isExpanded && "opacity-0 invisible"
                  } `}></span>
              <span
                className={`w-5 relative h-[2px] bg-neutral-300 rounded-full transition duration-[.3s] ${isExpanded && "-rotate-[135deg] -translate-y-[9px] w-5"
                  }`}></span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-x-12">
            <div className="">
              <ul className="text-[#636369] flex gap-x-10">
                {navLinks.map((link) => (
                  <li>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-x-5">
              <button onClick={() => setIsModalOpen(true)} className="px-8 py-3 rounded-md border border-solid border-white border-opacity-87 font-semibold capitalize text-sm ">
                <Link href="/login">LogIn</Link>
              </button>
              <Button onClick={() => setIsModalOpen(true)} className="px-8 py-3 font-semibold capitalize text-sm text-[#8CE3E6] ">
              <Link href="/signup">Sign<span className="gradient-text">Up</span></Link>
              </Button>
            </div>
          </div>
        </nav>
      </div>
      <MobileSidebar openModal={() => setIsModalOpen(true)} onClose={() => setIsExpanded(false)} isOpen={isExpanded} />
    </header>
    </div>
  );
}
