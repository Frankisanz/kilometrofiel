import type { Metadata } from "next";
import Link from "next/link";
import { ArticleDirectory } from "@/app/components/ArticleDirectory";
import { HubCollectionJsonLd, HubSpecificAnswers } from "@/app/components/HubCollection";
import { PageHero } from "@/app/components/PageHero";
import { getArticlesByCategory } from "@/lib/articles";
import { EDITORIAL_MEDIA } from "@/lib/editorial-media";
import { SectionGuide } from "@/app/components/SectionGuide";
import { MAINTENANCE_GUIDE } from "@/lib/section-guides";

const HUB_TITLE =
  "Mantenimiento de coches de 10, 15 y 20 años";
const HUB_DESCRIPTION =
  "Guías para planificar el mantenimiento por antigüedad: aceite, distribución, frenos, batería y neumáticos, sin usar intervalos genéricos.";

export const metadata: Metadata = {
  title: HUB_TITLE,
  description: HUB_DESCRIPTION,
  alternates: { canonical: "/mantenimiento" },
};

export default function MaintenanceDirectoryPage() {
  const items = getArticlesByCategory("mantenimiento");
  return (
    <>
      <PageHero
        eyebrow="Mantenimiento"
        title="Los kilómetros cuentan. Los años y el historial también."
        description="Prioriza lo que realmente vence por tiempo, uso o kilometraje y confirma siempre la especificación de tu versión."
        media={EDITORIAL_MEDIA.dashboard}
        breadcrumbs={[{ label: "Mantenimiento" }]}
      >
        <div className="button-row" style={{ marginTop: "2rem" }}>
          <Link className="button button-primary" href="/herramientas/planificador">
            Crear un plan orientativo
          </Link>
        </div>
      </PageHero>
      <section className="section">
        <div className="site-shell">
          <ArticleDirectory articles={items} />
          <HubSpecificAnswers category="mantenimiento" />
        </div>
      </section>
      <SectionGuide {...MAINTENANCE_GUIDE} />
      <HubCollectionJsonLd
        category="mantenimiento"
        name={HUB_TITLE}
        description={HUB_DESCRIPTION}
        path="/mantenimiento"
      />
    </>
  );
}
