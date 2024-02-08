import React from "react";
import { FaPlay } from "react-icons/fa";
export default function SlideButtons() {
  return (
    <div className="flex justify-end gap-5 mt-6 relative">
      <button className="button-prev-slide border-gradient-rounded gradient-border rounded-full p-1 ">
        <span className="w-11 h-11 gradient-border-light grid place-content-center rounded-full rotate-180">
          <FaPlay size={24} className="translate-x-0.5" />
        </span>
      </button>
      <button className="button-next-slide border-gradient-rounded gradient-border rounded-full p-1 ">
        <span className="w-11 h-11 gradient-border-light grid place-content-center rounded-full">
          <FaPlay size={24} className="translate-x-0.5" />
        </span>
      </button>
    </div>
  );
}
