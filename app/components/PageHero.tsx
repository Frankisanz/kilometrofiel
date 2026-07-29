import { Breadcrumbs } from "@/app/components/Breadcrumbs";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs?: readonly { label: string; href?: string }[];
  children?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs = [],
  children,
}: PageHeroProps) {
  return (
    <header className="page-hero">
      <div className="site-shell">
        {breadcrumbs.length > 0 ? <Breadcrumbs items={breadcrumbs} /> : null}
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
      </div>
    </header>
  );
}
