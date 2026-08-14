import { timeline } from "@/data/timeline";
import type { TimelineStage, TimelineStageStatus } from "@/data/types";

function dotClasses(status: TimelineStageStatus) {
  if (status === "current") return "border-rust bg-rust";
  if (status === "future") return "border-dashed border-ink-muted bg-paper";
  return "border-ink bg-ink";
}

function labelClasses(status: TimelineStageStatus) {
  if (status === "current") return "text-rust";
  if (status === "future") return "text-ink-muted";
  return "text-ink";
}

/** Solid once traveled; dashed for the segment leading into a not-yet-reached stage. */
function connectorStyle(nextStatus: TimelineStageStatus) {
  return nextStatus === "future" ? "border-dashed" : "border-solid";
}

/**
 * Built with CSS/flexbox rather than SVG: the number of stages is data-driven
 * (data/timeline.ts), and flexbox reflows automatically if that list grows,
 * where fixed SVG coordinates would need recalculating by hand.
 *
 * Each stage owns the connector segment leading OUT toward the next one
 * (not the segment leading in), and mobile's connector is sized with CSS
 * top+bottom anchors — both measured from this item's own edges — rather
 * than a fixed height, so it auto-stretches to reach the next dot exactly
 * regardless of how many lines that item's own label/detail text wraps to.
 */
export function AboutTimeline() {
  return (
    <ol className="flex flex-col gap-8 sm:flex-row sm:gap-0" aria-label="Career trajectory, past to future">
      {timeline.map((stage, i) => (
        <TimelineItem
          key={stage.label}
          stage={stage}
          nextStatus={i < timeline.length - 1 ? timeline[i + 1].status : null}
          isLast={i === timeline.length - 1}
        />
      ))}
    </ol>
  );
}

function TimelineItem({
  stage,
  nextStatus,
  isLast,
}: {
  stage: TimelineStage;
  nextStatus: TimelineStageStatus | null;
  isLast: boolean;
}) {
  return (
    <li className="relative flex flex-row items-start gap-4 sm:flex-1 sm:flex-col sm:items-center sm:gap-3 sm:text-center">
      {!isLast && nextStatus && (
        <>
          {/* Mobile: top/bottom are both anchored to this item's own edges, so the
              browser auto-computes the height needed to reach the next dot exactly,
              regardless of how tall this item's text ends up being. */}
          <div
            aria-hidden="true"
            className={`absolute left-2 w-0 border-l-2 border-line sm:hidden ${connectorStyle(nextStatus)}`}
            style={{ top: "1.25rem", bottom: "-2rem" }}
          />
          {/* Desktop: items are equal-width (flex-1), so a fixed dot-center-to-dot-center
              span works directly; stops a few px short on each end so the line never
              paints across the dot itself. */}
          <div
            aria-hidden="true"
            className={`absolute top-2 hidden h-0 border-t-2 border-line sm:block ${connectorStyle(nextStatus)}`}
            style={{ left: "calc(50% + 10px)", right: "calc(-50% + 10px)" }}
          />
        </>
      )}

      <span className="relative mt-1 h-4 w-4 shrink-0 sm:mt-0">
        {stage.status === "current" && (
          <span
            aria-hidden="true"
            className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rust opacity-40"
          />
        )}
        <span aria-hidden="true" className={`relative z-10 block h-4 w-4 rounded-full border-2 ${dotClasses(stage.status)}`} />
      </span>

      <div className="flex flex-col items-start gap-1 sm:items-center">
        {stage.status === "current" && (
          <span className="rounded-full bg-rust px-3 py-1 text-xs font-semibold tracking-wide text-paper">
            I am here
          </span>
        )}
        <p className={`font-semibold ${labelClasses(stage.status)}`}>{stage.label}</p>
        {stage.detail && <p className="text-sm text-ink-muted">{stage.detail}</p>}
      </div>
    </li>
  );
}
