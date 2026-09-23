import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/app/components/JsonLd";
import { PageHero } from "@/app/components/PageHero";
import { LEGAL_OWNER, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cómo contactar con Kilómetro Fiel para comunicar un error, proponer un tema o hacer una consulta sobre la web.",
  alternates: { canonical: "/contacto" },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contacto de ${SITE_NAME}`,
  url: `${SITE_URL}/contacto`,
  inLanguage: "es-ES",
  mainEntity: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    email: LEGAL_OWNER.email,
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <PageHero
        eyebrow="Contacto"
        title="Escríbenos si algo no está claro, ha cambiado o falta."
        description="Leemos todos los mensajes. Las correcciones sobre seguridad o normativa tienen prioridad."
        breadcrumbs={[{ label: "Contacto" }]}
      />
      <div className="site-shell legal-layout">
        <section>
          <p className="answer-box">
            <strong>Correo electrónico:</strong>{" "}
            <a href={`mailto:${LEGAL_OWNER.email}`}>{LEGAL_OWNER.email}</a>
            <br />
            Los datos completos del titular figuran en el{" "}
            <Link href="/aviso-legal">aviso legal</Link>.
          </p>

          <h2>Para qué puedes escribirnos</h2>
          <ul>
            <li>
              <strong>Correcciones:</strong> una norma desactualizada, un enlace
              roto, un dato técnico incorrecto o una explicación que puede
              inducir a error. Indica la página y, si puedes, la fuente que lo
              respalda.
            </li>
            <li>
              <strong>Sugerencias de temas:</strong> un síntoma, una duda de
              mantenimiento o un trámite que no hayamos cubierto.
            </li>
            <li>
              <strong>Cuestiones sobre la web:</strong> privacidad, cookies,
              afiliación o uso del contenido.
            </li>
          </ul>

          <h2>Qué no podemos hacer por correo</h2>
          <p>
            No diagnosticamos averías concretas a distancia ni recomendamos
            talleres. Un síntoma descrito por escrito puede tener varias
            causas, y algunas exigen medir o inspeccionar el vehículo. Si tu
            consulta es sobre una avería, empieza por el{" "}
            <Link href="/herramientas/diagnostico-arranque">
              asistente de diagnóstico
            </Link>{" "}
            o por la sección de <Link href="/diagnostico">diagnóstico</Link>, y
            acude a un profesional si aparece cualquier señal de peligro.
          </p>
          <p>
            Tampoco aceptamos artículos patrocinados ni enlaces de pago
            presentados como contenido editorial.
          </p>

          <h2>Cómo tratamos tus datos</h2>
          <p>
            Usamos tu dirección de correo y el contenido del mensaje solo para
            responderte y, si aportas una corrección, para revisarla. Más
            detalles en la <Link href="/privacidad">política de privacidad</Link>.
          </p>
        </section>
      </div>
    </>
  );
}
