import Image from 'next/image';
import React from 'react'

interface ReviewCardProps{
    company: string;
    description: string;
    position: string;
    fullName: string;
    profileUrl: string
}
const ReviewCard = ({ company , description , position , fullName , profileUrl}: ReviewCardProps) => {
  return (
    <div className='gradient-card w-[20rem] h-80 space-y-5 rounded-md mt-10 p-4 border border-solid border-white border-opacity-0.00 border-t-1'>
       <h1>{company}</h1>
       <div className='h-1 bg-white bg-opacity-5'></div>
       <p>{description}</p>
       <div className='flex space-x-7'>
        <Image src={profileUrl} alt='profile' width={50} height={30} className='rounded-full'/>
        <span>
            <h1>{fullName}</h1>
            <p>{position}</p>
        </span>
       </div>
    </div>
  )
}

export default ReviewCard
