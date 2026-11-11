
"use client";

import { useState } from "react";

export default function Curtir() {
  const [curtidas, setCurtidas] = useState(0);

  return (
    <button
      onClick={() => setCurtidas(curtidas + 1)}
      className="bg-blue-600 text-white px-4 py-2 rounded-lg"
    >
      ❤️ Curtir ({curtidas})
    </button>
  );
}
