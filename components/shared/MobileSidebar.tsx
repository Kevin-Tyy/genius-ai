"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";

import { navLinks } from "@/app/utils/constants";
import Logo from "./Logo";
import Button from "../buttons/Button";
interface Props {
  openModal: () => void;
  onClose: () => void;
  isOpen?: boolean;
}
export default function MobileSidebar({ openModal, onClose, isOpen }: Props) {
  const mainRef = useRef<HTMLElement | null>(null);
  const handleClickOutside = (event: any) => {
    if (mainRef.current && !mainRef.current.contains(event.target)) {
      onClose();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={mainRef}
      className={`${
        isOpen ? "w-[300px]" : "w-0"
      } overflow-hidden bg-[#101010] fixed right-0 top-0 bottom-0 h-screen shadow-2xl z-[9999999] transition-[width] duration-500`}>
      <div className="pl-8 flex flex-col justify-between pt-6 pb-10 px-4 h-full">
        <div className="flex items-center justify-between w-full">
          <Logo />
          <div className="w-10 grid place-content-center ml-6 lg:hidden">
            <div
              className="flex flex-col items-end justify-center hover:bg-neutral-200/20 rounded-md transition duration-100 p-2 space-y-[7px] cursor-pointer  group"
              onClick={onClose}>
              <span
                className={`w-5 relative h-[2px] bg-neutral-300 block transition rounded-full duration-[.3s] ${
                  isOpen && "rotate-[135deg] translate-y-[9px] w-5"
                }`}></span>
              <span
                className={`w-4 relative h-[2px] bg-neutral-300 transition  rounded-full duration-[.4s] opacity-100 ${
                  isOpen && "!opacity-0 invisible"
                } `}></span>
              <span
                className={`w-5 relative h-[2px] bg-neutral-300 rounded-full transition duration-[.3s] ${
                  isOpen && "-rotate-[135deg] -translate-y-[9px] w-5"
                }`}></span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {navLinks.map((link, index) => (
            <Link href={link.href} key={index}>
              <div onClick={onClose} className="flex gap-[10px] items-center cursor-pointer">
                <h1 className="whitespace-nowrap">{link.label}</h1>
              </div>
            </Link>
          ))}
        </div>
        <div className="space-x-2">
          <button
            onClick={() => {
              onClose();
              openModal();
            }}
            className="px-8 py-3 rounded-md border border-solid border-white border-opacity-87 font-semibold capitalize text-sm ">
            <Link href="/login">LogIn</Link>
          </button>
          <Button className="px-8 py-3 font-semibold capitalize text-sm text-[#8CE3E6] ">
            <Link href="/signup">
              Sign<span className="gradient-text">Up</span>
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
