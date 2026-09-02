"use client";

import { useLanguage } from "@/lib/i18n";

export function Servicios() {
  const { content } = useLanguage();
  return (
    <section id="servicios" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16">{content.services.title}</h2>

        <ul className="grid gap-x-12 gap-y-4 md:grid-cols-2">
          {content.services.items.map((servicio) => (
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
