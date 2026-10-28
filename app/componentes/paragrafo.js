export default function Paragrafo() {
  return (
    <div className="leading-relaxed text-slate-300">
      <p>
        Olá! Sou Willian, aluno do <span className="text-cyan-400 font-semibold">SENAC</span>, gosto de programação e tenho 16 anos, amo jogos eletrônicos e música, este é o meu primeiro site.
      </p>
    </div>
  );
}

import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <Link href="/" className="logo">
        <span className="logo-icon">{"</>"}</span>
        dev.portfolio
      </Link>

      <nav className="menu">
        <Link href="/">Início</Link>
        <Link href="/projetos">Projetos</Link>
        <Link href="/github">GitHub</Link>
        <Link href="/contato" className="menu-contato">
          Contato ↗
        </Link>
      </nav>
    </header>
  );
}
