# Shift Agency — sitio web

Base del proyecto: Next.js 14 (App Router) + TypeScript + Tailwind + Framer Motion.

## Cómo arrancar

```bash
npm install
npm run dev
```

Abrí http://localhost:3000

## Estructura

```
app/
  layout.tsx       → fuentes, metadata, wrapper global
  page.tsx         → arma todas las secciones de la home
  globals.css       → estilos base, focus visible, reduced-motion
components/
  Header.tsx        → nav fija
  Hero.tsx          → hero con headline y collage de imágenes
  Servicios.tsx      → lista de servicios
  Nosotros.tsx        → stats animados (count-up con Framer Motion)
  Trabajos.tsx         → grid de proyectos (placeholder de datos)
  Reviews.tsx           → tabla de reviews + score
  Contacto.tsx          → form de consulta
  Footer.tsx             → pie de página
lib/
  fonts.ts               → config de Magnetik (local) + Space Grotesk (Google)
```

## Pendientes antes de seguir

- [ ] Reemplazar el placeholder de logo en `Header.tsx` por el SVG real
      (versión clara, para que se vea sobre el fondo oscuro).
- [ ] Confirmar el hex exacto del negro de fondo — está en `#0A0A0A` como
      placeholder en `tailwind.config.ts` (`colors.surface`).
- [ ] Reemplazar los bloques grises (`bg-surface-raised` con `aria-hidden`)
      en `Hero.tsx` y `Trabajos.tsx` por imágenes reales con `next/image`.
- [ ] Conectar el form de `Contacto.tsx` a una server action o API route
      (hoy el `action="#"` es un placeholder).
- [ ] Decidir de dónde salen los datos de `Trabajos` y `Reviews`: si se van
      a actualizar seguido, conviene un CMS headless (Sanity/Contentful) en
      vez de tenerlos hardcodeados como están ahora.