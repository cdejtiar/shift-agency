"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

export function Servicios() {
  const { content } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const activeService = content.services.items[activeIndex];

  return (
    <section id="servicios" className="px-6 py-32 md:px-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:gap-28">
          <h2 className="mb-16 text-h2 flex items-start gap-2">
            {content.services.title}
            <span className="self-start text-violet text-h3 spacegrotesk-bold">
              01
            </span>
          </h2>

          <p className="mb-16 text-ink text-h4 font-light">
            {content.services.description}
          </p>
        </div>

        {/* Mobile/Tablet: acordeón, cada servicio se abre al hacer click */}
        <ul className="divide-y divide-white/10 lg:hidden">
          {content.services.items.map((servicio, index) => {
            const isOpen = openIndex === index;
            return (
              <li key={servicio.title} className="py-4">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className={`flex w-full items-center justify-between gap-3 text-left transition-colors ${
                    isOpen ? "text-cream" : "text-ink hover:text-cream"
                  }`}
                >
                  <span className="break-words text-h4">{servicio.title}</span>
                  <span
                    aria-hidden
                    className={`shrink-0 text-h4 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <ul className="min-h-0 overflow-hidden">
                    {servicio.subitems.map((subitem) => (
                      <li key={subitem} className="break-words py-2 text-h5 text-ink">
                        {subitem}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Desktop: dos columnas, subitems según el servicio con hover activo */}
        <div className="hidden lg:flex lg:gap-10">
          <ul className="min-w-0">
            {content.services.items.map((servicio, index) => (
              <li
                key={servicio.title}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`break-words text-h3 transition-colors cursor-pointer ${
                  index === activeIndex ? "text-cream" : "text-ink hover:text-cream"
                }`}
              >
                {servicio.title}
              </li>
            ))}
          </ul>

          <ul className="min-w-0">
            {activeService.subitems.map((subitem) => (
              <li
                key={subitem}
                className="break-words text-h4 text-ink transition-colors hover:text-cream"
              >
                {subitem}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
