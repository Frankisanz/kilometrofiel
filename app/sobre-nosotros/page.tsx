import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/app/components/JsonLd";
import { PageHero } from "@/app/components/PageHero";
import { articles } from "@/lib/articles";
import { LONG_TAIL_GUIDES } from "@/lib/long-tail-guides";
import { LEGAL_OWNER, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre Kilómetro Fiel: quién está detrás y por qué existe",
  description:
    "Quién edita Kilómetro Fiel, para quién escribimos, cómo elegimos los temas y qué no vas a encontrar en nuestras guías sobre coches de más de 10 años.",
  alternates: { canonical: "/sobre-nosotros" },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `Sobre ${SITE_NAME}`,
  url: `${SITE_URL}/sobre-nosotros`,
  inLanguage: "es-ES",
  mainEntity: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icons/icon-512.png`,
    email: LEGAL_OWNER.email,
    founder: {
      "@type": "Person",
      name: LEGAL_OWNER.name,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: LEGAL_OWNER.locality,
      addressRegion: LEGAL_OWNER.province,
      addressCountry: "ES",
    },
  },
};

export default function AboutPage() {
  const guideCount = articles.length + LONG_TAIL_GUIDES.length;

  return (
    <>
      <JsonLd data={aboutSchema} />
      <PageHero
        eyebrow="Sobre nosotros"
        title="Una web para quien quiere que su coche dure, no para quien quiere venderle otro."
        description={`${SITE_NAME} es un proyecto editorial independiente con ${guideCount} guías y respuestas sobre mantenimiento, averías, ITV y equipamiento para coches con más de diez años.`}
        breadcrumbs={[{ label: "Sobre nosotros" }]}
      />
      <div className="site-shell legal-layout">
        <section>
          <h2>Quién está detrás</h2>
          <p>
            {SITE_NAME} está creado y editado por {LEGAL_OWNER.name}, desde{" "}
            {LEGAL_OWNER.locality} ({LEGAL_OWNER.province}). No pertenece a un
            fabricante, a una cadena de talleres ni a una tienda de recambios,
            y no vende productos propios. Los datos completos del titular están
            en el <Link href="/aviso-legal">aviso legal</Link>.
          </p>
          <p>
            No somos un taller y no lo pretendemos. Nuestro trabajo es
            explicar con orden lo que un propietario puede comprobar por sí
            mismo, qué significa cada síntoma y cuándo hay que dejar el coche en
            manos de un profesional. Cuando una decisión depende de medir,
            desmontar o elevar el vehículo, lo decimos.
          </p>

          <h2>Por qué coches de más de diez años</h2>
          <p>
            Buena parte de los turismos que circulan en España superan la
            década, y la mayoría de la información sobre coches está pensada
            para quien compra uno nuevo. Quien conserva un coche con años tiene
            otras preguntas: qué mantenimiento vence por tiempo aunque haga
            pocos kilómetros, qué avería merece la pena reparar, cómo preparar
            una ITV anual o qué etiqueta ambiental le corresponde.
          </p>
          <p>
            Escribimos para esas personas. Nuestro lema, «Cuida el coche que ya
            tienes», resume la idea: alargar la vida útil de un coche con
            seguridad suele ser la opción más económica y la que menos recursos
            consume.
          </p>

          <h2>Qué encontrarás aquí</h2>
          <ul>
            <li>
              <strong>Diagnóstico por síntomas:</strong> qué observar cuando el
              coche no arranca, se calienta, echa humo o enciende un testigo, y
              cuándo parar.
            </li>
            <li>
              <strong>Mantenimiento:</strong> aceite, distribución, frenos,
              batería y neumáticos con intervalos por tiempo y kilómetros.
            </li>
            <li>
              <strong>ITV y normativa:</strong> plazos, resultados, baliza V16 y
              distintivo ambiental con enlaces a la norma vigente.
            </li>
            <li>
              <strong>Herramientas interactivas:</strong> asistentes gratuitos
              para ordenar un diagnóstico, planificar el mantenimiento o elegir
              batería.
            </li>
          </ul>

          <h2>Qué no vas a encontrar</h2>
          <ul>
            <li>Rankings de productos ordenados por comisión.</li>
            <li>
              Afirmaciones de que hemos probado un producto cuando no es así.
            </li>
            <li>
              Trucos para ocultar averías antes de la ITV o para manipular
              emisiones.
            </li>
            <li>
              Diagnósticos seguros a distancia: un síntoma puede tener varias
              causas y lo explicamos así.
            </li>
          </ul>

          <h2>Cómo trabajamos y cómo nos financiamos</h2>
          <p>
            Cada guía cita sus fuentes, muestra su fecha de actualización y
            separa lo que es norma, lo que es recomendación del fabricante y lo
            que es criterio editorial. Puedes leer el proceso completo en
            nuestra <Link href="/metodologia">metodología</Link> y la lista de
            referencias en <Link href="/fuentes">fuentes</Link>.
          </p>
          <p>
            La web se financia con enlaces de afiliación claramente
            identificados y, en el futuro, con publicidad. Ni unos ni otra
            deciden qué recomendamos: si la respuesta a un problema es no
            comprar nada, lo decimos.
          </p>

          <h2>Escríbenos</h2>
          <p>
            Si detectas un error, una norma que ha cambiado o echas en falta un
            tema, nos ayuda saberlo. Tienes todas las vías en la página de{" "}
            <Link href="/contacto">contacto</Link>.
          </p>
        </section>
      </div>
    </>
  );
}
