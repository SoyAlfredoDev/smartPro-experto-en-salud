"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export function ContactFormSection() {
  return (
    <section id="contacto" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Contáctanos
            </h2>
            <p className="text-secondary">
              Déjanos tus datos o consultas y te responderemos a la brevedad.
            </p>
          </div>

          <form
            className="bg-white p-8 rounded-xl shadow-md border border-medium-gray/30"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-secondary mb-2"
              >
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-md border border-medium-gray/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                placeholder="Ej. Juan Pérez"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-secondary mb-2"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-md border border-medium-gray/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                placeholder="ejemplo@correo.com"
                required
              />
            </div>

            <div className="mb-8">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-secondary mb-2"
              >
                Mensaje o consulta
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-md border border-medium-gray/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                placeholder="Escribe tu mensaje aquí..."
                required
              ></textarea>
            </div>

            <Button variant="primary" className="w-full" type="submit">
              Enviar Mensaje
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
