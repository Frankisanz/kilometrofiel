import type { Metadata } from "next";
import Link from "next/link";
import { ArticleDirectory } from "@/app/components/ArticleDirectory";
import { JsonLd } from "@/app/components/JsonLd";
import { LongTailDirectory } from "@/app/components/LongTailDirectory";
import { articlePath } from "@/lib/article-routing";
import { articles } from "@/lib/articles";
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
  },
  {
    number: "02 / PREVENCIÓN",
    title: "Quiero que dure",
    description:
      "Planifica por edad, kilómetros, historial y uso. El manual siempre marca el intervalo específico.",
    href: "/mantenimiento",
  },
  {
    number: "03 / EQUIPAMIENTO",
    title: "Necesito una herramienta",
    description:
      "Aprende qué especificaciones importan y cuándo una compra no va a resolver el problema.",
    href: "/guias-de-compra",
  },
  {
    number: "04 / CUMPLIMIENTO",
    title: "Tengo ITV o una duda legal",
    description:
      "Checklist, baliza V16 y normas contrastadas con fuentes oficiales vigentes.",
    href: "/itv-y-normativa",
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
      <section className="hero">
        <div className="site-shell hero-grid">
          <div>
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
          </div>
          <aside className="odometer" aria-label="Dato sobre el parque móvil">
            <div className="odometer-screen" aria-hidden="true">
              {["1", "4", ",", "6", "A", "Ñ"].map((digit, index) => (
                <span className="odometer-digit" key={`${digit}-${index}`}>
                  {digit}
                </span>
              ))}
            </div>
            <p>
              <strong>14,6 años</strong> era la edad media del parque móvil
              español en 2025, según la DGT. Cuidar bien lo que ya circula es
              una necesidad, no una rareza.
            </p>
          </aside>
        </div>
      </section>

      <div className="trust-strip">
        <ul className="site-shell trust-list">
          <li>Fuentes oficiales visibles</li>
          <li>Seguridad antes que reparación casera</li>
          <li>Afiliación separada del criterio editorial</li>
        </ul>
      </div>

      <section className="section">
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
          <div className="card-grid two">
            {categories.map((category) => (
              <article className="category-card" key={category.href}>
                <span className="category-number">{category.number}</span>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <Link className="card-link" href={category.href}>
                  Explorar respuestas
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="site-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Problemas que llegan al buscador</p>
              <h2>Respuestas concretas para decisiones concretas.</h2>
              <p>
                Priorizamos síntomas y contextos reales, incluidas búsquedas
                long tail con menos competencia y una intención más clara.
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

      <section className="section">
        <div className="site-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Búsquedas muy concretas</p>
              <h2>La frase que escribirías cuando algo raro ocurre.</h2>
              <p>
                Atacamos consultas long tail con menos competencia, pero cada
                página debe resolver un caso distinto y aportar valor real.
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
        <div className="site-shell recommendation-cta">
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
