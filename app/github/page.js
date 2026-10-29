
import Image from "next/image";
//import { cacheLife } from "next/cache";

async function buscarRepositorios(usuario) {
 // "use cache";
 // cacheLife("hours");

  try {
    const resposta = await fetch(
      `https://api.github.com/users/${encodeURIComponent(usuario)}/repos?per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "DevPortfolio",
        },
      }
    );

    if (resposta.status === 404) {
      return {
        repositorios: [],
        erro: "Confira o nome de usuário do GitHub.",
      };
    }

    if (!resposta.ok) {
      return {
        repositorios: [],
        erro: `Erro na API: ${resposta.status}`,
      };
    }

    return {
      repositorios: await resposta.json(),
      erro: "",
    };
  } catch {
    return {
      repositorios: [],
      erro: "Falha na conexão com o GitHub.",
    };
  }
}

export default async function GithubPage() {
  
  const usuario = "Will2522";

  const { repositorios, erro } =
    await buscarRepositorios(usuario);

  return (
    <section className="secao">
      <h1>Meus Repositórios do GitHub</h1>
      <p>Conheça meus projetos publicados.</p>

      <Image
        src="/avatar.svg"
        alt="Avatar do portfólio"
        width={100}
        height={100}
      />

      <p>
        <a
          href={`https://github.com/${usuario}`}
          target="_blank"
          rel="noopener noreferrer"
          className="botao"
        >
          Visitar meu GitHub
        </a>
      </p>

      {erro && <p style={{ color: "red" }}>{erro}</p>}

      {!erro && repositorios.length === 0 && (
        <p>Nenhum repositório público encontrado.</p>
      )}

      <div className="grade">
        {repositorios.map((repo) => (
          <article key={repo.id} className="cartao">
            <h3>{repo.name}</h3>
            <p>{repo.description || "Sem descrição"}</p>
            <p>Linguagem: {repo.language || "Não informada"}</p>

            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="botao"
            >
              Ver repositório
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
