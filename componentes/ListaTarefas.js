
"use client";

import { useEffect, useState } from "react";

import TarefaItem from "./TarefaItem";

import {
  observarTarefas,
  adicionarTarefa,
  marcarTarefa,
  removerTarefa
} from "./services/tarefasService";

export default function ListaTarefas() {

  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [inicializando, setInicializando] = useState(true);

  useEffect(() => {
    const cancelar = observarTarefas(
      (lista) => {
        setTarefas(lista);
        setInicializando(false);
      },
      (mensagem) => {
        setErro(mensagem);
        setInicializando(false);
      }
    );

    return () => cancelar();
  }, []);

  async function adicionar() {
    setErro("");
    setCarregando(true);

    try {
      await adicionarTarefa(texto);
      setTexto("");
    } catch (error) {
      setErro(error.message || "Erro ao adicionar tarefa.");
    } finally {
      setCarregando(false);
    }
  }

  async function marcar(tarefa) {
    setErro("");

    try {
      await marcarTarefa(
        tarefa.id,
        tarefa.concluida
      );
    } catch (error) {
      setErro("Erro ao atualizar tarefa.");
    }
  }

  async function excluir(id) {
    setErro("");

    try {
      await removerTarefa(id);
    } catch (error) {
      setErro("Erro ao excluir tarefa.");
    }
  }

  return (
    <section className="max-w-2xl mx-auto p-6 rounded-2xl border border-gray-200 shadow-sm">

      <h2 className="text-2xl font-bold mb-5">
        Minhas tarefas
      </h2>

      <div className="flex gap-2 mb-5">

        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !carregando) adicionar();
          }}
          placeholder="Digite uma nova tarefa..."
          maxLength={100}
          className="flex-1 min-w-0 border rounded-lg p-3"
        />

        <button
          onClick={adicionar}
          disabled={carregando}
          className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white px-4 rounded-lg"
        >
          {carregando ? "Salvando..." : "Adicionar"}
        </button>

      </div>

      {erro && (
        <div
          role="alert"
          className="bg-red-100 text-red-700 p-3 rounded-lg mb-4"
        >
          {erro}
        </div>
      )}

      {inicializando ? (
        <p>Carregando tarefas...</p>
      ) : tarefas.length === 0 ? (
        <p className="text-gray-500">
          Nenhuma tarefa cadastrada.
        </p>
      ) : (
        tarefas.map((tarefa) => (
          <TarefaItem
            key={tarefa.id}
            tarefa={tarefa}
            aoMarcar={marcar}
            aoRemover={excluir}
          />
        ))
      )}

      <div className="mt-5 text-sm text-gray-500">
        Total: {tarefas.length} tarefas
        {" | "}
        Concluídas: {tarefas.filter(t => t.concluida).length}
      </div>

    </section>
  );
}
