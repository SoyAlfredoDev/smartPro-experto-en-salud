import { NextResponse } from "next/server";

const DEFAULT_FROM = "Experto en Salud <contacto@expertoensalud.cl>";
const DEFAULT_TO = "contacto@expertoensalud.cl";
const DEFAULT_CC = "premiumisapres@gmail.mail.com";

const PREVISION: Record<string, string> = {
  fonasa: "Fonasa",
  isapre_vida_tres: "Isapre Vida Tres",
  isapre_consalud: "Isapre Consalud",
  isapre_cruz_blanca: "Isapre Cruz Blanca",
  isapre_banmedica: "Isapre Banmédica",
  isapre_colmena: "Isapre Colmena",
  isapre_esencial: "Isapre Esencial",
  isapre_nueva_masvida: "Isapre Nueva Masvida",
  otra: "Otra",
  "sin-prevision": "Sin previsión",
};

const ISAPRE_INTERES: Record<string, string> = {
  isapre_banmedica: "Isapre Banmédica",
  isapre_colmena: "Isapre Colmena",
  isapre_consalud: "Isapre Consalud",
  isapre_cruz_blanca: "Isapre Cruz Blanca",
  isapre_esencial: "Isapre Esencial",
  isapre_nueva_masvida: "Isapre Nueva Masvida",
  isapre_vida_tres: "Isapre Vida Tres",
  sin_preferencia: "Aún no lo sé, quiero una recomendación",
};

const REGION: Record<string, string> = {
  metropolitana: "Región Metropolitana de Santiago",
  magallanes: "Magallanes y la Antártica Chilena",
  "arica-parinacota": "Arica y Parinacota",
  tarapaca: "Tarapacá",
  antofagasta: "Antofagasta",
  atacama: "Atacama",
  coquimbo: "Coquimbo",
  valparaiso: "Valparaíso",
  ohiggins: "O'Higgins",
  maule: "Maule",
  nuble: "Ñuble",
  biobio: "Biobío",
  araucania: "La Araucanía",
  "los-rios": "Los Ríos",
  "los-lagos": "Los Lagos",
  aysen: "Aysén",
};

const CARGAS: Record<string, string> = {
  "0": "Sin cargas",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5+": "5 o más",
};

const TIPO_CONTACTO: Record<string, string> = {
  telefono: "Teléfono",
  correo: "Correo electrónico",
  video_llamada: "Video llamada",
};

const COMENTARIOS: Record<string, string> = {
  aumento_excesivo: "Aumento excesivo en el valor del plan",
  mejores_coberturas: "Mejores coberturas en otra isapre",
  mala_experiencia: "Mala experiencia con el servicio al cliente",
  recomendacion: "Recomendación médica o familiar",
  sumar_cargas: "Necesidad de sumar cargas familiares",
};

type Cotizacion = {
  nombreCompleto: string;
  rut: string;
  edad: string;
  correo: string;
  celular: string;
  previsionActual: string;
  isapreInteres: string;
  ufActual: string;
  regionResidencia: string;
  cargas: string;
  rentaImponible: string;
  comentarios: string;
  tipoContacto: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function asText(value: unknown, max = 300) {
  if (typeof value !== "string" && typeof value !== "number") return "";
  return String(value).trim().slice(0, max);
}

function labelOf(map: Record<string, string>, value: string) {
  return map[value] || value || "—";
}

function formatMoney(value: string) {
  const amount = Number(value);
  if (!value || !Number.isFinite(amount)) return value || "—";
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(amount);
}

function parseAddressList(value: string | undefined, fallback: string) {
  const raw = value?.trim();
  if (!raw) return [fallback];
  const list = raw
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  return list.length > 0 ? list : [fallback];
}

function fromAddress() {
  const raw = process.env.EMAIL_FROM?.trim() || DEFAULT_FROM;
  if (raw.includes("<") && raw.includes(">")) return raw;
  return `Experto en Salud <${raw}>`;
}

function replyAddress() {
  const match = fromAddress().match(/<([^>]+)>/);
  return match?.[1] || DEFAULT_TO;
}

async function sendEmail(payload: {
  from: string;
  to: string[];
  cc?: string[];
  reply_to: string;
  subject: string;
  html: string;
  text: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("Falta configurar RESEND_API_KEY");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => ({}))) as {
    message?: string;
  };

  if (!response.ok) {
    console.error("Resend rechazo el correo:", data.message || response.status);
    throw new Error("No se pudo enviar el correo");
  }
}

