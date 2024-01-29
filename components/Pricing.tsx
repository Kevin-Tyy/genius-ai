import Image from 'next/image'
import React from 'react'
import PriceCards from './cards/PriceCards'


const Pricing = () => {
  return (
    <div>
      <div>
        <div className='md:px-auto lg:px-20 xl:px-40'>
          <span className='flex flex-col md:flex-row md:space-x-4'>
            <h1 className='font-semibold text-2xl  mb-2 md:mb-0md-b md:mb-0'>Pricing <span className='gradient-text'>Plan</span></h1>
            <Image src="/union.svg" alt='union' width={180} height={2} />
          </span>
          <span className='flex flex-col md:flex-row justify-between'>
            <p className="mb-4 md:w-2/3 md:mr-4">It is a long established fact that a reader will be distracted by the readable content of a <br /> page when looking at its layout.</p>
            <div className='flex  space-x-4'>
              <p>Pay Monthly</p>
              <button className='flex justify-start items-center p-1 w-12 h-7 rounded-full bg-white bg-opacity-30'>
                <div className='w-5 h-5 bg-white rounded-full'>{""}</div>
              </button>
              <p className='mb-2 md:mb-0'>Pay Yearly</p>
            </div>
          </span>
        </div>
        <div>
          <PriceCards />
        </div>
      </div>
    </div>
  )
}

export default Pricing
