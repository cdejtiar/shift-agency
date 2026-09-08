"use client";

import { useLanguage } from "@/lib/i18n";

export function Servicios() {
  const { content } = useLanguage();
  return (
    <section id="servicios" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-row  gap-28 items-end">
          <h2 className="mb-16 text-h2 magnetik flex items-start gap-2">
            {content.services.title}
            <span className="text-violet text-h3 spacegrotesk-bold py-2">
              01
            </span>
          </h2>

          <p className="mb-16 text-ink text-h4 font-light magnetik">
            {content.services.description}
          </p>
        </div>
        <ul className="grid gap-x-12 gap-y-4 md:grid-cols-1">
          {content.services.items.map((servicio) => (
            <li
              key={servicio}
              className="text-h3 text-ink transition-colors hover:text-cream magnetik"
            >
              {servicio}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
