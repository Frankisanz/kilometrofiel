import type { Metadata } from "next";
import Link from "next/link";
import { ArticleDirectory } from "@/app/components/ArticleDirectory";
import { PageHero } from "@/app/components/PageHero";
import { getArticlesByCategory } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Mantenimiento de coches de 10, 15 y 20 años",
  description:
    "Guías para planificar el mantenimiento por antigüedad, historial, batería y neumáticos sin usar intervalos genéricos.",
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
        </div>
      </section>
    </>
  );
}
