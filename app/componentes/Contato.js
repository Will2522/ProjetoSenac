
"use client";

import { useState } from "react";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);

  function enviar(e) {
    e.preventDefault();

    if (!nome.trim() || !email.trim() || !mensagem.trim()) {
      alert("Preencha todos os campos.");
      return;
    }

    setEnviado(true);
    setNome("");
    setEmail("");
    setMensagem("");
  }

  return (
    <form className="formulario" onSubmit={enviar}>
      <input
        type="text"
        placeholder="Seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <textarea
        placeholder="Sua mensagem"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        required
      />

      <button className="botao" type="submit">
        Enviar mensagem
      </button>

      {enviado && (
        <p className="sucesso">
          Mensagem validada! Obrigado pelo contato.
        </p>
      )}
    </form>
  );
}
