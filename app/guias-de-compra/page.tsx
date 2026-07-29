import type { Metadata } from "next";
import Link from "next/link";
import { ArticleDirectory } from "@/app/components/ArticleDirectory";
import { PageHero } from "@/app/components/PageHero";
import { getArticlesByCategory } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Guías para elegir herramientas de coche sin equivocarse",
  description:
    "Cómo elegir lector OBD2, arrancador, cargador y multímetro por compatibilidad y seguridad, sin precios ni rankings artificiales.",
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
        </div>
      </section>
    </>
  );
}
