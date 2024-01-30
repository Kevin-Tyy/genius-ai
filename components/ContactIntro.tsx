import Image from 'next/image';
import React, { useRef } from 'react';


const ContactIntro = () => {
    const scroll = useRef<any>(null);

    const handleArrowDown = () => {
        if (scroll.current) {
            const rect = scroll.current.getBoundingClientRect();
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            <div className='flex flex-col md:flex-row j p-8 md:p-12 lg:p-16 h-auto md:h-[50vh]'>
                <div className="flex md:flex-row justify-around flex-col md:w-1/2">
                    <div className='w-1/2'>
                        <button className='p-4 mb-4 rounded-lg space-x-3 styled-button'>
                            <p className='block'>Home {">"} ContactUs</p>
                        </button>
                        <h1 className="text-3xl md:text-5xl"><span className='gradient-text font-semibold'>Contact</span>Us</h1>
                    </div>
                </div>
                <Image src="/contact.svg" alt="search" width={100} height={100} className='w-full md:w-1/2 mt-8 md:mt-0' />
            </div>
            <div className='flex justify-center items-center' ref={scroll}>
                <button
                    className='bg-[#141416] p-2 rounded-full -mt-[25px]'
                    onClick={handleArrowDown}
                    aria-label="Scroll down"
                >
                    <Image src="/arrow-down.png" alt="search" width={24} height={24} />
                </button>
            </div>

        </>
    );
};

export default ContactIntro;
