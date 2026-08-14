/** Decorative thin orbital arc motif. Purely visual, hidden from assistive tech. */
export function OrbitalArc({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 200"
      preserveAspectRatio="none"
      className={className}
    >
      <path
        d="M -20 180 Q 300 -60 620 180"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.35"
      />
    </svg>
  );
}
