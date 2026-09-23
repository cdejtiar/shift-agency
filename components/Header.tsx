"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n";

export function Header() {
  const { language, content, toggleLanguage } = useLanguage();
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;

      // Solo ocultar después de bajar un poco, para que no parpadee arriba de todo
      setHidden(scrollingDown && currentScrollY > 80);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: content.header.links[0], href: "#servicios" },
    { label: content.header.links[1], href: "#nosotros" },
    { label: content.header.links[2], href: "#trabajos" },
    { label: content.header.links[3], href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="mx-auto flex items-center justify-between rounded-b-[2rem] magnetik md:px-20 md:py-5 text-body">
        <a href="#" aria-label={content.header.homeLabel}>
          <Image
            src="/images/Logo-Shift-Blanco.svg"
            alt="Shift"
            width={141}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </a>

        <ul
          className={`hidden gap-8 rounded-[92px] bg-[#F2EFEB1A] backdrop-blur-xl px-8 py-4 transition-all duration-300 ease-in-out md:flex ${
            hidden ? "-translate-y-24 opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-cream/60 transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={toggleLanguage}
          aria-label={content.header.toggleLabel}
          aria-pressed={language === "en"}
          className="relative flex h-12 w-40 items-center rounded-full bg-[#141414]/75 p-2 text-base font-medium shadow-[inset_0_1px_0_rgb(255_255_255_/_0.06),0_8px_24px_rgb(0_0_0_/_0.18)] backdrop-blur-xl transition-colors hover:bg-[#1b1b1b]/80 md:h-14 md:w-48 md:p-3"
        >
          <span
            aria-hidden
            className={`absolute inset-y-2 rounded-full bg-violet shadow-[0_4px_12px_rgb(97_76_222_/_0.35)] transition-[left,right] duration-300 ease-out md:inset-y-3 ${
              language === "en"
                ? "left-1/2 right-2 md:right-3"
                : "left-2 right-1/2 md:left-3"
            }`}
          />
          <span className="relative z-10 flex w-1/2 items-center justify-center text-body">ES</span>
          <span className="relative z-10 flex w-1/2 items-center justify-center text-body">EN</span>
        </button>
      </nav>
    </header>
  );
}