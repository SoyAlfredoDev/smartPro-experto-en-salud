"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ShieldCheck, X, Mail } from "lucide-react";

interface Executive {
  id: string;
  name: string;
  role: string;
  isapre: string;
  isapreLogo: string;
  avatar: string;
  email: string;
  rating: number;
  reviewsCount: number;
  experienceYears?: number;
  specialty?: string;
}

const executives: Executive[] = [
  {
    id: "nicolas-campos",
    name: "Nicolás Campos",
    role: "Ejecutivo Consalud",
    isapre: "Consalud",
    isapreLogo: "/images/isapres/isapre-consalud.png",
    avatar: "/images/team/nicolas-campos.jpg",
    email: "Jcampos@expertoensalud.cl",
    rating: 4.9,
    reviewsCount: 128,
    experienceYears: 6,
    specialty: "Planes familiares y preferenciales",
  },
  {
    id: "carla-sanchez",
    name: "Carla Sanchez",
    role: "Ejecutiva Consalud",
    isapre: "Consalud",
    isapreLogo: "/images/isapres/isapre-consalud.png",
    avatar: "/images/team/carla-sanchez.jpg",
    email: "Csanchez@expertoensalud.cl",
    rating: 4.8,
    reviewsCount: 96,
    experienceYears: 5,
    specialty: "Maternidad y cobertura hospitalaria",
  },
  {
    id: "isabel-uribe",
    name: "Isabel Uribe",
    role: "Ejecutiva Colmena",
    isapre: "Colmena",
    isapreLogo: "/images/isapres/isapre-colmena.png",
    avatar: "/images/team/isabel-uribe.jpg",
    email: "Iuribe@expertoensalud.cl",
    rating: 4.8,
    reviewsCount: 102,
    experienceYears: 7,
    specialty: "Libre elección y coberturas ambulatorias",
  },
  {
    id: "juan-lorca",
    name: "Juan Lorca",
    role: "Ejecutivo Banmédica",
    isapre: "Banmédica",
    isapreLogo: "/images/isapres/isapre-banmedica.png",
    avatar: "/images/team/juan-lorca.jpg",
    email: "Jlorca@expertoensalud.cl",
    rating: 4.9,
    reviewsCount: 93,
    experienceYears: 8,
    specialty: "Planes corporativos e independientes",
  },
  {
    id: "gimena-sanchez",
    name: "Gimena Sanchez",
    role: "Ejecutiva Vida Tres",
    isapre: "Vida Tres",
    isapreLogo: "/images/isapres/isapre-vida-tres.png",
    avatar: "/images/team/gimena-sanchez.jpg",
    email: "Gsanchez@expertoensalud.cl",
    rating: 4.8,
    reviewsCount: 89,
    experienceYears: 6,
    specialty: "Clínicas preferentes y alta cobertura",
  },
  {
    id: "juan-bustos",
    name: "Juan Bustos",
    role: "Ejecutivo Nueva Masvida",
    isapre: "Nueva Masvida",
    isapreLogo: "/images/isapres/isapre-nueva-masvida.png",
    avatar: "/images/team/juan-bustos.jpg",
    email: "Jbustos@expertoensalud.cl",
    rating: 4.7,
    reviewsCount: 75,
    experienceYears: 4,
    specialty: "Optimización de 7% legal y ahorro",
  },
];

const allIsapres = [
  "Todos",
  "Consalud",
  "Colmena",
  "Banmédica",
  "Vida Tres",
  "Nueva Masvida",
];

