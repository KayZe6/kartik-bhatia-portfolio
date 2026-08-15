import { timeline } from "@/data/timeline";
import type { TimelineStage } from "@/data/types";

/**
 * Built with CSS/flexbox rather than SVG: the number of stages is data-driven
 * (data/timeline.ts), and flexbox reflows automatically if that list grows,
 * where fixed SVG coordinates would need recalculating by hand.
 *
 * The "I am here" marker is a floating position on the line (data/timeline.ts's
 * `marker`), not a property of any one stage. It renders in its own vertical
 * band above the dots on desktop, and as its own row between stages on mobile,
 * so it never competes for space with a stage's own label/detail text.
 *
 * Each stage owns the connector segment leading OUT toward the next one
 * (not the segment leading in), and mobile's connector is sized with CSS
 * top+bottom anchors — both measured from this item's own edges — rather
 * than a fixed height, so it auto-stretches to reach the next dot exactly
 * regardless of how many lines that item's own label/detail text wraps to.
 */
export function AboutTimeline() {
  const { stages, marker } = timeline;

  return (
    <ol className="flex flex-col gap-8 sm:flex-row sm:gap-0" aria-label="Career trajectory, past to future">
      {stages.map((stage, i) => (
        <TimelineItem
          key={stage.label}
          stage={stage}
          reached={i <= marker.afterStageIndex}
          segmentOutDashed={i >= marker.afterStageIndex}
          isLast={i === stages.length - 1}
          markerProgress={i === marker.afterStageIndex ? marker.progress : null}
        />
      ))}
    </ol>
  );
}

function TimelineItem({
  stage,
  reached,
  segmentOutDashed,
  isLast,
  markerProgress,
}: {
  stage: TimelineStage;
  reached: boolean;
  segmentOutDashed: boolean;
  isLast: boolean;
  markerProgress: number | null;
}) {
  const dotClasses = reached ? "border-ink bg-ink" : "border-dashed border-ink-muted bg-paper";
  const labelClasses = reached ? "text-ink" : "text-ink-muted";
  const connectorStyle = segmentOutDashed ? "border-dashed" : "border-solid";

  return (
    <li className="relative sm:flex-1 sm:pt-10">
      {/* Floating "I am here" marker (desktop): positioned on this item's own
          outgoing connector, independent of the dot/label column below it,
          so it can never collide with either. Sits in the dedicated pt-10
          band above the dot row, at a fraction of the way along this item's
          own outgoing connector (50% = this dot, 150% = the next dot, in
          this item's own box). */}
      {markerProgress !== null && (
        <div
          aria-hidden="true"
          className="absolute top-0 hidden -translate-x-1/2 flex-col items-center gap-1 sm:flex"
          style={{ left: `calc(50% + ${markerProgress * 100}%)` }}
        >
          <span className="rounded-full bg-rust px-3 py-1 text-xs font-semibold tracking-wide whitespace-nowrap text-paper">
            I am here
          </span>
          <span className="h-3 w-0 border-l-2 border-dashed border-rust" />
        </div>
      )}

      {/* Its own positioning context, separate from the li's: the li carries
          the sm:pt-10 marker band as padding, and connectors below need to
          measure top/left from where the dot row itself actually starts,
          not from the li's outer box edge above that padding. */}
      <div className="relative flex flex-row items-start gap-4 sm:flex-1 sm:flex-col sm:items-center sm:gap-3 sm:text-center">
        {!isLast && (
          <>
            {/* Mobile: top/bottom are both anchored to this item's own edges, so the
                browser auto-computes the height needed to reach the next dot exactly,
                regardless of how tall this item's text ends up being. */}
            <div
              aria-hidden="true"
              className={`absolute left-2 w-0 border-l-2 border-line sm:hidden ${connectorStyle}`}
              style={{ top: "1.25rem", bottom: "-2rem" }}
            />
            {/* Desktop: items are equal-width (flex-1), so a fixed dot-center-to-dot-center
                span works directly; stops a few px short on each end so the line never
                paints across the dot itself. */}
            <div
              aria-hidden="true"
              className={`absolute top-2 hidden h-0 border-t-2 border-line sm:block ${connectorStyle}`}
              style={{ left: "calc(50% + 10px)", right: "calc(-50% + 10px)" }}
            />
          </>
        )}

        {/* Floating "I am here" marker (mobile): an overlay in the gap below
            this item, not real flow height, so it can't throw off the
            connector's fixed reach to the next dot. */}
        {markerProgress !== null && (
          <div
            aria-hidden="true"
            className="absolute left-9 flex items-center gap-2 sm:hidden"
            style={{ top: "calc(100% + 0.375rem)" }}
          >
            <span className="h-3 w-0 border-l-2 border-dashed border-rust" />
            <span className="rounded-full bg-rust px-3 py-1 text-xs font-semibold tracking-wide text-paper">
              I am here
            </span>
          </div>
        )}

        <span aria-hidden="true" className={`relative z-10 mt-1 block h-4 w-4 shrink-0 rounded-full border-2 sm:mt-0 ${dotClasses}`} />

        <div className="flex flex-col items-start gap-1 sm:items-center">
          <p className={`font-semibold ${labelClasses}`}>{stage.label}</p>
          {stage.detail && <p className="text-sm text-ink-muted">{stage.detail}</p>}
        </div>
      </div>
    </li>
  );
}
