import React from 'react'
import { reviews } from '@/app/utils/constants'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; 
import {Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperNavButtons from './buttons/SwiperButton';
import Image from 'next/image';
import ReviewCard from './cards/ReviewCard';

const Review = () => {
    return (
        <div className='p-10'>
            <span className='flex space-x-4'>
                <h1 className='text-xl '>Over 10,000+</h1>
                <span className='flex space-x-8'>
                    <p className='gradient-text font-bold text-lg'>Reviews</p>
                    <Image src="/union.svg" alt='union' width={180} height={1} />
                </span>
            </span>
            <div className='flex gap-2'>
                <Swiper
                    modules={[Pagination, Scrollbar, A11y]}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 5,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 60,
                        },
                    }}

                    pagination={{ clickable: true }}
                >
                    <SwiperNavButtons />
                    {reviews.map((data, i) => (
                        <SwiperSlide key={i}>
                            <ReviewCard
                                {...data}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div >
    )
}

export default Review
