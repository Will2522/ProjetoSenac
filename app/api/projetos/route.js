
import { NextResponse } from "next/server";

export async function GET() {
  const usuario = "Will2522";

  try {
    const resposta = await fetch(
      `https://api.github.com//${usuario}/repos?sort=updated&per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
        cache: "no-store",
      }
    );

    if (!resposta.ok) {
      return NextResponse.json(
        {
          sucesso: false,
          erro: "Não foi possível buscar os projetos do GitHub",
        },
        { status: resposta.status }
      );
    }

    const repositorios = await resposta.json();

    const projetos = repositorios.map((repo) => ({
      id: repo.id,
      titulo: repo.name,
      descricao: repo.description || "Sem descrição",
      tecnologias: repo.language ? [repo.language] : [],
      github: repo.html_url,
      estrelas: repo.stargazers_count,
    }));

    return NextResponse.json(
      {
        sucesso: true,
        quantidade: projetos.length,
        projetos,
      },
      { status: 200 }
    );
  } catch (erro) {
    return NextResponse.json(
      {
        sucesso: false,
        erro: "Erro ao conectar com o GitHub",
      },
      { status: 500 }
    );
  }
}
