import Link from "next/link";
import { projetos } from "@/componentes/Dados";

export default function ProjetosPage() {
  return (
    <main className="conteudo">
      <section className="secao">
        <h1>Meus Projetos</h1>
        <p>Confira os sistemas e aplicações que desenvolvi.</p>

        <div className="grade">
          {projetos.map((projeto) => (
            <article key={projeto.id} className="cartao">
              <h3>{projeto.titulo}</h3>
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
                  Ver GitHub
                </a>
                <Link href={`/projetos/${projeto.id}`} className="botao">
                  Ver detalhes
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}