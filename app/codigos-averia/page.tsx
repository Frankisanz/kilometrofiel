import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/app/components/JsonLd";
import { ObdCodeFinder } from "@/app/components/ObdCodeFinder";
import { PageHero } from "@/app/components/PageHero";
import { EDITORIAL_MEDIA } from "@/lib/editorial-media";
import {
  OBD_CODES,
  OBD_HUB,
  OBD_SYSTEM_LABELS,
  OBD_SYSTEM_ORDER,
  obdCodePath,
} from "@/lib/obd-codes";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { ORGANIZATION_REF, WEBSITE_ID } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: OBD_HUB.title,
  description: OBD_HUB.description,
  alternates: { canonical: OBD_HUB.path },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: SITE_NAME,
    url: OBD_HUB.path,
    title: OBD_HUB.title,
    description: OBD_HUB.description,
    images: [EDITORIAL_MEDIA.dashboard.src],
  },
};

const orderedCodes = OBD_SYSTEM_ORDER.flatMap((system) =>
  OBD_CODES.filter((code) => code.system === system),
);

const STRUCTURE = [
  { part: "Primera letra", detail: "Sistema: P motor y cambio (powertrain), C chasis (ABS, suspensión), B carrocería (airbag, confort) y U red de comunicación entre centralitas." },
  { part: "Primer dígito", detail: "0 o 2: código genérico, con el mismo significado en todas las marcas. 1 o 3: código del fabricante, que hay que consultar en su documentación." },
  { part: "Segundo dígito", detail: "Subsistema en los códigos P: 1 y 2 mezcla y alimentación, 3 encendido, 4 emisiones, 5 velocidad y ralentí, 6 centralita, 7 a 9 cambio." },
  { part: "Últimos dígitos", detail: "La avería concreta. Por ejemplo, en P0301 el último 1 indica el cilindro 1." },
] as const;

