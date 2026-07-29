import type { Metadata } from "next";
import { LongTailDirectory } from "@/app/components/LongTailDirectory";
import { PageHero } from "@/app/components/PageHero";
import { LONG_TAIL_GUIDES } from "@/lib/long-tail-guides";

export const metadata: Metadata = {
  title: "Respuestas a problemas concretos de coches veteranos",
  description:
    "Respuestas específicas sobre arranque, batería, testigo motor, temperatura, OBD2, ITV y baliza V16 para coches con años.",
  alternates: { canonical: "/respuestas" },
};

export default function AnswersDirectoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Consultas long tail"
        title="Cuando el problema es muy concreto, la respuesta también debe serlo."
        description="Estas páginas resuelven situaciones completas, no simples variaciones de una palabra clave. Cada una enlaza a su guía principal para ampliar contexto."
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
    </>
  );
}
