import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/app/components/PageHero";
import {
  EDITORIAL_PRINCIPLES,
  OFFICIAL_BASE_SOURCES,
} from "@/lib/site";
import {
  AMAZON_AFFILIATE_DISCLOSURE,
  EDITORIAL_INDEPENDENCE_NOTICE,
} from "@/lib/commerce";

export const metadata: Metadata = {
  title: "Cómo elaboramos y revisamos nuestras guías",
  description:
    "Metodología editorial de Kilómetro Fiel: fuentes, seguridad, revisión, compatibilidad y separación entre contenido y afiliación.",
  alternates: { canonical: "/metodologia" },
};

export default function MethodologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Metodología editorial"
        title="Consejos útiles, límites visibles y fuentes que puedes comprobar."
        description="No sustituimos el manual del vehículo ni un diagnóstico profesional. Nuestro trabajo es ayudarte a entender mejor el problema, decidir el siguiente paso seguro y evitar compras innecesarias."
        breadcrumbs={[{ label: "Metodología" }]}
      />
      <div className="site-shell legal-layout">
        <section>
          <p className="answer-box">
            <strong>Última revisión de esta política: 29 de julio de 2026.</strong>{" "}
            Cada guía muestra además su propia fecha de actualización y sus
            fuentes específicas.
          </p>

          <h2>Cómo preparamos una guía</h2>
          <ol>
            <li>
              <strong>Definimos una pregunta concreta.</strong> Una página debe
              resolver una necesidad real, no existir únicamente para atraer
              una variante de palabra clave.
            </li>
            <li>
              <strong>Separamos síntomas de causas.</strong> Un síntoma puede
              tener varias explicaciones; las ordenamos por señales
              observables, sin convertir una hipótesis en certeza.
            </li>
            <li>
              <strong>Consultamos fuentes primarias.</strong> Priorizamos DGT,
              BOE, Ministerio de Industria, normativa europea y documentación
              oficial del fabricante.
            </li>
            <li>
              <strong>Marcamos los límites de seguridad.</strong> Indicamos
              cuándo detener el vehículo, llamar a asistencia o dejar la
              intervención a un taller.
            </li>
            <li>
              <strong>Revisamos actualidad y enlaces.</strong> Las normas,
              listados de dispositivos y manuales pueden cambiar; los
              revisamos y corregimos cuando detectamos una actualización.
            </li>
          </ol>

          <h2>Nuestros seis principios</h2>
          <div className="card-grid two">
            {EDITORIAL_PRINCIPLES.map((principle) => (
              <article className="content-card" key={principle.title}>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>

          <h2>Fuentes y jerarquía de evidencia</h2>
          <p>
            Una cifra o una obligación legal debe poder rastrearse. Damos
            prioridad a la norma vigente, el listado oficial o el manual
            específico frente a resúmenes comerciales o publicaciones sin
            autoría identificable.
          </p>
          <ul className="source-list">
            {OFFICIAL_BASE_SOURCES.map((source) => (
              <li key={source.url}>
                <a href={source.url} rel="noopener noreferrer" target="_blank">
                  {source.name}
                </a>
                : {source.scope}
              </li>
            ))}
          </ul>
          <p>
            Puedes consultar la relación ampliada en nuestra página de{" "}
            <Link href="/fuentes">fuentes oficiales</Link>.
          </p>

          <h2>Cómo tratamos las recomendaciones comerciales</h2>
          <p>{EDITORIAL_INDEPENDENCE_NOTICE}</p>
          <p className="note-box">
            <strong>Declaración de Amazon:</strong>{" "}
            {AMAZON_AFFILIATE_DISCLOSURE}
          </p>
          <p>
            Los enlaces pagados se marcan junto al botón. Antes de disponer de
            una fuente autorizada y actualizada no copiamos precios,
            disponibilidad, fotografías, estrellas ni reseñas de una tienda.
            Tampoco afirmamos que un producto ha sido probado si no existe una
            prueba propia documentada.
          </p>

          <h2>Correcciones y contacto</h2>
          <p>
            Si detectas una norma desactualizada, un enlace roto o un dato que
            pueda inducir a error, escríbenos a{" "}
            <a href="mailto:Amargued@gmail.com">Amargued@gmail.com</a>. Revisamos
            las correcciones relevantes y actualizamos la fecha de la guía
            cuando el cambio afecta a su contenido.
          </p>
        </section>
      </div>
    </>
  );
}
