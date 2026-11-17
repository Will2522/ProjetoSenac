
"use client";


import { useState } from "react";
import { salvarContato } from "@/services/ContatoService";
import { projetos } from "./Dados";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [projeto, setProjeto] = useState("");
  const [mensagem, setMensagem] = useState("");

  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const [carregando, setCarregando] = useState(false);

  console.log("Teste de brench1");
  async function enviar(e) {
    e.preventDefault();

    setErro("");
    setSucesso("");
    setCarregando(true);

    try {
      await salvarContato({
        nome,
        email,
        projeto,
        mensagem
      });

      setSucesso("Mensagem enviada com sucesso!");

      setNome("");
      setEmail("");
      setProjeto("");
      setMensagem("");

    } catch (error) {
      setErro(error instanceof Error ? error.message : "Erro ao enviar mensagem.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <form
      onSubmit={enviar}
      className="max-w-xl mx-auto flex flex-col gap-4"
    >

      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Seu nome"
        className="border rounded-lg p-3"
      />

      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="seuemail@email.com"
        className="border rounded-lg p-3"
      />

      <label htmlFor="projeto">Projeto relacionado</label>
      <select
        id="projeto"
        value={projeto}
        onChange={(e) => setProjeto(e.target.value)}
        className="border rounded-lg p-3"
      >
        <option value="">Nenhum projeto específico</option>

        {projetos.map((item) => (
          <option key={item.id} value={item.titulo}>
            {item.titulo}
          </option>
        ))}
      </select>

      <label htmlFor="mensagem">Mensagem</label>
      <textarea
        id="mensagem"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        placeholder="Escreva sua mensagem..."
        rows={5}
        className="border rounded-lg p-3"
      />

      {erro && (
        <p role="alert" className="text-red-600">
          {erro}
        </p>
      )}

      {sucesso && (
        <p role="status" className="text-green-600">
          {sucesso}
        </p>
      )}

      <button
        type="submit"
        disabled={carregando}
        className="bg-blue-600 text-white p-3 rounded-lg disabled:opacity-50"
      >
        {carregando ? "Enviando..." : "Enviar mensagem"}
      </button>

    </form>
  );
}
