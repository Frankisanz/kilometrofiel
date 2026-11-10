import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { OBD_CODES } from "../lib/obd-codes.ts";

const libFiles = await Promise.all(
  [
    "articles.ts",
    "articles-itv-mantenimiento.ts",
    "articles-ampliacion-2026-10.ts",
    "articles-sintomas-compra-2026-10.ts",
    "long-tail-guides.ts",
    "long-tail-guides-2026-10.ts",
  ].map((name) => readFile(new URL(`../lib/${name}`, import.meta.url), "utf8")),
);
const knownSlugs = new Set(
  libFiles.flatMap((text) => [...text.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1])),
);

test("OBD code slugs are unique and match the code", () => {
  const slugs = OBD_CODES.map((code) => code.slug);
  assert.equal(new Set(slugs).size, slugs.length);
  for (const code of OBD_CODES) {
    assert.match(code.code, /^[PCBU][0-3][0-9A-F]{3}(-[PCBU][0-3][0-9A-F]{3})?$/);
    assert.equal(code.slug, code.code.toLowerCase());
  }
});

test("every OBD code page links only to content that exists", () => {
  const codeSlugs = new Set(OBD_CODES.map((code) => code.slug));
  for (const code of OBD_CODES) {
    assert.ok(code.relatedArticleSlugs.length > 0, `${code.code} needs a guide`);
    for (const slug of code.relatedArticleSlugs) {
      assert.ok(knownSlugs.has(slug), `${code.code} → missing guide ${slug}`);
    }
    for (const slug of code.relatedAnswerSlugs ?? []) {
      assert.ok(knownSlugs.has(slug), `${code.code} → missing answer ${slug}`);
    }
    for (const slug of code.relatedCodes) {
      assert.ok(codeSlugs.has(slug), `${code.code} → missing code ${slug}`);
      assert.notEqual(slug, code.slug);
    }
  }
});

test("every OBD code page has substantive, sourced content", () => {
  for (const code of OBD_CODES) {
    const words = [
      code.directAnswer,
      ...code.meaning,
      ...code.causes.flatMap((item) => [item.cause, item.clue]),
      ...code.checks,
      code.canDrive,
      ...code.workshop,
      code.itv,
      ...code.faqs.flatMap((faq) => [faq.question, faq.answer]),
    ]
      .join(" ")
      .split(/\s+/).length;
    assert.ok(words >= 300, `${code.code} has only ${words} words`);
    assert.ok(code.causes.length >= 3, `${code.code} needs causes`);
    assert.ok(code.faqs.length >= 2, `${code.code} needs FAQs`);
    assert.ok(code.sources.length >= 1, `${code.code} needs sources`);
  }
});
