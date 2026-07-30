import type { Metadata } from "next";
import { ArticleDirectory } from "@/app/components/ArticleDirectory";
import { LongTailDirectory } from "@/app/components/LongTailDirectory";
import { PageHero } from "@/app/components/PageHero";
import { getArticlesByCategory } from "@/lib/articles";
import { EDITORIAL_MEDIA } from "@/lib/editorial-media";
import { LONG_TAIL_GUIDES } from "@/lib/long-tail-guides";

export const metadata: Metadata = {
  title: "Diagnóstico por síntomas para coches veteranos",
  description:
    "Qué comprobar si el coche no arranca, pierde batería, se sobrecalienta, echa humo o muestra un testigo, con señales para detenerse.",
  alternates: { canonical: "/diagnostico" },
};

export default function DiagnosisDirectoryPage() {
  const items = getArticlesByCategory("problemas");
  return (
    <>
      <PageHero
        eyebrow="Diagnóstico por síntomas"
        title="Empieza por lo que hace el coche, no por la pieza."
        description="Una misma señal admite varias causas. Observa, descarta riesgos y reúne datos antes de comprar o desmontar."
        media={EDITORIAL_MEDIA.garage}
        breadcrumbs={[{ label: "Diagnóstico" }]}
      />
      <section className="section">
        <div className="site-shell">
          <div className="directory-toolbar">
            <strong>{items.length} guías prácticas</strong>
            <p>Respuesta directa · pasos seguros · cuándo ir al taller</p>
          </div>
          <ArticleDirectory articles={items} />
          <div className="section-heading" style={{ marginTop: "5rem" }}>
            <div>
              <p className="eyebrow">Casos muy concretos</p>
              <h2>Situaciones que necesitan una respuesta propia.</h2>
              <p>
                Son situaciones distintas, no páginas duplicadas: cada respuesta
                añade contexto, señales y un siguiente paso propio.
              </p>
            </div>
          </div>
          <LongTailDirectory guides={LONG_TAIL_GUIDES.slice(0, 6)} />
        </div>
      </section>
    </>
  );
}
