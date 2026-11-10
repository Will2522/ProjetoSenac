
"use client";

export default function TarefaItem({
  tarefa,
  aoMarcar,
  aoRemover
}) {
  return (
    <div className="flex items-center justify-between gap-3 border rounded-lg p-3 mb-3">

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={tarefa.concluida || false}
          onChange={() => aoMarcar(tarefa)}
        />

        <span
          className={
            tarefa.concluida
              ? "line-through text-gray-400"
              : ""
          }
        >
          {tarefa.texto}
        </span>
      </div>

      <button
        onClick={() => aoRemover(tarefa.id)}
        className="bg-red-600 text-white px-3 py-2 rounded"
      >
        Excluir
      </button>

    </div>
  );
}
