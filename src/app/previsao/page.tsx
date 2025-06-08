'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TipoPrevisao } from '@/types/TipoPrevisao'

export default function Previsao() {

  const [previsoes, setPrevisoes] = useState<TipoPrevisao[]>([])

  const fetchPrevisoes = async () => {
    const res = await fetch('/api/previsao')
    const data = await res.json()
    setPrevisoes(data)
  }

  useEffect(() => {
    fetchPrevisoes()
  }, [])

  return (
    <div className="min-h-screen text-white px-4 sm:px-6 py-10 sm:py-20 text-center mt-20 sm:mt-40">

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#4E60BC] mb-6"
      >
        Previsão climática
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto mb-10"
      >
        Exibe previsões climáticas simuladas para auxiliar em decisões operacionais
      </motion.p>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-white/50 rounded-lg">
          <thead>
            <tr className="bg-[#1e1e1e] text-left text-sm uppercase text-gray-300">
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Data</th>
              <th className="px-4 py-3">Localização</th>
              <th className="px-4 py-3">Temperatura (°C)</th>
              <th className="px-4 py-3">Umidade (%)</th>
            </tr>
          </thead>
          <tbody>
            {previsoes.map((p) => (
              <tr key={p.idPrevisao} className="border-t border-white/50 hover:bg-[#2b2b2b]">
                <td className="px-4 py-2">{p.idPrevisao}</td>
                <td className="px-4 py-2">{p.dataPrevisao}</td>
                <td className="px-4 py-2">{p.idLocalizacao}</td>
                <td className="px-4 py-2">{p.temperaturaCelsius.toFixed(1)}°C</td>
                <td className="px-4 py-2">{p.umidadeRelativa.toFixed(1)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
