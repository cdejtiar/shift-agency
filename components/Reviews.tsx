"use client";

import { useLanguage } from "@/lib/i18n";

// Placeholder — reemplazar por datos reales (idealmente desde el CMS).

export function Reviews() {
  const { content } = useLanguage();
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-4xl">{content.reviews.title}</h2>
          <p className="font-display text-6xl">
            9.5<span className="text-2xl text-ink">/10</span>
          </p>
        </div>

        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-ink">
              <th className="py-3 font-normal">{content.reviews.client}</th>
              <th className="py-3 font-normal">{content.reviews.service}</th>
              <th className="py-3 text-right font-normal">{content.reviews.score}</th>
            </tr>
          </thead>
          <tbody>
            {content.reviews.items.map((review) => (
              <tr key={review.client} className="border-b border-white/5">
                <td className="py-4">{review.client}</td>
                <td className="py-4 text-ink">{review.service}</td>
                <td className="py-4 text-right">
                  <span className="rounded-full bg-violet px-3 py-1 text-xs">
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
