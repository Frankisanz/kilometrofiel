import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { OFFICIAL_BASE_SOURCES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fuentes oficiales sobre mantenimiento, ITV y seguridad",
  description:
    "Fuentes primarias que utiliza Kilómetro Fiel para contrastar normativa, ITV, seguridad vial, homologación y alertas de producto.",
  alternates: { canonical: "/fuentes" },
};

const practicalSources = [
  {
    name: "Manual de procedimiento de las estaciones ITV",
    url: "https://industria.gob.es/Calidad-Industrial/vehiculos/Paginas/inspeccion-tecnica-vehiculos.aspx",
    use: "Criterios, métodos y clasificación de defectos aplicables en inspección.",
  },
  {
    name: "Dispositivos V16 certificados por la DGT",
    url: "https://www.dgt.es/muevete-con-seguridad/tecnologia-e-innovacion-en-carretera/Dispositivos-de-presenalizacion-V16/",
    use: "Comprobar el modelo exacto de una baliza conectada y la información oficial vigente.",
  },
  {
    name: "Registro de campañas de seguridad de la Unión Europea",
    url: "https://ec.europa.eu/safety-gate-alerts/screen/webReport",
    use: "Consultar alertas y retiradas oficiales de productos de consumo.",
  },
  {
    name: "Legislación consolidada del BOE",
    url: "https://www.boe.es/buscar/legislacion.php",
    use: "Localizar normas españolas y sus modificaciones publicadas.",
  },
] as const;

export default function SourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Transparencia"
        title="Las fuentes que sostienen nuestras respuestas."
        description="Cada guía enlaza sus referencias concretas. Esta página explica de dónde partimos y para qué utilizamos cada fuente."
        breadcrumbs={[{ label: "Fuentes" }]}
      />
      <div className="site-shell legal-layout">
        <section>
          <p className="answer-box">
            Priorizamos documentos oficiales y manuales específicos. Un blog,
            un foro o una ficha comercial pueden aportar contexto, pero no
            sustituyen una norma vigente ni el manual de tu vehículo.
          </p>

          <h2>Fuentes institucionales de base</h2>
          <div className="card-grid two">
            {OFFICIAL_BASE_SOURCES.map((source) => (
              <article className="content-card" key={source.url}>
                <h3>{source.name}</h3>
                <p>{source.scope}</p>
                <a
                  className="card-link"
                  href={source.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Abrir fuente oficial
                </a>
              </article>
            ))}
          </div>

          <h2>Consultas prácticas frecuentes</h2>
          <ul className="source-list">
            {practicalSources.map((source) => (
              <li key={source.url}>
                <a href={source.url} rel="noopener noreferrer" target="_blank">
                  {source.name}
                </a>
                : {source.use}
              </li>
            ))}
          </ul>

          <h2>Documentación específica del vehículo</h2>
          <p>
            El intervalo de distribución, la viscosidad y homologación del
            aceite, la presión de los neumáticos, el refrigerante, la batería o
            un procedimiento eléctrico dependen del vehículo y motor
            concretos. Consulta el manual, el libro de mantenimiento y la
            información técnica del fabricante usando el número de bastidor
            cuando sea necesario.
          </p>
        </section>
      </div>
    </>
  );
}
