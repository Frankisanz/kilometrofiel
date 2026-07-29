import Link from "next/link";

export const metadata = {
  title: "Sin conexión",
  robots: { index: false, follow: false },
};

export default function OfflinePage() {
  return (
    <section className="page-hero">
      <div className="site-shell">
        <p className="eyebrow">Modo sin conexión</p>
        <h1>Ahora mismo no hay conexión.</h1>
        <p>
          Las guías visitadas anteriormente pueden seguir disponibles. Cuando
          recuperes la conexión, vuelve a intentarlo.
        </p>
        <div className="button-row" style={{ marginTop: "2rem" }}>
          <Link className="button button-primary" href="/">
            Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  );
}
