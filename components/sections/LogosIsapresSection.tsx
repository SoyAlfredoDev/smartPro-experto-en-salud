"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { name: "Banmédica", src: "/images/isapres/isapre-banmedica.png" },
  { name: "Colmena", src: "/images/isapres/isapre-colmena.png" },
  { name: "Consalud", src: "/images/isapres/isapre-consalud.png" },
  { name: "Cruz Blanca", src: "/images/isapres/isapre-cruz-blanca.jpeg" },
  { name: "Esencial", src: "/images/isapres/isapre-esencial.png" },
  { name: "Nueva Masvida", src: "/images/isapres/isapre-nueva-masvida.png" },
  { name: "Vida Tres", src: "/images/isapres/isapre-vida-tres.png" },
];

const marqueeLogos = [...logos, ...logos];

export default function LogosIsapresSection() {
  return (
    <section className="relative overflow-hidden py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <span className="inline-flex items-center rounded-full border border-[var(--medium-gray)] bg-white px-4 py-1.5 text-sm font-medium text-[var(--primary)] shadow-sm">
            Isapres disponibles
          </span>
        </motion.div>

        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[var(--light-gray)] to-transparent md:w-24" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[var(--light-gray)] to-transparent md:w-24" />

          <div className="overflow-hidden">
            <div className="marquee-track flex w-max items-center gap-4 py-3 md:gap-5">
              {marqueeLogos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="group flex h-[88px] min-w-[170px] items-center justify-center rounded-2xl border border-[var(--medium-gray)]/70 bg-white px-6 shadow-[0_6px_24px_rgba(36,74,115,0.06)] transition-all duration-300 hover:z-20 hover:scale-110 hover:border-[var(--accent)]/35 hover:shadow-[0_16px_40px_rgba(36,74,115,0.14)] md:h-[96px] md:min-w-[190px]"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={150}
                    height={50}
                    className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105 md:h-10"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-track {
          animation: marquee-scroll 24s linear infinite;
          will-change: transform;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
