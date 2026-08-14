import Link from "next/link";
import { Container } from "./Container";
import { OrbitalArc } from "./OrbitalArc";
import { hero } from "@/data/hero";

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Work", href: "/#work" },
  { label: "Projects", href: "/#projects" },
  { label: "Outreach", href: "/#outreach" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  return (
    <header className="relative overflow-hidden bg-navy-deep text-paper">
      <OrbitalArc className="pointer-events-none absolute inset-x-0 top-0 h-24 w-full text-paper" />
      <Container className="relative flex items-center justify-between gap-6 py-5">
        <Link
          href="/"
          className="shrink-0 text-sm font-medium tracking-wide text-paper no-underline hover:text-rust"
        >
          {hero.name}
        </Link>
        <nav aria-label="Section navigation" className="flex gap-5 overflow-x-auto text-sm">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="shrink-0 text-paper/80 no-underline hover:text-rust">
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
