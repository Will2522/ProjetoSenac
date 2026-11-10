
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

  useEffect(() => {
    const cancelar = observarTarefas(
      (lista) => {
        setTarefas(lista);
        setErro("");
      },
      (mensagem) => {
        setErro(mensagem);
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
      setErro(error.message || "Erro ao marcar tarefa.");
    }
  }

  async function excluir(id) {
    setErro("");

    try {
      await removerTarefa(id);
    } catch (error) {
      setErro(error.message || "Erro ao excluir tarefa.");
    }
  }

  return (
    <section className="max-w-xl mx-auto p-5 border rounded-xl">

      <h2 className="text-2xl font-bold mb-4">
        Minhas tarefas
      </h2>

      <div className="flex gap-2 mb-4">

        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Digite uma tarefa..."
          maxLength={100}
          className="border rounded-lg p-3 flex-1 min-w-0"
        />

        <button
          onClick={adicionar}
          disabled={carregando}
          className="bg-blue-600 text-white px-4 rounded-lg disabled:opacity-50"
        >
          {carregando ? "Salvando..." : "Adicionar"}
        </button>

      </div>

      {erro && (
        <p className="text-red-500 mb-4" role="alert">
          {erro}
        </p>
      )}

      {tarefas.length === 0 ? (
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

      <p className="mt-4 text-sm text-gray-500">
        Tarefas cadastradas: {tarefas.length}
      </p>

    </section>
  );
}
