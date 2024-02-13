import Motion from "@/providers/Motion";
import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
interface Props {
  currentPage: number;
  totalPages: number;
  onChangePage: (currentPage: number) => void;
}
const Pagination = ({ currentPage, totalPages, onChangePage }: Props) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <Motion transition={{ duration: 0.5, delay: 0.2 }} variants={{ hidden: { opacity: 0, x: -25 }, visible: { opacity: 1, x: 0 } }}>
      <div>
        <div className="w-full flex justify-between mt-10">
          {/* <button
          onClick={() => {
            if (currentPage > 1) {
              onChangePage(--currentPage);
            }
          }}>
          <GoArrowLeft size={45} className="text-[#000]/70 hover:text-[#FB524A] transition duration-200" />
        </button> */}
          <div className="w-full flex justify-center gap-x-4">
            {pageNumbers.map((page) => (
              <button
                key={page}
                onClick={() => onChangePage(page)}
                className={`bg-gradient-to-tr from-[#171b27] via-[#11141dc2] to-[#1a1d2b59] backdrop-blur-3xl pagination-border-gradients w-14 h-14 rounded-xl ${
                  currentPage === page && "gradient-border"
                }`}>
                {page}
              </button>
            ))}
          </div>
          {/* <button
          onClick={() => {
            if (currentPage < totalPages) {
              onChangePage(++currentPage);
            }
          }}>
          <GoArrowRight size={45} className="text-[#000]/70 hover:text-[#FB524A] transition duration-200" />
        </button> */}
        </div>
      </div>
    </Motion>
  );
};

export default Pagination;
