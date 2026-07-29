import type { MetadataRoute } from "next";
import { articlePath } from "@/lib/article-routing";
import { articles } from "@/lib/articles";
import { longTailPath } from "@/app/components/LongTailDirectory";
import { LONG_TAIL_GUIDES } from "@/lib/long-tail-guides";
import { SITE_URL } from "@/lib/site";

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
  "/respuestas",
  "/recomendaciones",
  "/metodologia",
  "/fuentes",
  "/aviso-legal",
  "/privacidad",
  "/cookies",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-29T00:00:00.000Z");

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified,
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : route.startsWith("/herramientas") ? 0.8 : 0.7,
    })),
    ...articles.map((article) => ({
      url: `${SITE_URL}${articlePath(article)}`,
      lastModified: new Date(`${article.updatedAt}T00:00:00.000Z`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...LONG_TAIL_GUIDES.map((guide) => ({
      url: `${SITE_URL}${longTailPath(guide)}`,
      lastModified: new Date(`${guide.updatedAt}T00:00:00.000Z`),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
