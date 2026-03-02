"use client";

import { motion } from "framer-motion";

// HeroAdvisorySection.tsx
// Requiere variables CSS:
// --primary, --secondary, --accent
export function HeroAdvisorySection() {
  return (
    <section className="relative w-full">
      {/* Full-bleed hero */}
      <div
        className="
          relative w-full
          min-h-[320px] sm:min-h-[420px] lg:min-h-[560px]
          bg-[url('/images/bg-hero-advisory-section.jpeg')]
          bg-cover bg-no-repeat
          bg-[position:70%_20%] sm:bg-[position:70%_18%] lg:bg-[position:66%_14%]
        "
      >
        {/* Contrast overlay (mejor legibilidad en todos los tamaños) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--secondary)]/55 via-[color:var(--secondary)]/25 to-transparent" />

        {/* Content */}
        <div className="relative mx-auto flex w-full max-w-6xl items-center px-4 sm:px-6 lg:px-8 h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="py-12 sm:py-16 lg:py-20"
          >
            {/* Badge / title */}
            <div className="inline-flex max-w-[92vw] flex-col gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center rounded-2xl bg-white/85 px-5 py-3 shadow-xl backdrop-blur sm:px-6 sm:py-4"
              >
                <h1
                  className="
                    leading-tight tracking-wide text-[color:var(--primary)]
                    text-2xl font-extrabold
                    sm:text-3xl
                    lg:text-4xl
                  "
                >
                  Asesoría en Isapres en Chile
                </h1>
              </motion.div>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="h-1.5 max-w-24 rounded-full bg-[color:var(--accent)] sm:max-w-28"
              />

              {/* Supporting copy (UX: agrega contexto y mejora conversión) */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="
                  max-w-xl text-white/95
                  text-sm sm:text-base lg:text-lg
                  drop-shadow font-medium
                "
              >
                Te ayudamos a elegir, comparar y cambiar a la mejor Isapre de
                Chile. Asegura tu tranquilidad con una asesoría 100%
                personalizada.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#cotizador"
                  className="
                    inline-flex w-full items-center justify-center rounded-xl
                    bg-[color:var(--primary)] px-5 py-3
                    text-base font-semibold text-white
                    shadow-lg transition-colors
                    hover:opacity-95
                    focus:outline-none focus:ring-4 focus:ring-[color:var(--primary)]/30
                    sm:w-auto sm:px-6
                  "
                >
                  Cotizar ahora
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#solicitar-video"
                  className="
                    inline-flex w-full items-center justify-center rounded-xl
                    bg-white/90 px-5 py-3
                    text-base font-semibold text-[color:var(--secondary)]
                    shadow-lg transition-colors
                    hover:bg-white
                    focus:outline-none focus:ring-4 focus:ring-white/40
                    sm:w-auto sm:px-6
                  "
                >
                  Solicitar video
                </motion.a>
              </motion.div>

              {/* Micro trust line (opcional pero pro) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-1 text-xs text-white/80 sm:text-sm"
              >
                Respuesta rápida • Sin costo • Por WhatsApp o videollamada
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
