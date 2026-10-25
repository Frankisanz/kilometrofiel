# Kilómetro Fiel

Guías y herramientas en español para propietarios de coches de más de diez
años. La web prioriza búsquedas por síntomas, mantenimiento preventivo, ITV y
elección responsable de equipamiento.

## Desarrollo

```bash
npm install
npm run dev
```

La aplicación usa Next.js App Router sobre Vinext y se prepara para desplegarse
con Sites. El contenido principal vive en:

- `lib/articles.ts`, `lib/articles-itv-mantenimiento.ts` y
  `lib/articles-ampliacion-2026-10.ts`: 32 guías troncales.
- `lib/long-tail-guides.ts`: respuestas a diez consultas específicas.
- `lib/commerce.ts`: reglas y recomendaciones de afiliación.
- `app/components`: interfaz y cuatro asistentes interactivos (incluida la
  calculadora de la ITV, cuya lógica está en `lib/itv-schedule.ts`).

## Calidad

```bash
npm run lint
npm test
```

`npm test` compila la aplicación antes de ejecutar pruebas sobre el HTML
renderizado. Las guías muestran fuentes, fecha de revisión, señales de riesgo,
límites del diagnóstico y enlaces relacionados.

## SEO, GEO e imágenes

- `/llms.txt` y `/llms-full.txt` se generan desde los mismos datos que las páginas (`lib/llms.ts`): índice y respuestas directas para asistentes de IA.
- `robots.txt` permite explícitamente los rastreadores de búsqueda con IA (`app/robots.ts`).
- Las guías y respuestas comparten una entidad `Organization` con `@id` estable y citan sus fuentes en `citation` (`lib/structured-data.ts`).
- Infografías propias en `public/media/infografias/`: el contenido está en `scripts/infographics.data.mjs` y se regeneran con `node scripts/build-infographics.mjs` (necesita Playwright con Chromium, que no es dependencia del proyecto). El script también reescribe `lib/infographics.generated.ts`.

## Afiliación

Kilómetro Fiel usa el ID independiente `kmfiel-21`. Los enlaces comerciales se
marcan como publicidad y con `rel="sponsored nofollow"`. No se publican precios,
disponibilidad, imágenes o valoraciones de Amazon sin una fuente autorizada y
actualizada.
