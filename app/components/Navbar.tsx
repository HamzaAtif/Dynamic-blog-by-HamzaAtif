'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // Track whether the menu is open or closed

    return (
        <nav className="bg-white shadow-lg mb-[50px]">
            <div className="container mx-auto flex items-center justify-between px-10 py-2">
                {/* Logo */}
                <div className="text-xl font-medium flex flex-col">
                    <Link href="https://www.linkedin.com/in/1hamzaatif/" className='hover:text-[19px]'>Hamza Atif</Link>

                    <Image
                        src={'/Profile.jpeg'}
                        alt='Profile'
                        width={50}
                        height={50}
                        className="ml-5 rounded-full cursor-pointer transition-all ease-out transform hover:border-2 hover:border-blue-500 hover:shadow-lg active:scale-90"
                    />

                </div>

                <button
                    className="focus:outline-none lg:hidden"
                    onClick={()=>{setIsOpen(!isOpen)}} // Toggle isOpen on click
                >
                    {/* Basic open and close toggle */}
                    {isOpen ? <Image src={'/cross.jpg'} alt="cross" width={30} height={30} /> : <Image src={'/menu.jpg'} alt="Menu" width={30} height={30} />}
                </button>

                {/* Links */}
                <div
                    className={`sm:items-center lg:flex lg:gap-6 ${isOpen ? 'block' : 'hidden'}`}
                >
                    <Link href="/">
                        <p className="block py-2 px-4 hover:text-gray-500 rounded">Home</p>
                    </Link>
                    <Link href="/about">
                        <p className="block py-2 px-4 hover:text-gray-500 rounded">About</p>
                    </Link>
                    <Link href="/signin">
                        <p className="block py-2 px-4 hover:text-gray-500 rounded">Sign In</p>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
