// StepsSection.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    title: "CONTACTO TELEFÓNICO",
    description:
      "Un ejecutivo se pondrá en contacto contigo para entender tu necesidad.",
    image: "/images/step-1.jpg",
  },
  {
    title: "FORMULARIO",
    description:
      "Completa tus datos para enviarte una propuesta personalizada.",
    image: "/images/step-2.jpg",
  },
  {
    title: "ZOOM/MEET",
    description:
      "Agendamos una reunión online para asesorarte y resolver tus dudas.",
    image: "/images/step-3.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function StepsSection() {
  return (
    <section className="bg-[color:var(--light_gray)] py-16 sm:py-24" id="pasos">
      <div className="mx-auto max-w-6xl px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-12 text-center text-3xl font-extrabold tracking-wide text-[color:var(--primary)] md:text-4xl">
            COTIZA EN 3 SIMPLES PASOS
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="mb-3 text-sm font-bold tracking-wide text-[color:var(--secondary)]">
                  {step.title}
                </h3>

                <p className="text-sm text-gray-500">{step.description}</p>

                {/* Accent underline */}
                <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-[color:var(--accent)] transition-all duration-300 group-hover:w-16" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
