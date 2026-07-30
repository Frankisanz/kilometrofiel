import { Breadcrumbs } from "@/app/components/Breadcrumbs";
import { EditorialImage } from "@/app/components/EditorialImage";
import type { EditorialMedia } from "@/lib/editorial-media";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs?: readonly { label: string; href?: string }[];
  children?: React.ReactNode;
  media?: EditorialMedia;
};

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs = [],
  children,
  media,
}: PageHeroProps) {
  return (
    <header className="page-hero">
      <div className={`site-shell page-hero-grid${media ? " has-media" : ""}`}>
        <div className="page-hero-copy">
          {breadcrumbs.length > 0 ? <Breadcrumbs items={breadcrumbs} /> : null}
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{description}</p>
          {children}
        </div>
        {media ? (
          <EditorialImage
            className="page-hero-media"
            imageClassName="page-hero-image"
            loading="eager"
            media={media}
            showCredit
            sizes="(max-width: 920px) 100vw, 38vw"
          />
        ) : null}
      </div>
    </header>
  );
}
