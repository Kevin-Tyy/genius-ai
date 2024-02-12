import React from "react";
import { reviews } from "@/app/utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Navigation, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperNavButtons from "../../../../components/buttons/SwiperButton";
import Image from "next/image";
import ReviewCard from "../../../../components/cards/ReviewCard";

const Review = () => {
  return (
    <div className="space-y-10">
      <div className="relative px-3 md:px-12 mt-20 xl:mt-32">
        <div className="blurred-bg absolute z-[-1] h-24 w-24 bg-gradient-to-br from-[#8ce3e6] via-[#82b440c7] to-[#febf32] top-0 -right-10 opacity-80" />
        <div className="w-full max-w-[1560px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-center md:gap-5">
            <div className="flex flex-wrap items-center gap-5">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold !leading-normal">
                Over 10,000+
                <span className="bg-gradient-to-r from-[#8CE3E6] via-[#91BC5D] to-[#F3985B] bg-clip-text text-transparent"> Reviews</span>
              </h1>
              <Image src="/union.svg" alt="union" width={140} height={1} />
            </div>
            <SwiperNavButtons />
          </div>
        </div>
      </div>
      <div className="relative flex h-[400px] px-3 md:px-4">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={25}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            868: {
              slidesPerView: 2,
            },
            1124: {
              slidesPerView: 3,
            },
            1560: {
              slidesPerView: 4,
            },
            1820: {
              slidesPerView: 5,
            },
          }}
          navigation={{
            nextEl: ".button-next-slide",
            prevEl: ".button-prev-slide",
          }}
          pagination={{ clickable: true }}>
          {reviews.map((data, i) => (
            <SwiperSlide key={i} className="cursor-grab active:cursor-grabbing">
              <ReviewCard {...data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
