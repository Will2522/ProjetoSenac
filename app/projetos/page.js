
import Link from "next/link";
import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import Cartao from "../../components/Cartao";
import { Projeto } from "../../components/Dados";

export default function Projetos() {
  return (
    <>
      <Cabecalho />

      <main className="max-w-6xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold mb-8">
          Meus projetos
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {Projeto.map((item) => (
            <Cartao
              key={item.id}
              titulo={item.titulo}
              descricao={item.descricao}
            >
              <p className="my-4 text-sm">
                {item.tecnologias.join(" • ")}
              </p>

              <Link
                href={`/projetos/${item.id}`}
                className="text-blue-600 underline"
              >
                Ver detalhes
              </Link>

              <br />

              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                GitHub
              </a>
            </Cartao>
          ))}

        </div>

      </main>

      <Rodape />
    </>
  );
}