function ExecutiveCard({
  exec,
  href,
  className = "",
}: {
  exec: Executive;
  href: string;
  className?: string;
}) {
  return (
    <article
      className={`group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-sm ${className}`}
    >
      <div
        className="relative mb-4 w-full overflow-hidden rounded-xl bg-slate-100"
        style={{ aspectRatio: "3 / 4" }}
      >
        <Image
          src={exec.avatar}
          alt={`Foto de ${exec.name}`}
          fill
          sizes="(max-width: 1024px) 78vw, 16vw"
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-grow flex-col">
        <h3 className="line-clamp-2 text-sm font-bold leading-tight text-[#1e3a8a]">
          {exec.name}
        </h3>
        <p className="mt-1 text-xs text-gray-600">{exec.role}</p>
        <div className="my-2.5 flex h-6 items-center justify-center">
          <Image
            src={exec.isapreLogo}
            alt={exec.isapre}
            width={100}
            height={24}
            className="h-full w-auto object-contain"
            style={{ width: "auto" }}
          />
        </div>
        <div className="flex items-center justify-center gap-1">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-3 w-3 fill-amber-400 text-amber-400"
              />
            ))}
          </div>
          <span className="text-xs font-bold text-gray-800">
            {exec.rating.toFixed(1)}
          </span>
        </div>
        <p className="text-[10px] text-gray-500">
          ({exec.reviewsCount} evaluaciones)
        </p>
      </div>

      <a
        href={href}
        className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-lg border border-blue-300/50 bg-blue-50/50 px-3 py-2 text-xs font-semibold text-[#1d4ed8] transition-all duration-200 hover:border-blue-400 hover:bg-blue-100/60 active:scale-95"
      >
        <Mail className="h-3.5 w-3.5" />
        <span>Contactar</span>
      </a>
    </article>
  );
}

