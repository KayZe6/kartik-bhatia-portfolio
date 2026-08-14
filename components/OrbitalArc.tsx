/**
 * Deliberate orbital arc motif: two concentric arcs plus an orbiting body,
 * meant to read as a graphic element in its own right, not a stray line.
 * Purely decorative — hidden from assistive tech.
 */
export function OrbitalArc({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 800 240" preserveAspectRatio="none" className={className}>
      <path d="M -40 210 Q 400 -40 840 210" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
      <path d="M -40 250 Q 400 40 840 250" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <circle cx="620" cy="116" r="4.5" fill="var(--color-rust)" />
    </svg>
  );
}
