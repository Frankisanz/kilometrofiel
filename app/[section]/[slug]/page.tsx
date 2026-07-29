import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleDirectory } from "@/app/components/ArticleDirectory";
import { JsonLd } from "@/app/components/JsonLd";
import { LongTailDirectory } from "@/app/components/LongTailDirectory";
import { PageHero } from "@/app/components/PageHero";
import { ProductRecommendations } from "@/app/components/ProductRecommendations";
import {
  ARTICLE_SECTION_BY_CATEGORY,
  articlePath,
  CATEGORY_LABELS,
  categoryPath,
} from "@/lib/article-routing";
import {
  articles,
  getArticleBySlug,
  getRelatedArticles,
} from "@/lib/articles";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { LONG_TAIL_GUIDES } from "@/lib/long-tail-guides";
import type { CommerceCategoryId } from "@/lib/commerce";

type ArticlePageProps = {
  params: Promise<{ section: string; slug: string }>;
};

const commercialCategoryByArticle: Partial<
  Record<string, CommerceCategoryId>
> = {
  "como-elegir-lector-obd2": "obd2",
  "como-elegir-arrancador-bateria": "arrancadores",
  "cargador-mantenedor-bateria": "cargadores",
  "comprobar-bateria-alternador-multimetro": "multimetros",
  "neumaticos-dot-desgaste-presion": "infladores",
  "baliza-v16-conectada-certificada": "v16",
};

