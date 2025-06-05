"use client";

import React from "react";
import { motion } from "framer-motion";
import { TipoSecao } from "@/types/TipoSecao";
import { FaChartLine, FaCloudSun, FaLeaf, FaTint } from "react-icons/fa";

export default function Sobre() {
  
  const sections: TipoSecao[] = [
    {
      title: "Como funciona o C.A.P.T.A?",
      description:
        "O Coletor Atmosférico Portátil de Tratamento de Água capta a umidade do ar, realiza a filtragem e purificação, gerando água potável. Ideal para comunidades com escassez hídrica.",
      icon: <FaTint className="w-8 h-8 text-[#7F5AF0]" />,
    },
    {
      title: "Análise de Dados",
      description:
        "Simulação do acompanhamento da produção de água com gráficos diários, semanais e mensais.",
      icon: <FaChartLine className="w-8 h-8 text-[#7F5AF0]" />,
    },
    {
      title: "Impacto Social e Ambiental",
      description:
        "Mostra litros de água gerados, CO₂ economizado ao evitar transporte de água e número de pessoas beneficiadas com o uso do C.A.P.T.A",
      icon: <FaLeaf className="w-8 h-8 text-[#7F5AF0]" />,
    },
    {
      title: "Integração com APIs Java",
      description:
        "Conexão com API desenvolvida em Java, responsável por fornecer dados meteorológicos para prever os melhores momentos de coleta de água da chuva e sugerir locais estratégicos para o posicionamento do equipamento.",
      icon: <FaCloudSun className="w-8 h-8 text-[#7F5AF0]" />,
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
            transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
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
