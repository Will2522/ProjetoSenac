
export default function Cartao({ titulo, descricao, children }) {
  return (
    <article className="border rounded-xl p-5 shadow-sm">
      <h3 className="text-xl font-bold mb-3">
        {titulo}
      </h3>

      <p className="leading-relaxed">
        {descricao}
      </p>

      {children}
    </article>
  );
}
