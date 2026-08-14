import { about } from "@/data/about";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { AboutTimeline } from "./AboutTimeline";

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
          <div className="mt-10 flex max-w-2xl flex-col gap-4 text-ink-muted">
            {about.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
