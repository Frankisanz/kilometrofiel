import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleDirectory } from "@/app/components/ArticleDirectory";
import { JsonLd } from "@/app/components/JsonLd";
import { PageHero } from "@/app/components/PageHero";
import { getArticleBySlug, type Article } from "@/lib/articles";
import { EDITORIAL_MEDIA } from "@/lib/editorial-media";
import { photoImageObject } from "@/lib/infographics";
import { getLongTailGuide, type LongTailGuide } from "@/lib/long-tail-guides";
import {
  getObdCode,
  OBD_CODES,
  OBD_HUB,
  OBD_SEVERITY_LABELS,
  OBD_SYSTEM_LABELS,
  obdCodePath,
  type ObdCode,
} from "@/lib/obd-codes";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { editorialArticleFields } from "@/lib/structured-data";

type ObdCodePageProps = {
  params: Promise<{ codigo: string }>;
};

const media = EDITORIAL_MEDIA.dashboard;

function pageTitle(code: ObdCode) {
  return `${code.code}: ${code.shortName}. Causas y qué hacer`;
}

function pageDescription(code: ObdCode) {
  return `Qué significa el código ${code.code} (${code.name.toLowerCase()}), causas más probables, si se puede circular y cómo afecta a la ITV.`;
}

export function generateStaticParams() {
  return OBD_CODES.map((code) => ({ codigo: code.slug }));
}

