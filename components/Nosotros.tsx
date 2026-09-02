"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

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
  { value: 5, suffix: "+" },
  { value: 50, suffix: "+" },
  { value: 360, suffix: "°" },
  { value: 100, suffix: "%" },
];

export function Nosotros() {
  const { content } = useLanguage();
  return (
    <section id="nosotros" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6">{content.about.title}</h2>
        <p className="max-w-prose text-ink">
          {content.about.description}
        </p>

        <div className="mt-20 grid grid-cols-2 gap-12 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={content.about.stats[index]}>
              <Counter to={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-ink">{content.about.stats[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
