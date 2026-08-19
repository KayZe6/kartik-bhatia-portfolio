"use client";

import { useState } from "react";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { MediaPhoto } from "./MediaPhoto";
import { ExperienceLogos } from "./ExperienceLogos";
import { Tag } from "./Tag";
import type { MinorProject } from "@/data/types";

/**
 * Uniform card shape for every minor project regardless of tier — the
 * featured/compact split still lives in the data (it drives whether tags
 * are shown) but no longer changes padding, type scale, or media presence.
 * Minor projects don't get their own page, so a second photo (when present)
 * is revealed in place by an expand toggle rather than a link elsewhere.
 */
export function MinorProjectCard({ project }: { project: MinorProject }) {
  const [expanded, setExpanded] = useState(false);
  const extraMedia = project.media?.slice(1) ?? [];

  return (
    <div id={`project-${project.slug}`} className="flex flex-col gap-3 rounded-xl border border-line bg-surface p-6">
      {project.media?.[0] ? (
        <MediaPhoto media={project.media[0]} />
      ) : (
        <MediaPlaceholder label={`${project.title} photo`} />
      )}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-3">
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

      {extraMedia.length > 0 && (
        <>
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
            className="self-start text-sm font-medium text-rust underline decoration-rust/50 underline-offset-4 hover:text-rust/80"
          >
            {expanded ? "Show fewer photos" : `+${extraMedia.length} more photo${extraMedia.length > 1 ? "s" : ""}`}
          </button>
          {expanded && (
            <div className="flex flex-col gap-4">
              {extraMedia.map((item) => (
                <MediaPhoto key={item.src} media={item} showCaption />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
