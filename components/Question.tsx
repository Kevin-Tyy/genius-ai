import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const InputBorder = styled.div`
border-radius: 0px 20px 20px 0px;
border: 1px solid rgba(51, 66, 255, 0.00);
background: linear-gradient(90deg, rgba(17, 16, 24, 0.00) 0.28%, rgba(17, 16, 24, 0.51) 129.42%);
background-blend-mode: overlay;
`

const Question = () => {
  return (
    <div className='h-auto md:h-96 mt-10 flex flex-col items-center justify-center rounded-2xl mx-auto border-2 border-white  md:w-[80%]' style={{ backgroundImage: 'url("/gradient-bg.png")', backgroundSize: 'cover' }}>
      <div>
        <h1 className='text-2xl md:text-3xl lg:text-4xl'>Have question? <span className='gradient-text font-bold'>Call us 24/7</span></h1>
        <p className='text-center mt-4 md:mt-8'>+91-45345217</p>
      </div>
      <InputBorder className='flex flex-row p-4 md:p-8 justify-between items-center mt-4 md:mt-8'>
        <div className='flex flex-row  space-x-2  items-center justify-center'>
          <span className='gradient-border rounded-full p-2 w-8 md:w-10 h-8 md:h-10'><Image src="/mail.svg" alt="search" width={24} height={24} /></span>
          <input type='text' placeholder='Write Your Email Adress' className='bg-transparent outline-none text-white md:w-48' />
        </div>
        <button className='gradient-border p-2 md:p-3 w-full md:w-32 rounded-lg md:mt-0 md:ml-4 space-x-2 flex items-center justify-center'>
          <p>Get Started</p>
        </button>
      </InputBorder>

    </div>
  );
};

export default Question;
