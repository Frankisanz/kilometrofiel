import { buildSrcSet, type EditorialMedia } from "@/lib/editorial-media";

type EditorialImageProps = {
  media: EditorialMedia;
  className?: string;
  imageClassName?: string;
  loading?: "eager" | "lazy";
  showCredit?: boolean;
  sizes?: string;
  /** Card thumbnails repeat across unrelated cards: mark them decorative. */
  decorative?: boolean;
};

export function EditorialImage({
  media,
  className = "",
  imageClassName = "",
  loading = "lazy",
  showCredit = false,
  sizes = "100vw",
  decorative = false,
}: EditorialImageProps) {
  return (
    <figure className={className}>
      <picture>
        <source
          sizes={sizes}
          srcSet={buildSrcSet(media.avifSrc, media.width)}
          type="image/avif"
        />
        <img
          alt={decorative ? "" : media.alt}
          className={imageClassName}
          decoding="async"
          fetchPriority={loading === "eager" ? "high" : "auto"}
          height={media.height}
          loading={loading}
          sizes={sizes}
          src={media.src}
          srcSet={buildSrcSet(media.src, media.width)}
          width={media.width}
        />
      </picture>
      {showCredit ? (
        <figcaption className="photo-credit">
          Foto:{" "}
          <a
            href={media.credit.sourceUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            {media.credit.name} / Unsplash
          </a>
        </figcaption>
      ) : null}
    </figure>
  );
}
