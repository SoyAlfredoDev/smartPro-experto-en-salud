import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://expertoensalud.cl";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Experto en Salud | Asesoría en Isapres en Chile",
    template: "%s | Experto en Salud",
  },
  description:
    "Asesoría personalizada para elegir, comparar y cambiar tu plan de Isapre en Chile. Optimiza tu cobertura de salud con nuestro equipo experto.",
  keywords: [
    "asesoría en isapres en chile",
    "mejor isapre chile",
    "cambiar isapre chile",
    "cotizar isapre",
    "comparar isapres chile",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: baseUrl,
    siteName: "Experto en Salud",
    title: "Experto en Salud | Asesoría en Isapres en Chile",
    description:
      "Asesoría personalizada para elegir, comparar y cambiar tu plan de Isapre en Chile. Oportunidades de mejora garantizadas.",
    // images: [{ url: "/images/og-image.jpg" }], // Optional placeholder for Future Image
  },
  twitter: {
    card: "summary_large_image",
    title: "Experto en Salud | Asesoría en Isapres en Chile",
    description:
      "Asesoría personalizada para elegir, comparar y cambiar tu plan de Isapre en Chile.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={manrope.variable}>
      <body className="flex min-h-[100dvh] flex-col font-sans antialiased">
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
