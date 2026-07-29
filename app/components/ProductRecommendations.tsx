import Link from "next/link";
import {
  AMAZON_AFFILIATE_DISCLOSURE,
  type CommerceCategoryId,
  getCommercialCategory,
  getProductRecommendations,
  PRODUCT_RECOMMENDATIONS_CHECKED_ON,
} from "@/lib/commerce";

type ProductRecommendationsProps = {
  categoryId: CommerceCategoryId;
  compact?: boolean;
  title?: string;
};

const checkedDate = new Intl.DateTimeFormat("es-ES", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
}).format(new Date(`${PRODUCT_RECOMMENDATIONS_CHECKED_ON}T00:00:00Z`));

export function ProductRecommendations({
  categoryId,
  compact = false,
  title,
}: ProductRecommendationsProps) {
  const category = getCommercialCategory(categoryId);
  const recommendations = getProductRecommendations(categoryId);

  if (!category || recommendations.length === 0) return null;

  return (
    <section
      className={compact ? "recommendation-block compact" : "recommendation-block"}
      aria-labelledby={`productos-${categoryId}`}
    >
      <div className="recommendation-heading">
        <div>
          <p className="eyebrow">Selección por perfiles</p>
          <h2 id={`productos-${categoryId}`}>
            {title ?? `${category.name}: dos opciones concretas`}
          </h2>
          <p>{category.description}</p>
        </div>
        <Link href="/metodologia">Cómo seleccionamos</Link>
      </div>

      <p className="affiliate-disclosure">
        <strong>Publicidad · enlaces de afiliado.</strong>{" "}
        {AMAZON_AFFILIATE_DISCLOSURE}
      </p>

      <div className="product-grid">
        {recommendations.map((product, index) => (
          <article className="product-card" key={product.asin}>
            <span className="product-profile">
              {index === 0 ? "Perfil sencillo" : "Perfil con más funciones"}
            </span>
            <h3>{product.name}</h3>
            <p>
              <strong>Encaja mejor con:</strong> {product.bestFor}
            </p>
            <ul>
              {product.verifiedCriteria
                .slice(0, compact ? 2 : 3)
                .map((criterion) => (
                  <li key={criterion}>{criterion}</li>
                ))}
            </ul>
            <div className="product-limitation">
              <strong>Antes de elegir</strong>
              <ul>
                {product.limitations
                  .slice(0, compact ? 1 : 3)
                  .map((limitation) => (
                    <li key={limitation}>{limitation}</li>
                  ))}
              </ul>
            </div>
            <div className="product-action">
              <small>Publicidad · enlace de afiliado</small>
              <a
                className="button button-orange"
                href={product.amazonUrl}
                rel="sponsored nofollow noopener noreferrer"
                target="_blank"
              >
                Ver la ficha exacta en Amazon
              </a>
              <small>ASIN {product.asin}</small>
            </div>
          </article>
        ))}
      </div>

      <p className="recommendation-date">
        Fichas comprobadas el {checkedDate}. Amazon puede cambiar vendedor,
        disponibilidad o contenido: confirma el modelo y la compatibilidad
        antes de comprar. No mostramos precios ni valoraciones estáticas.
      </p>
      {!compact ? (
        <aside className="note-box">
          <strong>Advertencias de la categoría</strong>
          <ul>
            {category.warnings.map((warning) => (
              <li key={warning}>{warning}</li>
            ))}
          </ul>
        </aside>
      ) : null}
    </section>
  );
}
