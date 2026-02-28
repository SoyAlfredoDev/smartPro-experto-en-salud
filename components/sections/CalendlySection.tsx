// ConnectSection.tsx
import Image from "next/image";

export default function CalendlySection() {
  return (
    <section className="relative w-full overflow-hidden bg-[color:var(--secondary)]">
      {/* subtle right shadow like the reference */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/20 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: copy + zoom */}
          <div>
            <h2 className="text-4xl font-extrabold tracking-wide text-white sm:text-5xl">
              CONÉCTATE
            </h2>

            <div className="mt-6 flex items-center gap-4">
              {/* Zoom icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7 text-white/90"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M15 10.5V8.25A2.25 2.25 0 0 0 12.75 6h-7.5A2.25 2.25 0 0 0 3 8.25v7.5A2.25 2.25 0 0 0 5.25 18h7.5A2.25 2.25 0 0 0 15 15.75V13.5l5.03 3.016A.75.75 0 0 0 21 15.87V8.13a.75.75 0 0 0-1.12-.646L15 10.5Z" />
                </svg>
              </div>

              <div className="leading-tight">
                <div className="text-lg font-semibold text-white/90">ZOOM</div>
                <div className="text-sm text-white/70">
                  Videollamada rápida y guiada
                </div>
              </div>
            </div>

            <p className="mt-6 max-w-lg text-base text-white/80 sm:text-lg">
              Agenda una videollamada para resolver tus dudas y avanzar con tu
              cotización en pocos minutos.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#agendar"
                className="
                  inline-flex w-full items-center justify-center rounded-full
                  bg-[color:var(--accent)] px-6 py-3
                  text-base font-semibold text-white
                  shadow-lg transition
                  hover:brightness-95
                  focus:outline-none focus:ring-4 focus:ring-[color:var(--accent)]/35
                  sm:w-auto
                "
              >
                Solicitar Asesoria Gratuita
              </a>
            </div>
          </div>

          {/* Right: image card */}
          <div className="lg:flex lg:justify-end">
            <div className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-white/5 shadow-2xl ring-1 ring-white/10">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/img-calendly-section.jpeg"
                  alt="Videollamada por Zoom"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 520px, 100vw"
                />
              </div>

              {/* tiny overlay for depth */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
