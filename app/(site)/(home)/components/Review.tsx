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
      <div className="px-3 md:px-12 mt-32">
        <div className="w-full max-w-[1560px] mx-auto">
          <div className="flex justify-between items-center gap-5">
            <div className="flex items-center gap-5">
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
            768: {
              slidesPerView: 2,
            },
            1024: {
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
