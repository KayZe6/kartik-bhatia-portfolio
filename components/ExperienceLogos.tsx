import { hero } from "@/data/hero";

/**
 * Shows the logo(s) belonging to one experience, derived by matching href
 * against the affiliation strip's own data — no separate logo-to-experience
 * mapping to keep in sync. Some experiences (VAACE, CCRL) have more than
 * one logo; they're grouped together automatically.
 */
export function ExperienceLogos({
  href,
  logoClassName = "h-10 w-10",
}: {
  href: string;
  logoClassName?: string;
}) {
  const logos = hero.affiliations.filter((logo) => logo.href === href);
  if (logos.length === 0) return null;

  return (
    <div className="flex items-center gap-2">
      {logos.map((logo) => (
        // eslint-disable-next-line @next/next/no-img-element -- small decorative mark, not a next/image LCP candidate
        <img
          key={logo.src}
          src={logo.src}
          alt={logo.alt}
          loading="lazy"
          className={`${logoClassName} shrink-0 object-contain mix-blend-multiply`}
        />
      ))}
    </div>
  );
}
