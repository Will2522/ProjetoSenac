import Secao from "./componentes/secao";
import Paragrafo from "./componentes/paragrafo";
import Cartao from "./componentes/cartao";
import { projetos } from "./componentes/dados";

export default function Home() {
  const nome = "Willian Portela Rodrigues";

  return (
    <div className="space-y-8">
      {/* Apresentação com {nome} */}
      <Secao titulo="Apresentação">
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 shadow-lg text-slate-300">
          <h2 className="text-xl font-bold text-cyan-400 mb-2">Olá, eu sou {nome}!</h2>
          <Paragrafo />
        </div>
      </Secao>

      {/* Seção Meus Projetos */}
      <Secao titulo="Meus Projetos">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projetos.map((proj) => (
            <Cartao
              key={proj.id}
              id={proj.id}
              titulo={proj.titulo}
              descricao={proj.descricao}
              tecnologias={proj.tecnologias}
            />
          ))}
        </div>
      </Secao>
    </div>
  );
}