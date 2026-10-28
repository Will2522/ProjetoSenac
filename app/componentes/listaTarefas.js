
"use client";

import { useState } from "react";

const tarefasIniciais = [
  { id: 1, texto: "Aprender componentes React", concluida: true },
  { id: 2, texto: "Criar projetos com Next.js", concluida: false },
  { id: 3, texto: "Publicar meu portfólio", concluida: false },
  { id: 4, texto: "Criar meu perfil no GitHub", concluida: false },
];

export default function ListaTarefas() {
  const [tarefas, setTarefas] = useState(tarefasIniciais);

  const faltam = tarefas.filter(
    (tarefa) => !tarefa.concluida
  ).length;

  function alternarTarefa(id) {
    setTarefas((anteriores) =>
      anteriores.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      )
    );
  }

  return (
    <div className="tarefas">
      <div className="tarefas-topo">
        <div>
          <h3>Plano de desenvolvimento</h3>
          <p>Pequenos passos, grandes resultados.</p>
        </div>

        <div className="contador-tarefas">
          <strong>{faltam}</strong>
          <span>pendentes</span>
        </div>
      </div>

      <div className="barra-progresso">
        <div
          style={{
            width: `${
              ((tarefas.length - faltam) / tarefas.length) * 100
            }%`,
          }}
        />
      </div>

      {tarefas.map((tarefa) => (
        <label className="tarefa" key={tarefa.id}>
          <input
            type="checkbox"
            checked={tarefa.concluida}
            onChange={() => alternarTarefa(tarefa.id)}
          />

          <span
            className={
              tarefa.concluida ? "tarefa-concluida" : ""
            }
          >
            {tarefa.texto}
          </span>
        </label>
      ))}

      <p className="tarefas-rodape">
        {faltam === 0
          ? "🎉 Todas as tarefas foram concluídas!"
          : `Você tem ${faltam} tarefa(s) para concluir.`}
      </p>
    </div>
  );
}
