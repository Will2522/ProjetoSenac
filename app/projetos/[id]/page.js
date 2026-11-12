import Link from "next/link";
import { projetos } from "@/componentes/Dados";

export function generateStaticParams() {
  return projetos.map((proj) => ({
    id: String(proj.id),
  }));
}

export default async function DetalheProjetoPage({ params }) {
  const { id } = await params;
  const projeto = projetos.find((p) => String(p.id) === String(id));

  if (!projeto) {
    return (
      <main className="conteudo">
        <section className="secao">
          <h1>Projeto não encontrado</h1>
          <Link href="/projetos" className="botao">
            Voltar para projetos
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="conteudo">
      <section className="secao">
        <div className="cartao">
          <h1>{projeto.titulo}</h1>
          <p>{projeto.descricao}</p>

          <div className="tecnologias">
            {projeto.tecnologias?.map((tech, index) => (
              <span key={index} className="tag">
                {tech}
              </span>
            ))}
          </div>

          <div className="acoes">
            <a
              href={projeto.github || "https://github.com/Will2522"}
              target="_blank"
              rel="noopener noreferrer"
              className="botao"
            >
              Ver no GitHub
            </a>
            <Link href="/projetos" className="botao">
              Voltar
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}