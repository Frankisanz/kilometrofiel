import type { Metadata } from "next";
import { JsonLd } from "@/app/components/JsonLd";
import { LongTailDirectory, longTailPath } from "@/app/components/LongTailDirectory";
import { PageHero } from "@/app/components/PageHero";
import { EDITORIAL_MEDIA } from "@/lib/editorial-media";
import { LONG_TAIL_GUIDES } from "@/lib/long-tail-guides";
import { collectionPageSchema } from "@/lib/structured-data";

const HUB_TITLE = "Respuestas a problemas concretos de coches veteranos";
const HUB_DESCRIPTION =
  "Respuestas específicas sobre arranque, batería, testigos, temperatura, vibraciones, consumo, OBD2, ITV y baliza V16 para coches con años.";

export const metadata: Metadata = {
  title: HUB_TITLE,
  description: HUB_DESCRIPTION,
  alternates: { canonical: "/respuestas" },
};

export default function AnswersDirectoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Situaciones concretas"
        title="Cuando el problema es muy concreto, la respuesta también debe serlo."
        description="Estas páginas resuelven situaciones completas, no simples variaciones de una palabra clave. Cada una enlaza a su guía principal para ampliar contexto."
        media={EDITORIAL_MEDIA.dashboard}
        breadcrumbs={[{ label: "Respuestas específicas" }]}
      />
      <section className="section">
        <div className="site-shell">
          <div className="directory-toolbar">
            <strong>{LONG_TAIL_GUIDES.length} situaciones concretas</strong>
            <p>Menos ruido · más contexto · siguiente paso seguro</p>
          </div>
          <LongTailDirectory guides={LONG_TAIL_GUIDES} />
        </div>
      </section>
      <JsonLd
        data={collectionPageSchema({
          name: HUB_TITLE,
          description: HUB_DESCRIPTION,
          path: "/respuestas",
          items: LONG_TAIL_GUIDES.map((guide) => ({
            name: guide.query,
            path: longTailPath(guide),
          })),
        })}
      />
    </>
  );
}
