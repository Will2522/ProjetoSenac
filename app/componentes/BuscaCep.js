
"use client";

import { useState } from "react";

export default function BuscaCep() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState(null);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function buscarCep(evento) {
    evento.preventDefault();

    const cepLimpo = cep.replace(/\D/g, "");

    setErro("");
    setEndereco(null);

    if (cepLimpo.length !== 8) {
      setErro("CEP inválido. Digite exatamente 8 números.");
      return;
    }

    setCarregando(true);

    try {
      const resposta = await fetch(
        `https://viacep.com.br/ws/${cepLimpo}/json/`
      );

      if (!resposta.ok) {
        throw new Error("Erro ao consultar o CEP.");
      }

      const dados = await resposta.json();

      if (dados.erro) {
        setErro("CEP não encontrado.");
        return;
      }

      setEndereco(dados);
    } catch {
      setErro("Não foi possível consultar o CEP.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="cartao">
      <h3>Consultar endereço pelo CEP</h3>

      <form onSubmit={buscarCep}>
        <input
          type="text"
          placeholder="Digite seu CEP"
          value={cep}
          maxLength={9}
          onChange={(e) => setCep(e.target.value)}
        />

        <button type="submit" disabled={carregando}>
          {carregando ? "Buscando..." : "Buscar CEP"}
        </button>
      </form>

      {erro && (
        <p role="alert" style={{ color: "red" }}>
          {erro}
        </p>
      )}

      {endereco && (
        <div>
          <h4>Endereço encontrado</h4>
          <p>Rua: {endereco.logradouro || "Não informada"}</p>
          <p>Bairro: {endereco.bairro || "Não informado"}</p>
          <p>Cidade: {endereco.localidade}</p>
          <p>Estado: {endereco.uf}</p>
          <p>CEP: {endereco.cep}</p>
        </div>
      )}
    </div>
  );
}
