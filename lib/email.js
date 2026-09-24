/**
 * Envía la cotización al servidor. El correo interno y la confirmación
 * al cliente se despachan desde /api/cotizacion.
 * @param {Object} formData
 */
export const sendContactEmail = async (formData) => {
  const response = await fetch("/api/cotizacion", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nombreCompleto: formData.nombreCompleto,
      rut: formData.rut,
      edad: formData.edad,
      correo: formData.correo,
      celular: formData.celular,
      previsionActual: formData.previsionActual,
      isapreInteres: formData.isapreInteres,
      ufActual: formData.ufActual,
      regionResidencia: formData.regionResidencia,
      cargas: formData.cargas,
      rentaImponible: formData.rentaImponible,
      comentarios: formData.comentarios,
      tipo_contacto: formData.tipo_contacto,
      terminos: formData.terminos,
    }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(
      data.error || "No se pudo enviar el formulario. Intenta nuevamente.",
    );
  }

  return data;
};