export function generateStaticParams() {
  return articles.map((article) => ({
    section: ARTICLE_SECTION_BY_CATEGORY[article.category],
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { section, slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article || ARTICLE_SECTION_BY_CATEGORY[article.category] !== section) {
    return {};
  }

  const path = articlePath(article);

  return {
    title: article.seoTitle,
    description: article.description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title: article.seoTitle,
      description: article.description,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      section: CATEGORY_LABELS[article.category],
      images: ["/og.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.description,
      images: ["/og.png"],
    },
  };
}

const dateFormatter = new Intl.DateTimeFormat("es-ES", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

function formatDate(date: string) {
  return dateFormatter.format(new Date(`${date}T00:00:00Z`));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { section, slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article || ARTICLE_SECTION_BY_CATEGORY[article.category] !== section) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article).slice(0, 3);
  const specificAnswers = LONG_TAIL_GUIDES.filter(
    (guide) => guide.hub.slug === article.slug,
  );
  const canonicalPath = articlePath(article);
  const categoryLabel = CATEGORY_LABELS[article.category];
  const categoryHref = categoryPath(article.category);
  const commercialCategory = commercialCategoryByArticle[article.slug];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    inLanguage: "es-ES",
    mainEntityOfPage: `${SITE_URL}${canonicalPath}`,
    author: {
      "@type": "Organization",
      name: `Equipo editorial de ${SITE_NAME}`,
      url: `${SITE_URL}/metodologia`,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icons/icon-512.png`,
      },
    },
    image: `${SITE_URL}/og.png`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: categoryLabel,
        item: `${SITE_URL}${categoryHref}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${SITE_URL}${canonicalPath}`,
      },
    ],
  };

  return (
    <>
      <PageHero
        eyebrow={article.eyebrow}
        title={article.title}
        description={article.summary}
        breadcrumbs={[
          { label: categoryLabel, href: categoryHref },
          { label: article.title },
        ]}
      >
        <div className="author-row">
          <span>Revisión editorial y documental</span>
          <span>Actualizado: {formatDate(article.updatedAt)}</span>
          <span>{article.readingMinutes} min de lectura</span>
        </div>
      </PageHero>

      <div className="site-shell article-shell">
        <article className="article-body">
          <section className="answer-box" aria-labelledby="respuesta-directa">
            <h2 id="respuesta-directa">Respuesta directa</h2>
            <p>{article.directAnswer}</p>
          </section>

          {article.dangerSignals.length > 0 ? (
            <section className="danger-box" aria-labelledby="senales-peligro">
              <h2 id="senales-peligro">Detente y pide asistencia si…</h2>
              <ul>
                {article.dangerSignals.map((item) => (
                  <li key={item.signal}>
                    <strong>{item.signal}</strong> {item.action}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {article.sections.map((section) => (
            <section id={section.id} key={section.id}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets?.length ? (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
              {section.callout ? (
                <aside
                  className={
                    section.callout.tone === "important"
                      ? "danger-box"
                      : section.callout.tone === "caution"
                        ? "workshop-box"
                        : "note-box"
                  }
                >
                  <h3>{section.callout.title}</h3>
                  <p>{section.callout.text}</p>
                </aside>
              ) : null}
            </section>
          ))}

          <section aria-labelledby="pasos-seguros">
            <h2 id="pasos-seguros">Comprobaciones seguras, en orden</h2>
            <ol>
              {article.safeSteps.map((step) => (
                <li key={step.title}>
                  <strong>{step.title}.</strong> {step.detail}
                </li>
              ))}
            </ol>
          </section>

          <section className="workshop-box" aria-labelledby="cuando-taller">
            <h2 id="cuando-taller">Cuándo llevarlo al taller</h2>
            <p>{article.workshop.introduction}</p>
            <h3>Atención urgente</h3>
            <ul>
              {article.workshop.urgent.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>Pide cita</h3>
            <ul>
              {article.workshop.appointment.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>Información útil para llevar</h3>
            <ul>
              {article.workshop.usefulInformation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {commercialCategory ? (
            <ProductRecommendations
              categoryId={commercialCategory}
              compact
              title="Dos fichas concretas para comparar con criterio"
            />
          ) : null}

          <section aria-labelledby="preguntas-frecuentes">
            <h2 id="preguntas-frecuentes">Preguntas frecuentes</h2>
            <div className="faq-list">
              {article.faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section aria-labelledby="fuentes-articulo">
            <h2 id="fuentes-articulo">Fuentes consultadas</h2>
            <p>
              Consulta realizada el 29 de julio de 2026. El manual y la
              documentación específica de tu vehículo prevalecen.
            </p>
            <ul className="source-list">
              {article.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {source.name}
                  </a>
                  , {source.publisher}.
                </li>
              ))}
            </ul>
          </section>

          {specificAnswers.length > 0 ? (
            <section aria-labelledby="casos-concretos">
              <h2 id="casos-concretos">Casos concretos relacionados</h2>
              <p>
                Respuestas más específicas para síntomas o situaciones que
                necesitan un matiz propio.
              </p>
              <LongTailDirectory guides={specificAnswers} />
            </section>
          ) : null}

          {relatedArticles.length > 0 ? (
            <section aria-labelledby="tambien-puede-ayudarte">
              <h2 id="tambien-puede-ayudarte">También puede ayudarte</h2>
              <ArticleDirectory articles={relatedArticles} />
            </section>
          ) : null}
        </article>

        <aside className="article-aside" aria-label="Índice del artículo">
          <div className="aside-card">
            <h2>En esta guía</h2>
            <ul>
              <li>
                <a href="#respuesta-directa">Respuesta directa</a>
              </li>
              {article.dangerSignals.length > 0 ? (
                <li>
                  <a href="#senales-peligro">Señales de peligro</a>
                </li>
              ) : null}
              {article.sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.heading}</a>
                </li>
              ))}
              <li>
                <a href="#pasos-seguros">Comprobaciones seguras</a>
              </li>
              <li>
                <a href="#cuando-taller">Cuándo ir al taller</a>
              </li>
              <li>
                <a href="#preguntas-frecuentes">Preguntas frecuentes</a>
              </li>
            </ul>
            <p style={{ marginTop: "1rem" }}>
              <Link className="card-link" href={categoryHref}>
                Ver todo el clúster
              </Link>
            </p>
          </div>
        </aside>
      </div>

      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
    </>
  );
}
