
"use client";

import { useState } from "react";

export default function Tarefas() {
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: "Criar componentes", feita: true },
    { id: 2, texto: "Criar páginas", feita: false },
    { id: 3, texto: "Finalizar portfólio", feita: false },
  ]);

  const [nova, setNova] = useState("");

  function adicionar(e) {
    e.preventDefault();
    if (!nova.trim()) return;

    setTarefas([
      ...tarefas,
      { id: Date.now(), texto: nova.trim(), feita: false },
    ]);
    setNova("");
  }

  function alternar(id) {
    setTarefas(tarefas.map((t) =>
      t.id === id ? { ...t, feita: !t.feita } : t
    ));
  }

  const faltam = tarefas.filter((t) => !t.feita).length;

  return (
    <div className="cartao">
      <h3>Minhas Tarefas</h3>
      <p>Faltam {faltam} tarefas.</p>

      <form onSubmit={adicionar} className="formulario">
        <input
          value={nova}
          onChange={(e) => setNova(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button className="botao" type="submit">
          Adicionar
        </button>
      </form>

      {tarefas.map((t) => (
        <label key={t.id} className="tarefa">
          <input
            type="checkbox"
            checked={t.feita}
            onChange={() => alternar(t.id)}
          />
          <span style={{
            textDecoration: t.feita ? "line-through" : "none",
          }}>
            {t.texto}
          </span>
        </label>
      ))}
    </div>
  );
}
