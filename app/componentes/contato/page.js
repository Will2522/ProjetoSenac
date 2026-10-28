
import Cabecalho from "../componentes/cabecalho";
import Rodape from "../componentes/rodape";
import Secao from "../componentes/secao";
import Contato from "../componentes/contato";

export const metadata = {
  title: "Contato | Dev Portfolio",
  description: "Entre em contato comigo para parcerias ou projetos.",
};

export default function ContatoPage() {
  return (
    <>
      <Cabecalho />

      <main className="container pagina-interna">
        <Secao
          titulo="Vamos conversar"
          subtitulo="Preencha o formulário abaixo para enviar sua mensagem."
        >
          <Contato />
        </Secao>
      </main>

      <Rodape />
    </>
  );
}