function internalEmail(data: Cotizacion) {
  const rows: Array<[string, string]> = [
    ["Nombre", data.nombreCompleto],
    ["RUT", data.rut],
    ["Edad", data.edad],
    ["Correo", data.correo],
    ["Celular", data.celular],
    ["Previsión actual", labelOf(PREVISION, data.previsionActual)],
    ["Isapre de interés", labelOf(ISAPRE_INTERES, data.isapreInteres)],
    ["UF actuales", data.ufActual ? `${data.ufActual} UF` : "No indicado"],
    ["Región", labelOf(REGION, data.regionResidencia)],
    ["Cargas", labelOf(CARGAS, data.cargas)],
    ["Renta imponible", formatMoney(data.rentaImponible)],
    ["Prefiere contacto por", labelOf(TIPO_CONTACTO, data.tipoContacto)],
    ["Motivo", labelOf(COMENTARIOS, data.comentarios)],
  ];

  const htmlRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 12px;border-bottom:1px solid #e6edf5;color:#5b6b7c;font-size:14px;width:38%;">${escapeHtml(label)}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #e6edf5;color:#1f2a37;font-size:14px;font-weight:600;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");

  const html = `
    <div style="margin:0;padding:24px;background:#f4f7fb;font-family:Arial,sans-serif;">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;">
        <div style="background:#2f5d8c;padding:24px 28px;color:#ffffff;">
          <p style="margin:0;font-size:13px;letter-spacing:.04em;text-transform:uppercase;opacity:.85;">Experto en Salud</p>
          <h1 style="margin:8px 0 0;font-size:22px;line-height:1.3;">Nueva solicitud de cotización</h1>
        </div>
        <div style="padding:8px 16px 20px;">
          <table style="width:100%;border-collapse:collapse;">${htmlRows}</table>
        </div>
      </div>
    </div>`;

  const text = [
    "Nueva solicitud de cotización",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
  ].join("\n");

  return {
    subject: `Nueva solicitud de cotización — ${data.nombreCompleto}`,
    html,
    text,
  };
}

function confirmationEmail(data: Cotizacion) {
  const contacto = labelOf(TIPO_CONTACTO, data.tipoContacto);
  const html = `
    <div style="margin:0;padding:24px;background:#f4f7fb;font-family:Arial,sans-serif;">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;">
        <div style="background:#2f5d8c;padding:24px 28px;color:#ffffff;">
          <p style="margin:0;font-size:13px;letter-spacing:.04em;text-transform:uppercase;opacity:.85;">Experto en Salud</p>
          <h1 style="margin:8px 0 0;font-size:22px;line-height:1.3;">Recibimos tu solicitud</h1>
        </div>
        <div style="padding:28px;color:#1f2a37;font-size:15px;line-height:1.6;">
          <p style="margin:0 0 16px;">Hola ${escapeHtml(data.nombreCompleto)},</p>
          <p style="margin:0 0 16px;">Recibimos tu solicitud de cotización. Un ejecutivo revisará tu información y te contactará por ${escapeHtml(contacto)}.</p>
          <p style="margin:0;">Si necesitas algo antes, escríbenos a <a href="mailto:contacto@expertoensalud.cl" style="color:#2f5d8c;">contacto@expertoensalud.cl</a> o al +56 9 6446 7389.</p>
        </div>
      </div>
    </div>`;

  const text = [
    `Hola ${data.nombreCompleto},`,
    "",
    "Recibimos tu solicitud de cotización. Un ejecutivo revisará tu información y te contactará por " +
      contacto +
      ".",
    "",
    "Si necesitas algo antes, escríbenos a contacto@expertoensalud.cl o al +56 9 6446 7389.",
    "",
    "Experto en Salud",
  ].join("\n");

  return {
    subject: "Recibimos tu solicitud de cotización",
    html,
    text,
  };
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "La solicitud no tiene un formato válido." },
      { status: 400 },
    );
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { error: "La solicitud no tiene un formato válido." },
      { status: 400 },
    );
  }

  const input = body as Record<string, unknown>;
  const data: Cotizacion = {
    nombreCompleto: asText(input.nombreCompleto, 120),
    rut: asText(input.rut, 20),
    edad: asText(input.edad, 3),
    correo: asText(input.correo, 160).toLowerCase(),
    celular: asText(input.celular, 30),
    previsionActual: asText(input.previsionActual, 80),
    isapreInteres: asText(input.isapreInteres, 80),
    ufActual: asText(input.ufActual, 20),
    regionResidencia: asText(input.regionResidencia, 80),
    cargas: asText(input.cargas, 10),
    rentaImponible: asText(input.rentaImponible, 20),
    comentarios: asText(input.comentarios, 80),
    tipoContacto: asText(input.tipo_contacto, 40),
  };

  const missing =
    !data.nombreCompleto ||
    !data.rut ||
    !data.edad ||
    !data.correo ||
    !data.celular ||
    !data.previsionActual ||
    !ISAPRE_INTERES[data.isapreInteres] ||
    !data.regionResidencia ||
    !data.cargas ||
    !data.rentaImponible ||
    !data.comentarios ||
    !data.tipoContacto ||
    input.terminos !== true;

  if (missing || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.correo)) {
    return NextResponse.json(
      { error: "Revisa los datos del formulario e inténtalo nuevamente." },
      { status: 400 },
    );
  }

  const to = parseAddressList(process.env.EMAIL_TO, DEFAULT_TO);
  const cc = parseAddressList(process.env.EMAIL_CC, DEFAULT_CC);
  const from = fromAddress();
  const internal = internalEmail(data);
  const confirmation = confirmationEmail(data);

  try {
    await sendEmail({
      from,
      to,
      cc,
      reply_to: data.correo,
      subject: internal.subject,
      html: internal.html,
      text: internal.text,
    });

    await sendEmail({
      from,
      to: [data.correo],
      reply_to: replyAddress(),
      subject: confirmation.subject,
      html: confirmation.html,
      text: confirmation.text,
    });
  } catch (error) {
    console.error("Error enviando correos de cotización:", error);
    return NextResponse.json(
      { error: "No se pudo enviar la solicitud. Intenta nuevamente." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
