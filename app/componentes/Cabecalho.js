
import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <h2>Dev Portfólio</h2>

      <nav className="menu">
        <Link href="/">Início</Link>
        <Link href="/projetos">Projetos</Link>
        <Link href="/contato">Contato</Link>
        <Link href="/github">GitHub</Link>
      </nav>
    </header>
  );
}
