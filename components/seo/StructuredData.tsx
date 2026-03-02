export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Experto en Salud",
    image: "https://expertoensalud.cl/logo.png",
    "@id": "https://expertoensalud.cl",
    url: "https://expertoensalud.cl",
    telephone: "+56900000000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Vicuña Mackenna 920, dpto 726",
      addressLocality: "Ñuñoa",
      addressRegion: "Santiago",
      postalCode: "7750000",
      addressCountry: "CL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.4542, // Approximate for Ñuñoa center
      longitude: -70.6276, // Approximate for Ñuñoa center
    },
    areaServed: {
      "@type": "Country",
      name: "Chile",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      // "https://www.facebook.com/expertoensalud", // Add social profiles when available
      // "https://www.instagram.com/expertoensalud"
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Experto en Salud",
    url: "https://expertoensalud.cl",
    logo: "https://expertoensalud.cl/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+56900000000",
      contactType: "customer service",
      areaServed: "CL",
      availableLanguage: "Spanish",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
