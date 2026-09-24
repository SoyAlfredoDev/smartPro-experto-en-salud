"use client";

import { siteConfig } from "@/constants/site";

export function WhatsAppButton() {
  const phoneNumber = siteConfig.contact.phone.replace(/\D/g, "");
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
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 sm:bottom-8 sm:right-8"
      aria-label="Chatear por WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="relative h-7 w-7 fill-current"
      >
        <path d="M20.5 3.5A11 11 0 0 0 2.1 16.8L1 23l6.4-1.1A11 11 0 0 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.8.6.6-3.7-.2-.3A9.1 9.1 0 1 1 12 20.5Zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.4.4 0 0 0 0-.4c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.5 4 5.2 5.2 0 0 0 3.1.7 2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .1-1.2c-.1-.1-.3-.2-.6-.3Z" />
      </svg>
    </a>
  );
}
