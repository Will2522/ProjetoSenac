export async function buscarRepositorios(usuario) {
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