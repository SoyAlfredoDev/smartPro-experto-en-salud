import Link from "next/link";
import { Button } from "../ui/Button";
import { HeartPulse } from "lucide-react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold tracking-tighter text-primary"
        >
          <HeartPulse className="h-8 w-8 text-accent" />
          Experto en Salud
        </Link>
        <div className="hidden md:flex gap-6 items-center font-medium">
          <Link
            href="#servicios"
            className="text-secondary hover:text-primary transition-colors"
          >
            Servicios
          </Link>
          <Link
            href="#agendar"
            className="text-secondary hover:text-primary transition-colors"
          >
            Agendar
          </Link>
          <Link
            href="#contacto"
            className="text-secondary hover:text-primary transition-colors"
          >
            Contacto
          </Link>
          <Link href="#agendar">
            <Button variant="primary">Agendar cita</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
