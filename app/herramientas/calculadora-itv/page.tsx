import type { Metadata } from "next";
import Link from "next/link";
import { ItvCalculator } from "@/app/components/ItvCalculator";
import { JsonLd } from "@/app/components/JsonLd";
import { PageHero } from "@/app/components/PageHero";
import { SectionGuide } from "@/app/components/SectionGuide";
import { ITV_TOOL_GUIDE } from "@/lib/section-guides";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "¿Cuándo me toca la ITV? Calculadora gratuita",
  description:
    "Calcula cuándo te toca pasar la ITV según la fecha de matriculación y la última inspección: turismos, furgonetas, motos y ciclomotores, con la periodicidad del RD 920/2017.",
  alternates: { canonical: "/herramientas/calculadora-itv" },
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calculadora de la próxima ITV",
  url: `${SITE_URL}/herramientas/calculadora-itv`,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Cualquiera con navegador web",
  inLanguage: "es-ES",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
};

export default function ItvCalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Herramienta interactiva"
        title="¿Cuándo me toca pasar la ITV?"
        description="Introduce la fecha de matriculación y, si la conoces, la de la última inspección. Te indicamos la próxima fecha estimada y desde cuándo puedes adelantarla."
        breadcrumbs={[
          { label: "Herramientas", href: "/herramientas" },
          { label: "Calculadora de la ITV" },
        ]}
      />
      <section className="section">
        <div className="site-shell tool-layout">
          <aside className="tool-intro">
            <p className="eyebrow">Antes de pedir cita</p>
            <h2>La fecha oficial está en tu tarjeta ITV.</h2>
            <p>
              Esta calculadora aplica la periodicidad general para vehículos de
              uso particular. Úsala para planificar y contrasta siempre el
              resultado con la pegatina del parabrisas o la tarjeta ITV.
            </p>
            <p>
              Prepara la inspección con la{" "}
              <Link href="/itv-y-normativa/checklist-itv-coche-antiguo">
                lista de comprobación para coches antiguos
              </Link>{" "}
              y consulta{" "}
              <Link href="/itv-y-normativa/itv-caducada-que-hacer">
                qué hacer si la ITV está caducada
              </Link>
              .
            </p>
          </aside>
          <ItvCalculator />
        </div>
      </section>
      <SectionGuide {...ITV_TOOL_GUIDE} />
      <JsonLd data={toolSchema} />
    </>
  );
}
