"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Language = "es" | "en";

type Translation = {
  header: { links: string[]; toggleLabel: string; homeLabel: string };
  hero: { eyebrow: string; title: string[]; description: string };
  services: { title: string; items: string[] };
  about: { title: string; description: string; stats: string[] };
  work: { title: string; description: string; items: { title: string; client: string }[] };
  reviews: { title: string; client: string; service: string; score: string; items: { client: string; service: string; score: string }[] };
  contact: { title: string; description: string; name: string; email: string; message: string; submit: string };
};

export const translations: Record<Language, Translation> = {
  es: {
    header: { links: ["SERVICIOS", "NOSOTROS", "TRABAJOS", "CONTACTO"], toggleLabel: "Cambiar idioma a inglés", homeLabel: "Shift Agency - inicio" },
    hero: { eyebrow: "Agencia de Marketing", title: ["Impulsamos", "tu marca hacia", "un cambio real"], description: "Redefinimos la comunicación con estrategia, dirección tecnológica y creatividad aplicada." },
    services: { title: "Servicios", items: ["Diseño Web", "Redes Sociales", "Branding", "Diseño Gráfico", "Campañas Performance", "Contenido Multimedia", "Email Marketing"] },
    about: { title: "Nosotros", description: "Lo que nos define es la manera de encarar cada proyecto: entender a la marca antes de proponer, y construir soluciones a medida en vez de fórmulas repetidas.", stats: ["Años en el mercado", "Trabajos realizados", "Servicio integral", "Trabajo a medida"] },
    work: { title: "Trabajos", description: "Una selección de proyectos donde combinamos estrategia, diseño y ejecución para marcas que buscaban un cambio real.", items: [{ title: "Diseño Web", client: "Rebranding Studio" }, { title: "Rebranding", client: "Anteo Marca" }, { title: "Dirección de contenido", client: "Loyer Estudio" }] },
    reviews: { title: "Reviews", client: "Cliente", service: "Servicio", score: "Puntaje", items: [{ client: "Cliente A", service: "Diseño Web", score: "10/10" }, { client: "Cliente B", service: "Branding", score: "9/10" }, { client: "Cliente C", service: "Redes Sociales", score: "10/10" }, { client: "Cliente D", service: "Rebranding", score: "9/10" }] },
    contact: { title: "Contactanos", description: "Hablemos de tu proyecto. Contanos qué necesitás y te respondemos en menos de 24hs.", name: "Nombre", email: "Email", message: "Mensaje", submit: "Enviar consulta" },
  },
  en: {
    header: { links: ["SERVICES", "ABOUT US", "WORK", "CONTACT"], toggleLabel: "Switch language to Spanish", homeLabel: "Shift Agency - home" },
    hero: { eyebrow: "Marketing Agency", title: ["We drive", "your brand toward", "real change"], description: "We redefine communication through strategy, technology leadership, and applied creativity." },
    services: { title: "Services", items: ["Web Design", "Social Media", "Branding", "Graphic Design", "Performance Campaigns", "Multimedia Content", "Email Marketing"] },
    about: { title: "About us", description: "What defines us is how we approach every project: understanding the brand before proposing, and building tailored solutions instead of repeated formulas.", stats: ["Years in the market", "Completed projects", "Full-service support", "Tailored work"] },
    work: { title: "Work", description: "A selection of projects where we combined strategy, design, and execution for brands looking for real change.", items: [{ title: "Web Design", client: "Rebranding Studio" }, { title: "Rebranding", client: "Anteo Marca" }, { title: "Content Direction", client: "Loyer Estudio" }] },
    reviews: { title: "Reviews", client: "Client", service: "Service", score: "Score", items: [{ client: "Client A", service: "Web Design", score: "10/10" }, { client: "Client B", service: "Branding", score: "9/10" }, { client: "Client C", service: "Social Media", score: "10/10" }, { client: "Client D", service: "Rebranding", score: "9/10" }] },
    contact: { title: "Contact us", description: "Let's talk about your project. Tell us what you need and we will reply within 24 hours.", name: "Name", email: "Email", message: "Message", submit: "Send inquiry" },
  },
};

const LanguageContext = createContext<{ language: Language; content: Translation; toggleLanguage: () => void }>({ language: "es", content: translations.es, toggleLanguage: () => undefined });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  function toggleLanguage() {
    setLanguage((current) => (current === "es" ? "en" : "es"));
  }

  return <LanguageContext.Provider value={{ language, content: translations[language], toggleLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
