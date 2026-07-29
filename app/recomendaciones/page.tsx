import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { ProductRecommendations } from "@/app/components/ProductRecommendations";
import {
  AMAZON_AFFILIATE_DISCLOSURE,
  COMMERCIAL_CATEGORIES,
} from "@/lib/commerce";

export const metadata: Metadata = {
  title: "Herramientas recomendadas para coches veteranos",
  description:
    "Lectores OBD2, arrancadores, cargadores, multímetros, infladores, V16 y herramienta básica, ordenados por necesidad y con fichas directas.",
  alternates: { canonical: "/recomendaciones" },
};

export default function RecommendationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Recomendaciones transparentes"
        title="Herramientas concretas, ordenadas por la tarea que resuelven."
        description="No elegimos por el número más grande ni por una comisión. Explicamos compatibilidad, límites y cuándo no merece la pena comprar."
        breadcrumbs={[{ label: "Recomendaciones" }]}
      />
      <section className="section">
        <div className="site-shell">
          <p className="affiliate-disclosure" style={{ marginTop: 0 }}>
            <strong>Transparencia:</strong> {AMAZON_AFFILIATE_DISCLOSURE} Cada
            botón conduce a la ficha exacta del producto, nunca a una búsqueda
            genérica.
          </p>

          <nav className="recommendation-index" aria-label="Categorías recomendadas">
            {COMMERCIAL_CATEGORIES.map((category) => (
              <a href={`#productos-${category.id}`} key={category.id}>
                {category.name}
              </a>
            ))}
          </nav>

          {COMMERCIAL_CATEGORIES.map((category) => (
            <ProductRecommendations
              categoryId={category.id}
              key={category.id}
            />
          ))}
        </div>
      </section>
    </>
  );
}
