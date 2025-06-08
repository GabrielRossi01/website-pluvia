import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    const res = await fetch('https://gs-ddd-pluviaplus-production.up.railway.app/relatorios');
    const data = await res.json();
    return NextResponse.json(data);
}

export async function DELETE(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: 'ID não fornecido' }, { status: 400 });
    }

    const res = await fetch(`${'https://gs-ddd-pluviaplus-production.up.railway.app/relatorios'}/${id}`, {
        method: 'DELETE',
    });

    if (!res.ok) {
        const errorData = await res.json();
        return NextResponse.json(
            { error: 'Erro ao excluir relatório', details: errorData },
            { status: 400 }
        );
    }

    return NextResponse.json({ success: true });
}
