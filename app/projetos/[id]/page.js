
import Link from "next/link";
import { notFound } from "next/navigation";
import { Projeto } from "../../componentes/Dados";

export function generateStaticParams() {
  return Projeto.map((proj) => ({
    id: String(proj.id),
  }));
}

export default async function DetalhesPage({ params }) {
  const { id } = await params;

  const projeto = Projeto.find(
    (proj) => String(proj.id) === id
  );

  if (!projeto) notFound();

  return (
    <section className="secao">
      <h1>{projeto.titulo}</h1>
      <p>{projeto.descricao}</p>

      <h2>Tecnologias</h2>
      <div className="tecnologias">
        {projeto.tecnologias.map((tec) => (
          <span key={tec} className="tag">
            {tec}
          </span>
        ))}
      </div>

      <p style={{ marginTop: 24 }}>
        <Link href="/projetos" className="botao">
          Voltar aos projetos
        </Link>
      </p>
    </section>
  );
}
