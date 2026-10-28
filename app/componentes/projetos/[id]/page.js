import Link from "next/link";
import { notFound } from "next/navigation";
import Cabecalho from "../../../componentes/Cabecalho";
import Rodape from "../../../componentes/Rodape";
import { projetos } from "../../../dados";

export function generateStaticParams() {
  return projetos.map((projeto) => ({
    id: projeto.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const projeto = projetos.find((item) => item.id === id);

  return {
    title: projeto
      ? `${projeto.titulo} | Dev Portfolio`
      : "Projeto não encontrado",
    description: projeto?.descricao ?? "Projeto não encontrado.",
  };
}

export default async function ProjetoDetalhe({ params }) {
  const { id } = await params;
  const projeto = projetos.find((item) => item.id === id);

  if (!projeto) notFound();

  return (
    <>
      <Cabecalho />

      <main className="container pagina-interna">
        <Link href="/projetos" className="voltar">
          Voltar aos projetos
        </Link>

        <article className="projeto-detalhe">
          <div
            className="projeto-banner"
            style={{ "--cor-projeto": projeto.cor }}
          >
            <span>{projeto.categoria}</span>
            <h1>{projeto.titulo}</h1>
            <div className="cartao-simbolo">{"{ }"}</div>
          </div>

          <div className="projeto-texto">
            <span className="etiqueta">SOBRE O PROJETO</span>
            <h2>{projeto.titulo}</h2>
            <p>{projeto.descricao}</p>

            <h3>Tecnologias utilizadas</h3>

            <div className="tecnologias">
              {projeto.tecnologias.map((tecnologia) => (
                <span key={tecnologia} className="tecnologia">
                  {tecnologia}
                </span>
              ))}
            </div>

            <Link href="/contato" className="botao-principal">
              Falar sobre um projeto
            </Link>
          </div>
        </article>
      </main>

      <Rodape />
    </>
  );
}