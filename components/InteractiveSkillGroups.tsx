"use client";

import { useState } from "react";
import Link from "next/link";
import { caseStudies } from "@/data/case-studies";
import type { SkillGroup, SkillItem } from "@/data/types";

/**
 * Skill groups where each chip with a case-study link is clickable. Clicking
 * toggles a panel (rendered once, below the groups) listing the experiences
 * that used it. Kept self-contained to this section — it doesn't reach into
 * or alter the featured-work cards elsewhere on the page.
 */
export function InteractiveSkillGroups({ groups }: { groups: SkillGroup[] }) {
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(null);

  const relatedStudies =
    activeSkill?.caseStudySlugs
      ?.map((slug) => caseStudies.find((s) => s.card.slug === slug))
      .filter((s): s is NonNullable<typeof s> => Boolean(s)) ?? [];

  function handleClick(skill: SkillItem) {
    if (!skill.caseStudySlugs?.length) return;
    setActiveSkill((prev) => (prev?.name === skill.name ? null : skill));
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {groups.map((group) => (
          <div key={group.category} className="rounded-xl border border-line bg-surface p-6">
            <h3 className="text-sm font-semibold tracking-wide text-ink uppercase">{group.category}</h3>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${group.category} skills`}>
              {group.items.map((skill) => {
                const isLinked = Boolean(skill.caseStudySlugs?.length);
                const isActive = activeSkill?.name === skill.name;
                return (
                  <li key={skill.name}>
                    {isLinked ? (
                      <button
                        type="button"
                        onClick={() => handleClick(skill)}
                        aria-pressed={isActive}
                        className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-sm transition-colors ${
                          isActive
                            ? "border-rust bg-rust text-paper"
                            : "border-rust/40 bg-paper text-ink hover:border-rust hover:bg-rust-tint"
                        }`}
                      >
                        {skill.name}
                        <span aria-hidden="true" className={isActive ? "text-paper" : "text-rust"}>
                          ●
                        </span>
                      </button>
                    ) : (
                      <span className="inline-flex items-center rounded-md border border-line bg-paper px-2.5 py-1 text-sm text-ink">
                        {skill.name}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {activeSkill && relatedStudies.length > 0 && (
        <div className="mt-6 rounded-xl border border-rust bg-rust-tint p-6">
          <p className="text-xs font-medium tracking-widest text-rust uppercase">
            {activeSkill.name} — used in
          </p>
          <ul className="mt-3 flex flex-wrap gap-3">
            {relatedStudies.map((study) => (
              <li key={study.card.slug}>
                <Link
                  href={`/work/${study.card.slug}`}
                  className="inline-flex items-center gap-1 text-ink underline decoration-rust/50 underline-offset-4 hover:text-rust"
                >
                  {study.card.title} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
