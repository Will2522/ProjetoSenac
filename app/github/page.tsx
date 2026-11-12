type Repositorio = {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
};

export default async function GithubPage() {
  const usuario = "Will2522";
  const urlPerfil = `https://github.com/${usuario}`;
  let repositorios: Repositorio[] = [];
  let erro = "";

  try {
    const resposta = await fetch(
      `https://api.github.com/users/${usuario}/repos?sort=updated&per_page=100`,
      { next: { revalidate: 3600 } },
    );

    if (!resposta.ok) {
      erro = "Não foi possível carregar os repositórios do GitHub.";
    } else {
      repositorios = (await resposta.json()) as Repositorio[];
    }
  } catch {
    erro = "Não foi possível carregar os repositórios do GitHub.";
  }

  return (
    <main className="conteudo">
      <section className="secao">
        <div className="cartao" style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "35px" }}>
          <img
            src={`${urlPerfil}.png`}
            alt={`Foto de perfil de ${usuario}`}
            width={100}
            height={100}
            style={{ borderRadius: "50%", border: "3px solid #8b5cf6" }}
          />
          <div>
            <h1>Meus Repositórios do GitHub</h1>
            <p>Projetos públicos desenvolvidos por <strong>@{usuario}</strong>.</p>
            <a href={urlPerfil} target="_blank" rel="noopener noreferrer" className="botao">
              GitHub
            </a>
          </div>
        </div>

        {erro && <p style={{ color: "#f87171", fontWeight: "bold" }}>{erro}</p>}
        {!erro && repositorios.length === 0 && <p>Nenhum repositório público encontrado.</p>}

        <div className="grade">
          {repositorios.map((repo) => (
            <article key={repo.id} className="cartao">
              <h3>{repo.name}</h3>
              <p>{repo.description || "Sem descrição informada."}</p>
              <div className="tecnologias">
                <span className="tag">{repo.language || "Código / Diversos"}</span>
              </div>
              <div className="acoes">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="botao">
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