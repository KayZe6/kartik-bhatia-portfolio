import Link from "next/link";
import { Container } from "./Container";
import { OrbitalArc } from "./OrbitalArc";
import { SectionNav } from "./SectionNav";
import { hero } from "@/data/hero";

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
        <SectionNav />
      </Container>
    </header>
  );
}
