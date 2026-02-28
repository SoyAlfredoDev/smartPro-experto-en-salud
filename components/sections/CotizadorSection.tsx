"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { sendContactEmail } from "../../lib/email";

// --- Componentes Reutilizables de UI ---

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
}) => (
  <div className="relative mb-4">
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      placeholder={label}
      className="
        peer w-full rounded-xl border border-white/25 bg-white/95
        px-3 pb-2 pt-5 text-[15px] text-slate-900 placeholder-transparent
        shadow-sm outline-none transition
        focus:border-transparent focus:ring-4 focus:ring-[color:var(--accent)]/25
      "
      required={required}
    />
    <label
      htmlFor={name}
      className="
        pointer-events-none absolute left-3 top-1.5
        text-xs text-slate-600 transition-all
        peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500
        peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[color:var(--primary)]
      "
    >
      {label} {required ? "*" : ""}
    </label>
  </div>
);

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  options: { value: string; label: string }[];
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  value,
  onChange,
  required,
  options,
}) => (
  <div className="relative mb-4">
    <select
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className="
        peer w-full appearance-none rounded-xl border border-white/25 bg-white/95
        px-3 pb-2 pt-5 text-[15px] text-slate-900
        shadow-sm outline-none transition
        focus:border-transparent focus:ring-4 focus:ring-[color:var(--accent)]/25
      "
      required={required}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
        backgroundPosition: `right 1rem center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `1.5em 1.5em`,
      }}
    >
      <option value="" disabled hidden></option>
      {options.map((opt, index) => (
        <option key={index} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>

    <label
      htmlFor={name}
      className={`pointer-events-none absolute left-3 transition-all ${
        value
          ? "top-1.5 text-xs text-slate-600"
          : "top-3.5 text-base text-slate-500"
      } peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[color:var(--primary)]`}
    >
      {label} {required ? "*" : ""}
    </label>
  </div>
);

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`
      w-full rounded-xl px-6 py-3.5
      bg-[color:var(--accent)] text-white font-semibold
      shadow-lg transition
      hover:brightness-95
      focus:outline-none focus:ring-4 focus:ring-[color:var(--accent)]/30
      ${className}
    `}
  >
    {children}
  </button>
);

interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`
      rounded-xl px-6 py-3.5
      bg-white/90 text-slate-700 font-semibold
      ring-1 ring-slate-200/70 shadow-sm transition
      hover:bg-white
      focus:outline-none focus:ring-4 focus:ring-white/30
      ${className}
    `}
  >
    {children}
  </button>
);

// --- Componente del Indicador de Pasos ---
interface StepIndicatorProps {
  currentStep: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
  const steps = [
    { id: 1, label: "Datos Personales" },
    { id: 2, label: "Cotizar Isapre" },
    { id: 3, label: "Enviar" },
  ];

  return (
    <div className="relative mb-8 rounded-2xl bg-white/10 px-3 py-4 ring-1 ring-white/10">
      <div className="absolute left-6 right-6 top-7 h-[2px] bg-white/15" />
      <div
        className="absolute left-6 top-7 h-[2px] bg-[color:var(--accent)] transition-all duration-500 ease-in-out"
        style={{
          width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
          maxWidth: "calc(100% - 3rem)",
        }}
      />

      <div className="flex justify-between">
        {steps.map((step) => {
          const isActive = currentStep >= step.id;
          const isCurrent = currentStep === step.id;

          return (
            <div key={step.id} className="z-10 flex w-24 flex-col items-center">
              <div
                className={[
                  "mb-2 flex h-9 w-9 items-center justify-center rounded-full border-2 font-bold transition",
                  isActive
                    ? "border-white bg-white text-[color:var(--primary)]"
                    : "border-white/25 bg-[color:var(--primary)]/20 text-white/60",
                  isCurrent
                    ? "ring-4 ring-[color:var(--accent)]/25 scale-[1.03]"
                    : "",
                ].join(" ")}
              >
                {step.id}
              </div>
              <span
                className={[
                  "text-[11px] font-medium leading-tight transition",
                  isActive ? "text-white" : "text-white/60",
                ].join(" ")}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL COTIZADOR ---
const Cotizador = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  interface FormData {
    nombreCompleto: string;
    rut: string;
    edad: number | string;
    correo: string;
    celular: string;
    previsionActual: string;
    ufActual: string;
    regionResidencia: string;
    cargas: string;
    edadCargas: string;
    rentaImponible: string;
    comentarios: string;
    tipo_contacto: string;
  }

  const initialFormData: FormData = {
    nombreCompleto: "",
    rut: "",
    edad: "",
    correo: "",
    celular: "",
    previsionActual: "",
    ufActual: "",
    regionResidencia: "",
    cargas: "",
    edadCargas: "",
    rentaImponible: "",
    comentarios: "",
    tipo_contacto: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsSending(true);
      await sendContactEmail(formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error enviando correo:", error);
      alert("No se pudo enviar el formulario. Intenta nuevamente.");
    } finally {
      setIsSending(false);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setCurrentStep(1);
    setIsSubmitted(false);
  };

  const variants = {
    enter: (direction: number) => ({ x: direction > 0 ? 20 : -20, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction < 0 ? 20 : -20, opacity: 0 }),
  };

  const [direction, setDirection] = useState<number>(0);
  const handleNext = (e: React.FormEvent) => {
    setDirection(1);
    nextStep(e);
  };
  const handlePrev = () => {
    setDirection(-1);
    prevStep();
  };

  return (
    <section
      id="cotizador"
      className="
        relative w-full
        bg-[url('/images/bg-cotizador-section.jpeg')] bg-cover bg-center bg-no-repeat
      "
    >
      {/* overlay (mejor contraste) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/20 to-black/10" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Layout: en desktop/med el card va a la derecha */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Columna izquierda (espacio / texto opcional) */}
          <div className="hidden lg:block">
            <h2 className="text-4xl font-extrabold tracking-wide text-white lg:text-5xl">
              Cotiza en minutos
            </h2>
            <p className="mt-4 max-w-xl text-lg text-white/80">
              Completa el formulario y un ejecutivo te contactará con las
              mejores opciones según tu perfil.
            </p>
            <ul className="mt-6 space-y-2 text-white/85">
              <li>• 100% online</li>
              <li>• Respuesta rápida</li>
              <li>• Asesoría sin costo</li>
            </ul>
          </div>

          {/* Columna derecha: Form */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:justify-self-end w-full"
          >
            <div
              className="
                w-full max-w-xl
                rounded-[1.75rem]
                bg-[color:var(--primary)]/95
                p-6 sm:p-8
                shadow-2xl ring-1 ring-white/15
                backdrop-blur
              "
            >
              {!isSubmitted ? (
                <>
                  <div className="mb-6 text-center">
                    <div className="inline-flex flex-col items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                        Cotizador digital
                      </span>
                      <div className="h-1 w-20 rounded-full bg-[color:var(--accent)]" />
                    </div>
                  </div>

                  <StepIndicator currentStep={currentStep} />

                  <form
                    onSubmit={currentStep === 3 ? handleSubmit : handleNext}
                  >
                    <div className="min-h-[320px]">
                      <AnimatePresence mode="wait" custom={direction}>
                        {currentStep === 1 && (
                          <motion.div
                            key="step1"
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                              type: "tween",
                              duration: 0.45,
                              ease: "easeOut",
                            }}
                          >
                            <div className="space-y-3">
                              <InputField
                                label="Nombre completo"
                                name="nombreCompleto"
                                value={formData.nombreCompleto}
                                onChange={handleChange}
                                required
                              />
                              <InputField
                                label="RUT"
                                name="rut"
                                value={formData.rut}
                                onChange={handleChange}
                                required
                              />
                              <InputField
                                label="Edad"
                                name="edad"
                                value={formData.edad.toString()}
                                onChange={handleChange}
                                required
                                type="number"
                              />
                              <InputField
                                label="Correo"
                                name="correo"
                                type="email"
                                value={formData.correo}
                                onChange={handleChange}
                                required
                              />
                              <InputField
                                label="Celular"
                                name="celular"
                                type="tel"
                                value={formData.celular}
                                onChange={handleChange}
                                required
                              />
                            </div>

                            <div className="mt-8">
                              <PrimaryButton type="submit">
                                Siguiente
                              </PrimaryButton>
                            </div>
                          </motion.div>
                        )}

                        {currentStep === 2 && (
                          <motion.div
                            key="step2"
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                              type: "tween",
                              duration: 0.45,
                              ease: "easeOut",
                            }}
                          >
                            <div className="space-y-3">
                              <SelectField
                                label="Selecciona previsión actual"
                                name="previsionActual"
                                value={formData.previsionActual}
                                onChange={handleChange}
                                required
                                options={[
                                  { value: "fonasa", label: "Fonasa" },
                                  {
                                    value: "isapre_vida_tres",
                                    label: "Isapre Vida Tres",
                                  },
                                  {
                                    value: "isapre_consalud",
                                    label: "Isapre Consalud",
                                  },
                                  {
                                    value: "isapre_cruz_blanca",
                                    label: "Isapre Cruz Blanca",
                                  },
                                  {
                                    value: "isapre_banmedica",
                                    label: "Isapre Banmédica",
                                  },
                                  {
                                    value: "isapre_colmena",
                                    label: "Isapre Colmena",
                                  },
                                  {
                                    value: "isapre_esencial",
                                    label: "Isapre Esencial",
                                  },
                                  {
                                    value: "isapre_nueva_masvida",
                                    label: "Isapre Nueva Masvida",
                                  },
                                  { value: "otra", label: "Otra" },
                                  {
                                    value: "sin-prevision",
                                    label: "Sin previsión",
                                  },
                                ]}
                              />

                              <InputField
                                label="¿Cuántas UF pagas actualmente?"
                                name="ufActual"
                                type="number"
                                value={formData.ufActual}
                                onChange={handleChange}
                              />

                              <SelectField
                                label="Región de Residencia"
                                name="regionResidencia"
                                value={formData.regionResidencia}
                                onChange={handleChange}
                                required
                                options={[
                                  {
                                    value: "metropolitana",
                                    label: "Región Metropolitana de Santiago",
                                  },
                                  {
                                    value: "magallanes",
                                    label: "Magallanes y la Antártica Chilena",
                                  },
                                  {
                                    value: "arica-parinacota",
                                    label: "Arica y Parinacota",
                                  },
                                  { value: "tarapaca", label: "Tarapacá" },
                                  {
                                    value: "antofagasta",
                                    label: "Antofagasta",
                                  },
                                  { value: "atacama", label: "Atacama" },
                                  { value: "coquimbo", label: "Coquimbo" },
                                  { value: "valparaiso", label: "Valparaíso" },
                                  { value: "ohiggins", label: "O'Higgins" },
                                  { value: "maule", label: "Maule" },
                                  { value: "nuble", label: "Ñuble" },
                                  { value: "biobio", label: "Biobío" },
                                  { value: "araucania", label: "La Araucanía" },
                                  { value: "los-rios", label: "Los Ríos" },
                                  { value: "los-lagos", label: "Los Lagos" },
                                  { value: "aysen", label: "Aysén" },
                                ]}
                              />

                              <SelectField
                                label="Cargas Médicas / Legales"
                                name="cargas"
                                value={formData.cargas}
                                onChange={handleChange}
                                required
                                options={[
                                  { value: "0", label: "Sin cargas" },
                                  { value: "1", label: "1" },
                                  { value: "2", label: "2" },
                                  { value: "3", label: "3" },
                                  { value: "4", label: "4" },
                                  { value: "5+", label: "5 o más" },
                                ]}
                              />

                              <InputField
                                label="Renta imponible"
                                name="rentaImponible"
                                type="number"
                                value={formData.rentaImponible}
                                onChange={handleChange}
                                required
                              />
                            </div>

                            <div className="mt-8 flex gap-3">
                              <SecondaryButton
                                onClick={handlePrev}
                                className="flex-1"
                              >
                                Volver
                              </SecondaryButton>
                              <PrimaryButton type="submit" className="flex-1">
                                Siguiente
                              </PrimaryButton>
                            </div>
                          </motion.div>
                        )}

                        {currentStep === 3 && (
                          <motion.div
                            key="step3"
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                              type: "tween",
                              duration: 0.45,
                              ease: "easeOut",
                            }}
                          >
                            <div className="space-y-3 py-2">
                              <SelectField
                                label="Tipo de contacto"
                                name="tipo_contacto"
                                value={formData.tipo_contacto}
                                onChange={handleChange}
                                required
                                options={[
                                  { value: "telefono", label: "Teléfono" },
                                  {
                                    value: "correo",
                                    label: "Correo Electrónico",
                                  },
                                  {
                                    value: "video_llamada",
                                    label:
                                      "Video Llamada (te enviaremos un mail para confirmar)",
                                  },
                                ]}
                              />

                              <SelectField
                                label="Comentarios"
                                name="comentarios"
                                value={formData.comentarios}
                                onChange={handleChange}
                                required
                                options={[
                                  {
                                    value: "aumento_excesivo",
                                    label:
                                      "Aumento excesivo en el valor del plan",
                                  },
                                  {
                                    value: "mejores_coberturas",
                                    label: "Mejores coberturas en otra isapre",
                                  },
                                  {
                                    value: "mala_experiencia",
                                    label:
                                      "Mala experiencia con el servicio al cliente",
                                  },
                                  {
                                    value: "recomendacion",
                                    label: "Recomendación médica o familiar",
                                  },
                                  {
                                    value: "sumar_cargas",
                                    label:
                                      "Necesidad de sumar cargas familiares",
                                  },
                                ]}
                              />
                            </div>

                            <div className="mt-8 flex gap-3">
                              <SecondaryButton
                                onClick={handlePrev}
                                className="flex-1"
                              >
                                Volver
                              </SecondaryButton>
                              <PrimaryButton type="submit" className="flex-1">
                                {isSending ? "Enviando..." : "Cotizar"}
                              </PrimaryButton>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="py-10 text-center"
                >
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
                    <CheckCircle className="h-10 w-10 text-emerald-600" />
                  </div>

                  <h2 className="mb-2 text-2xl font-bold text-white">
                    ¡Solicitud Enviada!
                  </h2>

                  <p className="mx-auto mb-8 max-w-md text-white/80">
                    Un ejecutivo analizará tu perfil y te contactará con las
                    mejores opciones.
                  </p>

                  <SecondaryButton onClick={resetForm} className="w-full">
                    Nueva Cotización
                  </SecondaryButton>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Cotizador;
