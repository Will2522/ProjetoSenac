
"use client";

import { useState } from "react";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [resposta, setResposta] = useState("");
  const [erro, setErro] = useState("");
  const [enviando, setEnviando] = useState(false);

  async function enviarContato(evento) {
    evento.preventDefault();

    setErro("");
    setResposta("");
    setEnviando(true);

    try {
      const requisicao = await fetch("/api/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          email,
          mensagem,
        }),
      });

      const tipoResposta =
        requisicao.headers.get("content-type") || "";

  if (!tipoResposta.includes("application/json")) {
  setErro(
    `Erro HTTP ${requisicao.status}: a API /api/contato não foi encontrada ou não retornou JSON.`
  );
  return;
}

      const dados = await requisicao.json();

      if (!requisicao.ok) {
        setErro(dados.erro || "Erro ao enviar mensagem.");
        return;
      }

      setResposta(
        dados.mensagem || "Mensagem recebida com sucesso!"
      );

      setNome("");
      setEmail("");
      setMensagem("");
    } catch (error) {
      console.error("Erro no formulário:", error);

      setErro(
        error.message || "Não foi possível conectar ao servidor."
      );
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div className="cartao">
      <h2>Entre em Contato</h2>

      <form onSubmit={enviarContato}>
        <label htmlFor="nome">Nome:</label>
        <input
          id="nome"
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <label htmlFor="email">E-mail:</label>
        <input
          id="email"
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="mensagem">Mensagem:</label>
        <textarea
          id="mensagem"
          placeholder="Digite sua mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          required
        />

        <button type="submit" disabled={enviando}>
          {enviando ? "Enviando..." : "Enviar mensagem"}
        </button>
      </form>

      {erro && (
        <p role="alert" style={{ color: "red" }}>
          {erro}
        </p>
      )}

      {resposta && (
        <p role="status" style={{ color: "green" }}>
          {resposta}
        </p>
      )}
    </div>
  );
}
