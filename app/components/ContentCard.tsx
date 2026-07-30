import Link from "next/link";
import { EditorialImage } from "@/app/components/EditorialImage";
import type { EditorialMedia } from "@/lib/editorial-media";

type ContentCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  linkLabel?: string;
  media?: EditorialMedia;
};

export function ContentCard({
  eyebrow,
  title,
  description,
  href,
  linkLabel = "Leer la guía",
  media,
}: ContentCardProps) {
  return (
    <article className="content-card">
      {media ? (
        <EditorialImage
          className="content-card-media"
          imageClassName="content-card-image"
          media={media}
          sizes="(max-width: 640px) 100vw, 33vw"
        />
      ) : null}
      <div className="content-card-body">
        <span className="kicker">{eyebrow}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link className="card-link" href={href}>
          {linkLabel}
        </Link>
      </div>
    </article>
  );
}
