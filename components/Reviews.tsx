// Placeholder — reemplazar por datos reales (idealmente desde el CMS).
const reviews = [
  { cliente: "Cliente A", servicio: "Diseño Web", puntaje: "10/10" },
  { cliente: "Cliente B", servicio: "Branding", puntaje: "9/10" },
  { cliente: "Cliente C", servicio: "Redes Sociales", puntaje: "10/10" },
  { cliente: "Cliente D", servicio: "Rebranding", puntaje: "9/10" },
];

export function Reviews() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-4xl">Reviews</h2>
          <p className="font-display text-6xl">
            9.5<span className="text-2xl text-ink">/10</span>
          </p>
        </div>

        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-ink">
              <th className="py-3 font-normal">Cliente</th>
              <th className="py-3 font-normal">Servicio</th>
              <th className="py-3 text-right font-normal">Puntaje</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review.cliente} className="border-b border-white/5">
                <td className="py-4">{review.cliente}</td>
                <td className="py-4 text-ink">{review.servicio}</td>
                <td className="py-4 text-right">
                  <span className="rounded-full bg-violet px-3 py-1 text-xs">
                    {review.puntaje}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
