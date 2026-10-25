// Genera las infografías propias de public/media/infografias a partir de
// scripts/infographics.data.mjs. Requiere Playwright con Chromium instalado
// (no es dependencia del proyecto): `node scripts/build-infographics.mjs`.
import { mkdir, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { join } from "node:path";
import sharp from "sharp";
import { INFOGRAPHICS } from "./infographics.data.mjs";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const WIDTH = 1200;
const HEIGHT = 675;
const OUT_DIR = join(process.cwd(), "public", "media", "infografias");

const TONES = {
  red: { bg: "#842f25", fg: "#fffdf8", dot: "#ff8a73" },
  amber: { bg: "#fff0b9", fg: "#14201c", dot: "#e0a400" },
  green: { bg: "#245f3d", fg: "#fffdf8", dot: "#d9ff67" },
  petrol: { bg: "#163d35", fg: "#fffdf8", dot: "#d9ff67" },
  steel: { bg: "#cbd2cc", fg: "#14201c", dot: "#526059" },
  light: { bg: "#fffdf8", fg: "#14201c", dot: "#cbd2cc" },
  blue: { bg: "#2c4a7a", fg: "#fffdf8", dot: "#9cc0ff" },
  dark: { bg: "#14201c", fg: "#fffdf8", dot: "#526059" },
};

const escape = (text) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function card({ tone, head, text }) {
  const t = TONES[tone];
  return `<div class="card" style="background:${t.bg};color:${t.fg}">
    <span class="dot" style="background:${t.dot}"></span>
    <h3>${escape(head)}</h3><p>${escape(text)}</p></div>`;
}

function body(item) {
  switch (item.layout) {
    case "cards":
      return `<div class="grid g${item.cards.length}">${item.cards.map(card).join("")}</div>`;
    case "dot":
      return `<div class="dotrow">
        <div class="tyre"><span class="mono small">${escape(item.dot.prefix)}</span>
          <span class="mono big"><b>${item.dot.week}</b><i>${item.dot.year}</i></span>
          <span class="legend"><b>semana</b> <i>año</i></span></div>
        <div class="grid g1">${item.cards.map(card).join("")}</div></div>`;
    case "table":
      return `<table class="${item.compact ? "compact" : ""}"><thead><tr>${item.columns.map((c) => `<th>${escape(c)}</th>`).join("")}</tr></thead>
        <tbody>${item.rows
          .map((row) => {
            const t = TONES[row.tone];
            return `<tr>${row.cells
              .map((cell, i) =>
                i === 0
                  ? `<td class="lead" style="background:${t.bg};color:${t.fg}">${escape(cell)}</td>`
                  : `<td>${escape(cell)}</td>`,
              )
              .join("")}</tr>`;
          })
          .join("")}</tbody></table>`;
    case "timeline":
      return `<div class="timeline">${item.bands
        .map((band) => {
          const t = TONES[band.tone];
          return `<div class="band" style="background:${t.bg};color:${t.fg}"><span>${escape(band.head)}</span><strong>${escape(band.text)}</strong></div>`;
        })
        .join("")}</div>`;
    case "steps":
      return `<ol class="steps">${item.steps.map((step) => `<li>${escape(step)}</li>`).join("")}</ol>`;
    default:
      throw new Error(`Layout desconocido: ${item.layout}`);
  }
}

function page(item) {
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{width:${WIDTH}px;height:${HEIGHT}px;background:#f4efe5;color:#14201c;font-family:Inter,sans-serif;
    padding:44px 56px 0;display:flex;flex-direction:column;position:relative;overflow:hidden}
  body::before{content:"";position:absolute;inset:0;opacity:.35;background-image:linear-gradient(rgb(20 32 28/5%) 1px,transparent 1px),linear-gradient(90deg,rgb(20 32 28/5%) 1px,transparent 1px);background-size:28px 28px}
  header,main,footer{position:relative}
  .kicker{font:600 17px "JetBrains Mono",monospace;letter-spacing:.06em;text-transform:uppercase;color:#ad341c}
  h1{font:800 46px/1.08 "Inter Display",Inter,sans-serif;letter-spacing:-.02em;margin-top:10px;max-width:1050px}
  main{flex:1;display:flex;flex-direction:column;justify-content:center;gap:18px;padding:22px 0}
  .grid{display:grid;gap:18px}
  .g1{grid-template-columns:1fr}.g6{grid-template-columns:repeat(3,1fr)}.g2{grid-template-columns:1fr 1fr}.g3{grid-template-columns:repeat(3,1fr)}.g4{grid-template-columns:1fr 1fr}
  .card{border-radius:22px;padding:22px 24px;box-shadow:0 18px 40px rgb(13 43 37/10%);border:1px solid rgb(20 32 28/8%)}
  .g3 .card{min-height:250px}
  .g1 .card{padding:16px 22px}
  .dot{display:inline-block;width:16px;height:16px;border-radius:50%;margin-bottom:10px}
  .g1 .dot{display:none}
  h3{font:700 26px/1.15 Inter,sans-serif;margin-bottom:8px}
  .g1 h3{font-size:22px;margin-bottom:4px}
  p{font:400 20px/1.4 Inter,sans-serif}
  .g1 p{font-size:18px}
  .g6 .card{padding:18px 20px}.g6 .dot{display:none}.g6 h3{font-size:23px}.g6 p{font-size:18px}
  table.compact{font-size:21px;border-spacing:0 7px}table.compact td{padding:12px 18px}
  .note{font:500 18px/1.4 Inter,sans-serif;color:#2f3c36;border-left:5px solid #f05a39;padding-left:14px}
  table{width:100%;border-collapse:separate;border-spacing:0 10px;font:500 23px Inter,sans-serif}
  th{text-align:left;font:600 16px "JetBrains Mono",monospace;text-transform:uppercase;color:#526059;padding:0 18px}
  td{background:#fffdf8;padding:18px}
  td:first-child{border-radius:16px 0 0 16px}td:last-child{border-radius:0 16px 16px 0}
  td.lead{font-weight:800;width:300px}
  .timeline{display:grid;grid-template-columns:4fr 6fr 5fr;gap:8px}
  .band{border-radius:18px;padding:28px 26px;min-height:220px;display:flex;flex-direction:column;justify-content:space-between}
  .band span{font:600 22px "JetBrains Mono",monospace}
  .band strong{font:800 44px/1.05 "Inter Display",Inter,sans-serif}
  .steps{list-style:none;counter-reset:s;display:grid;gap:14px}
  .steps li{counter-increment:s;background:#fffdf8;border-radius:18px;padding:16px 22px 16px 82px;position:relative;font:500 22px/1.35 Inter,sans-serif;box-shadow:0 10px 30px rgb(13 43 37/8%)}
  .steps li::before{content:counter(s);position:absolute;left:20px;top:50%;transform:translateY(-50%);width:44px;height:44px;border-radius:50%;background:#0d2b25;color:#d9ff67;font:800 24px/44px Inter,sans-serif;text-align:center}
  .dotrow{display:grid;grid-template-columns:470px 1fr;gap:26px;align-items:center}
  .tyre{background:#14201c;color:#cbd2cc;border-radius:28px;padding:34px 30px;display:flex;flex-direction:column;gap:10px;border:14px solid #2f3c36}
  .mono{font-family:"JetBrains Mono",monospace}
  .small{font-size:28px;letter-spacing:.08em}
  .big{font-size:112px;font-weight:800;line-height:1;letter-spacing:.04em}
  .big b{color:#d9ff67}.big i{color:#ff8a73;font-style:normal}
  .legend{font:600 22px "JetBrains Mono",monospace}.legend b{color:#d9ff67;margin-right:120px}.legend i{color:#ff8a73;font-style:normal}
  footer{height:58px;margin:0 -56px;padding:0 56px;background:#0d2b25;color:#fffdf8;display:flex;align-items:center;justify-content:space-between;font:600 19px Inter,sans-serif}
  footer em{font-style:normal;color:#d9ff67;font-family:"JetBrains Mono",monospace;font-size:17px}
  </style></head><body>
  <header><div class="kicker">${escape(item.kicker)}</div><h1>${escape(item.title)}</h1></header>
  <main>${body(item)}${item.note ? `<div class="note">${escape(item.note)}</div>` : ""}</main>
  <footer><span>Kilómetro Fiel · Cuida el coche que ya tienes</span><em>kilometrofiel.es</em></footer>
  </body></html>`;
}

await mkdir(OUT_DIR, { recursive: true });
const browser = await chromium.launch();
const tab = await browser.newPage({ viewport: { width: WIDTH, height: HEIGHT } });

for (const item of INFOGRAPHICS) {
  await tab.setContent(page(item), { waitUntil: "load" });
  const overflow = await tab.evaluate(() => {
    const main = document.querySelector("main");
    return main.scrollHeight > main.clientHeight + 1;
  });
  if (overflow) throw new Error(`${item.slug}: el contenido no cabe en ${WIDTH}x${HEIGHT}`);
  const png = await tab.screenshot({ type: "png" });
  const base = join(OUT_DIR, item.slug);
  await sharp(png).jpeg({ quality: 86, mozjpeg: true }).toFile(`${base}.jpg`);
  for (const width of [480, 800, WIDTH]) {
    const suffix = width === WIDTH ? "" : `-${width}`;
    const resized = sharp(png).resize({ width });
    await resized.clone().webp({ quality: 86 }).toFile(`${base}${suffix}.webp`);
    await resized.clone().avif({ quality: 60 }).toFile(`${base}${suffix}.avif`);
  }
  console.log(`✓ ${item.slug}`);
}

await browser.close();

// Manifiesto tipado que usa la web (páginas, datos estructurados y sitemap).
const manifest = INFOGRAPHICS.map(({ slug, title, alt }) => ({ slug, title, alt }));
await writeFile(
  join(process.cwd(), "lib", "infographics.generated.ts"),
  `// Generado por scripts/build-infographics.mjs. No editar a mano.\n` +
    `export const INFOGRAPHIC_ENTRIES = ${JSON.stringify(manifest, null, 2)} as const;\n`,
);
