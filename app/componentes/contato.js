
"use client";

import { useState } from "react";

export default function Contato() {
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState("");

  function enviarFormulario(event) {
    event.preventDefault();

    const formulario = event.currentTarget;

    if (!formulario.checkValidity()) {
      formulario.reportValidity();
      return;
    }

    setErro("");
    setEnviado(true);
    formulario.reset();
  }

  if (enviado) {
    return (
      <div className="mensagem-sucesso">
        <div className="sucesso-icone">✓</div>
        <h2>Obrigado pelo contato!</h2>
        <p>
          Sua mensagem foi validada. Este formulário é uma
          demonstração e ainda não envia mensagens para um servidor.
        </p>

        <button
          className="botao-principal"
          onClick={() => setEnviado(false)}
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form className="formulario" onSubmit={enviarFormulario}>
      <label htmlFor="nome">Seu nome</label>
      <input
        id="nome"
        name="nome"
        type="text"
        placeholder="Como você se chama?"
        minLength={2}
        required
      />

      <label htmlFor="email">Seu e-mail</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="voce@exemplo.com"
        required
      />

      <label htmlFor="assunto">Assunto</label>
      <input
        id="assunto"
        name="assunto"
        type="text"
        placeholder="Sobre o que vamos conversar?"
        required
      />

      <label htmlFor="mensagem">Sua mensagem</label>
      <textarea
        id="mensagem"
        name="mensagem"
        placeholder="Escreva sua mensagem..."
        rows={5}
        minLength={10}
        required
      />

      {erro && <p className="erro-formulario">{erro}</p>}

      <button type="submit" className="botao-principal">
        Enviar mensagem ↗
      </button>

      <p className="nota-formulario">
        Todos os campos são obrigatórios.
      </p>
    </form>
  );
}
