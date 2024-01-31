import Image from 'next/image';
import React, { useRef } from 'react';
import styled from 'styled-components';

const InputBorder = styled.div`
  border-radius: 0px 20px 20px 0px;
  border: 1px solid white;
  background: linear-gradient(90deg, rgba(17, 16, 24, 0.00) 0.28%, rgba(17, 16, 24, 0.51) 129.42%);
  background-blend-mode: overlay;
  
`;

const Intro = () => {
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
      <div className='flex flex-col md:flex-row p-8 md:p-32 h-auto md:h-[80vh]' style={{ backgroundImage: 'url("/computer.png")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className=" text-white ">
          <button className='p-4 mb-4 rounded-lg space-x-3 styled-button flex items-center justify-center'>
            <Image src="/circle.png" alt="search" width={24} height={24} />
            <p className='block'>No #1 Tool for AI</p>
          </button>
          <h1 className='text-3xl md:text-5xl font-bold'>Use AI to Generate Creative</h1>
          <h1 className='text-3xl md:text-5xl gradient-text font-semibold'>Blog Ideas & Outlines</h1>
          <p className='text-sm mt-4 md:mt-8'>AI Copywriting is revolutionizing the way content is created. AI can create content for <br />blogs, articles, websites, social media and more.</p>

          <InputBorder className='flex w-full md:w-[80%] flex-row p-4 md:p-2 justify-between items-center mt-4 md:mt-8'>
            <div className='flex flex-row  space-x-2  items-center justify-center'>
              <span className='gradient-border rounded-full p-2 w-8 md:w-10 h-8 md:h-10'><Image src="/search.png" alt="search" width={24} height={24} /></span>
              <input type='text' placeholder='Write Your Email Adress' className='bg-transparent outline-none text-white md:w-48' />
            </div>
            <button className='gradient-border p-3 md:w-52 rounded-lg space-x-3 flex items-center justify-center'>
              <Image src="/play.png" alt="search" width={24} height={24} />
              <p className='hidden md:block'>Start Free Trial</p>
            </button>
          </InputBorder>
        </div>

        {/* <div>
         <Image src="/computer.png" alt='computer' objectFit='cover' layout='responsive' width={600} height={600} />

        </div> */}

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

export default Intro;
