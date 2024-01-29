import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import FAQ from './FAQ'

const StyledForm = styled.form`
  border-radius: 20px;
  border: 1px solid #5C6A9E;
  background: linear-gradient(114deg, rgba(49, 58, 91, 0.33) -21.49%, rgba(49, 58, 91, 0.00) 111.75%);
  box-shadow: 50px 60px 120px 0px rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(70px);
  padding: 20px; /* Always apply padding */
  @media (max-width: 768px) {
    padding: 10px;
  }
`

const StyledButton = styled.button`
  border-radius: 10px;
  border: 1px solid #5C6A9E;
  background: linear-gradient(114deg, rgba(49, 58, 91, 0.33) -21.49%, rgba(49, 58, 91, 0.00) 111.75%);
  box-shadow: 50px 60px 120px 0px rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(70px);
  width: 100%; /* Always apply width */
  @media (min-width: 768px) {
    width: auto; /* Reset width for larger screens */
    max-width: 200px; /* Adjust max-width as needed */
  }
`

function ContactForm() {
  return (
    <div className='flex justify-center mt-10'>
      <div className="max-w-screen-lg w-full"> {/* Added max-width container */}
        <span className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-5">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Get In Touch  <span className="gradient-text">With Us</span>
          </h1>
          <Image src="/union.svg" alt='union' width={180} height={2} />
        </span>
        <StyledForm className='mt-10 flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-20 mb-10'>
          <div className='flex flex-col space-y-10 md:w-1/2'>
            <div className='border-b-2 border-[#3A4553] p-4'>
              <input type="text" id="name" name="name" placeholder='Your Name Here' className='bg-transparent outline-none'/>
            </div>
            <div className='border-b-2 border-[#3A4553] p-4'>
              <input type="email" id="email" name="email" placeholder='Your Mail Here' className='bg-transparent outline-none'/>
            </div>
            <div className='border-b-2 border-[#3A4553] p-4'>
              <input type="tel" id="phone" name="phone" placeholder='Your Phone Number' className='bg-transparent outline-none' />
            </div>
            <div className='border-b-2 border-[#3A4553] p-4'>
              <input type="tel" id="service" name="service" placeholder='What Service You Want' className='bg-transparent outline-none' />
            </div>
          </div>
          <div className="flex flex-col">
            <div className='border-2 rounded-md p-2 border-[#3A4553]'>
              <textarea id="message" name="message" rows="4" cols="38" placeholder='Your Message' className='bg-transparent outline-none'></textarea>
            </div>
            <StyledButton className='p-2 rounded-md mt-4'>Submit Message</StyledButton>
          </div>
        </StyledForm>
      </div>
    </div>
  )
}

export default ContactForm
