import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/app/components/JsonLd";
import {
  LongTailDirectory,
  longTailPath,
} from "@/app/components/LongTailDirectory";
import { PageHero } from "@/app/components/PageHero";
import {
  getLongTailGuide,
  LONG_TAIL_GUIDES,
  type LongTailGuide,
} from "@/lib/long-tail-guides";
import { getArticleMedia } from "@/lib/editorial-media";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type LongTailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return LONG_TAIL_GUIDES.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: LongTailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getLongTailGuide(slug);
  if (!guide) return {};
  const media = getArticleMedia(guide.hub.slug);

  return {
    title: guide.seoTitle,
    description: guide.description,
    alternates: { canonical: longTailPath(guide) },
    openGraph: {
      type: "article",
      title: guide.seoTitle,
      description: guide.description,
      url: longTailPath(guide),
      publishedTime: guide.updatedAt,
      modifiedTime: guide.updatedAt,
      images: [media.src],
    },
  };
}

export default async function LongTailAnswerPage({
  params,
}: LongTailPageProps) {
  const { slug } = await params;
  const guide = getLongTailGuide(slug);
  if (!guide) notFound();

  const related = guide.relatedSlugs
    .map((relatedSlug) => getLongTailGuide(relatedSlug))
    .filter((item): item is LongTailGuide => Boolean(item))
    .slice(0, 3);
  const canonicalPath = longTailPath(guide);
  const media = getArticleMedia(guide.hub.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.query,
    description: guide.description,
    datePublished: guide.updatedAt,
    dateModified: guide.updatedAt,
    inLanguage: "es-ES",
    mainEntityOfPage: `${SITE_URL}${canonicalPath}`,
    image: `${SITE_URL}${media.src}`,
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
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
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
        name: "Respuestas específicas",
        item: `${SITE_URL}/respuestas`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: guide.query,
        item: `${SITE_URL}${canonicalPath}`,
      },
    ],
  };

  return (
    <>
      <PageHero
        eyebrow={`Respuesta específica · ${guide.cluster}`}
        title={guide.query}
        description={guide.description}
        media={media}
        breadcrumbs={[
          { label: "Respuestas específicas", href: "/respuestas" },
          { label: guide.query },
        ]}
      >
        <div className="author-row">
          <span>Revisión editorial y documental</span>
          <span>Actualizado: 29 de julio de 2026</span>
        </div>
      </PageHero>

      <div className="site-shell article-shell">
        <article className="article-body">
          <section className="answer-box">
            <h2>Respuesta directa</h2>
            <p>{guide.directAnswer}</p>
          </section>

          {guide.safety.length ? (
            <section className="danger-box">
              <h2>Primero, descarta un riesgo</h2>
              <ul>
                {guide.safety.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {guide.sections.map((section, index) => (
            <section id={`paso-${index + 1}`} key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.list?.length ? (
                <ul>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <section className="workshop-box" id="taller">
            <h2>Cuándo necesita taller o asistencia</h2>
            <ul>
              {guide.whenWorkshop.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Amplía la explicación principal</h2>
            <p>
              Esta respuesta cubre un caso concreto. Para entender el sistema,
              otras causas y el procedimiento completo, continúa en{" "}
              <Link href={guide.hub.href}>{guide.hub.title}</Link>.
            </p>
          </section>

          <section id="preguntas">
            <h2>Preguntas frecuentes</h2>
            <div className="faq-list">
              {guide.faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section id="fuentes">
            <h2>Fuentes consultadas</h2>
            <ul className="source-list">
              {guide.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {source.title}
                  </a>
                  , {source.publisher}.
                </li>
              ))}
            </ul>
          </section>

          {related.length ? (
            <section>
              <h2>Otras situaciones relacionadas</h2>
              <LongTailDirectory guides={related} />
            </section>
          ) : null}
        </article>
        <aside className="article-aside">
          <div className="aside-card">
            <h2>Contexto</h2>
            <p>
              <Link href={guide.hub.href}>{guide.hub.title}</Link>
            </p>
            <p>
              <Link href="/respuestas">Todas las respuestas específicas</Link>
            </p>
            <p>
              <Link href="/metodologia">Cómo revisamos el contenido</Link>
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
