export function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-rust-tint px-3 py-1 text-xs font-medium text-rust">
      {children}
    </span>
  );
}
