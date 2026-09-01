export function Contacto() {
  return (
    <section id="contacto" className="px-6 py-32">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
        <div>
          <h2 className="text-4xl">Contactanos</h2>
          <p className="mt-4 max-w-sm text-ink">
            Hablemos de tu proyecto. Contanos qué necesitás y te respondemos
            en menos de 24hs.
          </p>
        </div>

        {/* TODO: conectar con server action / API route para el envío real */}
        <form className="space-y-4" action="#" method="post">
          <div>
            <label htmlFor="nombre" className="mb-1 block text-sm text-ink">
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              className="w-full rounded-md border border-white/10 bg-surface-raised px-4 py-3 text-cream outline-none focus-visible:border-violet"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-ink">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-md border border-white/10 bg-surface-raised px-4 py-3 text-cream outline-none focus-visible:border-violet"
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="mb-1 block text-sm text-ink">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              required
              className="w-full rounded-md border border-white/10 bg-surface-raised px-4 py-3 text-cream outline-none focus-visible:border-violet"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-violet px-6 py-3 font-medium text-cream transition-colors hover:bg-violet-light md:w-auto"
          >
            Enviar consulta
          </button>
        </form>
      </div>
    </section>
  );
}
