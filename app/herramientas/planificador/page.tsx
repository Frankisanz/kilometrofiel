import type { Metadata } from "next";
import Link from "next/link";
import { MaintenancePlanner } from "@/app/components/MaintenancePlanner";
import { PageHero } from "@/app/components/PageHero";

export const metadata: Metadata = {
  title: "Plan de mantenimiento para un coche antiguo",
  description:
    "Planificador gratuito para ordenar el mantenimiento de un coche de 10, 15 o 20 años según kilómetros, uso, combustible e historial.",
  alternates: { canonical: "/herramientas/planificador" },
};

export default function MaintenancePlannerPage() {
  return (
    <>
      <PageHero
        eyebrow="Herramienta interactiva"
        title="Ordena el mantenimiento que puede estar pendiente."
        description="La edad y el kilometraje importan, pero también el tiempo, el tipo de uso y lo que realmente consta en el historial."
        breadcrumbs={[
          { label: "Herramientas", href: "/herramientas" },
          { label: "Planificador de mantenimiento" },
        ]}
      />
      <section className="section">
        <div className="site-shell tool-layout">
          <aside className="tool-intro">
            <p className="eyebrow">Cómo usar el resultado</p>
            <h2>Convierte prioridades en preguntas verificables.</h2>
            <p>
              La herramienta no decide qué pieza sustituir. Te ayuda a reunir
              facturas, manual, fechas y kilómetros antes de planificar una
              revisión con criterio.
            </p>
            <p>
              Consulta también el{" "}
              <Link href="/mantenimiento/mantenimiento-coche-10-15-20-anos">
                plan por antigüedad
              </Link>
              .
            </p>
          </aside>
          <MaintenancePlanner />
        </div>
      </section>
    </>
  );
}
