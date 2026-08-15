import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { ExperienceLogos } from "./ExperienceLogos";
import { outreach } from "@/data/outreach";

export function OutreachSection() {
  return (
    <section id="outreach" className="border-t border-line py-16 sm:py-20">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Outreach</h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {outreach.map((entry, i) => (
            <Reveal key={entry.slug} delay={i * 0.05}>
              <div
                id={`outreach-${entry.slug}`}
                className="flex h-full flex-col gap-2 rounded-xl border border-line bg-surface p-6"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-3">
                  <ExperienceLogos href={`/#outreach-${entry.slug}`} logoClassName="h-9 w-9" />
                  <div>
                    <h3 className="font-semibold text-ink">{entry.title}</h3>
                    <p className="mt-1 text-sm text-ink-muted">
                      {entry.org ? `${entry.org} · ` : ""}
                      {entry.dateRange}
                    </p>
                  </div>
                </div>
                <p className="text-ink-muted">{entry.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
