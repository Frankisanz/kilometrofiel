import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

async function request(pathname = "/") {
  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async (req) => {
          const url = new URL(req.url);
          try {
            const filePath = join(process.cwd(), "public", url.pathname);
            const content = await readFile(filePath);
            const ext = url.pathname.split(".").pop();
            const contentType =
              ext === "txt"
                ? "text/plain; charset=utf-8"
                : ext === "svg"
                ? "image/svg+xml"
                : ext === "webmanifest"
                ? "application/manifest+json"
                : "application/octet-stream";
            return new Response(content, {
              status: 200,
              headers: { "content-type": contentType },
            });
          } catch {
            return new Response(`Asset not available in unit test: ${req.url}`, {
              status: 404,
            });
          }
        },
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

async function html(pathname) {
  const response = await request(pathname);
  assert.equal(response.status, 200, `${pathname} should return 200`);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  return response.text();
}

test("renders the finished Spanish homepage with core SEO and AdSense script", async () => {
  const output = await html("/");

  assert.match(output, /<html[^>]*lang="es"/i);
  assert.match(output, /<title>[^<]*Kilómetro Fiel[^<]*<\/title>/i);
  assert.match(output, /<h1>Cuida el coche que ya tienes\.<\/h1>/i);
  assert.match(output, /rel="canonical"[^>]*href="https:\/\/www\.kilometrofiel\.es\/?"/i);
  assert.match(output, /application\/ld\+json/i);
  assert.match(
    output,
    /href="https:\/\/www\.kilometrofiel\.es\/manifest\.webmanifest"/i,
  );
  assert.match(
    output,
    /pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle\.js\?client=ca-pub-5290446197600060/i,
  );
  assert.match(output, /crossorigin="anonymous"/i);
  assert.doesNotMatch(output, /codex-preview|Building your site|react-loading-skeleton/i);
});

test("links priority discovery pages directly from the homepage", async () => {
  const output = await html("/");
  const priorityPaths = [
    "/guias-de-compra/cargador-mantenedor-bateria",
    "/mantenimiento/neumaticos-dot-desgaste-presion",
    "/itv-y-normativa/baliza-v16-conectada-certificada",
    "/respuestas/temperatura-sube-atasco-baja-carretera",
  ];

  for (const pathname of priorityPaths) {
    assert.match(output, new RegExp(`href="${pathname}"`));
    const target = await html(pathname);
    assert.match(
      target,
      new RegExp(
        `href="https://www\\.kilometrofiel\\.es${pathname}"`,
      ),
    );
    assert.doesNotMatch(target, /<meta[^>]*content="noindex/i);
  }
});

test("renders every main editorial and trust route with AdSense verification script", async () => {
  const routes = [
    "/diagnostico",
    "/mantenimiento",
    "/guias-de-compra",
    "/itv-y-normativa",
    "/herramientas",
    "/respuestas",
    "/recomendaciones",
    "/sobre-nosotros",
    "/contacto",
    "/metodologia",
    "/fuentes",
    "/aviso-legal",
    "/privacidad",
    "/cookies",
  ];

  for (const route of routes) {
    const output = await html(route);
    assert.equal((output.match(/<h1\b/gi) ?? []).length, 1, `${route} h1`);
    assert.match(output, new RegExp(`href="https://www\\.kilometrofiel\\.es${route}"`));
    assert.match(
      output,
      /pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle\.js\?client=ca-pub-5290446197600060/i,
    );
  }
});

test("serves valid ads.txt file with official Google Publisher ID", async () => {
  const response = await request("/ads.txt");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/plain\b/i);
  const text = await response.text();
  assert.match(
    text,
    /^google\.com,\s*pub-5290446197600060,\s*DIRECT,\s*f08c47fec0942fa0\s*$/m,
  );
});

test("uses only direct, disclosed Amazon product links with kmfiel-21", async () => {
  const output = await html("/recomendaciones");
  const directLinks =
    output.match(
      /href="https:\/\/www\.amazon\.es\/dp\/[A-Z0-9]{10}\?tag=kmfiel-21"/g,
    ) ?? [];

  assert.equal(directLinks.length, 14);
  assert.doesNotMatch(output, /amazon\.es\/s\?/i);
  assert.match(output, /Publicidad · enlaces de afiliado/i);
  assert.match(
    output,
    /rel="sponsored nofollow noopener noreferrer"/i,
  );
});

test("publishes transparent legal, privacy and cookies policies reflecting AdSense state", async () => {
  const cookies = await html("/cookies");
  assert.match(cookies, /Google AdSense/i);
  assert.match(cookies, /verificación de titularidad/i);
  assert.match(cookies, /no se muestran anuncios/i);
  assert.match(cookies, /CMP|plataforma de gestión de consentimiento/i);

  const privacy = await html("/privacidad");
  assert.match(privacy, /Google AdSense/i);
  assert.match(privacy, /proveedor tecnológico/i);
  assert.match(privacy, /consentimiento previo y explícito/i);
  assert.match(privacy, /Francisco Javier Sanchez Fuentes/i);
});

test("renders a complete main article with safety, FAQ and sources", async () => {
  const output = await html("/diagnostico/coche-no-arranca");

  assert.match(output, /Respuesta directa/i);
  assert.match(output, /Detente y pide asistencia/i);
  assert.match(output, /Comprobaciones seguras/i);
  assert.match(output, /Cuándo llevarlo al taller/i);
  assert.match(output, /Preguntas frecuentes/i);
  assert.match(output, /Fuentes consultadas/i);
  assert.match(output, /"@type":"Article"/i);
  assert.match(output, /"@type":"FAQPage"/i);
  assert.match(
    output,
    /href="https:\/\/www\.kilometrofiel\.es\/diagnostico\/coche-no-arranca"/i,
  );
});

test("adds two relevant direct products to a commercial guide", async () => {
  const output = await html("/guias-de-compra/como-elegir-lector-obd2");
  const directLinks =
    output.match(
      /href="https:\/\/www\.amazon\.es\/dp\/[A-Z0-9]{10}\?tag=kmfiel-21"/g,
    ) ?? [];

  assert.equal(directLinks.length, 2);
  assert.match(output, /Dos fichas concretas para comparar/i);
});

test("renders a distinct long-tail answer and links it to its hub", async () => {
  const output = await html(
    "/respuestas/coche-hace-clic-no-arranca-luces-funcionan",
  );

  assert.match(output, /coche hace clic pero no arranca/i);
  assert.match(output, /Respuesta directa/i);
  assert.match(output, /Amplía la explicación principal/i);
  assert.match(output, /href="\/diagnostico\/coche-no-arranca"/i);
  assert.match(output, /Fuentes consultadas/i);
});

test("renders all three interactive tools without server errors", async () => {
  const routes = [
    "/herramientas/diagnostico-arranque",
    "/herramientas/planificador",
    "/herramientas/elegir-bateria",
  ];

  for (const route of routes) {
    const output = await html(route);
    assert.match(output, /<form\b/i);
    assert.match(output, /<button\b[^>]*type="submit"/i);
    assert.match(output, /no sustituye|no recomienda|no genera/i);
  }
});

test("returns a real 404 for an unknown editorial URL", async () => {
  const response = await request("/diagnostico/averia-inventada");
  assert.equal(response.status, 404);
  const output = await response.text();
  assert.match(output, /Esta ruta no aparece en el mapa/i);
});

test("sitemap exposes every indexable page and internal links resolve", async () => {
  const sitemapResponse = await request("/sitemap.xml");
  assert.equal(sitemapResponse.status, 200);
  const sitemap = await sitemapResponse.text();
  const pageUrls = [...sitemap.matchAll(/<loc>(https:\/\/www\.kilometrofiel\.es[^<]*)<\/loc>/g)]
    .map((match) => new URL(match[1]));

  assert.equal(pageUrls.length, 48);

  const internalPaths = new Set(["/"]);
  for (const url of pageUrls) {
    const output = await html(url.pathname);
    assert.equal(
      (output.match(/<h1\b/gi) ?? []).length,
      1,
      `${url.pathname} should have one h1`,
    );
    for (const match of output.matchAll(/<a\b[^>]*\bhref="(\/[^"#?]*)"/g)) {
      internalPaths.add(match[1] || "/");
    }
  }

  internalPaths.delete("/manifest.webmanifest");
  for (const pathname of internalPaths) {
    const response = await request(pathname);
    assert.ok(
      response.status >= 200 && response.status < 400,
      `${pathname} returned ${response.status}`,
    );
  }
});

test("links the about and contact pages from every page footer", async () => {
  const output = await html("/");

  assert.match(output, /href="\/sobre-nosotros"/);
  assert.match(output, /href="\/contacto"/);
});

test("renders the new maintenance and ITV guides with sources", async () => {
  for (const route of [
    "/itv-y-normativa/itv-frecuencia-desfavorable-negativa",
    "/itv-y-normativa/etiqueta-ambiental-coche-antiguo",
    "/mantenimiento/aceite-motor-nivel-consumo-cambio",
    "/mantenimiento/correa-distribucion-cuando-cambiar",
    "/mantenimiento/revisar-frenos-liquido-pastillas-discos",
  ]) {
    const output = await html(route);
    assert.equal((output.match(/<h1\b/gi) ?? []).length, 1, `${route} h1`);
    assert.match(output, /Respuesta directa/i);
    assert.match(output, /Fuentes consultadas/i);
    assert.match(output, /"@type":"Article"/i);
  }
});
