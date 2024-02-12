import Image from "next/image";
import React from "react";

function ContactForm() {
  return (
    <div className="px-3 md:px-16 mt-32">
      <div className="relative max-w-[1560px] mx-auto w-full">
        <Image src="/svgs/dotted-line-red.svg" alt="" width={6} height={10} className="absolute top-0 -left-24" />

        <span className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-5">
          <h1 className="text-3xl md:text-5xl font-bold !leading-normal">
            <span className="bg-gradient-to-r from-[#8CE3E6] via-[#91BC5D] to-[#F3985B] bg-clip-text text-transparent"> Get In Touch</span> With Us
          </h1>
          <Image src="/union.svg" alt="union" width={180} height={2} />
        </span>
        <form className="mt-10 w-full rounded-[30px] bg-gradient-to-br from-[#313a5b54] to-[#313a5b00]  backdrop-blur-3xl card-border-gradients px-4 py-10 min-[400px]:px-6 md:p-12 xl:p-24">
          <div className="flex flex-col lg:flex-row justify-center w-full gap-12 xl:gap-20">
            <div className="flex flex-col items-center space-y-12 w-full">
              <div className="border-b-[3px] border-[#1f242b] h-[50px] w-full">
                <input type="text" id="name" name="name" placeholder="Your Name Here" className="bg-transparent outline-none w-full" />
              </div>
              <div className="border-b-[3px] border-[#1f242b] h-[50px] w-full">
                <input type="email" id="email" name="email" placeholder="Your Mail Here" className="bg-transparent outline-none w-full" />
              </div>
              <div className="border-b-[3px] border-[#1f242b] h-[50px] w-full">
                <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" className="bg-transparent outline-none w-full" />
              </div>
              <div className="border-b-[3px] border-[#1f242b] h-[50px] w-full">
                <input type="text" id="service" name="service" placeholder="What Service You Want" className="bg-transparent outline-none w-full" />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4 w-full">
              <textarea
                id="message"
                name="message"
                rows={4}
                cols={38}
                placeholder="Your Message"
                className="bg-transparent bg-gradient-to-b from-[#313a5b00] via-[#191e2f70] to-[#151515] backdrop-blur-md border-[3px] border-[#1f242b] p-5 rounded-[18px] h-[193px] outline-none resize-none"></textarea>
              <button className="py-4 rounded-md mt-4 button-gradient-sm max-w-[216px]">Submit Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
