import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { FeaturedWorkGrid } from "./FeaturedWorkGrid";
import { caseStudies } from "@/data/case-studies";

export function FeaturedWorkSection() {
  return (
    <section id="work" className="border-t border-line py-16 sm:py-20">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Featured work</h2>
        </Reveal>
        <div className="mt-8">
          <FeaturedWorkGrid caseStudies={caseStudies} />
        </div>
      </Container>
    </section>
  );
}
