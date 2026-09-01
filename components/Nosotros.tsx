"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

function Counter({
  to,
  suffix = "",
}: {
  to: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState(0);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) motionValue.set(to);
  }, [isInView, motionValue, to]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplay(Math.round(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref} className="font-display text-6xl md:text-7xl">
      {display}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 5, suffix: "+", label: "Años en el mercado" },
  { value: 50, suffix: "+", label: "Trabajos realizados" },
  { value: 360, suffix: "°", label: "Servicio integral" },
  { value: 100, suffix: "%", label: "Trabajo a medida" },
];

export function Nosotros() {
  return (
    <section id="nosotros" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-4xl">Nosotros</h2>
        <p className="max-w-prose text-ink">
          Lo que nos define es la manera de encarar cada proyecto: entender a
          la marca antes de proponer, y construir soluciones a medida en vez
          de fórmulas repetidas.
        </p>

        <div className="mt-20 grid grid-cols-2 gap-12 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <Counter to={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm text-ink">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
