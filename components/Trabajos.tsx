// Placeholder de datos — cuando esté el CMS, esto se reemplaza por un fetch.
const trabajos = [
  { titulo: "Diseño Web", cliente: "Rebranding Studio" },
  { titulo: "Rebranding", cliente: "Anteo Marca" },
  { titulo: "Dirección de contenido", cliente: "Loyer Estudio" },
];

export function Trabajos() {
  return (
    <section id="trabajos" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-4xl">Trabajos</h2>
          <p className="max-w-sm text-sm text-ink">
            Una selección de proyectos donde combinamos estrategia, diseño y
            ejecución para marcas que buscaban un cambio real.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {trabajos.map((trabajo) => (
            <article key={trabajo.titulo}>
              <div
                className="aspect-[3/4] rounded-lg bg-surface-raised"
                aria-hidden
              />
              <h3 className="mt-4 text-lg">{trabajo.titulo}</h3>
              <p className="text-sm text-ink">{trabajo.cliente}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
