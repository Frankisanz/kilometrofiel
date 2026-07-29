import type { Article, ArticleCategory } from "@/lib/articles";

export type ArticleSectionSlug =
  | "diagnostico"
  | "mantenimiento"
  | "itv-y-normativa"
  | "guias-de-compra";

export const ARTICLE_SECTION_BY_CATEGORY: Record<
  ArticleCategory,
  ArticleSectionSlug
> = {
  problemas: "diagnostico",
  mantenimiento: "mantenimiento",
  "itv-normativa": "itv-y-normativa",
  herramientas: "guias-de-compra",
};

export const CATEGORY_LABELS: Record<ArticleCategory, string> = {
  problemas: "Diagnóstico por síntomas",
  mantenimiento: "Mantenimiento",
  "itv-normativa": "ITV y normativa",
  herramientas: "Herramientas y equipamiento",
};

export function articlePath(article: Article) {
  return `/${ARTICLE_SECTION_BY_CATEGORY[article.category]}/${article.slug}`;
}

export function categoryPath(category: ArticleCategory) {
  return `/${ARTICLE_SECTION_BY_CATEGORY[category]}`;
}
