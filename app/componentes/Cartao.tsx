"use client";

import { useState } from "react";
import Link from "next/link";
import Curtir from "./Curtir";

interface CartaoProps {
  id: number;
  titulo: string;
  descricao: string;
  tecnologias?: string[];
}

export default function Cartao({
  id,
  titulo,
  descricao,
  tecnologias = [],
}: CartaoProps) {
  const [detalhes, setDetalhes] = useState(false);

  return (
    <article className="cartao">
      <h3>{titulo}</h3>

      <div className="tecnologias">
        {tecnologias.map((tec) => (
          <span key={tec} className="tag">
            {tec}
          </span>
        ))}
      </div>

      {detalhes && <p>{descricao}</p>}

      <div className="acoes">
        <button
          className="botao"
          onClick={() => setDetalhes(!detalhes)}
        >
          {detalhes ? "Ocultar detalhes" : "Ver detalhes"}
        </button>

        <Curtir />

        <Link className="botao" href={`/projetos/${id}`}>
          Abrir projeto
        </Link>
      </div>
    </article>
  );
}