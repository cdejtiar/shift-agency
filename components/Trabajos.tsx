"use client";

import { useLanguage } from "@/lib/i18n";

// Placeholder de datos — cuando esté el CMS, esto se reemplaza por un fetch.

export function Trabajos() {
  const { content } = useLanguage();
  return (
    <section id="trabajos" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2>{content.work.title}</h2>
          <p className="max-w-sm text-sm text-ink">
            {content.work.description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {content.work.items.map((trabajo) => (
            <article key={trabajo.title}>
              <div
                className="aspect-[3/4] rounded-lg bg-surface-raised"
                aria-hidden
              />
              <h3 className="mt-4">{trabajo.title}</h3>
              <p className="text-ink">{trabajo.client}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
