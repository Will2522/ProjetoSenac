
export default function Secao({
  titulo,
  subtitulo,
  children,
  id,
}) {
  return (
    <section id={id} className="secao">
      <div className="secao-cabecalho">
        <span className="etiqueta">EXPLORAR</span>
        <h2>{titulo}</h2>
        {subtitulo && <p>{subtitulo}</p>}
      </div>

      {children}
    </section>
  );
}
