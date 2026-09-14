"use client";

import { useLanguage } from "@/lib/i18n";

// Placeholder — reemplazar por datos reales (idealmente desde el CMS).

export function Reviews() {
  const { content } = useLanguage();
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
          <h2 className="mb-10 flex items-start gap-2 text-h2 magnetik">{content.reviews.title}</h2>

          <p className="text-xxxl space-grotesk flex items-baseline">
            9.5<span className="text-h2 text-violet space-grotesk">/10</span>
          </p>
        </div>

        <p className="max-w-2xl text-h5 text-ink magnetik mb-[4em]">{content.reviews.description}</p>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/10 text-h5 magnetik">
              <th className="py-3">{content.reviews.client}</th>
              <th className="py-3">{content.reviews.service}</th>
              <th className="py-3">{content.reviews.message}</th>
              <th className="py-3 text-right">{content.reviews.score}</th>
            </tr>
          </thead>
          <tbody>
            {content.reviews.items.map((review) => (
              <tr key={review.client} className="border-b border-white/5 text-ink text-h5">
                <td className="py-4 magnetik">{review.client}</td>
                <td className="py-4 magnetik">{review.service}</td>
                <td className="relative max-w-md py-4 magnetik">
                  <span className="group relative inline-block max-w-full align-bottom">
                    <button
                      type="button"
                      className="block max-w-full truncate text-left text-inherit focus:outline-none focus-visible:ring-2 focus-visible:ring-violet"
                      aria-label={`Ver mensaje completo de ${review.client}`}
                    >
                      {review.message}
                    </button>
                    <span
                      role="tooltip"
                      className="pointer-events-none invisible absolute bottom-full left-0 z-20 mb-3 w-[min(28rem,calc(100vw-3rem))] rounded-lg bg-surface-raised p-4 text-sm leading-relaxed text-cream opacity-0 shadow-2xl ring-1 ring-white/10 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
                    >
                      {review.message}
                    </span>
                  </span>
                </td>
                <td className="py-4 text-right spacegrotesk-bold">
                  <span className="rounded-full bg-violet px-3 py-1 text-white">
                    {review.score}
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
