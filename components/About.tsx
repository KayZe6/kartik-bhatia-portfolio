import { about } from "@/data/about";
import { timeline } from "@/data/timeline";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { AboutTimeline } from "./AboutTimeline";

// Desktop timeline stages are equal-width columns; the first stage's dot
// sits at the horizontal center of that first column.
const firstStagePercent = 100 / (timeline.stages.length * 2);

export function About() {
  return (
    <section id="about" className="border-t border-line py-16 sm:py-20">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">About</h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10">
            <AboutTimeline />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-10 sm:mt-14">
            {/* Ties back to the High School dot directly above it. */}
            <span
              aria-hidden="true"
              className="absolute top-0 hidden h-6 w-0 border-l-2 border-dashed border-ink-muted/40 sm:block"
              style={{ left: `${firstStagePercent}%` }}
            />
            <div className="mx-auto flex max-w-2xl flex-col gap-4 text-center text-ink-muted sm:pt-8">
              {about.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
