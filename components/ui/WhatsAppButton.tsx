"use client";

import React from "react";
import { Send } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "56900000000"; // Reemplazar con el número real
  const defaultMessage =
    "Hola! Me gustaría cotizar y comparar planes de Isapre.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage,
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:bg-[#20bd5a] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 sm:bottom-8 sm:right-8"
      aria-label="Chatear por WhatsApp"
    >
      <Send className="h-6 w-6 ml-1 mb-1" />
    </a>
  );
}
