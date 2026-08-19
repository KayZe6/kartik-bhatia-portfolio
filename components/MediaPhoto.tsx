import type { MediaItem } from "@/data/types";

interface MediaPhotoProps {
  media: MediaItem;
  aspect?: "video" | "square";
  className?: string;
  showCaption?: boolean;
}

/**
 * Renders one real photo from data/. Pairs with MediaPlaceholder, which
 * covers the same aspect-ratio slot for entries that don't have a photo
 * yet — callers pick between the two based on whether media is present.
 */
export function MediaPhoto({ media, aspect = "video", className = "", showCaption = false }: MediaPhotoProps) {
  const aspectClass = aspect === "video" ? "aspect-video" : "aspect-square";
  return (
    <figure className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element -- pre-compressed static WebP served from public/, no next/image pipeline needed */}
      <img
        src={media.src}
        alt={media.alt}
        loading="lazy"
        className={`w-full ${aspectClass} rounded-lg border border-line object-cover`}
      />
      {showCaption && media.caption && <figcaption className="mt-2 text-sm text-ink-muted">{media.caption}</figcaption>}
    </figure>
  );
}
