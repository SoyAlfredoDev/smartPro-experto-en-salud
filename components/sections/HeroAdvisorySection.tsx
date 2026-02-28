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
        <div className="relative mx-auto flex w-full max-w-6xl items-center px-4 sm:px-6 lg:px-8">
          <div className="py-12 sm:py-16 lg:py-20">
            {/* Badge / title */}
            <div className="inline-flex max-w-[92vw] flex-col gap-3">
              <div className="inline-flex items-center rounded-2xl bg-white/85 px-5 py-3 shadow-xl backdrop-blur sm:px-6 sm:py-4">
                <h1
                  className="
                    leading-tight tracking-wide text-[color:var(--primary)]
                    text-2xl font-extrabold
                    sm:text-3xl
                    lg:text-4xl
                  "
                >
                  ¿ASESORÍA PROFESIONAL?
                </h1>
              </div>

              <div className="h-1.5 w-24 rounded-full bg-[color:var(--accent)] sm:w-28" />

              {/* Supporting copy (UX: agrega contexto y mejora conversión) */}
              <p
                className="
                  max-w-xl text-white/95
                  text-sm sm:text-base lg:text-lg
                  drop-shadow
                "
              >
                Te ayudamos a elegir el mejor plan de salud con una asesoría
                clara, rápida y 100% personalizada.
              </p>

              {/* CTAs */}
              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#cotizador"
                  className="
                    inline-flex w-full items-center justify-center rounded-xl
                    bg-[color:var(--primary)] px-5 py-3
                    text-base font-semibold text-white
                    shadow-lg transition
                    hover:opacity-95
                    focus:outline-none focus:ring-4 focus:ring-[color:var(--primary)]/30
                    sm:w-auto sm:px-6
                  "
                >
                  Cotizar ahora
                </a>

                <a
                  href="#solicitar-video"
                  className="
                    inline-flex w-full items-center justify-center rounded-xl
                    bg-white/90 px-5 py-3
                    text-base font-semibold text-[color:var(--secondary)]
                    shadow-lg transition
                    hover:bg-white
                    focus:outline-none focus:ring-4 focus:ring-white/40
                    sm:w-auto sm:px-6
                  "
                >
                  Solicitar video
                </a>
              </div>

              {/* Micro trust line (opcional pero pro) */}
              <div className="mt-1 text-xs text-white/80 sm:text-sm">
                Respuesta rápida • Sin costo • Por WhatsApp o videollamada
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
