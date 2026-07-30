import type { Metadata } from "next";
import { ContentCard } from "@/app/components/ContentCard";
import { PageHero } from "@/app/components/PageHero";
import { EDITORIAL_MEDIA } from "@/lib/editorial-media";

export const metadata: Metadata = {
  title: "Herramientas para cuidar un coche de más de 10 años",
  description:
    "Diagnóstico orientativo de arranque, planificador de mantenimiento y asistente para leer la batería de tu coche.",
  alternates: { canonical: "/herramientas" },
};

const tools = [
  {
    eyebrow: "Síntoma → siguiente paso",
    title: "El coche no arranca: orientación por luces y sonidos",
    description:
      "Describe qué hace el motor, qué ocurre con el cuadro y qué sonido oyes. Recibirás comprobaciones prudentes y señales para pedir asistencia.",
    href: "/herramientas/diagnostico-arranque",
    media: EDITORIAL_MEDIA.garage,
  },
  {
    eyebrow: "Edad + kilómetros + uso",
    title: "Planificador de mantenimiento pendiente",
    description:
      "Ordena qué revisar primero según la edad, kilometraje, combustible, uso e historial, sin inventar intervalos universales.",
    href: "/herramientas/planificador",
    media: EDITORIAL_MEDIA.dashboard,
  },
  {
    eyebrow: "Compatibilidad antes de comprar",
    title: "Asistente para leer la batería actual",
    description:
      "Organiza tensión, tecnología, Ah, CCA, medidas, bornes y Start-Stop antes de comparar una batería nueva.",
    href: "/herramientas/elegir-bateria",
    media: EDITORIAL_MEDIA.battery,
  },
] as const;

export default function ToolsPage() {
  return (
    <>
      <PageHero
        eyebrow="Herramientas gratuitas"
        title="Responde lo que ves. Ordena el siguiente paso."
        description="Tres asistentes que transforman datos sencillos en una lista prudente de comprobaciones. No diagnostican ni sustituyen el manual o el taller."
        media={EDITORIAL_MEDIA.garage}
        breadcrumbs={[{ label: "Herramientas" }]}
      />
      <section className="section">
        <div className="site-shell">
          <div className="card-grid">
            {tools.map((tool) => (
              <ContentCard key={tool.href} {...tool} linkLabel="Abrir herramienta" />
            ))}
          </div>
          <div className="safety-callout" style={{ marginTop: "2rem" }}>
            <span className="safety-symbol" aria-hidden="true">
              !
            </span>
            <div>
              <h2>Una orientación no es un diagnóstico.</h2>
              <p>
                Si hay humo, olor a combustible, fuga, sobrecalentamiento,
                testigo rojo, frenos o dirección anormales, detente en un lugar
                seguro y solicita asistencia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
