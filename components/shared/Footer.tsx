import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";

function Footer() {
  const icons = [
    {
      link: "https://facebook.com/",
      icon: <FaFacebookF size={22} />,
    },
    {
      link: "https://x.com/",
      icon: <FaTwitter size={22} />,
    },
    {
      link: "https://instagram.com/",
      icon: <FaInstagram size={22} />,
    },
    {
      link: "https://pinterest.com/",
      icon: <FaPinterestP size={22} />,
    },
  ];
  return (
    <footer className="mt-16 px-3 md:px-12">
      <div className="w-full max-w-[1560px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b-2 border-[#302A51]/50 pb-8">
          <div className="p-4 md:p-8 space-y-5 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Image src="/logo/tools-ai.svg" alt="icon" width={22} height={22} />
                <h1 className="uppercase text- !mt-62xl">Tools AI</h1>
              </div>
              <p className="max-w-[220px] leading-loose">Lorem ipsum dolor sit amet consectetur adipiscing elit Pharetra tortor nec </p>
            </div>
            <div className="flex space-x-4">
              {icons.map((icon, i) => (
                <Link href={icon.link} target="_blank">
                  <span
                    className="gradient-border rounded-full p-3 flex cursor-pointer hover:bg-gradient-to-r hover:from-[#91bc60] hover:via-[#817646] hover:to-[#f39b5c] hover:!text-[#141625] transition duration-200 border-gradient-light-rounded "
                    key={i}>
                    {icon.icon}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="p-4 md:p-8 space-y-3">
            <h1 className="text-xl font-semibold">Use Cases</h1>
            <Image src="/union.svg" alt="union" width={100} height={2} />
            <ul className="space-y-5 !mt-6">
              <li>Blog Ideas & Outline</li>
              <li>Google Ads Description</li>
              <li>Blog Writing Content</li>
              <li>Cover Letter Write</li>
              <li>Company Name Generator</li>
            </ul>
          </div>
          <div className="p-4 md:p-8 space-y-3">
            <h1 className="text-xl font-semibold">Quick Links</h1>
            <Image src="/union.svg" alt="union" width={100} height={2} />
            <ul className="space-y-5 !mt-6">
              <li>Blogs</li>
              <li>Home</li>
              <li>Pricing Plans</li>
              <li>AI Images</li>
              <li>Speech To Text</li>
            </ul>
          </div>
          <div className="p-4 md:p-8 space-y-3">
            <h1 className="text-xl font-semibold">Need Help?</h1>
            <Image src="/union.svg" alt="union" width={100} height={2} />
            <ul className="space-y-5 !mt-6">
              <li>Login</li>
              <li>Register</li>
              <li>Contact Us</li>
              <li>Pricing Plans</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 mb-12">
          <h1 className="mb-2 md:mb-0 text-sm">
            copyright @ 2022, <span className="text-[#F39E5D]">AI Tools</span> All Right Reserved
          </h1>
          <div className="flex space-x-8 text-sm">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
