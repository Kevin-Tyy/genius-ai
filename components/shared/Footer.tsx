import { icons } from '@/app/utils/constants'
import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <footer className='mt-3 p-4 md:p-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b-2 border-[#3A4553]'>
        <div className='p-4 md:p-8 space-y-4'>
          <h1 className='uppercase'>Tools AI</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quas a corporis, vel unde ipsam labore ratione, earum ad debitis</p>

          <div className="flex space-x-4">
            {icons.map((icon, i) => (
              <span className='gradient-border rounded-full p-2 w-8 h-8 flex' key={i}><Image src={icon.iconUrl} alt="icon" width={24} height={24} /></span>
            ))}
          </div>
        </div>
        <div className='p-4 md:p-8 space-y-4'>
          <h1>Use Cases</h1>
          <Image src="/union.svg" alt='union' width={180} height={2} />
          <ul className="space-y-4">
            <li>Blog Ideas & Outline</li>
            <li>Google Ads Description</li>
            <li>Blog Writing Content</li>
            <li>Cover Letter Write</li>
            <li>Company Name Generator</li>
          </ul>
        </div>
        <div className='p-4 md:p-8 space-y-4'>
          <h1>Quick Links</h1>
          <Image src="/union.svg" alt='union' width={180} height={2} />
          <ul className="space-y-4">
            <li>Blogs</li>
            <li>Home</li>
            <li>Pricing Plans</li>
            <li>AI Images</li>
            <li>Speech To Text</li>
          </ul>
        </div>
        <div className='p-4 md:p-8 space-y-4'>
          <h1>Need Help?</h1>
          <Image src="/union.svg" alt='union' width={180} height={2} />
          <ul className="space-y-4">
            <li>Login</li>
            <li>Register</li>
            <li>Contact Us</li>
            <li>Pricing Plans</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-between items-center mt-4 md:mt-8'>
        <h1 className='mb-2 md:mb-0 text-sm'>copyright @ 2024, <span className='text-[#F39E5D]'>AI Tools</span> All Right Reserved</h1>
        <div className='flex space-x-4 text-sm'>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
