
export default function Secao({ titulo, children }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">

      <h2 className="text-3xl font-bold mb-6">
        {titulo}
      </h2>

      {children}

    </section>
  );
}
