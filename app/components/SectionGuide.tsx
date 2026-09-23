export type SectionGuideBlock = {
  heading: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

// Texto editorial de apoyo para las portadas de sección y las herramientas.
// Da contexto propio a páginas que, de otro modo, serían solo un listado de
// enlaces o un formulario interactivo.
export function SectionGuide({
  eyebrow,
  title,
  blocks,
}: {
  eyebrow: string;
  title: string;
  blocks: readonly SectionGuideBlock[];
}) {
  return (
    <section className="section section-tight" aria-labelledby="guia-seccion">
      <div className="site-shell legal-layout section-guide">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id="guia-seccion">{title}</h2>
          {blocks.map((block) => (
            <div key={block.heading}>
              <h3>{block.heading}</h3>
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {block.bullets ? (
                <ul>
                  {block.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
