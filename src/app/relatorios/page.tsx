'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TipoRelatorio } from '@/types/TipoRelatorio'

export default function Relatorios() {

    const [relatorios, setRelatorios] = useState<TipoRelatorio[]>([])

    const fetchRelatorios = async () => {
        const res = await fetch('/api/relatorios')
        const data = await res.json()
        setRelatorios(data)
    }

    useEffect(() => {
        fetchRelatorios()
    }, [])

    const handleDelete = async (id: number) => {
        await fetch(`/api/relatorios?id=${id}`, {
            method: 'DELETE',
        })
        fetchRelatorios()
    }

    return (
        <div className="min-h-screen text-white px-4 sm:px-6 py-10 sm:py-20 text-center mt-20 sm:mt-40">

            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#4E60BC] mb-6"
            >
                Gestão de relatórios
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto mb-10"
            >
                Visualize e exclua relatórios gerados por usuários com facilidade
            </motion.p>

            <div className="overflow-x-auto">
                <table className="min-w-full border border-white/50 rounded-lg">
                    <thead>
                        <tr className="bg-[#1e1e1e] text-left text-sm uppercase text-gray-300">
                            <th className="px-4 py-3">ID</th>
                            <th className="px-4 py-3">Tipo</th>
                            <th className="px-4 py-3">Data</th>
                            <th className="px-4 py-3">Usuário</th>
                            <th className="px-4 py-3">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {relatorios.map((relatorio) => (
                            <tr key={relatorio.idRelatorio} className="border-t border-white/50 hover:bg-[#2b2b2b]">
                                <td className="px-4 py-2">{relatorio.idRelatorio}</td>
                                <td className="px-4 py-2 capitalize">{relatorio.tipo}</td>
                                <td className="px-4 py-2">{relatorio.dataGeracao}</td>
                                <td className="px-4 py-2">{relatorio.idUsuario}</td>
                                <td className="px-4 py-2">
                                    <button
                                        onClick={() => handleDelete(relatorio.idRelatorio)}
                                        className="text-red-400 hover:underline text-sm cursor-pointer"
                                    >
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
