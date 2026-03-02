// ActualidadSection.tsx
import Image from "next/image";

type NewsItem = {
  title: string;
  description: string;
  href: string;
  image: string;
};

const news: NewsItem[] = [
  {
    title: "¿Cuándo y cómo se pagan los excedentes de las Isapres en Chile?",
    description:
      "Revisa quiénes pueden recibir devolución de excedentes y cómo aprovechar este beneficio para optimizar tu plan de salud.",
    href: "https://elpais.com/chile/2025-01-31/cuando-y-como-se-pagan-la-devolucion-de-los-excedentes-de-las-isapres-en-chile.html",
    image: "/images/contact-phone.jpg",
  },
  {
    title: "Superintendencia corrige cobros del GES y beneficia a afiliados",
    description:
      "La revisión de primas GES podría generar ajustes favorables en planes de salud. Conoce cómo impacta esto en tu cotización.",
    href: "https://www.biobiochile.cl/noticias/nacional/chile/2025/12/29/superintendencia-de-salud-corrige-cobros-del-ges-tras-verificar-primas-de-isapres-por-primera-vez.shtml",
    image: "/images/actualidad-2.webp",
  },
  {
    title: "Gobierno recuerda reajuste del precio base en planes de salud",
    description:
      "Infórmate sobre los próximos reajustes y evalúa alternativas antes de que el alza impacte tu presupuesto mensual.",
    href: "https://www.biobiochile.cl/noticias/economia/tu-bolsillo/2025/08/27/gobierno-recuerda-proximo-reajuste-al-precio-base-de-planes-de-salud-dos-isapres-quedaron-fuera.shtml",
    image: "/images/actualidad-3.jpg",
  },
  {
    title: "Estas son las Isapres que subirán sus precios este año",
    description:
      "Revisa qué aseguradoras aplicarán aumentos y considera comparar opciones para mantener una cobertura eficiente al mejor valor.",
    href: "https://www.biobiochile.cl/noticias/servicios/toma-nota/2025/08/28/estas-son-las-isapres-que-subiran-los-precios-de-sus-planes-de-salud-en-septiembre-y-cuales-no.shtml",
    image: "/images/actualidad-4.jpg",
  },
];

export default function ActualidadSection() {
  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="relative">
            <div className="absolute -left-4 top-2 hidden h-24 w-[2px] bg-slate-200 lg:block" />
            <h2 className="text-5xl font-extrabold tracking-wide text-[color:var(--primary)] sm:text-6xl">
              ACTUALIDAD
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
            Revisa noticias, cambios regulatorios y oportunidades para optimizar
            tu plan de salud.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {news.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group block
                rounded-2xl
                transition
                hover:-translate-y-1 hover:shadow-xl
                focus:outline-none focus:ring-4 focus:ring-[color:var(--accent)]/20
              "
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 260px, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
              </div>

              <div className="px-1 pt-4">
                <div className="text-sm font-semibold text-slate-800 group-hover:text-[color:var(--primary)]">
                  {item.title}
                </div>
                <div className="mt-1 text-sm text-slate-500">
                  {item.description}
                </div>

                <div className="mt-3 h-1 w-10 rounded-full bg-[color:var(--accent)] opacity-80" />
              </div>
            </a>
          ))}
        </div>

        <div className="absolute left-6 top-1/2 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
        </div>
      </div>
    </section>
  );
}
