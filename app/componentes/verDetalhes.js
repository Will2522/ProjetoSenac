
"use client";

import { useState } from "react";

export default function VerDetalhes({ descricao }) {
  const [visivel, setVisivel] = useState(false);

  return (
    <div className="detalhes">
      <button
        type="button"
        className="botao-link"
        onClick={() => setVisivel(!visivel)}
        aria-expanded={visivel}
      >
        {visivel ? "Ocultar detalhes ↑" : "Ver detalhes ↓"}
      </button>

      {visivel && <p className="descricao-detalhe">{descricao}</p>}
    </div>
  );
}
