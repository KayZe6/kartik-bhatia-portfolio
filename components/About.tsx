import { about } from "@/data/about";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="border-t border-line py-16 sm:py-20">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">About</h2>
          <div className="mt-6 flex flex-col gap-4 text-ink-muted">
            {about.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
