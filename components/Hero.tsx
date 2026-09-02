"use client";

import { useLanguage } from "@/lib/i18n";
import { RotatingBadge } from "@/components/RotatingBadge";

export function Hero() {
  const { content } = useLanguage();
  return (
    <section id="hero" className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-24">
      <RotatingBadge className="hero-badge z-10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <p className="mb-4 text-ink text-h4">{content.hero.eyebrow}</p>

        <h1 className="max-w-l leading-[1.05] text-h1">
          {content.hero.title[0]}
          <br />
          {content.hero.title[1]}
          <br />
          <span className="text-violet text-h1">{content.hero.title[2]}</span>
        </h1>

        <p className="mt-6 max-w-l text-ink text-h4">{content.hero.description}</p>

        <div className="mt-16 grid grid-cols-2 gap-4 opacity-60 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-lg bg-surface-raised"
              aria-hidden
            />
          ))}
        </div>
      </div>
    </section>
  );
}