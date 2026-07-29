export type NavigationItem = {
  label: string;
  href: "/" | `/${string}`;
};

export type EditorialPrinciple = {
  title: string;
  description: string;
};

export type OfficialSource = {
  name: string;
  url: `https://${string}`;
  scope: string;
};

export type LegalOwner = {
  name: string;
  taxId: string;
  email: string;
  streetAddress: string;
  postalCode: string;
  locality: string;
  province: string;
  country: string;
};

export const SITE_NAME = "Kilómetro Fiel";
export const SITE_TAGLINE = "Cuida el coche que ya tienes.";
export const SITE_URL = "https://kilometrofiel.es";
export const SITE_LOCALE = "es-ES";

export const MAIN_NAVIGATION = [
  { label: "Inicio", href: "/" },
  { label: "Mantenimiento", href: "/mantenimiento" },
  { label: "Diagnóstico", href: "/diagnostico" },
  { label: "Guías de compra", href: "/guias-de-compra" },
  { label: "Herramientas", href: "/herramientas" },
  { label: "Metodología", href: "/metodologia" },
] as const satisfies readonly NavigationItem[];

export const LEGAL_OWNER: LegalOwner = {
  name: "Francisco Javier Sanchez Fuentes",
  taxId: "15514272J",
  email: "Amargued@gmail.com",
  streetAddress: "Calle Andalucía, n.º 5, 1.º D",
  postalCode: "23400",
  locality: "Úbeda",
  province: "Jaén",
  country: "España",
};

export const LEGAL_ADDRESS =
  `${LEGAL_OWNER.streetAddress}, ${LEGAL_OWNER.postalCode} ` +
  `${LEGAL_OWNER.locality} (${LEGAL_OWNER.province}), ${LEGAL_OWNER.country}`;

export const EDITORIAL_PRINCIPLES = [
  {
    title: "Utilidad antes que alarma",
    description:
      "Explicamos síntomas, comprobaciones y decisiones en un orden práctico, sin convertir una posibilidad en un diagnóstico seguro ni exagerar riesgos para provocar una compra.",
  },
  {
    title: "Fuentes identificables y contenido actualizado",
    description:
      "Las obligaciones legales, los intervalos y los procedimientos se contrastan con fuentes oficiales, manuales del fabricante y documentación técnica, indicando fecha y límites cuando puedan cambiar.",
  },
  {
    title: "Compatibilidad antes que recomendación",
    description:
      "Una herramienta solo se recomienda cuando se han explicado los vehículos, sistemas, tensiones, protocolos o condiciones de uso con los que puede ser compatible.",
  },
  {
    title: "Seguridad y límites claros",
    description:
      "Diferenciamos las comprobaciones domésticas razonables de los trabajos que requieren elevación segura, formación, equipos de protección o intervención profesional.",
  },
  {
    title: "Experiencia demostrable",
    description:
      "No afirmamos haber probado un producto, medido un resultado o reparado una avería si no existe una prueba propia documentada que lo respalde.",
  },
  {
    title: "Independencia comercial",
    description:
      "La posible remuneración de un enlace nunca determina el diagnóstico, la valoración ni el orden de las opciones; también explicamos cuándo no hace falta comprar.",
  },
] as const satisfies readonly EditorialPrinciple[];

export const OFFICIAL_BASE_SOURCES = [
  {
    name: "Dirección General de Tráfico (DGT)",
    url: "https://www.dgt.es/",
    scope:
      "Seguridad vial, señalización, equipamiento obligatorio, distintivos y trámites relacionados con el vehículo.",
  },
  {
    name: "Boletín Oficial del Estado (BOE)",
    url: "https://www.boe.es/",
    scope:
      "Texto consolidado de leyes, reglamentos y disposiciones aplicables en España.",
  },
  {
    name: "Ministerio de Industria y Turismo — ITV",
    url: "https://industria.gob.es/Calidad-Industrial/vehiculos/Paginas/inspeccion-tecnica-vehiculos.aspx",
    scope:
      "Manual de procedimiento de inspección, reformas, defectos y documentación técnica de la ITV.",
  },
  {
    name: "EUR-Lex",
    url: "https://eur-lex.europa.eu/",
    scope:
      "Reglamentos y directivas de la Unión Europea sobre homologación, emisiones, seguridad y componentes de vehículos.",
  },
  {
    name: "Safety Gate de la Comisión Europea",
    url: "https://ec.europa.eu/safety-gate-alerts/screen/webReport",
    scope:
      "Alertas oficiales y retiradas de productos de consumo que puedan afectar a herramientas o accesorios.",
  },
] as const satisfies readonly OfficialSource[];

export function absoluteUrl(path: "/" | `/${string}` = "/") {
  return new URL(path, SITE_URL).toString();
}
