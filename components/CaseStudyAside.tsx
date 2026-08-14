import type { CaseStudyAside as CaseStudyAsideData, CaseStudyAsideKind } from "@/data/types";

const LABELS: Record<CaseStudyAsideKind, string> = {
  origin: "Origin",
  confidentiality: "Note",
};

/** One render path for every aside kind; only the label text changes. */
export function CaseStudyAside({ aside }: { aside: CaseStudyAsideData }) {
  return (
    <aside className="rounded-lg border-l-4 border-rust bg-rust-tint px-6 py-5">
      <p className="text-xs font-medium tracking-widest text-rust uppercase">{LABELS[aside.kind]}</p>
      <p className="mt-2 text-ink-muted">{aside.text}</p>
    </aside>
  );
}
