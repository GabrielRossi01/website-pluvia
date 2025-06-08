'use client'

import { useEffect, useState } from 'react'
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, Legend
} from 'recharts'

import { motion } from "framer-motion";
import { DispositivosData, VolumesData } from '@/types/TipoDispositivo';

export default function Dashboard() {

    const [dispositivos, setDispositivos] = useState<DispositivosData | null>(null)
    const [volumes, setVolumes] = useState<VolumesData | null>(null)

    useEffect(() => {
        fetch('/api/dispositivos')
            .then(res => res.json())
            .then(data => setDispositivos(data))

        fetch('/api/volume')
            .then(res => res.json())
            .then(data => setVolumes(data))
    }, [])

    const cores = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#0088FE', '#FF8042']

    const dispositivosData = dispositivos
        ? Object.entries(dispositivos.Modelo).map(([modelo, qtd]) => ({
            name: modelo,
            quantidade: qtd as number,
        }))
        : []

    const volumeData = volumes
        ? Object.entries(volumes).map(([dispositivo, volume]) => ({
            name: dispositivo,
            value: volume as number,
        }))
        : []

    return (
        <div className="min-h-screen text-white px-4 sm:px-6 py-10 sm:py-20 text-center mt-20 sm:mt-40">
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#4E60BC] mb-4 max-w-4xl mx-auto"
            >
                Dashboard C.A.P.T.A
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto mb-10"
            >
                Indicadores em tempo real da produção de quantidade por modelo e de volume por dispositivo
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="bg-[#1e1e1e60] rounded-xl shadow p-4">
                    <h2 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#7F5AF0] to-[#BF6464] font-semibold mb-4">Quantidade por modelo</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={dispositivosData}>
                            <CartesianGrid stroke="#333" />
                            <XAxis dataKey="name" stroke="#ccc" />
                            <YAxis stroke='#ccc' />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#0000007d",
                                    borderColor: "#333",
                                    color: "#ffffff",
                                }} />
                            <Legend />
                            <Bar dataKey="quantidade" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>


                <div className="bg-[#1e1e1e60] rounded-xl shadow p-4">
                    <h2 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#7F5AF0] to-[#BF6464] font-semibold mb-4">Volume por dispositivo</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={volumeData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                fill="#8884d8"
                                label
                            >
                                {volumeData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={cores[index % cores.length]} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#0000007d",
                                    borderColor: "#333",
                                    color: "#ffffff",
                                }} />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}
