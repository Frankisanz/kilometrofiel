import Link from "next/link";
import {
  LEGAL_OWNER,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/site";
import {
  AMAZON_AFFILIATE_DISCLOSURE,
  affiliateEnabled,
} from "@/lib/commerce";

const footerGroups = [
  {
    title: "Resolver",
    links: [
      { label: "El coche no arranca", href: "/diagnostico/coche-no-arranca" },
      {
        label: "Testigos del cuadro",
        href: "/diagnostico/testigos-coche-significado",
      },
      { label: "Plan de mantenimiento", href: "/herramientas/planificador" },
      { label: "Elegir batería", href: "/herramientas/elegir-bateria" },
    ],
  },
  {
    title: "Aprender",
    links: [
      { label: "Mantenimiento", href: "/mantenimiento" },
      { label: "Diagnóstico", href: "/diagnostico" },
      { label: "Guías de compra", href: "/guias-de-compra" },
      { label: "ITV y normativa", href: "/itv-y-normativa" },
      { label: "Recomendaciones", href: "/recomendaciones" },
    ],
  },
  {
    title: "Confianza",
    links: [
      { label: "Metodología", href: "/metodologia" },
      { label: "Fuentes", href: "/fuentes" },
      { label: "Aviso legal", href: "/aviso-legal" },
      { label: "Privacidad", href: "/privacidad" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="site-shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="brand" href="/">
              <span className="brand-mark" aria-hidden="true" />
              <span>{SITE_NAME}</span>
            </Link>
            <p>{SITE_TAGLINE}</p>
            <p>
              Información general. El manual del vehículo y un profesional
              cualificado prevalecen ante cualquier duda de seguridad.
            </p>
          </div>
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2>{group.title}</h2>
              <ul>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {SITE_NAME} · Titular:{" "}
            {LEGAL_OWNER.name}
          </span>
          <span className="affiliate-note">
            {affiliateEnabled
              ? AMAZON_AFFILIATE_DISCLOSURE
              : "Actualmente no hay enlaces de afiliado activos. Si se incorporan, se identificarán con claridad."}
          </span>
        </div>
        <p className="footer-photo-credit">
          Fotografías editoriales:{" "}
          <a
            href="https://unsplash.com/@dancrile"
            rel="noopener noreferrer"
            target="_blank"
          >
            Dan Crile
          </a>
          ,{" "}
          <a
            href="https://unsplash.com/@tanyabarrow"
            rel="noopener noreferrer"
            target="_blank"
          >
            Tanya Barrow
          </a>
          ,{" "}
          <a
            href="https://unsplash.com/@noorvoux"
            rel="noopener noreferrer"
            target="_blank"
          >
            Frankie Cordoba
          </a>{" "}
          y{" "}
          <a
            href="https://unsplash.com/@wesleyphotography"
            rel="noopener noreferrer"
            target="_blank"
          >
            Wesley Tingey
          </a>{" "}
          en Unsplash.
        </p>
      </div>
    </footer>
  );
}
