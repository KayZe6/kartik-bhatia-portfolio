"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

/** Subscribes to a media query via the browser's own change events, rather than polling in an effect. */
function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false
  );
}

interface HeroVideoProps {
  poster: string;
  src: string;
  className?: string;
}

/**
 * Full-bleed video background. The poster is always in the initial HTML —
 * it's what actually paints and satisfies LCP. The <video> itself is only
 * mounted client-side, after checking reduced-motion and viewport width, so
 * its source is never even requested until we know it should play: nothing
 * to fetch on mobile, nothing to fetch for reduced-motion, and nothing for
 * the server-rendered page to wait on.
 *
 * Mounting is also held until the browser reports idle. The file is several
 * megabytes, so fetching it while the page is still loading its own scripts
 * and images costs bandwidth the visible page needs first. Deferring it
 * keeps the video off the critical path entirely; it fades in once it can
 * play, so there is no flash of an unpainted black box.
 */
export function HeroVideo({ poster, src, className = "" }: HeroVideoProps) {
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const isDesktopViewport = useMediaQuery("(min-width: 640px)");
  const shouldPlayVideo = isDesktopViewport && !prefersReducedMotion;

  const [videoFailed, setVideoFailed] = useState(false);
  const [canLoadVideo, setCanLoadVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // requestIdleCallback isn't in Safari; the timeout is the fallback there
  // and the ceiling everywhere else.
  useEffect(() => {
    if (!shouldPlayVideo) return;
    const idle = window.requestIdleCallback;
    if (idle) {
      const handle = idle(() => setCanLoadVideo(true), { timeout: 3000 });
      return () => window.cancelIdleCallback(handle);
    }
    const timer = window.setTimeout(() => setCanLoadVideo(true), 2000);
    return () => window.clearTimeout(timer);
  }, [shouldPlayVideo]);

  return (
    <div className={`absolute inset-0 overflow-hidden bg-navy-deep ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element -- decorative background photo; poster must paint immediately as plain HTML for LCP, not go through next/image's client pipeline */}
      <img src={poster} alt="" aria-hidden="true" loading="eager" className="h-full w-full object-cover" />
      {shouldPlayVideo && canLoadVideo && !videoFailed && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          onError={() => setVideoFailed(true)}
          onPlaying={() => setIsPlaying(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            isPlaying ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
