import { Tag } from "./Tag";
import type { MinorProject } from "@/data/types";

export function MinorProjectCard({ project }: { project: MinorProject }) {
  const isFeatured = project.tier === "featured";

  return (
    <div
      className={`flex flex-col gap-3 rounded-xl border border-line bg-surface ${
        isFeatured ? "p-6 sm:p-8" : "p-5"
      }`}
    >
      <div>
        <h3 className={`font-semibold text-ink ${isFeatured ? "text-xl" : "text-base"}`}>{project.title}</h3>
        <p className="mt-1 text-sm text-ink-muted">{project.subtitle}</p>
      </div>
      <p className={isFeatured ? "text-ink-muted" : "text-sm text-ink-muted"}>{project.summary}</p>
      {project.tags && (
        <ul className="flex flex-wrap gap-2" aria-label="Skills and tools">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
