"use client";

import React from "react";
import { HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function FaqSection() {
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
    <section className="py-16 bg-white sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-[color:var(--primary)] sm:text-4xl">
            Preguntas Frecuentes sobre Isapres
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Resolvemos tus dudas principales sobre el proceso de cotización y
            cambio de Isapre en Chile.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-12 max-w-3xl space-y-6"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[color:var(--accent)]/30"
            >
              <h3 className="flex items-start text-lg font-medium text-[color:var(--secondary)]">
                <HelpCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-[color:var(--accent)]" />
                {faq.question}
              </h3>
              <p className="mt-4 text-base text-gray-600 pl-8">{faq.answer}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
