"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

export function Servicios() {
  const { content } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = content.services.items[activeIndex];

  return (
    <section id="servicios" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-row  gap-28 items-end">
          <h2 className="mb-16 text-h2 flex items-start gap-2">
            {content.services.title}
            <span className="text-violet text-h3 spacegrotesk-bold py-2">
              01
            </span>
          </h2>

          <p className="mb-16 text-ink text-h4 font-light">
            {content.services.description}
          </p>
        </div>

        <div className="flex gap-10">
          <ul className="">
            {content.services.items.map((servicio, index) => (
              <li
                key={servicio.title}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`text-h3 transition-colors cursor-pointer ${
                  index === activeIndex ? "text-cream" : "text-ink hover:text-cream"
                }`}
              >
                {servicio.title}
              </li>
            ))}
          </ul>

          <ul className="">
            {activeService.subitems.map((subitem) => (
              <li
                key={subitem}
                className="text-h4 text-ink transition-colors hover:text-cream"
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
