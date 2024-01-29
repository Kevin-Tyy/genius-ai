import React from 'react'
import styled from "styled-components";
import Blogs from './Blogs';

const StyledBorder = styled.div`
    background: linear-gradient(90deg, rgba(249, 248, 247, 0.00) 0%, #FBFAFA 9.09%, rgba(249, 248, 247, 0.00) 100%);
    height: 5px;
`

const StyledButton = styled.button`
    box-shadow: 0px 14px 20px 0px rgba(42, 51, 83, 0.80);
    
`

const  RecentBlog = () => {
  return (
    <div className='gradient-card w-full h-auto md:h-[45vh] md:w-[18vw] p-5 rounded-xl border-2 border-[#5C6A9E]'>
      <h1 className='text-2xl'>Recent Blogs</h1>
      <StyledBorder className='w-full md:w-[80%] flex justify-center mt-2' />
      <Blogs />
      <Blogs />
      <Blogs />
    </div>
  )
}

export default RecentBlog
