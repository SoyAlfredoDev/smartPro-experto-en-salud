"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

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

function LogoCard({ name, src }: { name: string; src: string }) {
  return (
    <div className="group flex h-[84px] items-center justify-center rounded-2xl border border-[var(--medium-gray)]/80 bg-white px-5 shadow-[0_8px_24px_rgba(36,74,115,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-[0_16px_36px_rgba(36,74,115,0.12)] md:h-[96px] md:min-w-[190px]">
      <Image
        src={src}
        alt={name}
        width={150}
        height={50}
        className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105 md:h-10"
        style={{ width: "auto" }}
      />
    </div>
  );
}

export default function LogosIsapresSection() {
  return (
    <section className="relative overflow-hidden py-14 md:py-16" id="isapres">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mb-8 text-center">
          <span className="inline-flex items-center rounded-full border border-[var(--medium-gray)] bg-white px-4 py-1.5 text-sm font-medium text-[var(--primary)] shadow-sm">
            Isapres disponibles
          </span>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:hidden">
          {logos.map((logo) => (
            <LogoCard key={logo.name} {...logo} />
          ))}
        </div>

        <div className="relative hidden md:block">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[var(--light-gray)] to-transparent md:w-24" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[var(--light-gray)] to-transparent md:w-24" />

          <div className="overflow-hidden">
            <div className="marquee-track flex w-max items-center gap-5 py-3">
              {marqueeLogos.map((logo, index) => (
                <LogoCard key={`${logo.name}-${index}`} {...logo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
