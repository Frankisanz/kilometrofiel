import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/app/components/PageHero";
import { StartDiagnosis } from "@/app/components/StartDiagnosis";

export const metadata: Metadata = {
  title: "El coche no arranca: diagnóstico por sonido y luces",
  description:
    "Asistente gratuito para orientar por qué un coche no arranca según el giro del motor, las luces del cuadro y los clics, con señales de seguridad.",
  alternates: { canonical: "/herramientas/diagnostico-arranque" },
};

export default function StartDiagnosisPage() {
  return (
    <>
      <PageHero
        eyebrow="Herramienta interactiva"
        title="El coche no arranca: empieza por lo que ves y oyes."
        description="Cuatro respuestas permiten ordenar las primeras hipótesis sin asumir automáticamente que la batería está averiada."
        breadcrumbs={[
          { label: "Herramientas", href: "/herramientas" },
          { label: "Diagnóstico de arranque" },
        ]}
      />
      <section className="section">
        <div className="site-shell tool-layout">
          <aside className="tool-intro">
            <p className="eyebrow">Antes de empezar</p>
            <h2>Haz solo comprobaciones seguras.</h2>
            <p>
              Sitúa el vehículo fuera del tráfico, activa el freno de
              estacionamiento y no manipules combustible, batería dañada ni
              sistemas de alta tensión.
            </p>
            <p>
              Después puedes ampliar la explicación en la guía{" "}
              <Link href="/diagnostico/coche-no-arranca">
                qué hacer cuando el coche no arranca
              </Link>
              .
            </p>
          </aside>
          <StartDiagnosis />
        </div>
      </section>
    </>
  );
}
