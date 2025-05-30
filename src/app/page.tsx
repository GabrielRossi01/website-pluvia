'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TipoCard } from '@/types/TipoCard';

export default function Home() {

  const cards: TipoCard[] = [
    {
      img: '/semiarido.jpg',
      title: 'Escassez no semiárido',
      desc: 'Milhões vivem em áreas com acesso limitado à água potável, especialmente no Nordeste brasileiro.',
    },
    {
      img: '/ondas-de-calor.jpg',
      title: 'Ondas de calor extremo',
      desc: 'As mudanças climáticas intensificam as ondas de calor, afetando diretamente o abastecimento de água.',
    },
    {
      img: '/comunidade.jpeg',
      title: 'Comunidades isoladas',
      desc: 'Famílias afastadas dos centros urbanos sofrem com a falta de acesso à infraestrutura básica de saneamento.',
    },
  ];

  return (
    <main className="min-h-screen mt-52">
      <section className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#4E60BC] text-5xl font-extrabold mb-4"
        >
          Conheça o C.A.P.T.A
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#4E60BC] text-3xl font-bold mb-4"
        >
          Coletor Atmosférico Portátil de Tratamento de Água
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto"
        >
          Solução portátil e sustentável de captação e purificação de água do ar para regiões afetadas por eventos extremos de calor e escassez hídrica.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link href="/sobre">
            <button className="font-medium mt-10 px-6 py-2 bg-gradient-to-r from-[#7F5AF0] to-[#BF6464] text-white rounded-full cursor-pointer transition duration-300 hover:from-[#BF6464] hover:to-[#7F5AF0]">
              Saiba mais
            </button>
          </Link>
        </motion.div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card, i) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.3 }}
            className="bg-[#1e1e1e60] rounded-2xl shadow-md p-6 text-center"
          >
            <Image
              src={card.img}
              alt={card.title}
              width={400}
              height={250}
              className="rounded-xl mx-auto"
            />
            <h2 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#7F5AF0] to-[#BF6464] font-semibold mt-4">
              {card.title}
            </h2>
            <p className="text-gray-300 mt-2">{card.desc}</p>
          </motion.article>
        ))}
      </section>
    </main>
  );
}
