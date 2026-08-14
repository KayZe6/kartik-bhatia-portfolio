import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { SiteHeader } from "@/components/SiteHeader";
import { Tag } from "@/components/Tag";
import { OrgLogo } from "@/components/OrgLogo";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { CaseStudyAside } from "@/components/CaseStudyAside";
import { Reveal } from "@/components/Reveal";
import { caseStudies } from "@/data/case-studies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.card.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.card.slug === slug);
  if (!study) return {};

  return {
    title: `${study.card.title} — Kartik Bhatia`,
    description: study.card.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.card.slug === slug);

  if (!study) {
    notFound();
  }

  const { card, sections, aside } = study;

  return (
    <article>
      <SiteHeader />
      <Container className="pt-10">
        <Link href="/" className="text-sm text-ink-muted hover:text-rust">
          ← Back to featured work
        </Link>
      </Container>

      <Container className="mt-6">
        <Reveal>
          <div className="flex items-start gap-4">
            <OrgLogo organization={card.organization} className="mt-1 h-12 w-12 text-sm" />
            <div>
              <p className="text-xs font-medium tracking-widest text-rust uppercase">Case study</p>
              <h1 className="mt-2 text-3xl font-semibold text-ink sm:text-4xl">{card.title}</h1>
              <p className="mt-3 text-ink-muted">{card.subtitle}</p>
            </div>
          </div>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Skills and tools">
            {card.tags.map((tag) => (
              <li key={tag}>
                <Tag>{tag}</Tag>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>

      <Container>
        {/* Hero image shares the same column width as the body text below it,
            rather than spanning the full container — at container width an
            exact 16:9 box still reads as viewport-filling. */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-10 pb-16">
          <Reveal delay={0.05}>
            <MediaPlaceholder label={`${card.title} hero photo`} className="w-full" />
          </Reveal>

          {sections.map((section) => (
            <Reveal key={section.heading}>
              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">{section.heading}</h2>
                <div className="mt-3 flex flex-col gap-4 text-ink-muted">
                  {section.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}

          {aside && (
            <Reveal>
              <CaseStudyAside aside={aside} />
            </Reveal>
          )}
        </div>
      </Container>
    </article>
  );
}
