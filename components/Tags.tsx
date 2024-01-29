import React from 'react'
import styled from 'styled-components'

const StyledBorder = styled.div`
    background: linear-gradient(90deg, rgba(249, 248, 247, 0.00) 0%, #FBFAFA 9.09%, rgba(249, 248, 247, 0.00) 100%);
    height: 5px;
`

const Tags = () => {
  return (
    <div className="gradient-card mt-10 h-auto md:h-[25vh] w-full md:w-[18vw] p-5 rounded-xl border-2 border-[#5C6A9E]">
            <h1>Tags</h1>
            <StyledBorder className='w-full md:w-[80%] flex justify-center mt-2' />
            <div className='space-x-4 mt-4'>
               <button className='w-32 border-2 p-2 rounded-md'>Openai</button>
               <button className='w-32 border-2 p-2 rounded-md'>gpt-3.5</button>
            </div>
            <button className='w-32  p-2 rounded-md mt-4 gradient-cards'>gpt-4</button>
        </div>
  )
}

export default Tags
