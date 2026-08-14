interface MediaPlaceholderProps {
  label: string;
  aspect?: "video" | "square";
  className?: string;
}

/**
 * Reserved slot for a future photo/render. Renders as a plain labeled box,
 * not an <img>, so there is nothing broken to fix once real media lands.
 */
export function MediaPlaceholder({ label, aspect = "video", className = "" }: MediaPlaceholderProps) {
  const aspectClass = aspect === "video" ? "aspect-video" : "aspect-square";
  return (
    <div
      role="img"
      aria-label={`${label}. Image coming soon.`}
      className={`flex ${aspectClass} flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-line bg-surface text-ink-muted ${className}`}
    >
      <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="9.5" r="1.5" />
        <path d="M21 15.5l-5.5-5.5L3 21" />
      </svg>
      <span className="px-4 text-center text-xs tracking-wide text-ink-muted">{label}</span>
    </div>
  );
}
