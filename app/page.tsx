import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import CotizadorSection from "@/components/sections/CotizadorSection";
import { HeroAdvisorySection } from "@/components/sections/HeroAdvisorySection";
import StepsSection from "@/components/sections/StepSection";
import CalendlySection from "@/components/sections/CalendlySection";
import ActualidadSection from "@/components/sections/ActualidadSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <HeroAdvisorySection />
        <CotizadorSection />
        <StepsSection />
        <CalendlySection />
        <ActualidadSection />
      </main>
      <Footer />
    </>
  );
}
