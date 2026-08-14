import Link from "next/link";
import { hero } from "@/data/hero";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { HeroVideo } from "./HeroVideo";
import { SectionNav } from "./SectionNav";
import { RoboticsIcon, AdditiveManufacturingIcon, SpaceSystemsIcon } from "./PillarIcons";

const PILLAR_ICONS: Record<string, typeof RoboticsIcon> = {
  Robotics: RoboticsIcon,
  "Additive Manufacturing": AdditiveManufacturingIcon,
  "Space Systems": SpaceSystemsIcon,
};

export function Hero() {
  return (
    <>
      <section className="relative flex h-dvh min-h-[600px] flex-col overflow-hidden bg-navy-deep text-paper">
        <HeroVideo poster="/hero-poster.svg" src="/hero.mp4" />
        {/* Dark enough at both ends to keep nav and name legible over any footage. */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-navy-deep/80 via-navy-deep/35 to-navy-deep/85" />

        <div className="relative z-20 flex flex-1 flex-col">
          <Container className="flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:py-10">
            <Link
              href="/"
              className="shrink-0 text-xl font-semibold tracking-wide text-paper no-underline hover:text-rust sm:text-2xl"
            >
              {hero.name}
            </Link>
            <SectionNav />
          </Container>

          <div className="flex flex-1 items-center">
            <Container>
              <Reveal>
                <h1 className="text-6xl leading-[0.95] font-black tracking-tight text-paper sm:text-8xl lg:text-9xl">
                  {hero.name}
                </h1>
                <p className="mt-6 max-w-2xl text-lg font-medium text-paper/90 sm:text-2xl">
                  {hero.identityLine}
                </p>
              </Reveal>
            </Container>
          </div>
        </div>
      </section>

      <Container className="py-12 sm:py-16">
        <Reveal>
          <p className="text-ink-muted">{hero.subLine}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-10 flex flex-wrap gap-6" aria-label="Focus areas">
            {hero.pillars.map((pillar) => {
              const Icon = PILLAR_ICONS[pillar];
              return (
                <li key={pillar} className="flex items-center gap-2 text-ink">
                  {Icon && <Icon className="h-5 w-5 text-rust" />}
                  <span className="text-xs font-medium tracking-widest uppercase">{pillar}</span>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-10 text-xs font-medium tracking-widest text-ink-muted uppercase">
            {hero.affiliations.join(" · ")}
          </p>
        </Reveal>
      </Container>
    </>
  );
}
