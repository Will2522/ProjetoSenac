
import type { Metadata } from "next";
import "./globals.css";
import Cabecalho from "./componentes/Cabecalho";
import Rodape from "./componentes/Rodape";

export const metadata: Metadata = {
  title: "Dev Portfólio",
  description: "Meu portfólio de programação web",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <Cabecalho />
        <main className="conteudo">{children}</main>
        <Rodape />
      </body>
    </html>
  );
}
