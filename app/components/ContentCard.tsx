import Link from "next/link";

type ContentCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  linkLabel?: string;
};

export function ContentCard({
  eyebrow,
  title,
  description,
  href,
  linkLabel = "Leer la guía",
}: ContentCardProps) {
  return (
    <article className="content-card">
      <span className="kicker">{eyebrow}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link className="card-link" href={href}>
        {linkLabel}
      </Link>
    </article>
  );
}
