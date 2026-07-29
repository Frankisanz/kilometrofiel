import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: readonly BreadcrumbItem[] }) {
  return (
    <nav aria-label="Migas de pan">
      <ol className="breadcrumbs">
        <li>
          <Link href="/">Inicio</Link>
        </li>
        {items.map((item) => (
          <li key={`${item.label}-${item.href ?? "current"}`}>
            {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
          </li>
        ))}
      </ol>
    </nav>
  );
}
