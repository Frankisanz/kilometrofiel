import type { EditorialMedia } from "@/lib/editorial-media";

type EditorialImageProps = {
  media: EditorialMedia;
  className?: string;
  imageClassName?: string;
  loading?: "eager" | "lazy";
  showCredit?: boolean;
  sizes?: string;
};

export function EditorialImage({
  media,
  className = "",
  imageClassName = "",
  loading = "lazy",
  showCredit = false,
  sizes = "100vw",
}: EditorialImageProps) {
  return (
    <figure className={className}>
      <picture>
        <source srcSet={media.avifSrc} type="image/avif" />
        <img
          alt={media.alt}
          className={imageClassName}
          decoding="async"
          fetchPriority={loading === "eager" ? "high" : "auto"}
          height={media.height}
          loading={loading}
          sizes={sizes}
          src={media.src}
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
