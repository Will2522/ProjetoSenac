import "./globals.css";

export const metadata = {
  title: "Dev Portfolio",
  description: "Portfólio pessoal desenvolvido com Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}