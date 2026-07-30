import type { Metadata } from "next";
import Link from "next/link";
import { ArticleDirectory } from "@/app/components/ArticleDirectory";
import { EditorialImage } from "@/app/components/EditorialImage";
import { JsonLd } from "@/app/components/JsonLd";
import { LongTailDirectory } from "@/app/components/LongTailDirectory";
import { VideoFeature } from "@/app/components/VideoFeature";
import { articlePath } from "@/lib/article-routing";
import { articles } from "@/lib/articles";
import { EDITORIAL_MEDIA } from "@/lib/editorial-media";
import { LONG_TAIL_GUIDES } from "@/lib/long-tail-guides";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const featuredSlugs = [
  "coche-no-arranca",
  "mantenimiento-coche-10-15-20-anos",
  "checklist-itv-coche-antiguo",
  "bateria-se-descarga-coche-parado",
  "testigos-coche-significado",
  "motor-sobrecalentado-que-hacer",
] as const;

const featuredArticles = featuredSlugs
  .map((slug) => articles.find((article) => article.slug === slug))
  .filter((article): article is (typeof articles)[number] => Boolean(article));

const categories = [
  {
    number: "01 / SÍNTOMAS",
    title: "Algo no funciona",
    description:
      "Arranque, testigos, temperatura, humo y descarga de batería explicados desde las señales observables.",
    href: "/diagnostico",
    media: EDITORIAL_MEDIA.garage,
  },
  {
    number: "02 / PREVENCIÓN",
    title: "Quiero que dure",
    description:
      "Planifica por edad, kilómetros, historial y uso. El manual siempre marca el intervalo específico.",
    href: "/mantenimiento",
    media: EDITORIAL_MEDIA.dashboard,
  },
  {
    number: "03 / EQUIPAMIENTO",
    title: "Necesito una herramienta",
    description:
      "Aprende qué especificaciones importan y cuándo una compra no va a resolver el problema.",
    href: "/guias-de-compra",
    media: EDITORIAL_MEDIA.battery,
  },
  {
    number: "04 / CUMPLIMIENTO",
    title: "Tengo ITV o una duda legal",
    description:
      "Checklist, baliza V16 y normas contrastadas con fuentes oficiales vigentes.",
    href: "/itv-y-normativa",
    media: EDITORIAL_MEDIA.tire,
  },
] as const;

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: `${SITE_NAME}: mantenimiento claro para coches de más de 10 años`,
  url: SITE_URL,
  description:
    "Guías y herramientas para diagnosticar síntomas, mantener un coche veterano y elegir equipamiento con criterio.",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: featuredArticles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: new URL(articlePath(article), SITE_URL).toString(),
      name: article.title,
    })),
  },
};

