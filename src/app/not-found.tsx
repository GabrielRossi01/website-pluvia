import Link from 'next/link'
import React from 'react'

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
            <h1 className="text-6xl font-bold text-white">404 :(</h1>
            <h2 className="text-white text-2xl mt-6">Oops! Está página não pode ser encontrada!</h2>
            <Link
                href="/"
                className="w-2xs py-2 mt-6 rounded-md bg-gradient-to-r from-[#7F5AF0] to-[#BF6464] font-medium text-white cursor-pointer hover:from-[#BF6464] hover:to-[#7F5AF0] transition duration-300 px-6 text-center"
            >
                Voltar para a página inicial
            </Link>

        </div>
    )
}