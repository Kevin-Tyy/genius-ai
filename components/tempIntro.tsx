import Image from 'next/image';
import React, { useRef } from 'react';
import styled from 'styled-components';

const InputBorder = styled.div`
  border-radius: 0px 20px 20px 0px;
  border: 1px solid rgba(51, 66, 255, 0.00);
  background: linear-gradient(90deg, rgba(17, 16, 24, 0.00) 0.28%, rgba(17, 16, 24, 0.51) 129.42%);
  background-blend-mode: overlay;
`;

const TempIntro = () => {
    const scroll = useRef<any>(null);

    const handleArrowDown = () => {
        if (scroll.current) {
            const rect = scroll.current.getBoundingClientRect();
            window.scrollTo({
                // top: window.scrollY + rect.bottom,
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <div className='flex flex-col md:flex-row p-8 md:p-32 h-auto md:h-[50vh]'>
                <div className="flex md:flex-row flex-col md:w-1/2">
                    <div>
                        <button className='p-4 mb-4 rounded-lg space-x-3 styled-button flex items-center justify-center'>
                            <Image src="/circle.png" alt="search" width={24} height={24} />
                            <p className='block'>Home {">"} Template</p>
                        </button>
                        <h1 className='text-3xl md:text-5xl gradient-text font-semibold'>All Templates</h1></div>
                </div>
                <Image src="/web-template.svg" alt="search" width={200} height={500} className='w-1/2' />

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

export default TempIntro;
