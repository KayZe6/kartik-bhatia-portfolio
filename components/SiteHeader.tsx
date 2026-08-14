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
      <OrbitalArc className="pointer-events-none absolute inset-0 h-full w-full text-paper" />
      <Container className="relative flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:py-10">
        <Link
          href="/"
          className="shrink-0 text-xl font-semibold tracking-wide text-paper no-underline hover:text-rust sm:text-2xl"
        >
          {hero.name}
        </Link>
        <nav aria-label="Section navigation" className="flex gap-6 overflow-x-auto text-base font-medium sm:gap-8">
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
