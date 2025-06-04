"use client";

import React, { useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const dadosDiarios = [
    { dia: "Seg", litros: 12 },
    { dia: "Ter", litros: 15 },
    { dia: "Qua", litros: 10 },
    { dia: "Qui", litros: 20 },
    { dia: "Sex", litros: 17 },
    { dia: "Sáb", litros: 23 },
    { dia: "Dom", litros: 19 },
];

const dadosSemanais = [
    { semana: "Semana 1", litros: 120 },
    { semana: "Semana 2", litros: 135 },
    { semana: "Semana 3", litros: 150 },
    { semana: "Semana 4", litros: 140 },
];

const dadosMensais = [
    { mes: "Jan", litros: 500 },
    { mes: "Fev", litros: 620 },
    { mes: "Mar", litros: 580 },
    { mes: "Abr", litros: 700 },
];

export default function Analise() {
    
    const [periodo, setPeriodo] = useState<"diario" | "semanal" | "mensal">("diario");

    const getData = () => {
        switch (periodo) {
            case "diario":
                return { data: dadosDiarios, dataKeyX: "dia" };
            case "semanal":
                return { data: dadosSemanais, dataKeyX: "semana" };
            case "mensal":
                return { data: dadosMensais, dataKeyX: "mes" };
            default:
                return { data: [], dataKeyX: "x" };
        }
    };

    const { data, dataKeyX } = getData();

    return (
        <div className="min-h-screen text-white px-4 sm:px-6 py-10 sm:py-20 text-center mt-20 sm:mt-40">
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#4E60BC] mb-4 max-w-4xl mx-auto"
            >
                Simulação do acompanhamento da produção de água
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto mb-10"
            >
                Exibição de gráficos diários, semanais e mensais com dados simulados
                do desempenho do equipamento.
            </motion.p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
                <button
                    onClick={() => setPeriodo("diario")}
                    className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm ${periodo === "diario"
                        ? "bg-gradient-to-r from-[#7F5AF0] to-[#BF6464] text-white"
                        : "bg-[#1e1e1e60] text-gray-300 cursor-pointer"
                        }`}
                >
                    Diário
                </button>
                <button
                    onClick={() => setPeriodo("semanal")}
                    className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm ${periodo === "semanal"
                        ? "bg-gradient-to-r from-[#7F5AF0] to-[#BF6464] text-white"
                        : "bg-[#1e1e1e60] text-gray-300 cursor-pointer"
                        }`}
                >
                    Semanal
                </button>
                <button
                    onClick={() => setPeriodo("mensal")}
                    className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm ${periodo === "mensal"
                        ? "bg-gradient-to-r from-[#7F5AF0] to-[#BF6464] text-white"
                        : "bg-[#1e1e1e60] text-gray-300 cursor-pointer"
                        }`}
                >
                    Mensal
                </button>
            </div>

            <div className="w-full h-[300px] sm:h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid stroke="#333" />
                        <XAxis dataKey={dataKeyX} stroke="#ccc" />
                        <YAxis stroke="#ccc" />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#1e1e1e60",
                                borderColor: "#333",
                                color: "#fff",
                            }}
                        />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="litros"
                            stroke="#7F5AF0"
                            strokeWidth={3}
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
