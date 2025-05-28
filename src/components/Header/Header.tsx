'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { HiMenu } from 'react-icons/hi';

export default function Header() {

    const [open, setOpen] = useState(false);

    return (
        <header className='flex items-center justify-between px-8 py-4 bg-zinc-900/80 backdrop-blur-md rounded-lg text-white shadow-lg fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[100%] max-w-6xl'>
            <Link href="/" className='flex items-center gap-2'>
                <Image
                    src="/pluvia-logo.svg"
                    alt="Pluvia+ Logo"
                    width={45}
                    height={45}
                    className=""
                />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#4E60BC] font-bold ml-1">pluvia+</span>
            </Link>

            <button
                onClick={() => setOpen(!open)}
                className="md:hidden"
            >
                <HiMenu size={28} />
            </button>

            <nav className={`
                absolute md:static top-20 left-6 right-6 bg-zinc-900/80 md:bg-transparent p-4 md:p-0 
                rounded-lg md:rounded-none flex flex-col md:flex-row items-center gap-4 md:gap-8 
                text-sm font-light transition-all duration-300 ease-in-out 
                ${open ? 'block' : 'hidden md:flex'}
            `}>
                <Link href="/" className='hover:text-[#4E60BC] transition-colors'>Home</Link>
                <Link href="/about" className='hover:text-[#4E60BC] transition-colors'>Sobre</Link>
                <Link href="/contact" className='hover:text-[#4E60BC] transition-colors'>Contato</Link>
                <Link href="/integrantes" className='hover:text-[#4E60BC] transition-colors'>Integrantes</Link>
            </nav>

        </header>
    )
}
