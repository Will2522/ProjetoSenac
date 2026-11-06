
import Secao from "./componentes/Secao";
import Paragrafo from "./componentes/Paragrafo";
import Cartao from "./componentes/Cartao";
import Tarefas from "./componentes/Tarefas";
import { Projeto, projeto } from "./componentes/Dados";
import BuscaCep from "./componentes/BuscaCep";
import { Key } from "react";

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
          {Projeto.map((projeto: { id: Key | null | undefined; titulo: string; descricao: string; tecnologias: string[] | undefined; }) => (
            <Cartao
              key={projeto.id}
              id={Number(projeto.id)}
              titulo={projeto.titulo}
              descricao={projeto.descricao}
              tecnologias={projeto.tecnologias}
            />
          ))}
        </div>
      </Secao>

      <Secao titulo="Lista de Tarefas">
        <Tarefas />
      </Secao>
<Secao titulo ="Busca de cep">
  <BuscaCep/>
</Secao>
</>
  );
}
