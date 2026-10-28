import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <Link> href="/" className="logo"<Link/>
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
