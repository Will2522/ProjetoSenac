import { NextResponse } from 'next/server';


export async function GET() {
  return NextResponse.json(
    { message: "A API de contacto está operacional. Utilize o método POST para enviar os dados do formulário." },
    { status: 200 }
  );
}


export async function POST(request) {
  try {
    const body = await request.json();
    const { nome, email, mensagem } = body;

    // Validação básica dos campos
    if (!nome || !email || !mensagem) {
      return NextResponse.json(
        { error: "Todos os campos (nome, email, mensagem) são obrigatórios." },
        { status: 400 }
      );
    }

    console.log("Mensagem recebida com sucesso:", { nome, email, mensagem });

    
    return NextResponse.json(
      { success: true, message: "Mensagem enviada com sucesso!" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Erro ao processar a API de contacto:", error);
    
    return NextResponse.json(
      { error: "Ocorreu um erro interno no servidor." },
      { status: 500 }
    );
  }
}