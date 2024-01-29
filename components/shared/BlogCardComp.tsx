import React, { FC } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import styled from 'styled-components';

interface BlogCardCompProps {
  imageUrl: string;
  title: string;
  date: string;
  content: string;
  readMoreButtonText: string;
  height: string;
  width: string;
}

const StyledBorder = styled.div`
  background: linear-gradient(90deg, rgba(249, 248, 247, 0.00) 0%, #FBFAFA 9.09%, rgba(249, 248, 247, 0.00) 100%);
  height: 5px;
`

const StyledButton = styled.button`
  box-shadow: 0px 14px 20px 0px rgba(42, 51, 83, 0.80);
`

const BlogCardComp: FC<BlogCardCompProps> = ({ imageUrl, title, date, content, readMoreButtonText, height, width }) => {
  return (
    <div className="flex justify-center mt-10 px-2 md:px-0">
      <div className={`relative w-full md:w-[${width}] h-[50vh]  rounded-xl overflow-hidden`}>
        <div
          className="absolute inset-0 bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="absolute bottom-0 w-full h-[43vh] md:h-[30vh]  rounded-t-3xl gradient-card p-2 md:p-6 space-y-4">
          <div className='flex flex-col md:flex-row justify-between'>
            <h1 className='md:w-[60%] text-white'>Exploring the Latest AI Programming Tools.</h1>
            <span className='flex space-x-4 items-center justify-center md:w-[40%]'>
              <FaCalendarAlt />
              <p className="text-white">Oct 2018 - present</p>
            </span>
          </div>

          <StyledBorder className='w-full md:w-[80%] flex justify-center' />

          <p className="text-white text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, repellat nemo iusto beatae, impedit in placeat accusantium eos perspiciatis voluptatem aliquid asperiores suscipit sint totam aspernatur magni dignissimos? Ea, obcaecati!
          </p>

          <StyledButton className='p-2 w-full md:w-32 rounded-md'>Read More</StyledButton>
        </div>
      </div>
    </div>
  );
}

export default BlogCardComp;
