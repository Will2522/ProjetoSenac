export async function fetchCep(cepLimpo) {
  const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);

  if (!resposta.ok) {
    throw new Error("Erro ao consultar o CEP.");
  }

  return await resposta.json();
}