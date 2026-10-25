import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";

// Stable identifiers so every page points to the same Organization and
// WebSite entities instead of repeating loose copies. Search engines and AI
// answer engines merge nodes that share an @id.
export const ORGANIZATION_ID = `${SITE_URL}/#organizacion`;
export const WEBSITE_ID = `${SITE_URL}/#web`;

export const ORGANIZATION_REF = { "@id": ORGANIZATION_ID } as const;

export const organizationSchema = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: SITE_NAME,
  url: SITE_URL,
  slogan: SITE_TAGLINE,
  description:
    "Proyecto editorial independiente con guías para diagnosticar síntomas, mantener coches de más de diez años y cumplir la ITV y la normativa española.",
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/icons/icon-512.png`,
    width: 512,
    height: 512,
  },
  areaServed: { "@type": "Country", name: "España" },
  knowsLanguage: "es-ES",
  knowsAbout: [
    "Mantenimiento de coches antiguos",
    "Diagnóstico de averías por síntomas",
    "Inspección Técnica de Vehículos (ITV)",
    "Baterías y sistemas de arranque",
    "Distintivo ambiental de la DGT",
  ],
  publishingPrinciples: `${SITE_URL}/metodologia`,
  ethicsPolicy: `${SITE_URL}/metodologia`,
  correctionsPolicy: `${SITE_URL}/metodologia`,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "editorial",
    url: `${SITE_URL}/contacto`,
    availableLanguage: "es",
  },
} as const;

export const websiteSchema = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_TAGLINE,
  inLanguage: "es-ES",
  publisher: ORGANIZATION_REF,
} as const;

type CitedSource = { name: string; url: string };

// Article fields shared by guides and specific answers: authorship pointing
// to the Organization node, the consulted sources as citations and the
// direct-answer block marked as speakable for voice and AI summaries.
export function editorialArticleFields(sources: readonly CitedSource[]) {
  return {
    author: {
      ...ORGANIZATION_REF,
      "@type": "Organization",
      name: `Equipo editorial de ${SITE_NAME}`,
      url: `${SITE_URL}/sobre-nosotros`,
    },
    publisher: ORGANIZATION_REF,
    isPartOf: { "@id": WEBSITE_ID },
    isAccessibleForFree: true,
    citation: sources.map((source) => ({
      "@type": "CreativeWork",
      name: source.name,
      url: source.url,
    })),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".answer-box"],
    },
  };
}

export function collectionPageSchema({
  name,
  description,
  path,
  items,
}: {
  name: string;
  description: string;
  path: `/${string}`;
  items: readonly { name: string; path: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: `${SITE_URL}${path}`,
    inLanguage: "es-ES",
    isPartOf: { "@id": WEBSITE_ID },
    publisher: ORGANIZATION_REF,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: `${SITE_URL}${item.path}`,
      })),
    },
  };
}
