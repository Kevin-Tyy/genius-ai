import Motion from "@/providers/Motion";
import Image from "next/image";
import React from "react";

const Info = () => {
  return (
    <div className="px-3 md:px-12 mt-8">
      <div className="max-w-[1560px] mx-auto flex flex-col md:flex-row justify-center gap-8">
        <Motion transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -25 }, visible: { opacity: 1, x: 0 } }}>
          <div className="w-full card-border-gradients bg-gradient-to-br from-[#313a5b54] to-[#313a5b00] backdrop-blur-3xl rounded-[30px]">
            <div className="flex flex-col sm:flex-row md:flex-col xl:flex-row gap-6 items-center px-4 py-6 min-[400px]:px-6 md:p-12 lg:p-10">
              <div className="flex items-center space-x-4 w-full">
                <Image src="/svgs/phone.svg" alt="phone" width={64} height={64} className="select-none" draggable={false} />
                <div className="flex flex-col space-y-2">
                  <h1 className="bg-gradient-to-r from-[#8CE3E6] via-[#91BC5D] to-[#F3985B] bg-clip-text text-transparent font-semibold">CallUs on:</h1>
                  <p className="text-[#F8F9FA] text-sm">911-987654321</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 w-full">
                <Image src="/svgs/mail.svg" alt="phone" width={64} height={64} className="select-nonemd" draggable={false} />
                <div className="flex flex-col space-y-2">
                  <h1 className="bg-gradient-to-r from-[#8CE3E6] via-[#91BC5D] to-[#F3985B] bg-clip-text text-transparent font-semibold">Email us:</h1>
                  <p className="text-[#F8F9FA] text-sm">yourmail@mail.com</p>
                </div>
              </div>
            </div>
          </div>
        </Motion>
        <Motion transition={{ duration: 0.5, delay: 0.2 }} variants={{ hidden: { opacity: 0, x: -25 }, visible: { opacity: 1, x: 0 } }}>
          <div className="w-full card-border-gradients bg-gradient-to-br from-[#313a5b54] to-[#313a5b00] backdrop-blur-3xl rounded-[30px] flex items-center">
            <div className="flex space-x-4 px-4 py-6 min-[400px]:px-6 md:p-12 lg:p-10">
              <Image src="/svgs/location.svg" alt="phone" width={64} height={64} className="select-none" draggable={false} />
              <div className="flex flex-col space-y-2">
                <h1 className="bg-gradient-to-r from-[#8CE3E6] via-[#91BC5D] to-[#F3985B] bg-clip-text text-transparent font-semibold">Main Office :</h1>
                <p className="text-[#F8F9FA] text-sm">Los Feliz Blvd, Los Angeles, CA 90027, USA</p>
              </div>
            </div>
          </div>
        </Motion>
      </div>
    </div>
  );
};

export default Info;
