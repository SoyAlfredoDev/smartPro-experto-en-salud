"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const faqs = [
  {
    question: "¿Cómo saber cuál es la mejor Isapre en Chile?",
    answer:
      'No existe una "mejor Isapre" universal; la mejor opción depende de tu edad, género, cargas familiares, preexistencias y clínicas de preferencia. Nuestra asesoría en Isapres compara todas las opciones del mercado para encontrar la que mejor se adapte a ti.',
  },
  {
    question: "¿Tiene algún costo cambiar de Isapre?",
    answer:
      "El trámite de cambio de Isapre no tiene costo. Además, nuestra asesoría integral es completamente gratuita para ti, ya que trabajamos con las principales instituciones para brindarte la mejor orientación.",
  },
  {
    question: "¿Puedo cambiar mi plan de Isapre si tengo preexistencias?",
    answer:
      "Sí, aunque requiere una evaluación cuidadosa. Un asesor experto revisará tu caso particular para gestionar la declaración de salud y asegurar que mantengas o mejores tu cobertura actual.",
  },
  {
    question: "¿Qué necesito para cotizar un plan de Isapre?",
    answer:
      "Solo necesitamos conocer tu renta imponible aproximada, edad, situación familiar (cargas) y tus preferencias médicas (clínicas o centros médicos donde sueles atenderte).",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="scroll-mt-24 bg-white py-16 sm:py-24" id="preguntas">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-[color:var(--primary)] sm:text-4xl">
            Preguntas frecuentes sobre Isapres
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Resolvemos tus dudas principales sobre el proceso de cotización y
            cambio de Isapre en Chile.
          </p>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                >
                  <span className="text-base font-semibold text-[color:var(--secondary)] sm:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[color:var(--accent)] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-6 text-slate-600 sm:px-6 sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
