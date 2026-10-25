import { EditorialImage } from "@/app/components/EditorialImage";
import type { Infographic } from "@/lib/infographics";

export function InfographicFigure({ info }: { info: Infographic }) {
  return (
    <section className="infographic" aria-labelledby={`infografia-${info.slug}`}>
      <h2 id={`infografia-${info.slug}`}>{info.title}</h2>
      <EditorialImage
        className="infographic-figure"
        imageClassName="infographic-image"
        media={info}
        sizes="(max-width: 900px) 100vw, 760px"
      />
      <p className="infographic-caption">
        Infografía de Kilómetro Fiel.{" "}
        <a href={info.jpgSrc} download>
          Descargar la imagen
        </a>
        . Puedes compartirla citando y enlazando esta guía.
      </p>
    </section>
  );
}
