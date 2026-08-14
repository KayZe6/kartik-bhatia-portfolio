import { hero } from "@/data/hero";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { RoboticsIcon, AdditiveManufacturingIcon, SpaceSystemsIcon } from "./PillarIcons";

const PILLAR_ICONS: Record<string, typeof RoboticsIcon> = {
  Robotics: RoboticsIcon,
  "Additive Manufacturing": AdditiveManufacturingIcon,
  "Space Systems": SpaceSystemsIcon,
};

export function Hero() {
  return (
    <Container className="pt-16 pb-12 sm:pt-24 sm:pb-16">
      <Reveal>
        <h1 className="text-4xl font-semibold text-ink sm:text-5xl">{hero.identityLine}</h1>
        <p className="mt-6 text-ink-muted">{hero.subLine}</p>
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
  );
}
