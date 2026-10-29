
"use client";

import { useState } from "react";

export default function Curtir() {
  const [curtidas, setCurtidas] = useState(0);

  return (
    <button
      className="botao"
      onClick={() => setCurtidas(curtidas + 1)}
    >
      ❤️ Curtir ({curtidas})
    </button>
  );
}
