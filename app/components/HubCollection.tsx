import { JsonLd } from "@/app/components/JsonLd";
import { longTailGuidesForCategory, LongTailDirectory, longTailPath } from "@/app/components/LongTailDirectory";
import { articlePath } from "@/lib/article-routing";
import { getArticlesByCategory, type ArticleCategory } from "@/lib/articles";
import { collectionPageSchema } from "@/lib/structured-data";

type HubProps = {
  category: ArticleCategory;
  name: string;
  description: string;
  path: `/${string}`;
};

// CollectionPage + ItemList for a section hub, listing its guides and the
// specific answers that hang from them.
export function HubCollectionJsonLd({ category, name, description, path }: HubProps) {
  const items = [
    ...getArticlesByCategory(category).map((article) => ({
      name: article.title,
      path: articlePath(article),
    })),
    ...longTailGuidesForCategory(category).map((guide) => ({
      name: guide.query,
      path: longTailPath(guide),
    })),
  ];
  return <JsonLd data={collectionPageSchema({ name, description, path, items })} />;
}

export function HubSpecificAnswers({ category }: { category: ArticleCategory }) {
  const guides = longTailGuidesForCategory(category);
  if (guides.length === 0) return null;
  return (
    <>
      <div className="section-heading" style={{ marginTop: "5rem" }}>
        <div>
          <p className="eyebrow">Casos muy concretos</p>
          <h2>Situaciones que necesitan una respuesta propia.</h2>
          <p>
            Cada respuesta añade contexto, señales y un siguiente paso propio,
            y enlaza a la guía principal para ampliar.
          </p>
        </div>
      </div>
      <LongTailDirectory guides={guides} />
    </>
  );
}
