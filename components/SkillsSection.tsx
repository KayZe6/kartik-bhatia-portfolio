import { skills } from "@/data/skills";
import { certifications } from "@/data/certifications";
import { achievements } from "@/data/achievements";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-line py-16 sm:py-20">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">{skills.heading}</h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {skills.groups.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-semibold tracking-wide text-ink uppercase">{group.category}</h3>
                <p className="mt-3 text-ink-muted">{group.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10">
            <h3 className="text-sm font-semibold tracking-wide text-ink uppercase">Currently learning</h3>
            <p className="mt-3 text-ink-muted">{skills.currentlyLearning.join(" · ")}</p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {certifications.map((group) => (
              <div key={group.label}>
                <h3 className="text-sm font-semibold tracking-wide text-ink uppercase">{group.label}</h3>
                <ul className="mt-3 flex flex-col gap-1 text-ink-muted">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14">
            <h3 className="text-sm font-semibold tracking-wide text-ink uppercase">Achievements</h3>
            <ul className="mt-4 flex flex-col gap-5">
              {achievements.map((achievement) => (
                <li key={achievement.title}>
                  <p className="font-medium text-ink">{achievement.title}</p>
                  <p className="text-ink-muted">{achievement.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
