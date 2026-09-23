"use client";

import { useLanguage } from "@/lib/i18n";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  const { content } = useLanguage();
  const year = new Date().getFullYear();

  const navigation = [
    { label: content.header.links[2], href: "#trabajos" },
    { label: content.header.links[0], href: "#servicios" },
    { label: content.header.links[1], href: "#nosotros" },
    { label: content.header.links[3], href: "#contacto" },
  ];

  return (
    <footer className="bg-surface-raised px-6 py-16 text-cream md:px-16 md:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-12">
          <img
            src="./images/Icono shift.svg"
            alt="Logo Shift"
            className="h-10 w-auto"
          />
          <div>
            <h2 className="text-lg">{content.footer.navigation}</h2>
            <nav
              aria-label={content.footer.ariaLabel}
              className="mt-6 flex flex-col items-start gap-3"
            >
              {navigation.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg text-ink transition-colors hover:text-cream"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-lg">{content.footer.socialMedia}</h2>
            <div className="mt-6 flex flex-col items-start gap-3">
              <a
                href="https://www.instagram.com/shiftagency"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-lg text-ink transition-colors hover:text-cream"
              >
                <FontAwesomeIcon icon={faInstagram} className="h-4 w-4" />
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/shiftagency"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-lg text-ink transition-colors hover:text-cream"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-lg">{content.contact.title}</h2>
            <div className="mt-6 space-y-3 text-lg text-ink">
              <p>{content.footer.location}</p>
              <a
                className="block transition-colors hover:text-cream"
                href="mailto:info@shiftagency.com.ar"
              >
                info@shiftagency.com.ar
              </a>
              <a
                className="inline-flex items-center gap-3 transition-colors hover:text-cream"
                href="https://wa.me/541132016037"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5" />
                +54 11 3201-6027
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 border-t border-white/20 pt-7 text-center text-sm text-ink md:grid-cols-3 md:items-center md:text-left">
          <p>
            {content.footer.rights} {year} ©
          </p>
          <p className="md:text-center">{content.footer.tagline}</p>

          <a
            href="#hero"
            className="inline-flex items-center justify-center gap-2 transition-colors hover:text-cream md:justify-end"
          >
            {content.footer.backToTop} <span aria-hidden>↑</span>
          </a>
        </div>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 text-xs text-ink md:flex-row md:gap-6">
          <a
            href="/terminos-y-condiciones"
            className="transition-colors hover:text-cream"
          >
            Términos y Condiciones
          </a>
          <a
            href="/politica-de-privacidad"
            className="transition-colors hover:text-cream"
          >
            Política de Privacidad
          </a>
        </div>
      </div>
    </footer>
  );
}