export async function generateMetadata({
  params,
}: ObdCodePageProps): Promise<Metadata> {
  const { codigo } = await params;
  const code = getObdCode(codigo);
  if (!code) return {};
  const path = obdCodePath(code);

  return {
    title: pageTitle(code),
    description: pageDescription(code),
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      locale: "es_ES",
      siteName: SITE_NAME,
      url: path,
      title: pageTitle(code),
      description: pageDescription(code),
      publishedTime: code.updatedAt,
      modifiedTime: code.updatedAt,
      images: [{ url: media.src, width: media.width, height: media.height, alt: media.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle(code),
      description: pageDescription(code),
      images: [media.src],
    },
  };
}

const dateFormatter = new Intl.DateTimeFormat("es-ES", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export default async function ObdCodePage({ params }: ObdCodePageProps) {
  const { codigo } = await params;
  const code = getObdCode(codigo);
  if (!code) notFound();

  const canonicalPath = obdCodePath(code);
  const relatedArticles = code.relatedArticleSlugs
    .map((slug) => getArticleBySlug(slug))
    .filter((item): item is Article => Boolean(item));
  const relatedAnswers = (code.relatedAnswerSlugs ?? [])
    .map((slug) => getLongTailGuide(slug))
    .filter((item): item is LongTailGuide => Boolean(item));
  const relatedCodes = code.relatedCodes
    .map((slug) => getObdCode(slug))
    .filter((item): item is ObdCode => Boolean(item));
  const termId = `${SITE_URL}${canonicalPath}#codigo`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${SITE_URL}${canonicalPath}#guia`,
    headline: `${code.code}: ${code.name}`,
    description: pageDescription(code),
    datePublished: code.updatedAt,
    dateModified: code.updatedAt,
    inLanguage: "es-ES",
    mainEntityOfPage: `${SITE_URL}${canonicalPath}`,
    articleSection: OBD_SYSTEM_LABELS[code.system],
    proficiencyLevel: "Beginner",
    image: photoImageObject(media),
    about: {
      "@type": "DefinedTerm",
      "@id": termId,
      name: code.code,
      termCode: code.code,
      description: code.name,
      inDefinedTermSet: {
        "@type": "DefinedTermSet",
        "@id": `${SITE_URL}${OBD_HUB.path}#codigos`,
        name: "Códigos de avería OBD2 genéricos explicados",
        url: `${SITE_URL}${OBD_HUB.path}`,
      },
    },
    ...editorialArticleFields(
      code.sources.map((source) => ({ name: source.title, url: source.url })),
    ),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `¿Qué significa el código ${code.code}?`,
        acceptedAnswer: { "@type": "Answer", text: code.directAnswer },
      },
      {
        "@type": "Question",
        name: `¿Se puede circular con el código ${code.code}?`,
        acceptedAnswer: { "@type": "Answer", text: code.canDrive },
      },
      ...code.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Códigos de avería OBD2",
        item: `${SITE_URL}${OBD_HUB.path}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: code.code,
        item: `${SITE_URL}${canonicalPath}`,
      },
    ],
  };

  return (
    <>
      <PageHero
        eyebrow={`Código OBD2 · ${OBD_SYSTEM_LABELS[code.system]}`}
        title={`Código ${code.code}: ${code.shortName.toLowerCase()}`}
        description={code.name}
        media={media}
        breadcrumbs={[
          { label: "Códigos de avería OBD2", href: OBD_HUB.path },
          { label: code.code },
        ]}
      >
        <div className="author-row">
          <span>
            Por el{" "}
            <Link href="/sobre-nosotros">equipo de Kilómetro Fiel</Link>
          </span>
          <span>
            Actualizado: {dateFormatter.format(new Date(`${code.updatedAt}T00:00:00Z`))}
          </span>
        </div>
      </PageHero>

      <div className="site-shell article-shell">
        <article className="article-body">
          <section className="answer-box" aria-labelledby="respuesta-directa">
            <h2 id="respuesta-directa">Qué significa {code.code}</h2>
            <p>{code.directAnswer}</p>
          </section>

          <dl className="obd-facts">
            <div>
              <dt>Urgencia</dt>
              <dd>
                <span className={`obd-severity obd-severity-${code.severity}`}>
                  {OBD_SEVERITY_LABELS[code.severity]}
                </span>
              </dd>
            </div>
            <div>
              <dt>Sistema</dt>
              <dd>{OBD_SYSTEM_LABELS[code.system]}</dd>
            </div>
            <div>
              <dt>¿Puedo circular?</dt>
              <dd>{code.canDrive}</dd>
            </div>
          </dl>

          <section id="explicacion" aria-labelledby="explicacion-titulo">
            <h2 id="explicacion-titulo">Cómo lo detecta el coche</h2>
            {code.meaning.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <section id="causas" aria-labelledby="causas-titulo">
            <h2 id="causas-titulo">Causas más probables, de más a menos frecuente</h2>
            <table className="obd-causes">
              <thead>
                <tr>
                  <th scope="col">Causa</th>
                  <th scope="col">Pista que la delata</th>
                </tr>
              </thead>
              <tbody>
                {code.causes.map((item) => (
                  <tr key={item.cause}>
                    <td>
                      <strong>{item.cause}</strong>
                    </td>
                    <td>{item.clue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section id="comprobaciones" aria-labelledby="comprobaciones-titulo">
            <h2 id="comprobaciones-titulo">Qué puedes revisar tú, en orden</h2>
            <ol>
              {code.checks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>

          <section className="workshop-box" id="taller" aria-labelledby="taller-titulo">
            <h2 id="taller-titulo">Cuándo ir al taller sin esperar</h2>
            <ul>
              {code.workshop.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section id="itv" aria-labelledby="itv-titulo">
            <h2 id="itv-titulo">{code.code} y la ITV</h2>
            <p>{code.itv}</p>
            <p>
              Borrar el código justo antes de la inspección no es una solución:
              el testigo vuelve cuando el sistema detecta de nuevo el fallo y
              un borrado reciente se detecta en la lectura OBD.
            </p>
          </section>

          <section id="preguntas" aria-labelledby="preguntas-titulo">
            <h2 id="preguntas-titulo">Preguntas frecuentes</h2>
            <div className="faq-list">
              {code.faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section id="fuentes" aria-labelledby="fuentes-titulo">
            <h2 id="fuentes-titulo">Fuentes consultadas</h2>
            <p>
              Definición según la nomenclatura genérica OBD2/EOBD. Cada
              fabricante puede añadir matices: la documentación técnica de tu
              vehículo prevalece.
            </p>
            <ul className="source-list">
              {code.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} rel="noopener noreferrer" target="_blank">
                    {source.title}
                  </a>
                  , {source.publisher}.
                </li>
              ))}
            </ul>
          </section>

          {relatedArticles.length > 0 ? (
            <section aria-labelledby="guias-relacionadas">
              <h2 id="guias-relacionadas">Guías para entender el síntoma</h2>
              <ArticleDirectory articles={relatedArticles} />
            </section>
          ) : null}
        </article>

        <aside className="article-aside" aria-label="Códigos relacionados">
          <div className="aside-card">
            <h2>Códigos relacionados</h2>
            <ul>
              {relatedCodes.map((item) => (
                <li key={item.slug}>
                  <Link href={obdCodePath(item)}>
                    {item.code}: {item.shortName}
                  </Link>
                </li>
              ))}
            </ul>
            {relatedAnswers.length > 0 ? (
              <>
                <h2 style={{ marginTop: "1.2rem" }}>Casos concretos</h2>
                <ul>
                  {relatedAnswers.map((guide) => (
                    <li key={guide.slug}>
                      <Link href={`/respuestas/${guide.slug}`}>{guide.query}</Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
            <p style={{ marginTop: "1rem" }}>
              <Link className="card-link" href={OBD_HUB.path}>
                Todos los códigos
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
