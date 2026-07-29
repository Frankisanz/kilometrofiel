import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import {
  LEGAL_ADDRESS,
  LEGAL_OWNER,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import {
  AMAZON_AFFILIATE_DISCLOSURE,
  EDITORIAL_INDEPENDENCE_NOTICE,
} from "@/lib/commerce";

export const metadata: Metadata = {
  title: "Aviso legal",
  description:
    "Identificación del titular, condiciones de uso, responsabilidad y transparencia comercial de Kilómetro Fiel.",
  alternates: { canonical: "/aviso-legal" },
};

export default function LegalNoticePage() {
  return (
    <>
      <PageHero
        eyebrow="Información legal"
        title="Aviso legal"
        description="Identificación del responsable y reglas de uso de Kilómetro Fiel."
        breadcrumbs={[{ label: "Aviso legal" }]}
      />
      <div className="site-shell legal-layout">
        <section>
          <p>
            <strong>Última actualización:</strong> 29 de julio de 2026.
          </p>

          <h2>1. Identificación del titular</h2>
          <ul>
            <li>
              <strong>Titular:</strong> {LEGAL_OWNER.name}
            </li>
            <li>
              <strong>NIF:</strong> {LEGAL_OWNER.taxId}
            </li>
            <li>
              <strong>Domicilio:</strong> {LEGAL_ADDRESS}
            </li>
            <li>
              <strong>Correo:</strong>{" "}
              <a href={`mailto:${LEGAL_OWNER.email}`}>{LEGAL_OWNER.email}</a>
            </li>
            <li>
              <strong>Sitio:</strong>{" "}
              <a href={SITE_URL}>{SITE_URL}</a>
            </li>
          </ul>
          <p>
            Este aviso se facilita conforme a la Ley 34/2002, de 11 de julio,
            de servicios de la sociedad de la información y de comercio
            electrónico. Puedes consultar su{" "}
            <a
              href="https://www.boe.es/eli/es/l/2002/07/11/34/con"
              rel="noopener noreferrer"
              target="_blank"
            >
              texto consolidado en el BOE
            </a>
            .
          </p>

          <h2>2. Objeto y aceptación</h2>
          <p>
            {SITE_NAME} ofrece contenido informativo sobre mantenimiento,
            síntomas, ITV, normativa y equipamiento para vehículos. Navegar por
            el sitio implica aceptar estas condiciones. Si no estás de acuerdo,
            debes dejar de utilizarlo.
          </p>

          <h2>3. Información técnica y seguridad</h2>
          <p>
            El contenido es general y no constituye un diagnóstico mecánico,
            una inspección, una tasación ni asesoramiento profesional
            individualizado. Un mismo síntoma puede tener causas distintas. El
            manual, la documentación técnica del fabricante, la normativa
            vigente y la valoración presencial de un profesional prevalecen.
          </p>
          <p className="danger-box">
            No continúes circulando ni hagas una comprobación casera cuando
            exista riesgo para frenos, dirección, neumáticos, combustible,
            airbag, alta tensión, presión de aceite, sobrecalentamiento o
            seguridad vial. Detén el vehículo en un lugar seguro y solicita
            asistencia.
          </p>

          <h2>4. Uso permitido</h2>
          <p>
            El usuario se compromete a utilizar la web de forma lícita, a no
            interferir con su seguridad y a no reproducir sistemáticamente sus
            contenidos o bases de datos. Las herramientas interactivas producen
            orientaciones a partir de los datos introducidos; no verifican el
            estado real del vehículo.
          </p>

          <h2>5. Propiedad intelectual</h2>
          <p>
            Salvo indicación distinta, los textos, estructura, identidad visual
            y elementos originales pertenecen al titular o se usan con
            autorización. Se permite enlazar y citar fragmentos breves
            indicando la fuente. No se autoriza republicar contenidos completos
            ni usarlos comercialmente sin permiso previo.
          </p>

          <h2>6. Enlaces externos y afiliación</h2>
          <p>
            Los enlaces externos permiten consultar fuentes o tiendas de
            terceros. El destino puede cambiar y se rige por sus propias
            condiciones y políticas. Verificamos los enlaces al publicar, pero
            no controlamos permanentemente el contenido externo.
          </p>
          <p>{EDITORIAL_INDEPENDENCE_NOTICE}</p>
          <p className="note-box">
            <strong>Declaración:</strong> {AMAZON_AFFILIATE_DISCLOSURE}
          </p>
          <p>
            Un enlace comercial se identifica junto al propio enlace. La
            comisión no aumenta necesariamente el precio para el usuario y no
            condiciona el orden editorial.
          </p>

          <h2>7. Disponibilidad y responsabilidad</h2>
          <p>
            Trabajamos para mantener la web disponible y corregir errores, pero
            no garantizamos continuidad absoluta ni que todas las páginas estén
            libres de omisiones. No se excluyen las responsabilidades que la
            ley no permita limitar. El usuario conserva sus derechos como
            consumidor cuando resulten aplicables.
          </p>

          <h2>8. Legislación aplicable</h2>
          <p>
            Se aplica la legislación española, sin perjuicio de las normas
            imperativas de protección que correspondan al usuario. Las
            controversias se resolverán ante los juzgados competentes conforme
            a la normativa procesal y de consumidores aplicable.
          </p>
        </section>
      </div>
    </>
  );
}
