import { ContentCard } from "@/app/components/ContentCard";
import { articlePath, CATEGORY_LABELS } from "@/lib/article-routing";
import type { Article } from "@/lib/articles";

export function ArticleDirectory({
  articles,
}: {
  articles: readonly Article[];
}) {
  return (
    <div className="card-grid">
      {articles.map((article) => (
        <ContentCard
          key={article.slug}
          eyebrow={`${CATEGORY_LABELS[article.category]} · ${article.readingMinutes} min`}
          title={article.title}
          description={article.description}
          href={articlePath(article)}
        />
      ))}
    </div>
  );
}
