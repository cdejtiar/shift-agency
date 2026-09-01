const servicios = [
  "Diseño Web",
  "Redes Sociales",
  "Branding",
  "Diseño Gráfico",
  "Campañas Performance",
  "Contenido Multimedia",
  "Email Marketing",
];

export function Servicios() {
  return (
    <section id="servicios" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-4xl">Servicios</h2>

        <ul className="grid gap-x-12 gap-y-4 md:grid-cols-2">
          {servicios.map((servicio) => (
            <li
              key={servicio}
              className="border-b border-white/10 py-4 text-xl text-ink transition-colors hover:text-cream"
            >
              {servicio}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
