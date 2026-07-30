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
            <strong>Última actualización:</strong> 30 de julio de 2026.
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
            La web no exige registro, no contiene cuentas ni permite publicar
            comentarios. Las herramientas funcionan en el navegador y no
            necesitan enviar los datos del vehículo para generar el resultado.
          </p>
          <p>Solo pueden tratarse estas categorías:</p>
          <ul>
            <li>
              Datos que envíes voluntariamente por correo, como nombre,
              dirección electrónica y contenido de la consulta.
            </li>
            <li>
              Datos técnicos mínimos asociados a la conexión y seguridad, como
              dirección IP, fecha, URL solicitada, agente de usuario y registros
              de error, gestionados por la infraestructura de alojamiento.
            </li>
            <li>
              Si decides reproducir el vídeo externo, YouTube puede recibir
              datos técnicos de la conexión directamente desde tu navegador.
              Kilómetro Fiel no recibe ese historial ni carga el reproductor
              antes de tu acción.
            </li>
          </ul>

          <h2>3. Finalidades y bases jurídicas</h2>
          <ul>
            <li>
              <strong>Responder consultas:</strong> aplicar medidas solicitadas
              por el interesado y nuestro interés legítimo en atender la
              comunicación.
            </li>
            <li>
              <strong>Servir y proteger la web:</strong> interés legítimo en
              prevenir abusos, diagnosticar errores y mantener la seguridad.
            </li>
            <li>
              <strong>Cumplir obligaciones legales:</strong> cuando una norma
              exija conservar o comunicar determinada información.
            </li>
          </ul>
          <p>
            Las bases se interpretan conforme al artículo 6 del{" "}
            <a
              href="https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32016R0679"
              rel="noopener noreferrer"
              target="_blank"
            >
              Reglamento (UE) 2016/679
            </a>{" "}
            y a la{" "}
            <a
              href="https://www.boe.es/eli/es/lo/2018/12/05/3/con"
              rel="noopener noreferrer"
              target="_blank"
            >
              Ley Orgánica 3/2018
            </a>
            .
          </p>

          <h2>4. Conservación</h2>
          <p>
            Las consultas se conservan mientras resulte necesario para
            responder y atender posibles responsabilidades. Los registros
            técnicos se mantienen durante el plazo limitado que configure el
            proveedor para seguridad y funcionamiento. Después se eliminan o
            anonimizan, salvo obligación legal.
          </p>

          <h2>5. Destinatarios y proveedores</h2>
          <p>
            No vendemos datos personales. Pueden acceder proveedores de
            alojamiento, red, seguridad o correo únicamente para prestar sus
            servicios y bajo las garantías aplicables. Una transferencia fuera
            del Espacio Económico Europeo, si se produjera, debe ampararse en
            una decisión de adecuación, cláusulas contractuales tipo u otro
            mecanismo válido.
          </p>
          <p>
            YouTube, servicio de Google, actúa conforme a sus propias políticas
            cuando pulsas para cargar el vídeo. Puedes evitar esa conexión
            simplemente no reproduciéndolo y continuar usando el resto de la
            web con normalidad.
          </p>

          <h2>6. Tus derechos</h2>
          <p>
            Puedes solicitar acceso, rectificación, supresión, oposición,
            limitación, portabilidad cuando proceda y retirar un consentimiento
            sin efectos retroactivos. Escribe a{" "}
            <a href={`mailto:${LEGAL_OWNER.email}`}>{LEGAL_OWNER.email}</a>{" "}
            indicando el derecho que deseas ejercer. Podremos pedir información
            proporcionada para verificar la identidad sin recopilar más de lo
            necesario.
          </p>
          <p>
            También puedes reclamar ante la{" "}
            <a
              href="https://www.aepd.es/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Agencia Española de Protección de Datos
            </a>
            .
          </p>

          <h2>7. Decisiones automatizadas y menores</h2>
          <p>
            No adoptamos decisiones con efectos jurídicos mediante perfiles
            automatizados. La web se dirige a conductores y propietarios; no
            solicitamos deliberadamente datos de menores.
          </p>

          <h2>8. Cambios en esta política</h2>
          <p>
            Actualizaremos esta página si añadimos formularios, analítica,
            publicidad u otros tratamientos. La fecha superior permite
            identificar la versión vigente.
          </p>
        </section>
      </div>
    </>
  );
}
