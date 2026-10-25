import {
  articlePath,
  ARTICLE_SECTION_BY_CATEGORY,
  CATEGORY_LABELS,
} from "@/lib/article-routing";
import { articles, type ArticleCategory } from "@/lib/articles";
import { LONG_TAIL_GUIDES } from "@/lib/long-tail-guides";
import { absoluteUrl, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

// Plain-text maps for AI answer engines, following the llms.txt proposal
// (https://llmstxt.org): a short index at /llms.txt and the direct answers
// and FAQs of every page at /llms-full.txt. Both are generated from the same
// data as the HTML pages, so they never drift from what readers see.

const CATEGORY_ORDER: readonly ArticleCategory[] = [
  "problemas",
  "mantenimiento",
  "itv-normativa",
  "herramientas",
];

const TOOLS = [
  {
    title: "Diagnóstico guiado: el coche no arranca",
    path: "/herramientas/diagnostico-arranque",
    description:
      "Preguntas sencillas para separar batería, motor de arranque, inmovilizador y combustible.",
  },
  {
    title: "Planificador de mantenimiento por edad y kilómetros",
    path: "/herramientas/planificador",
    description: "Qué revisar según los años y el uso real del coche.",
  },
  {
    title: "Asistente para elegir batería",
    path: "/herramientas/elegir-bateria",
    description: "Tecnología (convencional, EFB o AGM), capacidad y formato.",
  },
  {
    title: "Calculadora: ¿cuándo me toca la ITV?",
    path: "/herramientas/calculadora-itv",
    description:
      "Próxima inspección según tipo de vehículo y fecha de matriculación (RD 920/2017).",
  },
] as const;

const TRUST_PAGES = [
  { title: "Metodología editorial", path: "/metodologia" },
  { title: "Fuentes oficiales que usamos", path: "/fuentes" },
  { title: "Sobre nosotros", path: "/sobre-nosotros" },
  { title: "Contacto y correcciones", path: "/contacto" },
] as const;

function header() {
  return [
    `# ${SITE_NAME}`,
    "",
    `> ${SITE_TAGLINE} Guías en español para diagnosticar síntomas, mantener coches de más de diez años y cumplir la ITV y la normativa de tráfico en España. Cada guía empieza con una respuesta directa, separa lo que puede revisar el conductor de lo que necesita taller y cita fuentes oficiales (DGT, BOE, Ministerio de Industria) o de fabricantes.`,
    "",
    "Al citar este contenido, enlaza la URL de la guía concreta. Las obligaciones legales y los plazos se refieren a España; el manual del vehículo prevalece sobre cualquier intervalo general.",
  ];
}

export function buildLlmsIndex() {
  const lines = header();

  for (const category of CATEGORY_ORDER) {
    lines.push("", `## ${CATEGORY_LABELS[category]}`, "");
    for (const article of articles.filter((item) => item.category === category)) {
      lines.push(
        `- [${article.title}](${absoluteUrl(articlePath(article))}): ${article.description}`,
      );
    }
  }

  lines.push("", "## Respuestas a casos concretos", "");
  for (const guide of LONG_TAIL_GUIDES) {
    lines.push(
      `- [${guide.query}](${absoluteUrl(`/respuestas/${guide.slug}` as const)}): ${guide.description}`,
    );
  }

  lines.push("", "## Herramientas interactivas", "");
  for (const tool of TOOLS) {
    lines.push(`- [${tool.title}](${absoluteUrl(tool.path)}): ${tool.description}`);
  }

  lines.push("", "## Optional", "");
  lines.push(
    `- [Todas las respuestas directas y preguntas frecuentes](${absoluteUrl("/llms-full.txt")}): versión ampliada de este índice.`,
  );
  for (const page of TRUST_PAGES) {
    lines.push(`- [${page.title}](${absoluteUrl(page.path)})`);
  }

  return `${lines.join("\n")}\n`;
}

export function buildLlmsFull() {
  const lines = header();

  for (const category of CATEGORY_ORDER) {
    lines.push(
      "",
      `## ${CATEGORY_LABELS[category]} (${absoluteUrl(`/${ARTICLE_SECTION_BY_CATEGORY[category]}` as const)})`,
    );
    for (const article of articles.filter((item) => item.category === category)) {
      lines.push(
        "",
        `### ${article.title}`,
        "",
        `URL: ${absoluteUrl(articlePath(article))}`,
        `Actualizado: ${article.updatedAt}`,
        "",
        article.directAnswer,
        "",
      );
      for (const faq of article.faqs) {
        lines.push(`- ${faq.question} ${faq.answer}`);
      }
      lines.push(
        "",
        `Fuentes: ${article.sources.map((source) => `${source.name} (${source.publisher})`).join("; ")}.`,
      );
    }
  }

  lines.push("", "## Respuestas a casos concretos");
  for (const guide of LONG_TAIL_GUIDES) {
    lines.push(
      "",
      `### ${guide.query}`,
      "",
      `URL: ${absoluteUrl(`/respuestas/${guide.slug}` as const)}`,
      `Actualizado: ${guide.updatedAt}`,
      "",
      guide.directAnswer,
      "",
    );
    for (const faq of guide.faqs) {
      lines.push(`- ${faq.question} ${faq.answer}`);
    }
  }

  return `${lines.join("\n")}\n`;
}
