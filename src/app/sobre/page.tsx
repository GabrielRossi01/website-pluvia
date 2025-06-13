"use client";

import React from "react";
import { motion } from "framer-motion";
import { TipoSecao } from "@/types/TipoSecao";
import { FaClipboardList, FaCloudSun, FaLeaf, FaTachometerAlt, FaTint } from "react-icons/fa";

export default function Sobre() {

  const sections: TipoSecao[] = [
    {
      title: "Como funciona o C.A.P.T.A?",
      description:
        "O Coletor Atmosférico Portátil de Tratamento de Água capta a umidade do ar, realiza a filtragem e purificação, gerando água potável. Ideal para comunidades com escassez hídrica.",
      icon: <FaTint className="w-8 h-8 text-[#7F5AF0]" />,
    },
    {
      title: "Dashboard",
      description:
        "Visualize gráficos de indicadores em tempo real da produção de quantidade por modelo e de volume por dispositivo.",
      icon: <FaTachometerAlt className="w-8 h-8 text-[#7F5AF0]" />,
    },
    {
      title: "Gestão de relatórios",
      description:
        "Visualize e exclua relatórios gerados por usuários com facilidade.",
      icon: <FaClipboardList className="w-8 h-8 text-[#7F5AF0]" />,
    },
    {
      title: "Previsão climática",
      description:
        "Exibe previsões climáticas simuladas para auxiliar em decisões operacionais.",
      icon: <FaCloudSun className="w-8 h-8 text-[#7F5AF0]" />,
    },
    {
      title: "Painel de benefícios ambientais",
      description:
        "Mostra litros de água gerados, CO₂ economizado e número de pessoas beneficiadas com o uso do C.A.P.T.A.",
      icon: <FaLeaf className="w-8 h-8 text-[#7F5AF0]" />,
    },
  ];

  return (
    <div className="min-h-screen mt-52 text-center px-6 pb-20">

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#4E60BC] text-5xl font-extrabold mb-2"
      >
        Saiba mais sobre o
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#4E60BC] text-5xl font-extrabold mb-12"
      >
        C.A.P.T.A
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {sections.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
            className="bg-[#1e1e1e60] rounded-2xl p-6 shadow-md text-left mt-5"
          >
            <div className="flex items-center gap-3 mb-4">
              {item.icon}
              <h3 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#7F5AF0] to-[#BF6464] font-semibold mb-2 ">
                {item.title}
              </h3>
            </div>
            <p className="text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
