import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { contact } from "@/data/contact";

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-line py-16 sm:py-20">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">{contact.heading}</h2>
          <p className="mt-4 text-ink-muted">{contact.blurb}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="rounded-full bg-rust px-5 py-2.5 text-sm font-medium text-paper no-underline transition-opacity hover:opacity-90"
            >
              {contact.email}
            </a>
            <a
              href={`https://${contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink no-underline transition-colors hover:border-rust hover:text-rust"
            >
              LinkedIn
            </a>
            <a
              href={contact.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink no-underline transition-colors hover:border-rust hover:text-rust"
            >
              Download résumé
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
