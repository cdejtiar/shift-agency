"use client";

import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const { content } = useLanguage();
  return (
    <section id="hero" className="relative flex min-h-screen flex-col justify-center px-6 pt-24">
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-4 text-sm text-ink">{content.hero.eyebrow}</p>

        <h1 className="max-w-3xl text-5xl leading-[1.05] md:text-7xl">
          {content.hero.title[0]}
          <br />
          {content.hero.title[1]}
          <br />
          <span className="text-violet">{content.hero.title[2]}</span>
        </h1>

        <p className="mt-6 max-w-md text-ink">
          {content.hero.description}
        </p>

        {/* Acá va el collage/grid de imágenes de proyecto que aparece
            debajo del hero en el mockup. Se puede armar con un grid
            de <Image> de next/image, cada una con su propio aspect-ratio. */}
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
