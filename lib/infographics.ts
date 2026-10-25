import { INFOGRAPHIC_ENTRIES } from "@/lib/infographics.generated";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { ORGANIZATION_REF } from "@/lib/structured-data";
import type { EditorialMedia } from "@/lib/editorial-media";

// Original infographics (one per guide that has one). They are our own work,
// so unlike the stock hero photos they can carry full license metadata and
// give image and multimodal search something unique to index.
export type Infographic = EditorialMedia & {
  slug: string;
  title: string;
  jpgSrc: `/${string}`;
};

const WIDTH = 1200;
const HEIGHT = 675;

const BY_SLUG = new Map<string, Infographic>(
  INFOGRAPHIC_ENTRIES.map((entry) => [
    entry.slug,
    {
      slug: entry.slug,
      title: entry.title,
      alt: entry.alt,
      src: `/media/infografias/${entry.slug}.webp`,
      avifSrc: `/media/infografias/${entry.slug}.avif`,
      jpgSrc: `/media/infografias/${entry.slug}.jpg`,
      width: WIDTH,
      height: HEIGHT,
      credit: { name: SITE_NAME, sourceUrl: `${SITE_URL}/sobre-nosotros` as const },
    },
  ]),
);

export function getInfographic(slug: string): Infographic | undefined {
  return BY_SLUG.get(slug);
}

export function infographicImageObject(info: Infographic, pagePath: string) {
  return {
    "@type": "ImageObject",
    "@id": `${SITE_URL}${pagePath}#infografia`,
    contentUrl: `${SITE_URL}${info.jpgSrc}`,
    url: `${SITE_URL}${info.jpgSrc}`,
    width: info.width,
    height: info.height,
    name: info.title,
    caption: info.alt,
    description: info.alt,
    inLanguage: "es-ES",
    encodingFormat: "image/jpeg",
    creator: ORGANIZATION_REF,
    creditText: SITE_NAME,
    copyrightHolder: ORGANIZATION_REF,
    copyrightNotice: `© ${SITE_NAME}`,
    license: `${SITE_URL}/aviso-legal`,
    acquireLicensePage: `${SITE_URL}/contacto`,
  };
}

// Stock hero photos: credit the photographer and the Unsplash license.
export function photoImageObject(media: EditorialMedia) {
  return {
    "@type": "ImageObject",
    contentUrl: `${SITE_URL}${media.src}`,
    url: `${SITE_URL}${media.src}`,
    width: media.width,
    height: media.height,
    caption: media.alt,
    creditText: `${media.credit.name} / Unsplash`,
    creator: { "@type": "Person", name: media.credit.name, url: media.credit.sourceUrl },
    license: "https://unsplash.com/license",
    acquireLicensePage: media.credit.sourceUrl,
  };
}
