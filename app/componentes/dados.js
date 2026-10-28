export const projetos = [
  {
    id: "1",
    titulo: "TaskFlow",
    descricao:
      "Um gerenciador de tarefas para organizar atividades e acompanhar o progresso diário.",
    tecnologias: ["Next.js", "JavaScript", "CSS"],
    categoria: "Produtividade",
    cor: "#8B5CF6",
  },
  {
    id: "2",
    titulo: "DevFinance",
    descricao:
      "Uma aplicação para registrar receitas, despesas e acompanhar o orçamento pessoal.",
    tecnologias: ["React", "JavaScript", "CSS"],
    categoria: "Finanças",
    cor: "#06B6D4",
  },
  {
    id: "3",
    titulo: "Pixel Studio",
    descricao:
      "Uma página criativa para apresentar serviços, projetos e trabalhos de design.",
    tecnologias: ["Next.js", "React", "CSS"],
    categoria: "Design",
    cor: "#F472B6",
  },
];


`app/page.js` (Início / Home)

import cabecalho from "../componentes/cabecalho";
import Rodape from "./componentes/rodape";
import Secao from "./componentes/secao";
import Paragrafo from "./componentes/paragrafo";
import ListaTarefas from "./componentes/listaTarefas";
import Cartao from "./componentes/cartao";
import {Projetos} from "./componentes/dados";
import Link from "next/link";

export const metadata = {
  title: "Início | Dev Portfolio",
  description: "Bem-vindo ao meu portfólio de desenvolvimento.",
};

export default function HomePage() {
  const projetosDestaque = projetos.slice(0, 2);

  return (
    <>
      <Cabecalho />

      <main className="container">
        <section className="hero">
          <div>
            <span className="etiqueta">DESENVOLVEDOR FRONT-END</span>
            <h1>Criando experiências digitais com código e criatividade.</h1>
            <Paragrafo />

            <div className="hero-acoes">
              <Link href="/projetos" className="botao-principal">
                Ver projetos
              </Link>
              <Link href="/contato" className="botao-secundario">
                Entrar em contato
              </Link>
            </div>
          </div>

          <ListaTarefas />
        </section>

        <Secao
          titulo="Projetos em destaque"
          subtitulo="Conheça alguns dos principais trabalhos desenvolvidos."
        >
          <div className="grade-projetos">
            {projetosDestaque.map((projeto) => (
              <Cartao key={projeto.id} {...projeto} />
            ))}
          </div>

          <div className="centralizado">
            <Link href="/projetos" className="botao-secundario">
              Ver todos os projetos →
            </Link>
          </div>
        </Secao>
      </main>

      <Rodape />
    </>
  );
}