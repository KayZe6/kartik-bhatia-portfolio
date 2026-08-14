import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { MinorProjectCard } from "./MinorProjectCard";
import { minorProjects } from "@/data/minor-projects";

export function MinorProjectsSection() {
  return (
    <section id="projects" className="border-t border-line py-16 sm:py-20">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Minor projects</h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {minorProjects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.05}>
              <MinorProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
