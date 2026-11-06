
"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { projetos } from "./Dados";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: ""
  });
  const [loading, setLoading] = useState(false);
  const [sucesso, setSucesso] = useState(false);
  const [erro, setErro] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return; // Evita duplo clique / envios múltiplos
    
    setLoading(true);
    setSucesso(false);
    setErro("");

    try {
      await addDoc(collection(db, "mensagens"), {
        nome: formData.nome,
        email: formData.email,
        mensagem: formData.mensagem,
        criadoEm: serverTimestamp()
      });

      setSucesso(true);
      setFormData({ nome: "", email: "", mensagem: "" });
    } catch (err) {
      console.error("Erro ao enviar mensagem: ", err);
      setErro("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen pt-24 pb-12 px-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6">Contacto</h1>

      {/* ATENÇÃO: onSubmit={handleSubmit} SEM PARÊNTESES */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-900 p-6 rounded-lg border border-gray-800">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Nome</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-blue-500"
            placeholder="O seu nome"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">E-mail</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-blue-500"
            placeholder="O seu e-mail"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Mensagem</label>
          <textarea
            name="mensagem"
            rows="4"
            value={formData.mensagem}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-blue-500"
            placeholder="Escreva a sua mensagem..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition disabled:opacity-50"
        >
          {loading ? "A enviar..." : "Enviar Mensagem"}
        </button>

        {sucesso && <p className="text-green-400 text-sm mt-2">Mensagem enviada com sucesso!</p>}
        {erro && <p className="text-red-400 text-sm mt-2">{erro}</p>}
      </form>
    </main>
  );
}