export default function TeamSection() {
  const [selectedIsapre, setSelectedIsapre] = useState<string>("Todos");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const filteredExecutives =
    selectedIsapre === "Todos"
      ? executives
      : executives.filter((e) => e.isapre === selectedIsapre);

  useEffect(() => {
    setActiveSlide(0);
    if (scrollerRef.current) scrollerRef.current.scrollLeft = 0;
  }, [selectedIsapre]);

  const updateActiveSlide = () => {
    const el = scrollerRef.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const step = card.offsetWidth + 16;
    const index = Math.round(el.scrollLeft / step);
    setActiveSlide(
      Math.max(0, Math.min(index, filteredExecutives.length - 1)),
    );
  };

  const scrollToSlide = (index: number) => {
    const el = scrollerRef.current;
    const card = el?.children[index] as HTMLElement | undefined;
    if (!el || !card) return;
    el.scrollTo({ left: card.offsetLeft - 16, behavior: "smooth" });
  };

  const getEmailLink = (exec: Executive) => {
    const subject = encodeURIComponent(
      `Consulta de plan de salud - ${exec.name}`,
    );

    const body = encodeURIComponent(
      `Hola ${exec.name},\n\nMe gustaría contactarte para recibir asesoría personalizada sobre mi plan de salud.\n\nSaludos.`,
    );

    return `mailto:${exec.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      className="relative w-full scroll-mt-24 bg-white py-16 md:py-20"
      id="equipo"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-center sm:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-[color:var(--primary)] sm:text-4xl">
              Nuestros ejecutivos
            </h2>

            <p className="mt-1 text-sm font-normal text-gray-500 sm:text-base">
              Profesionales acreditados para ayudarte a elegir mejor tu plan de
              salud.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onClick={() => setShowModal(true)}
            className="inline-flex self-start items-center justify-center rounded-xl border border-[#2563eb]/40 bg-white px-4 py-2 text-xs font-semibold text-[#1d4ed8] shadow-sm transition-all duration-200 hover:border-[#2563eb] hover:bg-blue-50/60 active:scale-95 sm:self-auto sm:text-sm"
          >
            Ver todos los ejecutivos
          </motion.button>
        </div>

        {/* Filter Pills */}
        <div className="mb-6 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap [&::-webkit-scrollbar]:hidden">
          {allIsapres.map((isapre) => (
            <button
              key={isapre}
              onClick={() => setSelectedIsapre(isapre)}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                selectedIsapre === isapre
                  ? "bg-[#1e3a8a] text-white shadow-sm"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              {isapre}
            </button>
          ))}
        </div>

        <div className="lg:hidden">
          <div
            ref={scrollerRef}
            onScroll={updateActiveSlide}
            className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {filteredExecutives.map((exec) => (
              <ExecutiveCard
                key={exec.id}
                exec={exec}
                href={getEmailLink(exec)}
                className="w-[78%] max-w-[280px] shrink-0 snap-center shadow-md"
              />
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center gap-1.5">
            {filteredExecutives.map((exec, index) => (
              <button
                key={exec.id}
                type="button"
                aria-label={`Ver a ${exec.name}`}
                onClick={() => scrollToSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeSlide
                    ? "w-6 bg-[color:var(--primary)]"
                    : "w-1.5 bg-slate-300"
                }`}
              />
            ))}
          </div>
          <p className="mt-2 text-center text-xs text-slate-400">
            Desliza para ver al equipo
          </p>
        </div>

        <div className="hidden gap-4 lg:grid lg:grid-cols-3 xl:grid-cols-6 xl:gap-3.5">
          {filteredExecutives.map((exec) => (
            <ExecutiveCard
              key={exec.id}
              exec={exec}
              href={getEmailLink(exec)}
              className="transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/50 hover:shadow-md"
            />
          ))}
        </div>

        {/* Bottom Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-gray-600 sm:mt-10 sm:text-sm"
        >
          <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-600" />

          <span>
            Todos nuestros ejecutivos están acreditados y cuentan con
            experiencia en el sistema de salud.
          </span>
        </motion.div>
      </div>

      {/* Modal / Dialog */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl md:p-8"
            >
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#1e3a8a]">
                    Equipo Completo de Asesores de Salud
                  </h3>

                  <p className="text-sm text-gray-500">
                    Asesores especializados por Isapre y tipo de cobertura
                  </p>
                </div>

                <button
                  onClick={() => setShowModal(false)}
                  className="rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                  aria-label="Cerrar"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {executives.map((exec) => (
                  <div
                    key={exec.id}
                    className="flex flex-col items-center rounded-2xl border border-gray-100 p-4 text-center shadow-xs transition hover:shadow-md"
                  >
                    {/* Modal Avatar */}
                    <div className="relative mb-4 h-28 w-28 overflow-hidden rounded-xl border-2 border-white bg-gray-100 shadow-sm ring-1 ring-gray-200">
                      <Image
                        src={exec.avatar}
                        alt={`Foto de ${exec.name}`}
                        fill
                        sizes="112px"
                        className="object-cover"
                      />
                    </div>

                    <h4 className="text-sm font-bold text-[#1e3a8a]">
                      {exec.name}
                    </h4>

                    <p className="text-xs text-gray-500">{exec.role}</p>

                    <p className="mt-1 text-[11px] text-gray-400">
                      Especialidad: {exec.specialty}
                    </p>

                    <div className="my-2 flex h-6 items-center">
                      <Image
                        src={exec.isapreLogo}
                        alt={exec.isapre}
                        width={80}
                        height={24}
                        className="max-h-5 min-h-3 w-auto object-contain"
                        style={{ width: "auto" }}
                      />
                    </div>

                    <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />

                      <span>{exec.rating.toFixed(1)}</span>

                      <span className="text-[11px] font-normal text-gray-400">
                        ({exec.reviewsCount} reseñas)
                      </span>
                    </div>

                    <a
                      href={getEmailLink(exec)}
                      className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg border border-[#3b82f6]/40 bg-blue-50/50 py-1.5 text-xs font-semibold text-[#1d4ed8] transition hover:bg-blue-100/60"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      Contactar por correo
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

/*
Correo recibido sin ejecutivo asociado:
Mvidal@expertoensalud.cl

No se ha asignado porque no existe un ejecutivo María/Marcela/etc. Vidal
en la lista proporcionada. Si corresponde a un ejecutivo, falta agregar
su nombre, rol, Isapre y foto.
*/
