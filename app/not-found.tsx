import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="site-shell">
        <p className="eyebrow">Error 404</p>
        <h1>Esta ruta no aparece en el mapa.</h1>
        <p>
          Puede que la guía haya cambiado de dirección. Vuelve al inicio o busca
          por el síntoma que observas.
        </p>
        <div className="button-row" style={{ marginTop: "2rem" }}>
          <Link className="button button-primary" href="/">
            Volver al inicio
          </Link>
          <Link className="button button-secondary" href="/diagnostico">
            Ver diagnóstico por síntomas
          </Link>
        </div>
      </div>
    </section>
  );
}
