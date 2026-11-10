
import Contato from "../app/componentes/Contato";
import { projetos } from "../app/componentes/Dados";

export default function ContatoPage() {
  return (
    <Contato projetos={projetos} />
  );
}
