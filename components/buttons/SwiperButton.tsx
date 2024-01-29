import React from 'react';
import { useSwiper } from 'swiper/react';

const SwiperNavButtons = () => {
    const swiper = useSwiper();

    return (
        <div className='space-x-8 p-10 flex justify-end'>
            <button
                onClick={() => swiper.slidePrev()}
                className='text-red text-5xl border-5 border-white px-3 py-1'
            >
                Prev
            </button>
            <button
                onClick={() => swiper.slideNext()}
                className='text-white text-5xl border border-white px-3 py-1'
            >
                Next
            </button>
        </div>
    );
};

export default SwiperNavButtons;
