
import Secao from "./componentes/Secao";
import Paragrafo from "./componentes/Paragrafo";
import Cartao from "./componentes/Cartao";
import Tarefas from "./componentes/Tarefas";
import { Projeto } from "./componentes/Dados";

export default function Home() {
  const nome = "Willian Portela Rodrigues";

  return (
    <>
      <section className="hero">
        <h1>Olá, eu sou {nome}!</h1>
        <p>Desenvolvedor Web em formação</p>
      </section>

      <Secao titulo="Sobre mim">
        <Paragrafo>
          Sou estudante de Programação Web e desenvolvo
          aplicações utilizando React e Next.js.
        </Paragrafo>
      </Secao>

      <Secao titulo="Meus Projetos">
        <div className="grade">
          {Projeto.map((proj) => (
            <Cartao
              key={proj.id}
              id={proj.id}
              titulo={proj.titulo}
              descricao={proj.descricao}
              tecnologias={proj.tecnologias}
            />
          ))}
        </div>
      </Secao>

      <Secao titulo="Lista de Tarefas">
        <Tarefas />
      </Secao>
    </>
  );
}
