import Cabecalho from "../componentes/cabecalho";
import Rodape from "../componentes/rodape";
import Cartao from "../componentes/cartao";
import Secao from "../componentes/secao";
import { projetos } from "../dados";

export const metadata = {
  title: "Projetos | Dev Portfolio",
  description: "Conheça meus projetos e as tecnologias utilizadas.",
};

export default function ProjetosPage() {
  return (
    <>
      <Cabecalho />

      <main className="container pagina-interna">
        <Secao
          titulo="Todos os projetos"
          subtitulo="Explore minhas criações, tecnologias e experiências."
        >
          <div className="grade-projetos">
            {projetos.map((projeto) => (
              <Cartao key={projeto.id} {...projeto} />
            ))}
          </div>
        </Secao>
      </main>

      <Rodape />
    </>
  );
}
```[cite: 16]

---

### 6. `app/projetos/[id]/page.js`
```javascript
import Link from "next/link";
import { notFound } from "next/navigation";
import Cabecalho from "../../componentes/cabecalho";
import Rodape from "../../componentes/rodape";
import { projetos } from "../../dados";

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