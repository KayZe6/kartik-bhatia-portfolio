"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Work", id: "work" },
  { label: "Projects", id: "projects" },
  { label: "Outreach", id: "outreach" },
  { label: "Contact", id: "contact" },
];

/**
 * Header nav that tracks which homepage section is currently in view.
 * On pages without those section ids (e.g. a case study page) every
 * observed element is simply absent, so it renders with nothing active.
 */
export function SectionNav() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (sections.length === 0) return;

    // Track everything currently intersecting the top-third "active" band,
    // since two adjacent sections can briefly both qualify during a scroll.
    const intersecting = new Set<string>();
    const lastId = NAV_LINKS[NAV_LINKS.length - 1].id;

    // Both the observer and the scroll listener funnel through this, so
    // whichever fires last still agrees: the last section (Contact) often
    // can't reach the top-third band — there's only a short footer below
    // it — so the page can hit max scroll before it ever "arrives" there.
    // Checking bottom-of-page first and returning early avoids a race where
    // the observer's async callback re-fires after the scroll listener and
    // overwrites the forced answer with a stale intersecting section.
    function updateActive() {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActiveId(lastId);
        return;
      }
      const order = NAV_LINKS.map((link) => link.id).filter((id) => intersecting.has(id));
      if (order.length > 0) {
        setActiveId(order[order.length - 1]);
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            intersecting.add(entry.target.id);
          } else {
            intersecting.delete(entry.target.id);
          }
        }
        updateActive();
      },
      { rootMargin: "0px 0px -66% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", updateActive, { passive: true });
    updateActive();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateActive);
    };
  }, []);

  return (
    <nav aria-label="Section navigation" className="flex gap-6 overflow-x-auto text-base font-medium sm:gap-8">
      {NAV_LINKS.map((link) => {
        const isActive = activeId === link.id;
        return (
          <Link
            key={link.id}
            href={`/#${link.id}`}
            aria-current={isActive ? "true" : undefined}
            className={`shrink-0 no-underline transition-colors ${
              isActive ? "text-rust" : "text-paper/80 hover:text-rust"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
