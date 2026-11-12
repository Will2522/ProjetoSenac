import { buscarRepositorios } from "@/services/githubServices";
import { formatarData } from "@/lib/formatters"; // Importando da lib

export default async function GithubPage() {
  const usuario = "Will2522";
  const urlPerfil = `https://github.com/${usuario}`;
  const { repositorios, erro } = await buscarRepositorios(usuario);

  return (
    <main className="conteudo">
      <section className="secao">
        {/* ... cabeçalho do perfil ... */}

        {erro && (
          <p style={{ color: "#f87171", fontWeight: "bold" }}>{erro}</p>
        )}

        {!erro && repositorios.length === 0 && (
          <p>Nenhum repositório público encontrado.</p>
        )}

        <div className="grade">
          {repositorios.map((repo: {
            id: number;
            name: string;
            description: string | null;
            updated_at: string;
            language: string | null;
            html_url: string;
          }) => (
            <article key={repo.id} className="cartao">
              <h3>{repo.name}</h3>
              <p>{repo.description || "Sem descrição informada."}</p>

              {/* Exibindo a data formatada usando o utilitário da lib */}
              <p style={{ fontSize: "12px", color: "#6b7280", margin: "8px 0" }}>
                Atualizado em: {formatarData(repo.updated_at)}
              </p>

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