import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'


const StyledDiv = styled.div`
border-radius: 20px;
border: 1px solid #5C6A9E;

background: linear-gradient(114deg, rgba(49, 58, 91, 0.33) -21.49%, rgba(49, 58, 91, 0.00) 111.75%);

box-shadow: 50px 60px 120px 0px rgba(0, 0, 0, 0.03);
backdrop-filter: blur(70px);`
const Info = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center my-10 space-x-0 space-y-4  md:space-x-4 md:space-y-0'>
            <StyledDiv className='w-full md:w-[25vw] h-32 border-2 flex md:flex-row flex-col md:justify-around border-white rounded-lg p-2 space-y-2'>
                <span className='flex md:items-center md:justify-center space-x-4'>
                    <Image src="/phone.svg" alt='phone' width={50} height={50} />
                    <span className='flex flex-col'>
                        <h1>CallUs on:</h1>
                        <h1>911-987654321</h1>
                    </span>
                </span>
                <span className='flex space-x-4 imd:items-center md:justify-center'>
                    <Image src="/mailUs.svg" alt='phone' width={50} height={50} />
                    <span className='flex  flex-col'>
                        <h1>CallUs on:</h1>
                        <h1>911-987654321</h1>
                    </span>
                </span>
            </StyledDiv>
            <StyledDiv className='w-full md:w-[25vw] h-32 border-2 border-white'>
            <span className='flex space-x-4 p-8'>
                    <Image src="/location.svg" alt='phone' width={50} height={50} />
                    <span className='flex  flex-col'>
                        <h1>Main Office :</h1>
                        <h1>Los Feliz Blvd, Los Angeles, CA 90027, USA</h1>
                    </span>
                </span>
            </StyledDiv>
        </div>
    )
}

export default Info
