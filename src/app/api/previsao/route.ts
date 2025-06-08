// app/api/previsoes/route.ts

import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const res = await fetch('https://gs-ddd-pluviaplus-production.up.railway.app/previsao-climatica/simulada');
        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Erro ao buscar dados' }, { status: 500 });
    }
}
