"use client"
import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from './shared/Logo';
import Image from 'next/image';
import Link from 'next/link';
const StyledInput = styled.input`
  background: linear-gradient(114deg, rgba(49, 58, 91, 0.33) -21.49%, rgba(49, 58, 91, 0.00) 111.75%);
  box-shadow: 50px 60px 120px 0px rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(70px);
  padding: 10px;
  width: 100%;
  &:focus {
    outline: none;
    border-color: blue-500;
  }
`;

const LoginPage = () => {
    const [username, setUsername] = useState('Sherez Ahmed');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Submitted:", username, password);
    };

    return (
        <div className='flex flex-col md:flex-row justify-center items-center md:p-10 p-2 mt-2 md:mt-20'>
            <div className='w-full md:w-[30vw] p-8 space-y-8'>
            <Link href="/"><Logo /></Link>
                <h1 className="text-3xl font-bold mb-4">Join Tools AI</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat accusantium expedita voluptatum veniam quibusdam enim? Corrupti aliquam molestiae inventore iusto quod</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-1">Email Address</label>
                        <StyledInput
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='border-2 border-[#5C6A9E] rounded-lg'
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1">Password</label>
                        <StyledInput
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='border-2 border-[#5C6A9E] rounded-lg'
                        />
                    </div>
                    <button className='gradient-border p-4 w-full rounded-lg space-x-3 flex items-center justify-center'>
                        <p>Login</p>
                    </button>
                    <p className="text-center">Don’t have an accounts? Register</p>
                </form>
            </div>
            <div className="relative w-full md:w-[40vw] rounded-md overflow-hidden h-[72vh] ">
                <Image src="/Card.png" alt="tool" layout="fill" objectFit="cover" />
                {/* <div className="absolute inset-0 bg-cover bg-no-repeat" style={{ backgroundImage: 'url(/tool-card.svg)' }}></div> */}
                {/* <div className="absolute bottom-0 w-full h-[65vh] rounded-t-3xl gradient-card p-2 md:p-6 space-y-4" style={{ backgroundImage: 'url(/tools-ai.svg)', backgroundSize: "cover", backgroundRepeat: "no-repeat" }}></div> */}
            </div>
        </div>
    );
};

export default LoginPage;
