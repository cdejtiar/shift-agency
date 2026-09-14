"use client";

import { useLanguage } from "@/lib/i18n";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

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
    <footer className="magnetik border-t border-white/10 bg-surface px-6 py-16 text-cream md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex gap-12 justify-between">
          <div>
            <h2 className="text-lg magnetik">{content.header.links[3]}</h2>
            <nav aria-label="Navegación del footer" className="mt-6 flex flex-col items-start gap-3">
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
            <h2 className="text-lg magnetik">Social Media</h2>
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
            <h2 className="text-lg magnetik">{content.contact.title}</h2>
            <div className="mt-6 space-y-3 text-lg text-ink">
              <p>Buenos Aires, Argentina</p>
              <a className="block transition-colors hover:text-cream" href="mailto:info@shiftagency.com.ar">
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

        <div className="mt-20 flex flex-col gap-6 border-t border-white/20 pt-7 text-sm text-ink md:flex-row md:items-center md:justify-between">
          <p>Todos los derechos reservados {year} ©</p>
          <p className="text-center">Comunicá y verte mejor.</p>
          <a href="#hero" className="inline-flex items-center gap-2 transition-colors hover:text-cream md:justify-end">
            Volver arriba <span aria-hidden>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
