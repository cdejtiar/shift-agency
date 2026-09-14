"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Language = "es" | "en";

type Translation = {
  header: { links: string[]; toggleLabel: string; homeLabel: string };
  hero: { eyebrow: string; title: string[]; description: string };
  services: { title: string; description: string; items: string[] };
  about: { title: string; description: string; stats: string[]; statsDescription: string[]; statsImages: { image1?: string; image2?: string }[] };
  work: { title: string; description: string; items: { title: string; client: string, category: string; thumbnail: string }[] };
  reviews: { title: string; client: string; service: string; score: string; items: { client: string; service: string; score: string }[] };
  contact: { title: string; description: string; name: string; email: string; message: string; submit: string };
};

export const translations: Record<Language, Translation> = {
  es: {
    header: { links: ["SERVICIOS", "NOSOTROS", "TRABAJOS", "CONTACTO"], toggleLabel: "Cambiar idioma a inglés", homeLabel: "Shift Agency - inicio" },
    hero: { eyebrow: "Agencia de Marketing", title: ["Impulsamos", "tu marca hacia", "un cambio real"], description: "Redefinimos la comunicación con estrategia, dirección tecnológica y creatividad aplicada." },
    services: { title: "Servicios", description: "Creamos servicios pensados para generar ese cambio que conecta, emociona y deja huella en tu audiencia.", items: ["Diseño Web", "Redes Sociales", "Branding", "Diseño Gráfico", "Campañas Performance", "Contenido Multimedia", "Email MKTG"] },
    about: { title: "Nosotros", description: "La idea de Shift nació de escuchar a clientes que llegaban desilusionados por experiencias previas con otras agencias: poca atención, contenidos genéricos y estrategias sin identidad. Vimos en esa necesidad una oportunidad para hacer las cosas diferentes. ", stats: ["Años en el mercado", "Trabajos realizados", "Servicio integral", "Trabajo a medida"], statsDescription: ["Acompañamos el crecimiento del mercado digital, adaptándonos y perfeccionando nuestros procesos para ofrecerte siempre lo último.", "Cada proyecto es un mundo y nos encantan los nuevos desafíos. Ya entregamos más de 50 trabajos donde pusimos cabeza, estrategia y mucha creatividad.", "No nos quedamos a medias. Cubrimos todos los frentes para que tu comunicación digital tenga sentido en cada canal y formato.", "Sin estructuras rígidas. Sumamos a los especialistas exactos que tu proyecto necesita en cada etapa para garantizar el mejor resultado."], statsImages: [{ image1: "", image2: "" }, { image1: "", image2: "" }, { image1: "", image2: "" }, { image1: "", image2: "" }] },
    work: { title: "Trabajos", description: "Detrás de cada resultado hay un proceso de transformación, marcas que llegan buscando algo distinto y encuentran en nuestra metodología el impulso que necesitaban. No mostramos solo diseños o campañas, mostramos la evolución de una identidad, el camino que refleja cómo impulsamos el cambio en cada detalle.", items: [{ title: "Diseño Web", client: "Embassy Zona Francia", category: "Logística", thumbnail: "/images/thumbnail.png" }, { title: "Rebranding", client: "Bashem Realty", category: "Inmobiliaria", thumbnail: "/images/thumbnail.png" }, { title: "Creación de contenido", client: "ABRE Desarrollos", category: "Desarrolladora", thumbnail: "/images/thumbnail.png" }]}, /* Acá agregas proyectos en la misma línea abajo los traducis al inglés*/
    reviews: { title: "Reviews", client: "Cliente", service: "Servicio", score: "Puntaje", items: [{ client: "Cliente A", service: "Diseño Web", score: "10/10" }, { client: "Cliente B", service: "Branding", score: "9/10" }, { client: "Cliente C", service: "Redes Sociales", score: "10/10" }, { client: "Cliente D", service: "Rebranding", score: "9/10" }] },
    contact: { title: "Contactanos", description: "Hablemos de tu proyecto. Contanos qué necesitás y te respondemos en menos de 24hs.", name: "Nombre", email: "Email", message: "Mensaje", submit: "Enviar consulta" },
  },
  en: {
    header: { links: ["SERVICES", "ABOUT US", "WORK", "CONTACT"], toggleLabel: "Switch language to Spanish", homeLabel: "Shift Agency - home" },
    hero: { eyebrow: "Marketing Agency", title: ["We drive", "your brand toward", "real change"], description: "We redefine communication through strategy, technology leadership, and applied creativity." },
    services: { title: "Services", description: "We create services designed to generate that change that connects, moves, and leaves a mark on your audience.", items: ["Web Design", "Social Media", "Branding", "Graphic Design", "Performance Campaigns", "Multimedia Content", "Email MKTG"] },
    about: { title: "About us", description: "The idea of Shift was born from listening to clients who arrived disappointed by previous experiences with other agencies: little attention, generic content, and strategies without identity. We saw in that need an opportunity to do things differently.", stats: ["Years in the market", "Completed projects", "Full-service support", "Tailored work"], statsDescription: ["We've been at the forefront of the digital market, adapting and refining our processes to always offer you the latest.", "Every project is a world and we love the new challenges. We've delivered over 50 projects where we put our heads, strategy, and a lot of creativity.", "We don't stop halfway. We cover all fronts so your digital communication makes sense in every channel and format.", "No rigid structures. We bring in the exact specialists your project needs at each stage to guarantee the best outcome."], statsImages: [{ image1: "", image2: "" }, { image1: "", image2: "" }, { image1: "", image2: "" }, { image1: "", image2: "" }] },
    work: { title: "Work", description: "Behind every result is a transformation process—brands that arrive looking for something different and find the momentum they need in our methodology. We don’t just show designs or campaigns; we showcase the evolution of an identity, the path that reflects how we drive change in every detail.", items: [{ title: "Web Design", client: "Embassy Zona Francia", category: "Logistics", thumbnail: "/images/thumbnail.png" }, { title: "Rebranding", client: "Bashem Realty", category: "Real Estate", thumbnail: "/images/thumbnail.png" }, { title: "Content Creation", client: "ABRE Desarrollos", category: "Development", thumbnail: "/images/thumbnail.png" }]},
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
