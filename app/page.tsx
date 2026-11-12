
import Link from "next/link";

import Cabecalho from "@/componentes/Cabecalho";
import Rodape from "@/componentes/Rodape";
import Secao from "@/componentes/Secao";
import Cartao from "@/componentes/Cartao";
import Curtir from "@/componentes/Curtir";
import ListaTarefas from "@/componentes/ListaTarefas";
import { projetos } from "@/componentes/Dados";
import BuscarCepForm from "@/app/BuscarCepForm";

  
 
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

            
  <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Meu Portal</h1>
      
      <div style={{ margin: "20px 0" }}>
        <Link href="/github" className="botao">
          Ver meus Repositórios do GitHub 
        </Link>
      </div>

      <hr style={{ margin: "32px 0" }} />

      <BuscarCepForm />
    </main>
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

            {projetos.map((projeto) => (
              <Cartao
                key={projeto.id}
                titulo={projeto.titulo}
                descricao={projeto.descricao}
              >
                <div className="mt-4">
                  <p className="text-sm mb-3">
                    Tecnologias: {projeto.tecnologias.join(", ")}
                  </p>

                  <a
                    href={projeto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Ver GitHub
                  </a>

                  <div className="mt-4">
                    <Link
                      href={`/projetos/${projeto.id}`}
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
