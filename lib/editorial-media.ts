import type { ArticleCategory } from "@/lib/articles";

export type EditorialMedia = {
  src: `/${string}`;
  avifSrc: `/${string}`;
  alt: string;
  width: number;
  height: number;
  credit: {
    name: string;
    sourceUrl: `https://${string}`;
  };
};

export const EDITORIAL_MEDIA = {
  garage: {
    src: "/media/hero-garage.webp",
    avifSrc: "/media/hero-garage.avif",
    alt: "Propietario revisando el motor de un coche veterano en un garaje",
    width: 1400,
    height: 1000,
    credit: {
      name: "Dan Crile",
      sourceUrl:
        "https://unsplash.com/photos/a-man-working-on-a-car-engine-in-a-garage-EJr3XkHdBm0",
    },
  },
  dashboard: {
    src: "/media/heritage-dashboard.webp",
    avifSrc: "/media/heritage-dashboard.avif",
    alt: "Salpicadero analógico y volante de un automóvil clásico bien conservado",
    width: 1000,
    height: 700,
    credit: {
      name: "Tanya Barrow",
      sourceUrl:
        "https://unsplash.com/photos/vintage-car-dashboard-with-steering-wheel-and-radio-qojb-Zvcars",
    },
  },
  tire: {
    src: "/media/tire-workshop.webp",
    avifSrc: "/media/tire-workshop.avif",
    alt: "Mecánico revisando un neumático dentro de un taller",
    width: 1000,
    height: 700,
    credit: {
      name: "Frankie Cordoba",
      sourceUrl:
        "https://unsplash.com/photos/mechanic-fixing-a-car-tire-inside-a-garage-Pw31nry006Y",
    },
  },
  battery: {
    src: "/media/classic-battery.webp",
    avifSrc: "/media/classic-battery.avif",
    alt: "Batería de un coche clásico con sus bornes y cableado visibles",
    width: 1000,
    height: 700,
    credit: {
      name: "Wesley Tingey",
      sourceUrl:
        "https://unsplash.com/photos/close-up-of-a-car-battery-with-wires-connected-E4Oz0TZUDe8",
    },
  },
} as const satisfies Record<string, EditorialMedia>;

const batteryArticleSlugs = new Set([
  "bateria-alternador-motor-arranque",
  "comprobar-bateria-alternador-multimetro",
  "como-elegir-bateria-coche",
  "como-elegir-arrancador-bateria",
  "cargador-mantenedor-bateria",
  "bateria-se-descarga-coche-parado",
]);

const tireArticleSlugs = new Set([
  "checklist-itv-coche-antiguo",
  "neumaticos-dot-desgaste-presion",
  "baliza-v16-conectada-certificada",
]);

const dashboardArticleSlugs = new Set([
  "mantenimiento-coche-10-15-20-anos",
  "testigos-coche-significado",
]);

export const MEDIA_BY_CATEGORY: Record<ArticleCategory, EditorialMedia> = {
  problemas: EDITORIAL_MEDIA.garage,
  mantenimiento: EDITORIAL_MEDIA.dashboard,
  "itv-normativa": EDITORIAL_MEDIA.tire,
  herramientas: EDITORIAL_MEDIA.battery,
};

export function getArticleMedia(
  slug: string,
  category?: ArticleCategory,
): EditorialMedia {
  if (batteryArticleSlugs.has(slug)) {
    return EDITORIAL_MEDIA.battery;
  }

  if (tireArticleSlugs.has(slug)) {
    return EDITORIAL_MEDIA.tire;
  }

  if (dashboardArticleSlugs.has(slug)) {
    return EDITORIAL_MEDIA.dashboard;
  }

  return category ? MEDIA_BY_CATEGORY[category] : EDITORIAL_MEDIA.garage;
}
