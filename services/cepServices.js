import { limparCep } from "@/lib/utils";

export async function consultarCep(cep) {
  const cepLimpo = limparCep(cep);

  if (cepLimpo.length !== 8) {
    throw new Error("CEP inválido. Digite exatamente 8 números.");
  }

  const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);

  if (!resposta.ok) {
    throw new Error("Erro ao consultar o CEP.");
  }

  const dados = await resposta.json();

  if (dados.erro) {
    throw new Error("CEP não encontrado.");
  }

  return dados;
}