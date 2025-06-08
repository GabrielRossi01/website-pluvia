'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { HiMenu } from 'react-icons/hi';

export default function Header() {

    const [open, setOpen] = useState(false);

    const pathname = usePathname();

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
                    text-sm font-normal transition-all duration-300 ease-in-out 
                    ${open ? 'block' : 'hidden md:flex'}
                `}>
                <Link
                    href="/sobre"
                    className={`relative transition-colors duration-300 pb-1 
                        ${pathname === '/sobre' ? 'text-[#4E60BC]' : 'text-white'} 
                        after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] 
                        after:bg-[#4E60BC] after:scale-x-0 hover:after:scale-x-100 
                        after:origin-left after:transition-transform 
                        ${pathname === '/sobre' ? 'after:scale-x-100' : ''}`}
                >
                    Sobre
                </Link>

                <Link
                    href="/dashboard"
                    className={`relative transition-colors duration-300 pb-1 
                        ${pathname === '/dashboard' ? 'text-[#4E60BC]' : 'text-white'} 
                        after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] 
                        after:bg-[#4E60BC] after:scale-x-0 hover:after:scale-x-100 
                        after:origin-left after:transition-transform 
                        ${pathname === '/dashboard' ? 'after:scale-x-100' : ''}`}
                >
                    Dashboard
                </Link>

                <Link
                    href="/relatorios"
                    className={`relative transition-colors duration-300 pb-1 
                        ${pathname === '/relatorios' ? 'text-[#4E60BC]' : 'text-white'} 
                        after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] 
                        after:bg-[#4E60BC] after:scale-x-0 hover:after:scale-x-100 
                        after:origin-left after:transition-transform 
                        ${pathname === '/relatorios' ? 'after:scale-x-100' : ''}`}
                >
                    Relatórios
                </Link>

                <Link
                    href="/previsao"
                    className={`relative transition-colors duration-300 pb-1 
                        ${pathname === '/previsao' ? 'text-[#4E60BC]' : 'text-white'} 
                        after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] 
                        after:bg-[#4E60BC] after:scale-x-0 hover:after:scale-x-100 
                        after:origin-left after:transition-transform 
                        ${pathname === '/previsao' ? 'after:scale-x-100' : ''}`}
                >
                    Previsão climática
                </Link>

                <Link
                    href="/painel"
                    className={`relative transition-colors duration-300 pb-1 
                        ${pathname === '/painel' ? 'text-[#4E60BC]' : 'text-white'} 
                        after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] 
                        after:bg-[#4E60BC] after:scale-x-0 hover:after:scale-x-100 
                        after:origin-left after:transition-transform 
                        ${pathname === '/painel' ? 'after:scale-x-100' : ''}`}
                >
                    Painel
                </Link>

                <Link
                    href="/integrantes"
                    className={`relative transition-colors duration-300 pb-1 
                        ${pathname === '/integrantes' ? 'text-[#4E60BC]' : 'text-white'} 
                        after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] 
                        after:bg-[#4E60BC] after:scale-x-0 hover:after:scale-x-100 
                        after:origin-left after:transition-transform 
                        ${pathname === '/integrantes' ? 'after:scale-x-100' : ''}`}
                >
                    Integrantes
                </Link>

            </nav>

        </header>
    )
}
