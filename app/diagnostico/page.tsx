import type { Metadata } from "next";
import { ArticleDirectory } from "@/app/components/ArticleDirectory";
import { HubCollectionJsonLd, HubSpecificAnswers } from "@/app/components/HubCollection";
import { PageHero } from "@/app/components/PageHero";
import { getArticlesByCategory } from "@/lib/articles";
import { EDITORIAL_MEDIA } from "@/lib/editorial-media";

const HUB_TITLE =
  "Diagnóstico por síntomas para coches veteranos";
const HUB_DESCRIPTION =
  "Qué comprobar si el coche no arranca, pierde batería, se sobrecalienta, echa humo o muestra un testigo, con señales para detenerse.";

export const metadata: Metadata = {
  title: HUB_TITLE,
  description: HUB_DESCRIPTION,
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
          <HubSpecificAnswers category="problemas" />
        </div>
      </section>
      <HubCollectionJsonLd
        category="problemas"
        name={HUB_TITLE}
        description={HUB_DESCRIPTION}
        path="/diagnostico"
      />
    </>
  );
}
