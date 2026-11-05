
"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { projetos } from "./Dados";

export default function Contato({ projetos }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [projeto, setProjeto] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [status, setStatus] = useState("");

  async function enviarMensagem(e) {
    e.preventDefault();

    setStatus("");

    if (nome.trim().length < 2) {
      setStatus("Digite seu nome corretamente.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("Digite um e-mail válido.");
      return;
    }

    if (mensagem.trim().length < 5) {
      setStatus("Sua mensagem precisa ter pelo menos 5 caracteres.");
      return;
    }

    setCarregando(true);

    try {
      await addDoc(collection(db, "mensagens_contato"), {
        nome: nome.trim(),
        email: email.trim(),
        mensagem: mensagem.trim(),
        projeto: projeto || "Nenhum projeto selecionado",
        dataCriacao: serverTimestamp(),
      });

      setStatus("Mensagem enviada com sucesso!");

      setNome("");
      setEmail("");
      setMensagem("");
      setProjeto("");
    } catch (erro) {
      console.error("Erro ao salvar mensagem:", erro);
      setStatus("Não foi possível enviar. Verifique sua conexão com o Firebase.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <section className="contato">
      <h2>Entre em contato</h2>

      <p>
        Tem alguma dúvida ou deseja conversar sobre meus projetos?
        Envie uma mensagem!
      </p>

      <form onSubmit={enviarMensagem}>
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="projeto">Projeto de interesse</label>
        <select
          id="projeto"
          value={projeto}
          onChange={(e) => setProjeto(e.target.value)}
        >
          <option value="">Nenhum projeto específico</option>
          
          {Array.isArray(projetos) && projetos.map((item, index) => (
  <option key={item.id || index} value={item.titulo}>
    {item.titulo}
  </option>
))}
        </select>

        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          id="mensagem"
          placeholder="Escreva sua mensagem..."
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          rows={5}
          required
        />

        <button type="submit" disabled={carregando}>
          {carregando ? "Enviando..." : "Enviar mensagem"}
        </button>

        {status && (
          <p role="status" aria-live="polite">
            {status}
          </p>
        )}
      </form>
    </section>
  );
}
