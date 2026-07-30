import { ContentCard } from "@/app/components/ContentCard";
import { getArticleMedia } from "@/lib/editorial-media";
import type { LongTailGuide } from "@/lib/long-tail-guides";

export function longTailPath(guide: LongTailGuide) {
  return `/respuestas/${guide.slug}`;
}

export function LongTailDirectory({
  guides,
}: {
  guides: readonly LongTailGuide[];
}) {
  return (
    <div className="card-grid">
      {guides.map((guide) => (
        <ContentCard
          key={guide.slug}
          eyebrow={`Respuesta específica · ${guide.cluster}`}
          title={guide.query}
          description={guide.description}
          href={longTailPath(guide)}
          linkLabel="Ver respuesta"
          media={getArticleMedia(guide.hub.slug)}
        />
      ))}
    </div>
  );
}
