import type { Metadata } from "next";
import { ArticleDirectory } from "@/app/components/ArticleDirectory";
import { HubCollectionJsonLd, HubSpecificAnswers } from "@/app/components/HubCollection";
import { PageHero } from "@/app/components/PageHero";
import { getArticlesByCategory } from "@/lib/articles";
import { EDITORIAL_MEDIA } from "@/lib/editorial-media";
import { SectionGuide } from "@/app/components/SectionGuide";
import { REGULATION_GUIDE } from "@/lib/section-guides";

const HUB_TITLE =
  "ITV y normativa para coches de más de 10 años";
const HUB_DESCRIPTION =
  "Frecuencia y resultados de la ITV, checklist de preparación, etiqueta ambiental y baliza V16 para coches de más de 10 años, con fuentes oficiales.";

export const metadata: Metadata = {
  title: HUB_TITLE,
  description: HUB_DESCRIPTION,
  alternates: { canonical: "/itv-y-normativa" },
};

export default function RegulationDirectoryPage() {
  const items = getArticlesByCategory("itv-normativa");
  return (
    <>
      <PageHero
        eyebrow="ITV y normativa"
        title="Comprueba antes de llegar a la inspección o a una tienda."
        description="Listas prácticas apoyadas en el manual de ITV, la DGT y el BOE. La fecha de revisión está visible porque las normas cambian."
        media={EDITORIAL_MEDIA.tire}
        breadcrumbs={[{ label: "ITV y normativa" }]}
      />
      <section className="section">
        <div className="site-shell">
          <ArticleDirectory articles={items} />
          <HubSpecificAnswers category="itv-normativa" />
        </div>
      </section>
      <SectionGuide {...REGULATION_GUIDE} />
      <HubCollectionJsonLd
        category="itv-normativa"
        name={HUB_TITLE}
        description={HUB_DESCRIPTION}
        path="/itv-y-normativa"
      />
    </>
  );
}
