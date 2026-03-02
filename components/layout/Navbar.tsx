"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";

const navLinks = [
  { name: "Cotizador", href: "#cotizador" },
  { name: "Pasos", href: "#pasos" },
  { name: "Actualidad", href: "#actualidad" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 transition-transform hover:scale-[1.02]"
            onClick={closeMenu}
          >
            <Image
              src="/images/logo-experto-en-salud.png"
              alt="Logo Experto en Salud"
              width={140}
              height={140}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[color:var(--secondary)] hover:text-[color:var(--primary)] text-sm lg:text-base relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[color:var(--primary)] after:transition-all hover:after:w-full transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link href="#solicitar-video">
              <Button
                variant="primary"
                className="shadow-md hover:shadow-lg transition-all rounded-xl"
              >
                Agendar cita
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-[color:var(--secondary)] hover:text-[color:var(--primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] focus:ring-offset-2 p-2 rounded-lg transition-colors"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={28} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={28} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              aria-hidden="true"
            />

            {/* Slide-out Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-20 right-0 bottom-0 z-40 w-64 bg-white/95 backdrop-blur-md shadow-2xl md:hidden flex flex-col pt-8"
            >
              <div className="flex flex-col gap-6 px-6 font-medium text-lg">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="text-[color:var(--secondary)] hover:text-[color:var(--primary)] transition-colors border-b border-gray-100 pb-4"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="#solicitar-video"
                  onClick={closeMenu}
                  className="mt-4"
                >
                  <Button
                    variant="primary"
                    className="w-full shadow-lg rounded-xl text-lg py-6"
                  >
                    Agendar cita
                  </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
