import Link from "next/link";
import Curtir from "./curtir";

export default function Cartao({
  id,
  titulo,
  descricao,
  tecnologias,
  categoria,
  cor,
}) {
  return (
    <article className="cartao">
      <div
        className="cartao-visual"
        style={{
          "--cor-projeto": cor,
        }}
      >
        <span className="cartao-numero">
          PROJETO / {String(id).padStart(2, "0")}
        </span>

        <div className="cartao-simbolo">{"{ }"}</div>
        <span className="cartao-categoria">{categoria}</span>
      </div>

      <div className="cartao-conteudo">
        <h3>{titulo}</h3>
        <p className="cartao-resumo">{descricao}</p>

        <div className="tecnologias">
          {tecnologias.map((tecnologia) => (
            <span key={tecnologia} className="tecnologia">
              {tecnologia}
            </span>
          ))}
        </div>

        <div className="cartao-acoes">
          <Link href={`/projetos/${id}`} className="botao-detalhes">
            Abrir projeto
          </Link>

          <Curtir />
        </div>
      </div>
    </article>
  );
}