"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  TrendingUp,
  X,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [ufValue, setUfValue] = useState<string | null>(null);

  // Consumir API oficial para el valor de la UF (mindicador.cl)
  useEffect(() => {
    const fetchUF = async () => {
      try {
        const response = await fetch("https://mindicador.cl/api/uf");
        const data = await response.json();
        const valorActual = data.serie[0].valor;

        // Formatear el valor a moneda chilena
        const formattedUF = new Intl.NumberFormat("es-CL", {
          style: "currency",
          currency: "CLP",
        }).format(valorActual);

        setUfValue(formattedUF);
      } catch (error) {
        console.error("Error al obtener la UF:", error);
        setUfValue("No disponible");
      }
    };

    fetchUF();
  }, []);

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/people/Expertoensaludcl/61581320792311/",
      label: "Facebook",
    },
    {
      icon: X,
      href: "",
      label: "X",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/expertoensalud.cl/",
      label: "Instagram",
    },
  ];

  const dataBusiness = {
    name: "VILERO GROUP SPA",
    rut: "78411673-5",
    description:
      "Optimizamos tu elección de salud. Plataforma para encontrar y gestionar los mejores planes de previsión médica con total seguridad y transparencia.",
    logo: "/images/logo-experto-en-salud.png",
    email: "contacto@expertoensalud.cl",
    phone: "+56 9 6446 7389",
    whatsapp: "+56964467389",
    address:
      "Providencia 1017 Of 41, Santiago, Región Metropolitana, 77500000, Chile",
    web: "https://expertoensalud.cl",
  };

  return (
    <footer className="border-t border-slate-200 bg-white py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Columna 1: Marca y Descripción */}
          <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <Image
              src="/images/logo-experto-en-salud.png"
              alt="Logo Experto en Salud"
              width={200}
              height={80}
              className="h-16 w-auto object-contain"
              style={{ width: "auto" }}
            />
            <p className="text-sm leading-relaxed text-slate-500 md:pr-4">
              Optimizamos tu elección de salud. Plataforma para encontrar y
              gestionar los mejores planes de previsión médica con total
              seguridad y transparencia.
            </p>

            {/* Indicador de UF */}
            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm">
              <div className="relative flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary relative z-10" />
                <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Valor UF Hoy
                </p>
                <p className="font-extrabold text-[color:var(--secondary)]">
                  {ufValue ? ufValue : "Cargando..."}
                </p>
              </div>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-lg font-bold tracking-wide text-[color:var(--secondary)]">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              {[
                ["Inicio", "/"],
                ["Cotizador", "/#cotizador"],
                ["Ejecutivos", "/#equipo"],
                ["Actualidad", "/#actualidad"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="block text-slate-500 transition-colors duration-200 hover:text-primary"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Información de Contacto */}
          <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-lg font-bold tracking-wide text-[color:var(--secondary)]">
              Contacto
            </h4>
            <ul className="w-full space-y-4 text-sm font-medium text-slate-500">
              {/* Alineación condicional para íconos y texto */}
              <li className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-2 md:gap-3 group">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>{dataBusiness.address}</span>
              </li>
              <li className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-3 group">
                <Phone className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                <span>{dataBusiness.phone}</span>
              </li>
              <li className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-3 group">
                <Mail className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                <a
                  href="mailto:contacto@expertoensalud.cl"
                  className="hover:text-primary transition-colors duration-200"
                >
                  {dataBusiness.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Redes Sociales */}
          <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-lg font-bold tracking-wide text-[color:var(--secondary)]">
              Síguenos
            </h4>
            <p className="mb-4 max-w-xs text-sm text-slate-500 md:max-w-none">
              Mantente al tanto de las últimas novedades y actualizaciones.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.filter((social) => social.href).map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Barra inferior: Copyright, Creador y Legales */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-200 pt-8 text-xs font-medium text-slate-500 lg:flex-row">
          <p className="text-center lg:text-left">
            &copy; {currentYear} {dataBusiness.name}, {dataBusiness.rut}. Todos
            los derechos reservados.
          </p>

          {/* Sección de Isapres Premium */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
            <span className="text-slate-500">
              creado por{" "}
              <a
                href="https://smartpro.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-bold transition-colors me-4"
              ></a>
            </span>
            <a
              href="https://smartpro.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity mt-2 sm:mt-0"
            >
              <Image
                src="/images/logo-smartpro.png"
                alt="Logo SmartPro"
                width={150}
                height={28}
                className="h-7 w-auto object-contain"
                style={{ width: "auto" }}
              />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-center">
            <a
              href="/politica-privacidad"
              className="hover:text-primary transition-colors"
            >
              Políticas de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
