"use client";

import { useState } from "react";
import { CaseStudyCard } from "./CaseStudyCard";
import { Reveal } from "./Reveal";
import type { CaseStudy, WorkCategory } from "@/data/types";

const CATEGORIES: WorkCategory[] = ["Robotics", "Additive Manufacturing", "Space Systems", "Research"];

/**
 * Case study grid with a small set of broad category filters. Granular
 * per-project tags still show on each card; this bar just narrows which
 * cards are visible, so it stays scannable regardless of how many tags
 * the underlying case studies accumulate.
 */
export function FeaturedWorkGrid({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const [activeCategory, setActiveCategory] = useState<WorkCategory | null>(null);

  const visibleStudies = activeCategory
    ? caseStudies.filter((study) => study.card.categories.includes(activeCategory))
    : caseStudies;

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter case studies by category">
        <button
          type="button"
          onClick={() => setActiveCategory(null)}
          aria-pressed={activeCategory === null}
          className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
            activeCategory === null
              ? "border-rust bg-rust text-paper"
              : "border-line bg-surface text-ink-muted hover:border-rust hover:text-rust"
          }`}
        >
          All
        </button>
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(isActive ? null : category)}
              aria-pressed={isActive}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                isActive
                  ? "border-rust bg-rust text-paper"
                  : "border-line bg-surface text-ink-muted hover:border-rust hover:text-rust"
              }`}
            >
              {category}
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
