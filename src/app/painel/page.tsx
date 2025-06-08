'use client'

import { TipoImpacto, TipoTotais } from '@/types/TipoImpacto'
import { useEffect, useState } from 'react'
import { motion } from "framer-motion";


export default function Impacto() {

    const [impactos, setImpactos] = useState<TipoImpacto[]>([])
    const [totais, setTotais] = useState<TipoTotais | null>(null)

    useEffect(() => {
        const fetchDados = async () => {
            try {
                const resImpactos = await fetch('/api/painel')
                const dataImpactos = await resImpactos.json()
                setImpactos(dataImpactos)

                const resTotais = await fetch('/api/painel/painelId')
                const dataTotais = await resTotais.json()
                setTotais(dataTotais)
            } catch (err) {
                console.error('Erro ao buscar dados de impacto:', err)
            }
        }

        fetchDados()
    }, [])

    return (
        <main className="min-h-screen text-white px-4 sm:px-6 py-10 sm:py-20 text-center mt-20 sm:mt-40">

            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#4E60BC] mb-4 max-w-4xl mx-auto"
            >
                Painel de benefícios ambientais
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto mb-10"
            >
                Indicadores de  litros de água gerados, CO₂ economizado e número de pessoas beneficiadas com o uso do C.A.P.T.A
            </motion.p>


            <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-[#1e1e1e60] rounded-xl shadow p-4">
                    <h2 className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#7F5AF0] to-[#BF6464] font-semibold mb-2">Total CO₂ economizado</h2>
                    <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-white to-[#4E60BC] font-semibold mb-2">{totais?.totalCO2.toFixed(2)} kg/m³</p>
                </div>

                <div className="bg-[#1e1e1e60] rounded-xl shadow p-4">
                    <h2 className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#7F5AF0] to-[#BF6464] font-semibold mb-2">Total de pessoas beneficiadas</h2>
                    <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-white to-[#4E60BC] font-semibold mb-2">{totais?.totalPessoas}</p>
                </div>
            </section>


            <section>
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-white/50 rounded-lg">
                        <thead>
                            <tr className="bg-[#1e1e1e] text-left text-sm uppercase text-white">
                                <th className="px-4 py-2 text-left">ID</th>
                                <th className="px-4 py-2 text-left">Produção</th>
                                <th className="px-4 py-2 text-left">CO₂ Economizado (kg)</th>
                                <th className="px-4 py-2 text-left">Pessoas Beneficiadas</th>
                            </tr>
                        </thead>
                        <tbody>
                            {impactos.map((item) => (
                                <tr key={item.idImpacto} className="border-t border-white/50 hover:bg-[#2b2b2b]">
                                    <td className="px-4 py-2">{item.idImpacto}</td>
                                    <td className="px-4 py-2">{item.idProducao}</td>
                                    <td className="px-4 py-2">{item.co2EconomizadoKg.toFixed(2)}</td>
                                    <td className="px-4 py-2">{item.pessoasBeneficiadas}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    )
}
