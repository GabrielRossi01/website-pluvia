import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="bg-black text-white px-8 py-12 space-y-10 relative">

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">

                    <Link href="/">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/pluvia-logo.svg"
                                    alt="Logo"
                                    width={32}
                                    height={32}
                                />
                                <span className="font-bold text-white">pluvia+</span>
                            </div>
                            <p className="text-sm text-zinc-400">
                                Copyright &copy; {new Date().getFullYear()} - Todos os direitos reservados
                            </p>
                        </div>
                    </Link>


                    <div>
                        <h4 className="font-semibold mb-2">Ecossistema</h4>
                        <ul className="space-y-1 text-sm text-zinc-300">
                            <li className='hover:text-[#4E60BC] transition-colors cursor-pointer'>Comunidade</li>
                            <li className='hover:text-[#4E60BC] transition-colors cursor-pointer'>Vitrine</li>
                            <li className='hover:text-[#4E60BC] transition-colors cursor-pointer'>Contribuição</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Sobre</h4>
                        <ul className="space-y-1 text-sm text-zinc-300">
                            <li className='hover:text-[#4E60BC] transition-colors cursor-pointer'>Imprensa</li>
                            <li className='hover:text-[#4E60BC] transition-colors cursor-pointer'>Telemetria</li>
                            <li className='hover:text-[#4E60BC] transition-colors cursor-pointer'>Faça parceria conosco!</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Mais links</h4>
                        <ul className="space-y-1 text-sm text-zinc-300">
                            <li className='hover:text-[#4E60BC] transition-colors cursor-pointer'>Blog</li>
                            <li className='hover:text-[#4E60BC] transition-colors cursor-pointer'>Loja de brindes</li>
                            <li className='hover:text-[#4E60BC] transition-colors cursor-pointer'>Wallpapers</li>
                            <li className='hover:text-[#4E60BC] transition-colors cursor-pointer'>Studio</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Vamos manter contato!</h4>
                        <p className="text-sm text-zinc-400 mb-2">
                            Insira seu e-mail para ficar por dentro das últimas atualizações do pluvia+
                        </p>
                        <form className="space-y-2">
                            <input
                                type="email"
                                placeholder="seu@email.com"
                                className="w-full px-4 py-2 rounded-md bg-zinc-800 text-sm text-white placeholder-zinc-500"
                            />
                            <button
                                type="submit"
                                className="w-full py-2 rounded-md bg-gradient-to-r from-[#7F5AF0] to-[#BF6464] font-bold text-white cursor-pointer hover:from-[#BF6464] hover:to-[#7F5AF0] transition duration-300 hover:from-[#BF6464] hover:to-[#7F5AF0]"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>

                <hr className="border-zinc-700" />

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-zinc-400 space-y-4 md:space-y-0">
                    <div className="flex gap-4">
                        <span>Política de Privacidade</span>
                        <span>Termos de serviço</span>
                    </div>
                    <p><span className="font-bold text-white">pluvia+</span> © 2025 Todos os direitos reservados</p>
                </div>
            </footer>
        </>

    )
}
