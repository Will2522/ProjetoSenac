
import Cartao from "../componentes/Cartao";
import { Projeto } from "../componentes/Dados";

export default function ProjetosPage() {
  return (
    <section className="secao">
      <h1>Todos os Projetos</h1>

      <div className="grade">
        {Projeto.map((proj) => (
          <Cartao
            key={proj.id}
            {...proj}
          />
        ))}
      </div>
    </section>
  );
}
