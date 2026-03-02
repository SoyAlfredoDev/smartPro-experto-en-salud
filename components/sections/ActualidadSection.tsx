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
    title: "Nombre del enlace",
    description: "Breve descripción",
    href: "#",
    image: "/images/contact-phone.jpg",
  },
  {
    title: "Nombre del enlace",
    description: "Breve descripción",
    href: "#",
    image: "/images/actualidad-2.jpg",
  },
  {
    title: "Nombre del enlace",
    description: "Breve descripción",
    href: "#",
    image: "/images/actualidad-3.jpg",
  },
  {
    title: "Nombre del enlace",
    description: "Breve descripción",
    href: "#",
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
            {/* Decorative left line */}
            <div className="absolute -left-4 top-2 hidden h-24 w-[2px] bg-slate-200 lg:block" />

            <h2 className="text-5xl font-extrabold tracking-wide text-[color:var(--primary)] sm:text-6xl">
              ACTUALIDAD
            </h2>
          </div>

          {/* Description (top-right) */}
          <p className="max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
            Revisa tips, noticias y recursos para tomar mejores decisiones.
            Actualizamos contenido periódicamente para ayudarte.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {news.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="
                group block
                rounded-2xl
                transition
                hover:-translate-y-1 hover:shadow-xl
                focus:outline-none focus:ring-4 focus:ring-[color:var(--accent)]/20
              "
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 260px, (min-width: 640px) 50vw, 100vw"
                />
                {/* subtle overlay on hover for readability */}
                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
              </div>

              {/* Text */}
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

        {/* Optional: subtle left dots (like reference) */}
        <div className="absolute left-6 top-1/2 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
        </div>
      </div>
    </section>
  );
}
