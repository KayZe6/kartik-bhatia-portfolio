export function SkillChip({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-paper px-2.5 py-1 text-sm text-ink">
      {children}
    </span>
  );
}
