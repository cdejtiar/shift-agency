"use client";

import { useLanguage } from "@/lib/i18n";
import { RotatingBadge } from "@/components/RotatingBadge";

export function Hero() {
  const { content } = useLanguage();
  return (
    <section id="hero" className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-24 md:px-16 lg:px-8">
      <div className="flex justify-end lg:hidden">
        <RotatingBadge className="relative z-10 mb-8 h-24 w-24 md:h-32 md:w-32" />
      </div>
      <RotatingBadge className="hero-badge z-10 hidden lg:block" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <p className="mb-4 text-ink text-h4 font-light">{content.hero.eyebrow}</p>

        <h1 className="max-w-l leading-[1.05] text-h1 font-medium">
          {content.hero.title[0]}
          <br />
          {content.hero.title[1]}
          <br />
          <span className="text-violet text-h1">{content.hero.title[2]}</span>
        </h1>

        <p className="mt-6 max-w-l text-ink text-h4 font-light">{content.hero.description}</p>
      </div>

      <div className="relative left-1/2 mt-16 w-screen -translate-x-1/2 overflow-hidden bg-surface-raised opacity-60">
        <video
          className="aspect-[4/3] h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Video de Shift Agency"
        >
          <source src="/videos/Video-Shift%20Agency.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}