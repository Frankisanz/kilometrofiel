import type { Metadata } from "next";
import Link from "next/link";
import { ArticleDirectory } from "@/app/components/ArticleDirectory";
import { HubCollectionJsonLd, HubSpecificAnswers } from "@/app/components/HubCollection";
import { PageHero } from "@/app/components/PageHero";
import { getArticlesByCategory } from "@/lib/articles";
import { EDITORIAL_MEDIA } from "@/lib/editorial-media";
import { SectionGuide } from "@/app/components/SectionGuide";
import { BUYING_GUIDE } from "@/lib/section-guides";

const HUB_TITLE =
  "Guías para elegir herramientas de coche sin equivocarse";
const HUB_DESCRIPTION =
  "Cómo elegir lector OBD2, arrancador, cargador y multímetro por compatibilidad y seguridad, sin precios ni rankings artificiales.";

export const metadata: Metadata = {
  title: HUB_TITLE,
  description: HUB_DESCRIPTION,
  alternates: { canonical: "/guias-de-compra" },
};

export default function BuyingGuidesPage() {
  const items = getArticlesByCategory("herramientas");
  return (
    <>
      <PageHero
        eyebrow="Equipamiento"
        title="Compra por necesidad y compatibilidad, no por la cifra más grande."
        description="Explicamos qué especificaciones importan, qué no resuelve cada aparato y qué comprobar antes de abrir Amazon."
        media={EDITORIAL_MEDIA.battery}
        breadcrumbs={[{ label: "Guías de compra" }]}
      />
      <section className="section">
        <div className="site-shell">
          <div className="note-box" style={{ marginTop: 0 }}>
            Las recomendaciones comerciales se identifican de forma visible.
            No publicamos precios, disponibilidad o valoraciones estáticas.
          </div>
          <div className="button-row" style={{ marginBottom: "2rem" }}>
            <Link className="button button-dark" href="/recomendaciones">
              Ver fichas directas de productos
            </Link>
          </div>
          <ArticleDirectory articles={items} />
          <HubSpecificAnswers category="herramientas" />
        </div>
      </section>
      <SectionGuide {...BUYING_GUIDE} />
      <HubCollectionJsonLd
        category="herramientas"
        name={HUB_TITLE}
        description={HUB_DESCRIPTION}
        path="/guias-de-compra"
      />
    </>
  );
}
