import Image from 'next/image';
import React, { useRef } from 'react';
import styled from 'styled-components';

const InputBorder = styled.div`
  border-radius: 0px 20px 20px 0px;
  border: 1px solid rgba(51, 66, 255, 0.00);
  background: linear-gradient(90deg, rgba(17, 16, 24, 0.00) 0.28%, rgba(17, 16, 24, 0.51) 129.42%);
  background-blend-mode: overlay;
`;




const BlogIntro = () => {
    const scroll = useRef<HTMLElement | null>(null);

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
                            <p className='block'>Home {">"} Blogs</p>
                        </button>
                        <h1 className="text-3xl md:text-5xl"><span className='gradient-text font-semibold'>Blog</span> List</h1>
                    </div>
                </div>
                <Image src="/News.svg" alt="search" width={200} height={500} className='w-full md:w-1/2 mt-8 md:mt-0' />
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
            <div className='flex justify-center'>
            <InputBorder className='flex w-full md:w-[40%] flex-row p-4 md:p-2 justify-between items-center mt-4 md:mt-8 '>
                <div className='flex flex-row  space-x-2  items-center justify-center'>
                    <span className='gradient-border rounded-full p-2 w-8 md:w-10 h-8 md:h-10'><Image src="/search.png" alt="search" width={24} height={24} /></span>
                    <input type='text' placeholder='Search Blogs' className='bg-transparent outline-none text-white md:w-48' />
                </div>
                <button className='gradient-border p-4 md:w-40 rounded-lg space-x-3 flex items-center justify-center'>
                    <p className='hidden md:block'>Search</p>
                </button>
            </InputBorder>
            </div>
        </>
    );
};

export default BlogIntro;
