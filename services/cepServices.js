import { fetchCep } from "@/lib/viaCepLib";

export async function consultarCep(cep) {
  const cepLimpo = cep.replace(/\D/g, "");

  if (cepLimpo.length !== 8) {
    throw new Error("CEP inválido. Digite exatamente 8 números.");
  }

  const dados = await fetchCep(cepLimpo);

  if (dados.erro) {
    throw new Error("CEP não encontrado.");
  }

  return dados;
}