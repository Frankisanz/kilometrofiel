import type { MetadataRoute } from "next";
import { articlePath } from "@/lib/article-routing";
import { articles, type ArticleCategory } from "@/lib/articles";
import { longTailPath } from "@/app/components/LongTailDirectory";
import { LONG_TAIL_GUIDES } from "@/lib/long-tail-guides";
import { SITE_URL } from "@/lib/site";
import { getArticleMedia } from "@/lib/editorial-media";
import { getInfographic } from "@/lib/infographics";

const staticRoutes = [
  "",
  "/diagnostico",
  "/mantenimiento",
  "/guias-de-compra",
  "/itv-y-normativa",
  "/herramientas",
  "/herramientas/diagnostico-arranque",
  "/herramientas/planificador",
  "/herramientas/elegir-bateria",
  "/herramientas/calculadora-itv",
  "/respuestas",
  "/recomendaciones",
  "/sobre-nosotros",
  "/contacto",
  "/metodologia",
  "/fuentes",
  "/aviso-legal",
  "/privacidad",
  "/cookies",
] as const;

// Image sitemap entries: our own infographic first, then the hero photo.
function articleImages(slug: string, category: ArticleCategory) {
  const infographic = getInfographic(slug);
  const hero = `${SITE_URL}${getArticleMedia(slug, category).src}`;
  return infographic ? [`${SITE_URL}${infographic.jpgSrc}`, hero] : [hero];
}

function latest(dates: readonly string[]) {
  const newest = [...dates].sort().at(-1) ?? "2026-07-29";
  return new Date(`${newest}T00:00:00.000Z`);
}

// Hubs change whenever one of their guides does, so their lastModified is the
// newest guide date instead of a fixed value that goes stale.
const HUB_CATEGORY: Partial<Record<string, ArticleCategory>> = {
  "/diagnostico": "problemas",
  "/mantenimiento": "mantenimiento",
  "/itv-y-normativa": "itv-normativa",
  "/guias-de-compra": "herramientas",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const originalPublication = new Date("2026-07-29T00:00:00.000Z");
  const toolsUpdated = new Date("2026-10-11T00:00:00.000Z");
  const allDates = [
    ...articles.map((article) => article.updatedAt),
    ...LONG_TAIL_GUIDES.map((guide) => guide.updatedAt),
  ];

  function routeDate(route: string) {
    if (route === "") return latest(allDates);
    if (route === "/respuestas") {
      return latest(LONG_TAIL_GUIDES.map((guide) => guide.updatedAt));
    }
    const category = HUB_CATEGORY[route];
    if (category) {
      return latest(
        articles
          .filter((article) => article.category === category)
          .map((article) => article.updatedAt),
      );
    }
    if (route === "/herramientas" || route === "/herramientas/calculadora-itv") {
      return toolsUpdated;
    }
    return originalPublication;
  }

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: routeDate(route),
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : route.startsWith("/herramientas") ? 0.8 : 0.7,
    })),
    ...articles.map((article) => ({
      url: `${SITE_URL}${articlePath(article)}`,
      lastModified: new Date(`${article.updatedAt}T00:00:00.000Z`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: articleImages(article.slug, article.category),
    })),
    ...LONG_TAIL_GUIDES.map((guide) => ({
      url: `${SITE_URL}${longTailPath(guide)}`,
      lastModified: new Date(`${guide.updatedAt}T00:00:00.000Z`),
      changeFrequency: "monthly" as const,
      priority: 0.75,
      images: [`${SITE_URL}${getArticleMedia(guide.hub.slug).src}`],
    })),
  ];
}
