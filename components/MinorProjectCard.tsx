import { MediaPlaceholder } from "./MediaPlaceholder";
import { ExperienceLogos } from "./ExperienceLogos";
import { Tag } from "./Tag";
import type { MinorProject } from "@/data/types";

/**
 * Uniform card shape for every minor project regardless of tier — the
 * featured/compact split still lives in the data (it drives whether tags
 * are shown) but no longer changes padding, type scale, or media presence.
 */
export function MinorProjectCard({ project }: { project: MinorProject }) {
  return (
    <div id={`project-${project.slug}`} className="flex flex-col gap-3 rounded-xl border border-line bg-surface p-6">
      <MediaPlaceholder label={`${project.title} photo`} />
      <div className="flex items-start gap-3">
        <ExperienceLogos href={`/#project-${project.slug}`} logoClassName="h-9 w-9" />
        <div>
          <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
          <p className="mt-1 text-sm text-ink-muted">{project.subtitle}</p>
        </div>
      </div>
      <p className="text-sm text-ink-muted">{project.summary}</p>
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
