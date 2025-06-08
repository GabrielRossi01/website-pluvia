import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const res = await fetch('https://gs-ddd-pluviaplus-production.up.railway.app/impactos/estatisticas/totais')

    if (!res.ok) {
      throw new Error('Erro ao buscar dados da API externa')
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Erro ao buscar dados:', error)
    return NextResponse.json({ error: 'Erro ao buscar dados' }, { status: 500 })
  }
}
