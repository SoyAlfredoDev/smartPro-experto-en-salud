import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artículos, noticias y consejos sobre Isapres y salud en Chile.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {/* H1 único y semántico */}
            <h1 className="text-4xl font-extrabold tracking-tight text-[color:var(--primary)] sm:text-5xl">
              Blog de Isapres y Salud
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Mantente informado con nuestros artículos y guías sobre el sistema
              de salud en Chile.
            </p>
          </div>
          {/* Skeleton de grid de artículos */}
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
            {[1, 2, 3].map((post) => (
              <article
                key={post}
                className="flex flex-col items-start justify-between"
              >
                <div className="relative w-full">
                  <div className="aspect-video w-full rounded-2xl bg-gray-200 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"></div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime="2025-01-01" className="text-gray-500">
                      Próximamente
                    </time>
                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                      Guías
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={`/blog/ejemplo-articulo-${post}`}>
                        <span className="absolute inset-0"></span>
                        Título de artículo SEO friendly {post}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      Extracto breve del artículo diseñado para persuadir al
                      lector y mejorar el CTR en la página principal del blog.
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
