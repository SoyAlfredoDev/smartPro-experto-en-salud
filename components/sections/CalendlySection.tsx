"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { Video } from "lucide-react";

const PopupButton = dynamic(
  () => import("react-calendly").then((mod) => mod.PopupButton),
  { ssr: false },
);

export default function CalendlySection() {
  const linkCalendly = process.env.NEXT_PUBLIC_LINK_CALENDLY;
  const [mounted, setMounted] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="relative w-full scroll-mt-24 overflow-hidden bg-[color:var(--secondary)]"
      id="solicitar-video"
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT SIDE */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Conéctate
            </h2>

            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                <Video className="h-7 w-7 text-white/90" strokeWidth={1.75} aria-hidden="true" />
              </div>

              <div>
                <div className="text-lg font-semibold text-white">ZOOM</div>
                <div className="text-sm text-white/70">
                  Videollamada rápida y guiada
                </div>
              </div>
            </div>

            <p className="mt-6 max-w-xl text-base text-white/80 sm:text-lg lg:text-xl">
              Agenda una videollamada para resolver tus dudas y avanzar con tu
              cotización en pocos minutos.
            </p>

            <div className="mt-8">
              {mounted && linkCalendly ? (
                <PopupButton
                  url={linkCalendly}
                  rootElement={document.body}
                  text="HORARIOS DISPONIBLES"
                  className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/60"
                />
              ) : null}
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div
              className="
                relative w-full max-w-2xl
                h-[260px] sm:h-[360px] lg:h-[440px]
                overflow-hidden rounded-3xl
                shadow-2xl ring-1 ring-white/10
              "
              style={{ position: "relative" }}
            >
              <img
                src="/images/img-calendly-section.jpeg"
                alt="Videollamada por Zoom"
                width={1280}
                height={720}
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
