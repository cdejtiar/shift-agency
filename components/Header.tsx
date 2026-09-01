export function Header() {
  const links = [
    { label: "SERVICIOS", href: "#servicios" },
    { label: "NOSOTROS", href: "#nosotros" },
    { label: "TRABAJOS", href: "#trabajos" },
    { label: "CONTACTO", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="mx-auto max-w-7xl flex items-center justify-between py-6 magnetik">
        <a href="#" aria-label="Shift Agency — inicio">
          {/* Reemplazar por el SVG del logo (versión clara para fondo oscuro) */}
          <span className="font-display text-lg">Shift</span>
        </a>

        <ul className="hidden gap-8 rounded-[92px] bg-[#F2EFEB1A] px-8 py-4 text-sm md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-cream/80 transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="rounded-full bg-violet px-5 py-2 text-sm font-medium text-cream transition-colors hover:bg-violet-light"
        >
          Empezar
        </a>
      </nav>
    </header>
  );
}
