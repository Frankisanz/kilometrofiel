import type { Metadata } from "next";
import Link from "next/link";
import { BatteryAssistant } from "@/app/components/BatteryAssistant";
import { PageHero } from "@/app/components/PageHero";

export const metadata: Metadata = {
  title: "Cómo elegir la batería del coche: Ah, CCA, AGM y medidas",
  description:
    "Asistente para leer la batería actual y comprobar Ah, CCA, medidas, polaridad, AGM/EFB y Start-Stop antes de comprar.",
  alternates: { canonical: "/herramientas/elegir-bateria" },
};

export default function BatteryAssistantPage() {
  return (
    <>
      <PageHero
        eyebrow="Herramienta interactiva"
        title="Lee la batería actual antes de comparar otra."
        description="Una cifra de Ah no basta. Reúne tecnología, CCA, norma, dimensiones, fijación, bornes y requisitos electrónicos."
        breadcrumbs={[
          { label: "Herramientas", href: "/herramientas" },
          { label: "Asistente de batería" },
        ]}
      />
      <section className="section">
        <div className="site-shell">
          <div className="note-box" style={{ marginTop: 0 }}>
            <strong>Importante:</strong> en híbridos y eléctricos esta
            herramienta se refiere solo a la batería auxiliar de baja tensión,
            nunca a la batería de tracción.
          </div>
          <BatteryAssistant />
          <p style={{ marginTop: "1.5rem" }}>
            Para entender cada dato, lee la guía completa sobre{" "}
            <Link href="/mantenimiento/como-elegir-bateria-coche">
              cómo elegir una batería compatible
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
