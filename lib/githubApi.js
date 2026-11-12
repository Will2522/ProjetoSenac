export async function fetchGithubUserRepos(usuario) {
  return await fetch(
    `https://api.github.com/users/${usuario}/repos?per_page=100&sort=updated`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "DevPortfolio",
      },
      cache: "no-store",
    }
  );
}