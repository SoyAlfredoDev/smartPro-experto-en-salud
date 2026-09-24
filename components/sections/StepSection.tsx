"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    title: "Contacto telefónico",
    description:
      "Un ejecutivo se pondrá en contacto contigo para entender tu necesidad.",
    image: "/images/step-1.jpg",
  },
  {
    title: "Formulario",
    description:
      "Completa tus datos para enviarte una propuesta personalizada.",
    image: "/images/step-2.jpg",
  },
  {
    title: "Zoom o Meet",
    description:
      "Agendamos una reunión online para asesorarte y resolver tus dudas.",
    image: "/images/step-3.jpg",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function StepsSection() {
  return (
    <section className="scroll-mt-24 py-16 sm:py-24" id="pasos">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-[color:var(--primary)] sm:text-4xl">
            Cotiza en 3 simples pasos
          </h2>
        </Reveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 md:grid-cols-3 md:gap-6"
        >
          {steps.map((step) => (
            <motion.article
              key={step.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-slate-200/70 transition-shadow hover:shadow-xl"
            >
              <div className="relative h-44 overflow-hidden sm:h-48">
                <img
                  src={step.image}
                  alt={step.title}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-[color:var(--secondary)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {step.description}
                </p>
                <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-[color:var(--accent)] transition-all duration-300 group-hover:w-16" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
