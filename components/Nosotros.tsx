"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { useLanguage } from "@/lib/i18n";

const stats = [
  { value: 5, suffix: "+" },
  { value: 50, suffix: "+" },
  { value: 360, suffix: "°" },
  { value: 100, suffix: "%" },
];

// Una posición (en % del contenedor) por cada stat, para las dos imágenes.
// Cambiá estos valores a ojo para reacomodarlas como quieras.
const imagePositions = [
  { image1: { top: "15%", left: "8%" }, image2: { top: "68%", left: "80%" } },
  { image1: { top: "62%", left: "10%" }, image2: { top: "18%", left: "78%" } },
  { image1: { top: "20%", left: "75%" }, image2: { top: "64%", left: "12%" } },
  { image1: { top: "66%", left: "68%" }, image2: { top: "16%", left: "16%" } },
];

// Vuelve a ser el contador con spring, pero ahora "target" se actualiza
// cada vez que cambia el stat activo — así cuenta de un valor al siguiente
// en vez de solo animar una vez al entrar en pantalla.
function SpringCounter({ target, suffix }: { target: number; suffix: string }) {
  const motionValue = useMotionValue(target);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    motionValue.set(target);
  }, [target, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplay(Math.round(latest));
    });
  }, [springValue]);

  return (
    <h2 className="flex items-start gap-2 text-xxxl magnetik">
      {display}
      <span className="py-2 text-h1 magnetik text-violet">
              {suffix}
      </span>
    </h2>
  );
}

function VerticalProgress({
  activeIndex,
  total,
  activeLabel,
}: {
  activeIndex: number;
  total: number;
  activeLabel: string;
}) {
  const percent = total > 1 ? (activeIndex / (total - 1)) * 100 : 0;

  return (
    <div className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-4 md:right-10 md:flex">
      <div className="relative h-40 w-px bg-white/15">
        <motion.span
          aria-hidden
          className="absolute left-1/2 h-6 w-[3px] -translate-x-1/2 rounded-full bg-violet"
          animate={{ top: `${percent}%` }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginTop: "-12px" }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.span
          key={activeLabel}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="text-xs tracking-widest text-ink [writing-mode:vertical-rl]"
        >
          {activeLabel}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

// El div exterior se encarga SOLO de la posición (cambia según el stat
// activo). El div interior se encarga SOLO del flote infinito. Separados
// para que no compitan por la misma propiedad "transform", igual que
// hicimos con el anillo del RotatingBadge.
function FloatingImage({
  position,
  floatDuration,
  floatDelay = 0,
  imageSrc,
}: {
  position: { top: string; left: string };
  floatDuration: number;
  floatDelay?: number;
  imageSrc?: string;
}) {
  return (
    <motion.div
      aria-hidden
      className="absolute z-0 hidden h-36 w-44 lg:block"
      animate={position}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="h-full w-full overflow-hidden rounded-lg bg-surface"
        animate={{ y: [0, -14, 0] }}
        transition={{
          duration: floatDuration,
          delay: floatDelay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt=""
            className="h-full w-full rounded-lg object-cover"
          />
        ) : (
          <div className="h-full w-full rounded-lg bg-surface" />
        )}
      </motion.div>
    </motion.div>
  );
}

export function Nosotros() {
  const { content } = useLanguage();
  const pinRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const index = Math.min(
      stats.length - 1,
      Math.floor(progress * stats.length)
    );
    setActiveIndex(index);
  });

  const current = stats[activeIndex];
  const currentLabel = content.about.stats[activeIndex];
  const currentDescription = content.about.statsDescription[activeIndex];
  const currentPositions = imagePositions[activeIndex];
  const currentImage1 = content.about.statsImages?.[activeIndex]?.image1 ?? "";
  const currentImage2 = content.about.statsImages?.[activeIndex]?.image2 ?? "";

  return (
    <section id="nosotros">
      {/* Presentación de la sección — scroll normal, NO pineada */}
      <div className="bg-surface-raised px-6 py-32 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 flex items-start gap-2 text-h2 magnetik">
            {content.about.title}
            <span className="py-2 text-h3 spacegrotesk-bold text-violet">
              02
            </span>
          </h2>
          <p className="max-w-2xl text-h5 text-ink magnetik">
            {content.about.description}
          </p>
        </div>
      </div>

      {/* Stats — acá vive todo el scroll-jacking, contenido en 100vh */}
      <div
        ref={pinRef}
        className="relative bg-surface-raised backdrop-blur-xl"
        style={{ height: `${stats.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden px-6">
          <FloatingImage
            position={currentPositions.image1}
            floatDuration={6}
            imageSrc={currentImage1}
          />
          <FloatingImage
            position={currentPositions.image2}
            floatDuration={7}
            floatDelay={1}
            imageSrc={currentImage2}
          />

          <VerticalProgress
            activeIndex={activeIndex}
            total={stats.length}
            activeLabel={currentLabel}
          />

          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentLabel}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-2 text-ink text-h3 magnetik"
              >
                {currentLabel}
              </motion.p>
            </AnimatePresence>

            <SpringCounter target={current.value} suffix={current.suffix} />

            <AnimatePresence mode="wait">
              <motion.p
                key={currentDescription}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="mx-auto mt-6 max-w-xl text-h4 text-ink magnetik"
              >
                {currentDescription}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}