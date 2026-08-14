import { skills } from "@/data/skills";
import { certifications } from "@/data/certifications";
import { achievements } from "@/data/achievements";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SkillChip } from "./SkillChip";
import { InteractiveSkillGroups } from "./InteractiveSkillGroups";

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-line py-16 sm:py-20">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">{skills.heading}</h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10">
            <InteractiveSkillGroups groups={skills.groups} />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 rounded-xl border border-line bg-surface p-6">
            <h3 className="text-sm font-semibold tracking-wide text-ink uppercase">Currently learning</h3>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Currently learning">
              {skills.currentlyLearning.map((item) => (
                <li key={item}>
                  <SkillChip>{item}</SkillChip>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {certifications.map((group) => (
              <div key={group.label} className="rounded-xl border border-line bg-surface p-6">
                <h3 className="text-sm font-semibold tracking-wide text-ink uppercase">{group.label}</h3>
                <ul className="mt-4 flex flex-col gap-2 text-ink-muted">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden="true" className="text-rust">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-16 rounded-xl border border-line bg-surface p-6">
            <h3 className="text-sm font-semibold tracking-wide text-ink uppercase">Achievements</h3>
            <ul className="mt-4 flex flex-col gap-6">
              {achievements.map((achievement, i) => (
                <li key={achievement.title} className={i > 0 ? "border-t border-line pt-6" : ""}>
                  <p className="font-medium text-ink">{achievement.title}</p>
                  <p className="mt-1 text-ink-muted">{achievement.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
