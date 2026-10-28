
"use client";

import { useState } from "react";

export default function Curtir() {
  const [curtido, setCurtido] = useState(false);

  return (
    <button
      type="button"
      className={`botao-curtir ${curtido ? "curtido" : ""}`}
      onClick={() => setCurtido(!curtido)}
      aria-pressed={curtido}
    >
      {curtido ? "♥ Curtido" : "♡ Curtir"}
    </button>
  );
}
