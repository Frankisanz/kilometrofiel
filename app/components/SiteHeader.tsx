import Link from "next/link";
import { MAIN_NAVIGATION, SITE_NAME } from "@/lib/site";

export function SiteHeader() {
  const visibleNavigation = MAIN_NAVIGATION.filter(
    (item) =>
      item.href !== "/" &&
      item.href !== "/metodologia" &&
      item.href !== "/herramientas",
  );

  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <Link className="brand" href="/" aria-label={`${SITE_NAME}, inicio`}>
          <span className="brand-mark" aria-hidden="true" />
          <span>{SITE_NAME}</span>
        </Link>
        <nav className="site-nav" aria-label="Navegación principal">
          {visibleNavigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="nav-cta" href="/herramientas">
            Resolver un problema
          </Link>
        </nav>
      </div>
      <nav className="site-shell mobile-nav" aria-label="Navegación móvil">
        {visibleNavigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <Link href="/herramientas">Herramientas</Link>
      </nav>
    </header>
  );
}
