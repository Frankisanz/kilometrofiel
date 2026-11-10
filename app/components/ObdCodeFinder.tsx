"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export type ObdCodeListItem = {
  code: string;
  slug: string;
  shortName: string;
  name: string;
  severity: "alta" | "media" | "baja";
  systemLabel: string;
};

const SEVERITY_TEXT = {
  alta: "Urgencia alta",
  media: "Urgencia media",
  baja: "Urgencia baja",
} as const;

function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

// Every code is rendered in the HTML so crawlers and readers without
// JavaScript see the full list; the input only hides the non-matching rows.
export function ObdCodeFinder({ codes }: { codes: readonly ObdCodeListItem[] }) {
  const [query, setQuery] = useState("");
  const needle = normalize(query.trim());
  const visible = useMemo(
    () =>
      new Set(
        codes
          .filter((item) => {
            if (!needle) return true;
            const haystack = normalize(
              `${item.code} ${item.name} ${item.shortName} ${item.systemLabel}`,
            );
            return haystack.includes(needle.replace(/\s+/g, " "));
          })
          .map((item) => item.slug),
      ),
    [codes, needle],
  );

  return (
    <div className="obd-finder">
      <label className="obd-finder-label" htmlFor="buscar-codigo">
        Busca por código o por síntoma
      </label>
      <input
        id="buscar-codigo"
        className="obd-finder-input"
        type="search"
        inputMode="search"
        autoComplete="off"
        placeholder="Ej.: P0420, turbo, catalizador"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <p className="obd-finder-count" aria-live="polite">
        {visible.size === codes.length
          ? `${codes.length} códigos explicados`
          : `${visible.size} de ${codes.length} códigos`}
      </p>
      <ul className="obd-list">
        {codes.map((item) => (
          <li key={item.slug} hidden={!visible.has(item.slug)}>
            <Link href={`/codigos-averia/${item.slug}`} className="obd-item">
              <span className="obd-code">{item.code}</span>
              <span className="obd-item-text">
                <strong>{item.shortName}</strong>
                <span>{item.name}</span>
              </span>
              <span className={`obd-severity obd-severity-${item.severity}`}>
                {SEVERITY_TEXT[item.severity]}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {visible.size === 0 ? (
        <p className="note-box">
          No tenemos todavía una ficha para ese código. Los códigos que empiezan
          por P1 son específicos de cada fabricante: consulta la documentación
          de tu marca o lleva el código exacto al taller.
        </p>
      ) : null}
    </div>
  );
}
