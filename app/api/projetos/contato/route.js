import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { nome, email, mensagem } = body;

    console.log('Mensagem recebida:', { nome, email, mensagem });

    return NextResponse.json(
      { success: true, message: 'Mensagem enviada com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Erro ao processar a requisição.' },
      { status: 500 }
    );
  }
}