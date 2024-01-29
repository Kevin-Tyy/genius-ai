import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa';
import styled from 'styled-components';
import BlogCardComp from '../shared/BlogCardComp';
import RecentBlog from '../RecentBlog';
import Categories from '../Categories';
import Tags from "../Tags"

const StyledBorder = styled.div`
    background: linear-gradient(90deg, rgba(249, 248, 247, 0.00) 0%, #FBFAFA 9.09%, rgba(249, 248, 247, 0.00) 100%);
    height: 5px;
`

const StyledButton = styled.button`
border-radius: 10px;
border: 1px solid #5C6A9E;
background: linear-gradient(114deg, rgba(49, 58, 91, 0.33) -21.49%, rgba(49, 58, 91, 0.00) 111.75%);
box-shadow: 50px 60px 120px 0px rgba(0, 0, 0, 0.03);
backdrop-filter: blur(70px);
`
const BlogCard = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row flex-wrap  justify-center md:space-x-10 space-x-0  mt-10 px-2 md:px-0">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className="relative w-full md:w-[18vw] h-[50vh] rounded-md overflow-hidden">
                        <div
                            className="absolute inset-0 bg-contain bg-no-repeat"
                            style={{ backgroundImage: 'url(/ai-art.png)' }}
                        ></div>
                        <div className="absolute bottom-0 w-full h-auto rounded-t-3xl gradient-card p-2 md:p-6 space-y-4">
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
                    <div className="relative w-full md:w-[18vw] h-[50vh] rounded-md overflow-hidden">
                        <div
                            className="absolute inset-0 bg-contain bg-no-repeat"
                            style={{ backgroundImage: 'url(/ai-journey.png)' }}
                        ></div>
                        <div className="absolute bottom-0 w-full h-auto rounded-t-3xl gradient-card p-2 md:p-6 space-y-4">
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
                    <div className="relative w-full md:w-[18vw] h-[50vh]  rounded-md overflow-hidden">
                        <div
                            className="absolute inset-0 bg-contain bg-no-repeat"
                            style={{ backgroundImage: 'url(/ai-robot.png)' }}
                        ></div>
                        <div className="absolute bottom-0 w-full h-auto rounded-t-3xl gradient-card p-2 md:p-6 space-y-4">
                            <div className='flex flex-col md:flex-row justify-between'>
                                <h1 className='md:w-[60%] text-white'>Exploring the Latest AI Programming Tools.</h1>
                                <span className='flex space-x-4 items-center justify-center md:w-[40%]'>
                                    <FaCalendarAlt />
                                    <p className="text-white">Oct 2018 - present</p>
                                </span>
                            </div>

                            <StyledBorder className='w-full md:w-[80%] flex justify-center' />

                            <p className="text-white text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos rerum placeat sapiente eveniet perspiciatis maxime ullam laudantium sit recusandae. Atque, nam? Quo commodi voluptate laboriosam alias sequi neque, voluptatum ut?
                            </p>

                            <StyledButton className='p-2 w-full md:w-32 rounded-md'>Read More</StyledButton>
                        </div>
                    </div>
                    <div className="relative w-full md:w-[18vw] h-[50vh]  rounded-md overflow-hidden">
                        <div
                            className="absolute inset-0 bg-contain bg-no-repeat"
                            style={{ backgroundImage: 'url(/ai-works.png)' }}
                        ></div>
                        <div className="absolute bottom-0 w-full h-auto rounded-t-3xl gradient-card p-2 md:p-6 space-y-4">
                            <div className='flex flex-col md:flex-row justify-between'>
                                <h1 className='md:w-[60%] text-white'>Exploring the Latest AI Programming Tools.</h1>
                                <span className='flex space-x-4 items-center justify-center md:w-[40%]'>
                                    <FaCalendarAlt />
                                    <p className="text-white">Oct 2018 - present</p>
                                </span>
                            </div>

                            <StyledBorder className='w-full md:w-[80%] flex justify-center' />

                            <p className="text-white text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos rerum placeat sapiente eveniet perspiciatis maxime ullam laudantium sit recusandae. Atque, nam? Quo commodi voluptate laboriosam alias sequi neque, voluptatum ut?
                            </p>

                            <StyledButton className='p-2 w-full md:w-32 rounded-md'>Read More</StyledButton>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative w-full md:w-[18vw] rounded-md overflow-hidden">

                        <RecentBlog />
                        <Categories />
                        <Tags />
                    </div>
                </div>
            </div>
          <div className='flex justify-center space-x-5 mt-5'>
            {Array.from({ length: 5} , (_, index) => (
                <StyledButton key={index} className='border-2 border-white p-auto gradient-card rounded-md w-8 h-8'>{index + 1}</StyledButton>
            ))}
          </div>
        </div>
    )
}

export default BlogCard
