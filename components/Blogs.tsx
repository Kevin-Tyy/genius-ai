import Image from 'next/image'
import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa';
import styled from 'styled-components';

const StyledDiv = styled.div`
    border-radius: 20px;
border: 1px solid rgba(255, 255, 255, 0.00);

background: linear-gradient(180deg, rgba(49, 58, 91, 0.00) -1.11%, rgba(49, 58, 91, 0.44) 23.83%, #313A5B 99.56%);

backdrop-filter: blur(70px);
`

const Blogs = () => {
    return (
        <div className=' flex space-x-4 w-full md:w-[16vw] h-auto md:h-[10vh] rounded-xl gradient-card border-2 border[#5C6A9E] mt-3 p-4'>

            <Image src="/ai-art.png" alt='ait-art' width={100} height={100} className='rounded-xl ' />

            <div className='text-start '>
                <h1 className='text-md font-semibold'>A Journey into the World of AI</h1>
                <span className='flex justify-center items-center space-x-2 mt-2'>
                    <FaCalendarAlt />
                    <p className="text-white text-sm">Oct 2018 - present</p>
                </span>
            </div>
        </div>
    )
}

export default Blogs
