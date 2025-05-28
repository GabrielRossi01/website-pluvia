'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

export default function Integrantes() {
    const integrantes = [
        {
            nome: 'Gabriel Rossi',
            cargo: 'programming guru',
            descricao:
                'Sempre em busca de inovação, ele une criatividade e código para criar experiências digitais intuitivas e eficientes.',
            imagem: '/imagem-gabriel.jpg',
            linkedin: 'https://www.linkedin.com/in/gabriel-oliveira-rossi-155baa324/',
            github: 'https://github.com/GabrielRossi01',
        },
        {
            nome: 'Patrick Castro',
            cargo: 'programming guru',
            descricao:
                'Gosta de resolver problemas com código limpo e soluções inteligentes, sempre buscando aprender e evoluir junto com o time.',
            imagem: '/imagem-patrick.jpg',
            linkedin: 'https://www.linkedin.com/in/patrick-castro-839aa2273/',
            github: 'https://github.com/castropatrick',
        },
        {
            nome: 'Rodrigo Naoki',
            cargo: 'programming guru',
            descricao:
                'Com atenção aos detalhes e foco na usabilidade, ele garante que cada projeto entregue seja intuitivo e impactante.',
            imagem: '/imagem-rodrigo.jpg',
            linkedin: 'https://www.linkedin.com/in/rodrigo-yamasaki-74a3b1324/',
            github: 'https://github.com/RodrygoYamasaki',
        },
    ];

    return (
        <div className="flex flex-col min-h-screen text-white items-center">
            <div className="py-12 px-4 text-center mt-40">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#4E60BC] text-5xl font-bold mb-20"
                >
                    Sobre nosso time
                </motion.h1>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                    {integrantes.map((pessoa, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.3 }}
                            className="bg-[#1e1e1e60] rounded-lg p-6 text-center shadow-xl flex flex-col items-center"
                        >
                            <Image
                                src={pessoa.imagem}
                                alt={pessoa.nome}
                                width={112}
                                height={112}
                                className="w-28 h-28 rounded-full mx-auto object-cover mb-4"
                            />
                            <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-white to-[#4E60BC] font-semibold mb-2">{pessoa.cargo}</p>
                            <h2 className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#7F5AF0] to-[#BF6464] font-semibold mb-2">{pessoa.nome}</h2>
                            <p className="text-sm text-gray-300 mb-4 text-center">{pessoa.descricao}</p>
                            <div className="flex justify-center gap-2 mt-5">
                                <a href={pessoa.linkedin} target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="text-white hover:text-[#4E60BC] transition-colors duration-300" size={25} />
                                </a>
                                <a href={pessoa.github} target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="text-white hover:text-[#4E60BC] transition-colors duration-300" size={25} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
