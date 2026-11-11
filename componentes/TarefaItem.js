
"use client";

export default function TarefaItem({
  tarefa,
  aoMarcar,
  aoRemover
}) {
  return (
    <div className="flex items-center justify-between gap-3 p-4 mb-3 border border-gray-200 rounded-xl">

      <div className="flex items-center gap-3">

        <input
          type="checkbox"
          checked={tarefa.concluida || false}
          onChange={() => aoMarcar(tarefa)}
          className="w-5 h-5 cursor-pointer"
        />

        <span
          className={
            tarefa.concluida
              ? "line-through text-gray-400"
              : "text-gray-800"
          }
        >
          {tarefa.texto}
        </span>

      </div>

      <button
        onClick={() => aoRemover(tarefa.id)}
        className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg"
      >
        Excluir
      </button>

    </div>
  );
}
