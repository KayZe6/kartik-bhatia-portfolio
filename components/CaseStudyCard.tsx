import Link from "next/link";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { OrgLogo } from "./OrgLogo";
import { Tag } from "./Tag";
import type { CaseStudyCard as CaseStudyCardData } from "@/data/types";

const TAG_LIMIT = 5;

/**
 * One card in the featured-work grid. `flagship` changes size, type scale,
 * grid placement, and — unlike the standard stacked cards — arranges media
 * and text side by side instead of full-width-media-then-text. There is no
 * separate card component or page for VAACE; this is all one component.
 * The full tag list always stays on the case study page; this is just
 * where the card trims it.
 */
export function CaseStudyCard({ card }: { card: CaseStudyCardData }) {
  const isFlagship = Boolean(card.flagship);
  const visibleTags = card.tags.slice(0, TAG_LIMIT);
  const hiddenTagCount = card.tags.length - visibleTags.length;

  return (
    <Link
      href={`/work/${card.slug}`}
      className={`group flex flex-col rounded-xl border border-line bg-surface no-underline transition-transform duration-200 ease-out hover:-translate-y-1 ${
        isFlagship ? "gap-6 p-8 sm:flex-row sm:items-start sm:gap-8 sm:p-10" : "gap-4 p-6 sm:p-8"
      }`}
    >
      <MediaPlaceholder
        label={`${card.title} photo`}
        className={isFlagship ? "sm:w-2/5 sm:shrink-0" : undefined}
      />
      <div className={`flex flex-col gap-4 ${isFlagship ? "sm:min-w-0 sm:flex-1" : "max-w-[36rem]"}`}>
        <div className="flex items-start gap-3">
          <OrgLogo organization={card.organization} />
          <div>
            <h3
              className={`font-semibold text-ink group-hover:text-rust ${
                isFlagship ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
              }`}
            >
              {card.title}
            </h3>
            <p className="mt-1 text-sm text-ink-muted">{card.subtitle}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span className={`font-bold text-rust ${isFlagship ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"}`}>
            {card.metric.value}
          </span>
          <span className="text-sm text-ink-muted">{card.metric.label}</span>
        </div>

        <p className="text-ink-muted">{card.summary}</p>
        <ul className="flex flex-wrap gap-2" aria-label="Skills and tools">
          {visibleTags.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
          {hiddenTagCount > 0 && (
            <li>
              <span className="inline-flex items-center rounded-full border border-line px-3 py-1 text-xs font-medium text-ink-muted">
                +{hiddenTagCount} more
              </span>
            </li>
          )}
        </ul>
      </div>
    </Link>
  );
}
