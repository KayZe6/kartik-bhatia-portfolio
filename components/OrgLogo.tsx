/** Reserved slot for an organization's logo. Renders initials until the real mark is provided. */
export function OrgLogo({ organization, className = "" }: { organization: string; className?: string }) {
  // First letter of the first and last word (e.g. "University of Maryland" -> "UM"),
  // skipping over short connector words in between rather than just taking word two.
  const words = organization.split(" ").filter(Boolean);
  const initials =
    words.length > 1
      ? (words[0][0] + words[words.length - 1][0]).toUpperCase()
      : (words[0]?.[0] ?? "").toUpperCase();

  return (
    <div
      role="img"
      aria-label={`${organization} logo, placeholder`}
      title={organization}
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-dashed border-line bg-surface text-xs font-semibold text-ink-muted ${className}`}
    >
      {initials}
    </div>
  );
}
