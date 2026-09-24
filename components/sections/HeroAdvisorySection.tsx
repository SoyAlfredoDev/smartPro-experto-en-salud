"use client";

import { motion, useReducedMotion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function HeroAdvisorySection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative w-full">
      <div
        className="
          relative w-full overflow-hidden
          min-h-[460px] sm:min-h-[520px] lg:min-h-[620px]
          bg-[url('/images/bg-hero-advisory-section.jpeg')]
          bg-cover bg-no-repeat
          bg-[position:70%_20%] sm:bg-[position:70%_18%] lg:bg-[position:66%_14%]
        "
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--secondary)]/85 via-[color:var(--secondary)]/55 to-[color:var(--secondary)]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--secondary)]/50 via-transparent to-transparent sm:hidden" />

        <div className="relative mx-auto flex h-full w-full max-w-6xl items-center px-4 sm:px-6 lg:px-8">
          <div className="py-14 sm:py-20 lg:py-24">
            <motion.p
              custom={0.05}
              variants={fadeUp}
              initial={reduce ? false : "hidden"}
              animate="show"
              className="mb-4 inline-flex items-center rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur"
            >
              Asesoría gratuita en Chile
            </motion.p>

            <motion.h1
              custom={0.15}
              variants={fadeUp}
              initial={reduce ? false : "hidden"}
              animate="show"
              className="max-w-xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Asesoría en Isapres en Chile
            </motion.h1>

            <motion.div
              initial={reduce ? false : { width: 0 }}
              animate={{ width: "5.5rem" }}
              transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 h-1.5 rounded-full bg-[color:var(--accent)]"
            />

            <motion.p
              custom={0.3}
              variants={fadeUp}
              initial={reduce ? false : "hidden"}
              animate="show"
              className="mt-5 max-w-xl text-base font-medium leading-relaxed text-white/95 sm:text-lg"
            >
              Te ayudamos a elegir, comparar y cambiar a la mejor Isapre de
              Chile. Asegura tu tranquilidad con una asesoría 100%
              personalizada.
            </motion.p>

            <motion.div
              custom={0.42}
              variants={fadeUp}
              initial={reduce ? false : "hidden"}
              animate="show"
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#cotizador"
                className="inline-flex w-full items-center justify-center rounded-xl bg-[color:var(--accent)] px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-[color:var(--accent)]/30 transition-colors hover:brightness-105 focus:outline-none focus:ring-4 focus:ring-[color:var(--accent)]/40 sm:w-auto"
              >
                Cotizar ahora
              </motion.a>

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#solicitar-video"
                className="inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-[color:var(--secondary)] shadow-lg transition-colors hover:bg-white/90 focus:outline-none focus:ring-4 focus:ring-white/40 sm:w-auto"
              >
                Solicitar video
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      <ul className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-2 px-4 py-4 text-sm font-medium text-[color:var(--secondary)] sm:px-6 lg:px-8">
        {["Respuesta rápida", "Sin costo", "WhatsApp o videollamada"].map(
          (item) => (
            <li key={item}>{item}</li>
          ),
        )}
      </ul>
    </section>
  );
}
