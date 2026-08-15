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
          <Container className="flex justify-center py-8 sm:py-10">
            <SectionNav />
          </Container>

          <div className="flex flex-1 items-center justify-center px-6 text-center">
            <Reveal className="flex flex-col items-center gap-10 sm:gap-16 lg:gap-20">
              <p className="text-sm font-medium tracking-[0.3em] text-paper/70 uppercase sm:text-base">
                {hero.eyebrow}
              </p>
              <h1 className="text-6xl leading-[0.95] font-black tracking-tight text-paper sm:text-8xl lg:text-9xl">
                {hero.name}
              </h1>
              <p className="max-w-2xl text-lg font-medium text-paper/90 sm:text-2xl">
                {hero.identityLine}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Container className="flex flex-col items-center py-12 text-center sm:py-16">
        <Reveal>
          <p className="mx-auto max-w-2xl text-ink-muted">{hero.subLine}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-10 flex flex-wrap justify-center gap-6" aria-label="Focus areas">
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
          <ul
            className="mt-16 flex flex-wrap items-center justify-center gap-x-24 gap-y-20"
            aria-label="Organizations and programs"
          >
            {hero.affiliations.map((logo) => (
              <li
                key={logo.src}
                className="flex h-36 w-64 items-center justify-center sm:h-44 sm:w-80 lg:h-52 lg:w-96"
              >
                {/* Solid-white-background logos: multiply blend hides the white
                    against the cream page (result = backdrop * source / 255,
                    so white source pixels just become the backdrop color).
                    Dark-background logos aren't fixed by this — see the report
                    on which files those are. */}
                <Link
                  href={logo.href}
                  className="flex h-full w-full items-center justify-center transition-transform duration-200 ease-out hover:scale-110"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- decorative logo strip, not a next/image LCP candidate */}
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    className="h-full w-full object-contain mix-blend-multiply"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </>
  );
}
