"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

// Placeholder de datos — cuando esté el CMS, esto se reemplaza por un fetch.

export function Trabajos() {
  const { content } = useLanguage();

  const getProjectSlug = (title: string) =>
    title
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  return (
    <section id="trabajos" className="px-6 py-32">
      <div className="mx-auto max-w-7xl pb-[4em]">
          <h2 className="mb-10 flex items-start gap-2 text-h2 magnetik">
            {content.work.title}
            <span className="text-violet text-h3 spacegrotesk-bold py-2">
              03
            </span>
          </h2>

          <p className="max-w-2xl text-h5 text-ink magnetik">
            {content.work.description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mx-auto max-w-7xl">
          {content.work.items.map((trabajo) => (
            <article key={trabajo.title}>
              <div
                className="relative aspect-[4/3] rounded-lg bg-surface-raised"
                aria-hidden
              >
                <img
                  src={trabajo.thumbnail}
                  alt="Vista previa"
                  className="h-full w-full rounded-lg object-cover"
                />

                <Link
                  href={`/proyectos/${getProjectSlug(trabajo.title)}`}
                  aria-label={`Ver proyecto ${trabajo.title}`}
                  className="magnetik absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-violet text-xl text-cream transition-transform hover:scale-110"
                >
                  <span aria-hidden>↗</span>
                </Link>
              </div>
              <h3 className="mt-4 magnetik text-h3">{trabajo.title}</h3>
              <p className="text-ink magnetik text-h5">{trabajo.client} | {trabajo.category}</p>
            </article>
          ))}
        </div>
    </section>
  );
}
