import type { Metadata } from "next";
import { ArticleDirectory } from "@/app/components/ArticleDirectory";
import { PageHero } from "@/app/components/PageHero";
import { getArticlesByCategory } from "@/lib/articles";
import { EDITORIAL_MEDIA } from "@/lib/editorial-media";

export const metadata: Metadata = {
  title: "ITV y normativa para coches de más de 10 años",
  description:
    "Checklist ITV y guía para comprobar una baliza V16 conectada en el listado oficial de la DGT, con fuentes vigentes.",
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
        </div>
      </section>
    </>
  );
}
