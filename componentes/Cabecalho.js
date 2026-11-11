
import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className="w-full border-b p-5">
      <nav className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4">

        <Link href="/" className="text-2xl font-bold">
          Meu Portfólio
        </Link>

        <div className="flex gap-5 flex-wrap">
          <Link href="/">Início</Link>
          <Link href="/projetos">Projetos</Link>
          <Link href="/contato">Contato</Link>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>

      </nav>
    </header>
  );
}
