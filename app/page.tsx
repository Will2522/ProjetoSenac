
import Link from "next/link";

import Cabecalho from "@/componentes/Cabecalho";
import Rodape from "@/componentes/Rodape";
import Secao from "@/componentes/Secao";
import Cartao from "@/componentes/Cartao";
import Curtir from "@/componentes/Curtir";
import ListaTarefas from "@/componentes/ListaTarefas";
import { Projeto } from "@/componentes/Dados";

export default function Home() {
  return (
    <>
      <Cabecalho />

      <main>

        <section className="max-w-6xl mx-auto px-6 py-20">

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Olá, eu sou Willian!
          </h1>

          <p className="text-xl mb-8">
            Desenvolvedor Web em formação,
            apaixonado por tecnologia e programação.
          </p>

          <div className="flex flex-wrap gap-4">

            <Link
              href="/projetos"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Ver projetos
            </Link>

            <Link
              href="/contato"
              className="border px-6 py-3 rounded-lg"
            >
              Fale comigo
            </Link>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border px-6 py-3 rounded-lg"
            >
              GitHub
            </a>

          </div>

        </section>

        <Secao titulo="Sobre mim">
          <p>
            Sou estudante de programação e estou
            desenvolvendo minhas habilidades em
            desenvolvimento web, React, Next.js e Firebase.
          </p>
        </Secao>

        <Secao titulo="Meus projetos">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {Projeto.map((item) => (
              <Cartao
                key={item.id}
                titulo={item.titulo}
                descricao={item.descricao}
              >
                <div className="mt-4">
                  <p className="text-sm mb-3">
                    Tecnologias: {item.tecnologias.join(", ")}
                  </p>

                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Ver GitHub
                  </a>

                  <div className="mt-4">
                    <Link
                      href={`/projetos/${item.id}`}
                      className="text-blue-600 underline"
                    >
                      Ver detalhes
                    </Link>
                  </div>
                </div>
              </Cartao>
            ))}

          </div>

        </Secao>

        <Secao titulo="Lista de tarefas">
          <ListaTarefas />
        </Secao>

        <Secao titulo="Gostou do meu portfólio?">
          <Curtir />
        </Secao>

      </main>

      <Rodape />
    </>
  );
}
