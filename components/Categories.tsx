import React from 'react';
import styled from "styled-components";

const StyledBorder = styled.div`
    background: linear-gradient(90deg, rgba(249, 248, 247, 0.00) 0%, #FBFAFA 9.09%, rgba(249, 248, 247, 0.00) 100%);
    height: 5px;
`
const Categories = () => {
    return (
        <div className="gradient-card mt-10 h-[25vh] w-full md:w-[18vw] p-5 rounded-xl border-2 border-[#5C6A9E]">
            <h1>Categories</h1>
            <StyledBorder className='w-full md:w-[80%] flex justify-center mt-2' />
            <div className='space-y-4 mt-4'>
                <span className='flex justify-between'>
                    <h1>AI Content</h1>
                    <p>(1)</p>
                </span>
                <span className='flex justify-between'>
                    <h1>AI Image</h1>
                    <p>(1)</p>
                </span>
                <span className='flex justify-between'>
                    <h1>AI Code</h1>
                    <p>(1)</p>
                </span>
            </div>
        </div>
    )
}

export default Categories
