async function buscarRepositorios(usuario) {
  try {
    const resposta = await fetch(
      `https://api.github.com/users/${usuario}/repos?per_page=100&sort=updated`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "DevPortfolio",
        },
        cache: "no-store",
      }
    );

    if (resposta.status === 404) {
      return {
        repositorios: [],
        erro: "Usuário do GitHub não encontrado.",
      };
    }

    if (!resposta.ok) {
      return {
        repositorios: [],
        erro: `Erro ao carregar repositórios (Status: ${resposta.status}).`,
      };
    }

    const dados = await resposta.json();
    return {
      repositorios: dados,
      erro: "",
    };
  } catch {
    return {
      repositorios: [],
      erro: "Falha na conexão com a API do GitHub.",
    };
  }
}

export default async function GithubPage() {
  const usuario = "Will2522";
  const urlPerfil = `https://github.com/${usuario}`;
  const { repositorios, erro } = await buscarRepositorios(usuario);

  return (
    <main className="conteudo">
      <section className="secao">
        <div
          className="cartao"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            flexWrap: "wrap",
            marginBottom: "35px",
          }}
        >
          <img
            src={`${urlPerfil}.png`}
            alt={`Foto de perfil de ${usuario}`}
            width={100}
            height={100}
            style={{
              borderRadius: "50%",
              border: "3px solid #8b5cf6",
            }}
          />

          <div>
            <h1 style={{ marginBottom: "6px" }}>Meus Repositórios do GitHub</h1>
            <p style={{ marginBottom: "16px" }}>
              Projetos públicos desenvolvidos por <strong>@{usuario}</strong>.
            </p>

            <a
              href={urlPerfil}
              target="_blank"
              rel="noopener noreferrer"
              className="botao"
            >
              GitHub
            </a>
          </div>
        </div>

        {erro && (
          <p style={{ color: "#f87171", fontWeight: "bold" }}>{erro}</p>
        )}

        {!erro && repositorios.length === 0 && (
          <p>Nenhum repositório público encontrado.</p>
        )}

        <div className="grade">
          {repositorios.map((repo) => (
            <article key={repo.id} className="cartao">
              <h3>{repo.name}</h3>
              <p>{repo.description || "Sem descrição informada."}</p>

              <div className="tecnologias">
                <span className="tag">
                  {repo.language || "Código / Diversos"}
                </span>
              </div>

              <div className="acoes">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="botao"
                >
                  Ver repositório
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}