export default function Home() {
  return (
    <>
      <section className="hero hero-editorial">
        <div className="site-shell hero-stage">
          <div className="hero-message">
            <p className="eyebrow">Mantenimiento sin humo ni milagros</p>
            <h1>Cuida el coche que ya tienes.</h1>
            <p className="hero-copy">
              Respuestas claras para coches de más de 10 años: qué comprobar,
              cuándo detenerte y qué merece la pena revisar antes de gastar.
            </p>
            <div className="button-row">
              <Link
                className="button button-primary"
                href="/herramientas/diagnostico-arranque"
              >
                Mi coche no arranca
              </Link>
              <Link className="button button-secondary" href="/mantenimiento">
                Ver mantenimiento
              </Link>
            </div>
            <p className="hero-promise">
              Primero entendemos el síntoma. Después decidimos si puedes
              comprobar algo, necesitas taller o no merece la pena comprar.
            </p>
          </div>
          <div className="hero-visual">
            <EditorialImage
              className="hero-photo"
              imageClassName="hero-photo-image"
              loading="eager"
              media={EDITORIAL_MEDIA.garage}
              showCredit
              sizes="(max-width: 920px) 100vw, 48vw"
            />
            <div
              className="hero-stat-card"
              aria-label="Edad media del parque móvil"
            >
              <span>Parque móvil español</span>
              <strong>14,6</strong>
              <small>
                años de edad media en 2025,{" "}
                <a
                  href="https://www.dgt.es/comunicacion/noticias/20260727-usados-importados-compramos-lo-viejo/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  según la DGT
                </a>
              </small>
            </div>
            <p className="hero-vertical-label" aria-hidden="true">
              COCHES CON HISTORIA · RESPUESTAS DE HOY
            </p>
          </div>
        </div>
      </section>

      <div className="trust-strip">
        <ul className="site-shell trust-list">
          <li>Fuentes oficiales visibles</li>
          <li>Seguridad antes que reparación casera</li>
          <li>Afiliación separada del criterio editorial</li>
        </ul>
      </div>

      <section className="section home-situations">
        <div className="site-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Empieza por tu situación</p>
              <h2>No hace falta saber de mecánica para hacer una buena pregunta.</h2>
              <p>
                Elige lo que necesitas resolver. Cada guía empieza con una
                respuesta directa y separa las comprobaciones seguras del
                trabajo de taller.
              </p>
            </div>
          </div>
          <div className="category-mosaic">
            {categories.map((category, index) => (
              <article
                className={`category-story category-story-${index + 1}`}
                key={category.href}
              >
                <EditorialImage
                  className="category-story-media"
                  imageClassName="category-story-image"
                  media={category.media}
                  sizes="(max-width: 720px) 100vw, 50vw"
                />
                <div className="category-story-content">
                  <span className="category-number">{category.number}</span>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <Link className="card-link" href={category.href}>
                    Explorar respuestas
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="site-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Busca por lo que ves, oyes o hueles</p>
              <h2>Respuestas concretas para decisiones concretas.</h2>
              <p>
                Priorizamos síntomas y contextos reales: desde un clic al girar
                la llave hasta humo, temperatura o un testigo que parpadea.
              </p>
            </div>
            <Link className="button button-secondary" href="/diagnostico">
              Ver todas las guías
            </Link>
          </div>
          <ArticleDirectory articles={featuredArticles} />
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Herramientas interactivas</p>
              <h2>Ordena señales, datos e historial.</h2>
              <p>
                No adivinan averías. Te ayudan a registrar mejor lo que ocurre y
                a preparar una decisión o una visita al taller.
              </p>
            </div>
          </div>
          <div className="card-grid">
            <article className="tool-card">
              <span className="tool-icon" aria-hidden="true">
                01
              </span>
              <h3>Diagnóstico de arranque</h3>
              <p>Luces, clics, giro y señales de riesgo en cuatro preguntas.</p>
              <Link
                className="card-link"
                href="/herramientas/diagnostico-arranque"
              >
                Abrir herramienta
              </Link>
            </article>
            <article className="tool-card">
              <span className="tool-icon" aria-hidden="true">
                02
              </span>
              <h3>Planificador de mantenimiento</h3>
              <p>Edad, kilómetros, combustible, uso e historial ordenados.</p>
              <Link className="card-link" href="/herramientas/planificador">
                Crear mi plan
              </Link>
            </article>
            <article className="tool-card">
              <span className="tool-icon" aria-hidden="true">
                03
              </span>
              <h3>Ficha de batería</h3>
              <p>Ah, CCA, AGM/EFB, medidas, polaridad y Start-Stop.</p>
              <Link className="card-link" href="/herramientas/elegir-bateria">
                Leer mi batería
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section video-section">
        <div className="site-shell video-layout">
          <VideoFeature />
          <div className="video-copy">
            <p className="eyebrow">Aula de garaje</p>
            <h2>Una explicación visual cuando las siglas no ayudan.</h2>
            <p>
              EFB y AGM no son simples etiquetas comerciales. El tipo de
              batería debe encajar con el sistema Start-Stop, la gestión de
              carga y la especificación del vehículo.
            </p>
            <ul className="editorial-checklist">
              <li>Vídeo técnico seleccionado, no contenido patrocinado.</li>
              <li>YouTube no recibe datos hasta que decides reproducirlo.</li>
              <li>Nuestra guía escrita aporta compatibilidad y pasos propios.</li>
            </ul>
            <Link
              className="button button-dark"
              href="/mantenimiento/como-elegir-bateria-coche"
            >
              Abrir la guía de baterías
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Búsquedas muy concretas</p>
              <h2>La frase que escribirías cuando algo raro ocurre.</h2>
              <p>
                Cada página resuelve una situación distinta con contexto,
                señales de riesgo y un siguiente paso que puedas aplicar.
              </p>
            </div>
            <Link className="button button-dark" href="/respuestas">
              Ver las 10 respuestas
            </Link>
          </div>
          <LongTailDirectory guides={LONG_TAIL_GUIDES.slice(0, 3)} />
        </div>
      </section>

      <section className="section-tight">
        <div className="site-shell recommendation-cta recommendation-cta-visual">
          <div>
            <p className="eyebrow">Selección transparente</p>
            <h2>Si ya sabes qué herramienta necesitas, compara fichas concretas.</h2>
            <p>
              OBD2, arrancadores, cargadores, multímetros, infladores, V16 y
              herramienta básica. Dos perfiles por categoría, con limitaciones
              y enlaces directos.
            </p>
          </div>
          <Link className="button button-primary" href="/recomendaciones">
            Ver recomendaciones
          </Link>
          <EditorialImage
            className="recommendation-visual"
            imageClassName="recommendation-visual-image"
            media={EDITORIAL_MEDIA.dashboard}
            sizes="(max-width: 920px) 100vw, 30vw"
          />
        </div>
      </section>

      <section className="section-tight">
        <div className="site-shell safety-callout">
          <span className="safety-symbol" aria-hidden="true">
            !
          </span>
          <div>
            <h2>Hay señales que no se investigan en el arcén.</h2>
            <p>
              Un aviso rojo, humo, olor a combustible, pérdida de frenos o
              dirección, sobrecalentamiento o ruido metálico fuerte exige parar
              con seguridad y pedir asistencia.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Cómo trabajamos</p>
              <h2>Sin diagnósticos mágicos ni rankings disfrazados.</h2>
              <p>
                Contrastamos normativa y seguridad con fuentes primarias.
                Explicamos compatibilidad, límites y cuándo no necesitas
                comprar.
              </p>
            </div>
            <Link className="button button-dark" href="/metodologia">
              Leer metodología
            </Link>
          </div>
        </div>
      </section>
      <JsonLd data={homeSchema} />
    </>
  );
}