export default function ObdCodesHubPage() {
  const setId = `${SITE_URL}${OBD_HUB.path}#codigos`;

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: OBD_HUB.title,
    description: OBD_HUB.description,
    url: `${SITE_URL}${OBD_HUB.path}`,
    inLanguage: "es-ES",
    isPartOf: { "@id": WEBSITE_ID },
    publisher: ORGANIZATION_REF,
    mainEntity: {
      "@type": "DefinedTermSet",
      "@id": setId,
      name: "Códigos de avería OBD2 genéricos explicados",
      inLanguage: "es-ES",
      hasDefinedTerm: orderedCodes.map((code) => ({
        "@type": "DefinedTerm",
        "@id": `${SITE_URL}${obdCodePath(code)}#codigo`,
        name: code.code,
        termCode: code.code,
        description: code.name,
        url: `${SITE_URL}${obdCodePath(code)}`,
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Códigos de avería OBD2",
        item: `${SITE_URL}${OBD_HUB.path}`,
      },
    ],
  };

  return (
    <>
      <PageHero
        eyebrow="Diagnóstico · Códigos OBD2"
        title="Códigos de avería OBD2 explicados, sin alarmismo"
        description="Has leído un código con un lector OBD2 y quieres saber qué significa. Aquí tienes qué indica, las causas más probables en un coche con años, si puedes seguir circulando y qué revisar antes de cambiar piezas."
        media={EDITORIAL_MEDIA.dashboard}
        breadcrumbs={[{ label: "Códigos de avería OBD2" }]}
      />

      <div className="site-shell article-shell">
        <article className="article-body">
          <section className="answer-box" aria-labelledby="respuesta-directa">
            <h2 id="respuesta-directa">Respuesta directa</h2>
            <p>
              Un código OBD2 indica qué condición ha detectado la centralita, no
              qué pieza hay que cambiar. Anota el código exacto y los datos
              congelados antes de borrar nada, busca su ficha y revisa primero
              las causas sencillas. Si el testigo de motor parpadea, el coche
              pierde fuerza de golpe o aparece un testigo rojo, detente en un
              lugar seguro antes de seguir leyendo.
            </p>
          </section>

          <section aria-labelledby="buscar">
            <h2 id="buscar">Busca tu código</h2>
            <p>
              Ordenados por sistema: encendido, mezcla, alimentación, sensores,
              temperatura, turbo, emisiones, tensión y cambio.
            </p>
            <ObdCodeFinder
              codes={orderedCodes.map((code) => ({
                code: code.code,
                slug: code.slug,
                shortName: code.shortName,
                name: code.name,
                severity: code.severity,
                systemLabel: OBD_SYSTEM_LABELS[code.system],
              }))}
            />
          </section>

          <section aria-labelledby="como-leer">
            <h2 id="como-leer">Cómo se lee un código OBD2</h2>
            <p>
              Todos los coches de gasolina vendidos en la Unión Europea desde
              2001 y los diésel desde 2004 incorporan el sistema de
              autodiagnóstico EOBD, equivalente europeo del OBD2, con una toma
              normalizada bajo el volante. Los códigos tienen siempre una letra
              y cuatro cifras:
            </p>
            <table className="obd-causes">
              <thead>
                <tr>
                  <th scope="col">Parte</th>
                  <th scope="col">Qué indica</th>
                </tr>
              </thead>
              <tbody>
                {STRUCTURE.map((row) => (
                  <tr key={row.part}>
                    <td>
                      <strong>{row.part}</strong>
                    </td>
                    <td>{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>
              «Banco 1» es el lado del motor donde está el cilindro 1; en un
              motor de cuatro cilindros en línea solo existe banco 1. «Sensor 1»
              es la sonda lambda anterior al catalizador y «sensor 2», la
              posterior.
            </p>
          </section>

          <section aria-labelledby="antes-de-borrar">
            <h2 id="antes-de-borrar">Antes de borrar el código</h2>
            <ul>
              <li>
                Anota el código exacto, si está confirmado o pendiente, y los
                datos congelados (revoluciones, temperatura, carga, velocidad).
              </li>
              <li>
                Borrar no repara nada: el testigo volverá cuando el sistema
                detecte de nuevo el fallo y, mientras, se pierden pistas útiles
                para el taller.
              </li>
              <li>
                En turismos Euro 5 y posteriores, la ITV conecta un equipo a la
                toma OBD. Un borrado reciente reinicia los monitores de
                preparación y puede detectarse.
              </li>
              <li>
                Si aparecen muchos códigos a la vez en sistemas distintos,
                revisa primero la batería: una tensión baja genera códigos en
                varias centralitas.
              </li>
            </ul>
          </section>

          <section aria-labelledby="mas-ayuda">
            <h2 id="mas-ayuda">Guías para seguir</h2>
            <ul>
              <li>
                <Link href="/guias-de-compra/como-elegir-lector-obd2">
                  Cómo elegir un lector OBD2 y qué no puede diagnosticar
                </Link>
              </li>
              <li>
                <Link href="/diagnostico/testigos-coche-significado">
                  Testigos del coche: qué significa cada color
                </Link>
              </li>
              <li>
                <Link href="/respuestas/obd2-conecta-pero-no-lee-codigos">
                  El OBD2 conecta pero no lee códigos
                </Link>
              </li>
              <li>
                <Link href="/diagnostico/coche-pierde-potencia-modo-emergencia">
                  El coche pierde potencia o entra en modo emergencia
                </Link>
              </li>
            </ul>
          </section>
        </article>

        <aside className="article-aside" aria-label="Códigos por sistema">
          <div className="aside-card">
            <h2>Por sistema</h2>
            <ul>
              {OBD_SYSTEM_ORDER.map((system) => {
                const first = OBD_CODES.find((code) => code.system === system);
                return first ? (
                  <li key={system}>
                    <Link href={obdCodePath(first)}>
                      {OBD_SYSTEM_LABELS[system]}
                    </Link>
                  </li>
                ) : null;
              })}
            </ul>
            <p style={{ marginTop: "1rem" }}>
              <Link href="/metodologia">Cómo revisamos el contenido</Link>
            </p>
          </div>
        </aside>
      </div>

      <JsonLd data={collectionSchema} />
      <JsonLd data={breadcrumbSchema} />
    </>
  );
}
