import Image from "next/image";
import Link from "next/link";
import Cabecalho from "../componentes/cabecalho";
import Rodape from "../componentes/rodape";

export const metadata = {
  title: "GitHub",
  description: "Meu perfil e meus projetos no GitHub.",
};

const repositorios = [
  {
    nome: "meu-portfolio",
    descricao: "Meu portfólio pessoal feito com Next.js.",
    linguagem: "JavaScript",
    url: "https://github.com/Will2522/Meu-GitHu-",
  },
  {
    nome: "taskflow",
    descricao: "Uma aplicação para organizar tarefas.",
    linguagem: "React",
    url: "https://github.com/Will2522/Meu-GitHu-",
  },
  {
    nome: "devfinance",
    descricao: "Projeto de controle financeiro pessoal.",
    linguagem: "JavaScript",
    url: "https://github.com/Will2522/Meu-GitHu-",
  },
];

export default function GithubPage() {
  const usuario = "Will2522";

  return (
    <>
      <Cabecalho />

      <main className="container pagina-interna">
        <section className="github-perfil">
          <Image
            src={`https://github.com/${usuario}.png`}
            alt="Foto de perfil do desenvolvedor"
            width={120}
            height={120}
            className="avatar"
          />

          <span className="etiqueta">MEU GITHUB</span>
          <h1>Construindo meu futuro, um commit por vez.</h1>
          
          <p>
            Confira meus projetos, experimentos e minha evolução como desenvolvedor.
          </p>

          <Link
            href={`https://github.com/${usuario}`}
            target="_blank"
            rel="noreferrer"
            className="botao-principal"
          >
            Visitar meu GitHub
          </Link>
        </section>

        <section className="secao">
          <div className="secao-cabecalho">
            <h2>Repositórios</h2>
            <p>Alguns projetos para conhecer meu trabalho.</p>
          </div>

          <div className="grade-repositorios">
            {repositorios.map((repo) => (
              <article className="repositorio" key={repo.nome}>
                <span className="repo-icone">{"</>"}</span>
                <h3>{repo.nome}</h3>
                <p>{repo.descricao}</p>
                <span className="tecnologia">{repo.linguagem}</span>

                <Link
                  href={
                    repo.url === "https://github.com/Will2522/Meu-GitHu-"
                      ? `https://github.com/${usuario}`
                      : repo.url
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver repositório
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Rodape />
    </>
  );
}



 `app/contato/page.js`

import Cabecalho from "../componentes/cabecalho";
import Rodape from "../componentes/rodape";
import Secao from "../componentes/secao";
import Contato from "../componentes/contato";

export const metadata = {
  title: "Contato | Dev Portfolio",
  description: "Entre em contato comigo para parcerias ou projetos.",
};

export default function ContatoPage() {
  return (
    <>
      <Cabecalho />

      <main className="container pagina-interna">
        <Secao
          titulo="Vamos conversar"
          subtitulo="Preencha o formulário abaixo para enviar sua mensagem."
        >
          <Contato />
        </Secao>
      </main>

      <Rodape />
    </>
  );
}