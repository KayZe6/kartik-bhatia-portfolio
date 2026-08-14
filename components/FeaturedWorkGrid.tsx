"use client";

import { useMemo, useState } from "react";
import { CaseStudyCard } from "./CaseStudyCard";
import { Reveal } from "./Reveal";
import type { CaseStudy } from "@/data/types";

/** Case study grid with client-side tag filtering, driven entirely by the data's own tags. */
export function FeaturedWorkGrid({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    for (const study of caseStudies) {
      for (const tag of study.card.tags) set.add(tag);
    }
    return [...set].sort((a, b) => a.localeCompare(b));
  }, [caseStudies]);

  const visibleStudies = activeTag
    ? caseStudies.filter((study) => study.card.tags.includes(activeTag))
    : caseStudies;

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter case studies by skill">
        <button
          type="button"
          onClick={() => setActiveTag(null)}
          aria-pressed={activeTag === null}
          className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
            activeTag === null
              ? "border-rust bg-rust text-paper"
              : "border-line bg-surface text-ink-muted hover:border-rust hover:text-rust"
          }`}
        >
          All
        </button>
        {allTags.map((tag) => {
          const isActive = activeTag === tag;
          return (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(isActive ? null : tag)}
              aria-pressed={isActive}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                isActive
                  ? "border-rust bg-rust text-paper"
                  : "border-line bg-surface text-ink-muted hover:border-rust hover:text-rust"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {visibleStudies.map((study, i) => (
          <Reveal
            key={study.card.slug}
            delay={i * 0.05}
            className={study.card.flagship ? "sm:col-span-2" : undefined}
          >
            <CaseStudyCard card={study.card} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
