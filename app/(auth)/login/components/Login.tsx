import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../../../../components/shared/Logo";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted:", email, password);
  };

  return (
    <div className="h-screen">
      <div className="px-3 md:px-12 h-full">
        <div className="h-full w-full max-w-[1360px] mx-auto">
          <div className="w-full h-full flex justify-center items-center gap-20">
            <div className={`w-full max-w-[640px] p-8 space-y-16`}>
              <Logo />
              <div className="space-y-8">
                <h1 className="text-2xl md:text-3xl lg:text-[42px] font-bold capitalize">Log In to your account</h1>
                <p className="text-[#F8F9FA] leading-loose">
                  Lorem ipsum dolor sit amet consectetur. Mauris amet lorem elementum urna. Nunc felis nunc ut metus cras fermentum quis cum. Non.
                </p>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-4">
                    <label htmlFor="email" className="block mb-1">
                      Email Address
                    </label>
                    <div className="bg-gradient-to-br from-[#313a5b54] to-[#313a5b00] backdrop-blur-3xl rounded-[18px] input-border-gradients">
                      <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-transparent h-[64px] w-full rounded-[18px] outline-none px-6"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label htmlFor="password" className="block mb-1">
                      Password
                    </label>
                    <div className="bg-gradient-to-br from-[#313a5b54] to-[#313a5b00] backdrop-blur-3xl rounded-[18px] input-border-gradients">
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-transparent h-[64px] w-full rounded-[18px] outline-none px-6"
                      />
                    </div>
                  </div>
                  <button className="gradient-border p-4 w-full rounded-lg space-x-3 flex items-center justify-center shadow-xl shadow-black/60">
                    <p>Login</p>
                  </button>
                  <p className="text-center text-[#f8f9fad2]">
                    Don’t have an account?{" "}
                    <Link href="/signup" className="text-[#F8F9FA] hover:underline">
                      Register
                    </Link>
                  </p>
                </form>
              </div>
            </div>
            <div className={`relative rounded-md overflow-hidden w-full h-full`}>
              <Image src="/Card.png" alt="tool" layout="fill" objectFit="contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
