"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/lib/i18n";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faArrowTurnDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebookF,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Contacto() {
  const { content } = useLanguage();
  const container = useRef<HTMLElement>(null);
  const [selectedInteres, setSelectedInteres] = useState(0);
  const opcionesInteres = content.contact.interestOptions;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const timeline = gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
          scrollTrigger: {
            trigger: container.current,
            start: "top 72%",
            once: true,
          },
        });

        timeline
          .from("[data-contact-title]", {
            yPercent: 105,
            opacity: 0,
            duration: 0.55,
          })
          .from(
            "[data-contact-intro]",
            {
              y: 32,
              opacity: 0,
              duration: 0.45,
              stagger: 0.06,
            },
            "-=0.25",
          )
          .from(
            "[data-contact-option]",
            {
              x: -14,
              opacity: 0,
              duration: 0.28,
              stagger: 0.035,
            },
            "-=0.18",
          )
          .from(
            "[data-contact-field]",
            {
              y: 20,
              opacity: 0,
              duration: 0.35,
              stagger: 0.05,
            },
            "-=0.15",
          )
          .from(
            "[data-contact-cta]",
            {
              y: 16,
              opacity: 0,
              duration: 0.35,
            },
            "-=0.12",
          );
      });

      return () => mm.revert();
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      id="contacto"
      className="bg-surface px-6 py-28 text-cream font-display md:px-16 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-start gap-2 overflow-hidden">
          <h2
            data-contact-title
            className="mb-10 flex items-start gap-2 text-h2"
          >
            {content.contact.title}
          </h2>
          <span className="self-start text-h3 spacegrotesk-bold text-violet">
            04
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Columna Izquierda */}
          <div className="flex flex-col justify-start space-y-12 lg:col-span-5">
            <div data-contact-intro className="space-y-6">
              <h3 className="text-h2 font-bold leading-tight md:text-h3">
                {content.contact.headlineFirst} <br />
                {content.contact.headlineSecond}
              </h3>
              <p className="max-w-xs text-h5 leading-relaxed text-ink">
                {content.contact.description}
              </p>

              {/* Datos de contacto */}
              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-violet/30 bg-violet/10 text-violet">
                    <FontAwesomeIcon icon={faPhone} className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-violet">
                      TELÉFONO
                    </span>
                    <a
                      href="tel:+541132016027"
                      className="space-grotesk text-body text-cream transition-colors hover:underline"
                    >
                      +54 11 3201-6027
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-violet/30 bg-violet/10 text-violet">
                    <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-violet">
                      EMAIL
                    </span>
                    <a
                      href="mailto:info@shiftagency.com.ar"
                      className="space-grotesk text-cream transition-colors hover:underline"
                    >
                      info@shiftagency.com.ar
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes Sociales */}
            <div data-contact-intro className="inline-block w-fit">
              <div className="inline-block rounded-t-xl bg-violet px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-cream">
                SEGUINOS EN:
              </div>
              <div className="flex items-center gap-5 rounded-b-2xl rounded-tr-2xl border border-white/10 bg-surface-raised p-4">
                <a
                  href="https://www.instagram.com/_shift.agency/"
                  className="text-cream/80 transition-colors hover:text-violet"
                  aria-label="Instagram"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-cream/80 transition-colors hover:text-violet"
                  aria-label="Facebook"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-cream/80 transition-colors hover:text-violet"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-cream/80 transition-colors hover:text-violet"
                  aria-label="YouTube"
                >
                  <FontAwesomeIcon icon={faYoutube} className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Columna Derecha - Formulario */}
          <div
            data-contact-intro
            className="rounded-3xl border border-white/10 bg-surface-raised p-8 md:p-12 lg:col-span-7"
          >
            <h3 className="mb-8 text-3xl font-bold text-cream md:text-h3">
              {content.contact.formTitle}
            </h3>

            <form className="space-y-6" action="#" method="post">
              {" "}
              {/* NO LLEVA A NINGÚN LADO!!!! */}
              {/* Nombre y Apellido */}
              <div data-contact-field className="space-y-1">
                <label
                  htmlFor="nombre"
                  className="block text-xs font-bold uppercase tracking-wider text-violet"
                >
                  {content.contact.name.toUpperCase()} Y APELLIDO
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder={content.contact.namePlaceholder}
                  required
                  className="w-full border-b border-white/20 bg-transparent py-2 text-body text-cream placeholder-ink outline-none transition-colors focus:border-violet"
                />
              </div>
              {/* Email y Teléfono */}
              <div data-contact-field className="grid gap-6 md:grid-cols-2">
                <div data-contact-field className="space-y-1">
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-wider text-violet"
                  >
                    {content.contact.email.toUpperCase()} *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={content.contact.emailPlaceholder}
                    required
                    className="w-full border-b border-white/20 bg-transparent py-2 text-body text-cream placeholder-ink outline-none transition-colors focus:border-violet"
                  />
                </div>

                <div data-contact-field className="space-y-1">
                  <label
                    htmlFor="telefono"
                    className="block text-xs font-bold uppercase tracking-wider text-violet"
                  >
                    TELÉFONO
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    placeholder={content.contact.phonePlaceholder}
                    className="font-body w-full border-b border-white/20 bg-transparent py-2 text-body text-cream placeholder-ink outline-none transition-colors focus:border-violet"
                  />
                </div>
              </div>
              {/* Asunto */}
              <div data-contact-field className="space-y-1">
                <label
                  htmlFor="asunto"
                  className="block text-xs font-bold uppercase tracking-wider text-violet"
                >
                  ASUNTO
                </label>
                <input
                  id="asunto"
                  name="asunto"
                  type="text"
                  placeholder={content.contact.subjectPlaceholder}
                  className="w-full border-b border-white/20 bg-transparent py-2 text-body text-cream placeholder-ink outline-none transition-colors focus:border-violet"
                />
              </div>
              {/* Tags de Interés */}
              <div data-contact-field className="space-y-3 pt-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-violet">
                  INTERÉS
                </label>
                <input
                  type="hidden"
                  name="interes"
                  value={opcionesInteres[selectedInteres]}
                />
                <div className="flex flex-wrap gap-2">
                  {opcionesInteres.map((opcion, index) => {
                    const isSelected = selectedInteres === index;
                    return (
                      <button
                        data-contact-option
                        key={opcion}
                        type="button"
                        onClick={() => setSelectedInteres(index)}
                        className={`contact-option rounded-full px-4 py-2 text-xs font-bold tracking-wider transition-all ${
                          isSelected
                            ? "bg-violet text-cream"
                            : "border border-white/20 bg-transparent text-cream/80 hover:border-white/40"
                        }`}
                      >
                        {opcion}
                      </button>
                    );
                  })}
                </div>
              </div>
              {/* Mensaje */}
              <div data-contact-field className="space-y-1 pt-2">
                <label
                  htmlFor="mensaje"
                  className="block text-xs font-bold uppercase tracking-wider text-violet"
                >
                  {content.contact.message.toUpperCase()} *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={3}
                  placeholder={content.contact.messagePlaceholder}
                  required
                  className="w-full border-b border-white/20 bg-transparent py-2 text-body text-cream placeholder-ink outline-none transition-colors focus:border-violet"
                />
              </div>
              <p className="text-[11px] text-ink">
                {content.contact.requiredNote}
              </p>
              {/* Botón de envío */}
              <div
                data-contact-cta
                className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div id="recaptcha-container" />

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-violet px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-cream transition-all hover:bg-violet-light"
                >
                  <span>{content.contact.submit}</span>
                  <FontAwesomeIcon
                    icon={faArrowTurnDown}
                    className="h-3.5 w-3.5"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
