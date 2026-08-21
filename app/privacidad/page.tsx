import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { LEGAL_ADDRESS, LEGAL_OWNER } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Qué datos trata Kilómetro Fiel, para qué, durante cuánto tiempo y cómo ejercer los derechos de protección de datos.",
  alternates: { canonical: "/privacidad" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Protección de datos"
        title="Política de privacidad"
        description="Explicamos con lenguaje claro qué información puede tratarse al usar esta web."
        breadcrumbs={[{ label: "Privacidad" }]}
      />
      <div className="site-shell legal-layout">
        <section>
          <p>
            <strong>Última actualización:</strong> 21 de agosto de 2026.
          </p>

          <h2>1. Responsable</h2>
          <ul>
            <li>
              <strong>Responsable:</strong> {LEGAL_OWNER.name}
            </li>
            <li>
              <strong>NIF:</strong> {LEGAL_OWNER.taxId}
            </li>
            <li>
              <strong>Dirección:</strong> {LEGAL_ADDRESS}
            </li>
            <li>
              <strong>Contacto:</strong>{" "}
              <a href={`mailto:${LEGAL_OWNER.email}`}>{LEGAL_OWNER.email}</a>
            </li>
          </ul>

          <h2>2. Datos que tratamos</h2>
          <p>
            La web no exige registro, no contiene cuentas de usuario ni permite
            publicar comentarios. Las herramientas interactivas funcionan en el
            navegador y no necesitan enviar datos del vehículo a ningún
            servidor para ofrecer sus orientaciones.
          </p>
          <p>Solo pueden tratarse las siguientes categorías:</p>
          <ul>
            <li>
              Datos que envíes voluntariamente por correo electrónico, como
              nombre, dirección electrónica y contenido de tu consulta.
            </li>
            <li>
              Datos técnicos mínimos derivados de la conexión HTTP y seguridad,
              como dirección IP, fecha y hora, URL solicitada, cabecera de
              agente de usuario y registros de diagnóstico técnico.
            </li>
            <li>
              Conexión técnica con servicios de Google: la web incluye el script
              oficial de Google AdSense con fines exclusivos de verificación de
              titularidad y revisión del sitio. Actualmente <strong>no se muestran
              anuncios</strong> ni se realiza perfilado de los visitantes.
            </li>
            <li>
              Si decides pulsar «Reproducir vídeo» en la portada, YouTube
              (Google) recibe la solicitud técnica directamente desde tu
              navegador. Kilómetro Fiel no transfiere historiales ni carga el
              reproductor antes de dicha acción voluntaria.
            </li>
          </ul>

          <h2>3. Finalidades y bases jurídicas</h2>
          <ul>
            <li>
              <strong>Atención de consultas:</strong> aplicación de medidas
              precontractuales o solicitadas por el interesado y nuestro interés
              legítimo en responder adecuadamente (art. 6.1.b y 6.1.f RGPD).
            </li>
            <li>
              <strong>Seguridad, funcionamiento y verificación técnica:</strong>{" "}
              interés legítimo en prevenir incidentes, asegurar la disponibilidad
              del servicio y verificar la propiedad del dominio ante plataformas
              tecnológicas como Google (art. 6.1.f RGPD).
            </li>
            <li>
              <strong>Futura publicidad y monetización:</strong> cuando se
              activen bloques de anuncios, la personalización publicitaria y el
              uso de cookies o identificadores no esenciales se fundamentarán en
              el <strong>consentimiento previo y explícito</strong> del usuario
              recabado a través de una plataforma de gestión de consentimiento
              (CMP) certificada (art. 6.1.a RGPD y art. 22.2 LSSI-CE).
            </li>
            <li>
              <strong>Cumplimiento de obligaciones legales:</strong> cuando una
              norma comunitaria o nacional exija conservar o facilitar datos
              (art. 6.1.c RGPD).
            </li>
          </ul>

          <h2>4. Conservación</h2>
          <p>
            Los correos de consulta se conservan únicamente durante el tiempo
            necesario para atender la solicitud y gestionar posibles
            responsabilidades derivadas. Los registros técnicos de conexión se
            conservan durante los periodos mínimos estrictamente requeridos por
            la infraestructura de alojamiento y seguridad, tras lo cual se
            suprimen o anonimizan.
          </p>

          <h2>5. Destinatarios y proveedores tecnológicos</h2>
          <p>
            No vendemos ni comercializamos datos personales. El acceso queda
            limitado a proveedores de servicios auxiliares necesarios para el
            funcionamiento técnico de la web (alojamiento en la nube, red de
            distribución de contenidos y correo electrónico) bajo contratos de
            encargo de tratamiento con las garantías debidas.
          </p>
          <p>
            <strong>Google como proveedor tecnológico:</strong> Google (Google
            Ireland Limited / Google LLC) actúa como proveedor de la
            infraestructura de verificación de AdSense y del reproductor de
            vídeo bajo demanda. Puedes consultar los términos de tratamiento de
            Google en su{" "}
            <a
              href="https://policies.google.com/technologies/ads"
              rel="noopener noreferrer"
              target="_blank"
            >
              política sobre publicidad y privacidad de Google
            </a>
            .
          </p>

          <h2>6. Derechos de los usuarios</h2>
          <p>
            Tienes derecho a solicitar el acceso a tus datos personales, su
            rectificación, supresión, limitación del tratamiento, oposición o
            portabilidad cuando proceda, así como a retirar cualquier
            consentimiento prestado sin efectos retroactivos. Para ejercerlos,
            basta con enviar un correo a{" "}
            <a href={`mailto:${LEGAL_OWNER.email}`}>{LEGAL_OWNER.email}</a>{" "}
            indicando el derecho solicitado.
          </p>
          <p>
            Asimismo, puedes presentar una reclamación ante la{" "}
            <a
              href="https://www.aepd.es/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Agencia Española de Protección de Datos (AEPD)
            </a>{" "}
            si consideras vulnerados tus derechos.
          </p>

          <h2>7. Decisiones automatizadas y menores</h2>
          <p>
            No elaboramos perfiles comerciales automatizados con efectos
            jurídicos sobre los usuarios. Los contenidos y utilidades del sitio
            están dirigidos a conductores y titulares de vehículos; no
            recopilamos de forma deliberada datos de menores de edad.
          </p>

          <h2>8. Modificaciones de la política de privacidad</h2>
          <p>
            Cualquier actualización en los tratamientos de datos —incluida la
            futura activación de la red publicitaria y su respectiva CMP— se
            reflejará de manera oportuna en este documento con indicación de su
            fecha de entrada en vigor.
          </p>
        </section>
      </div>
    </>
  );
}
