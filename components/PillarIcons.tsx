interface IconProps {
  className?: string;
}

const ICON_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function RoboticsIcon({ className }: IconProps) {
  return (
    <svg {...ICON_PROPS} className={className}>
      <rect x="5" y="9" width="14" height="11" rx="2" />
      <circle cx="9.5" cy="14.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="14.5" r="1" fill="currentColor" stroke="none" />
      <path d="M12 9V5" />
      <circle cx="12" cy="3.5" r="1.5" />
      <path d="M5 13H3M21 13h-2" />
    </svg>
  );
}

export function AdditiveManufacturingIcon({ className }: IconProps) {
  return (
    <svg {...ICON_PROPS} className={className}>
      <path d="M12 3l8 4-8 4-8-4 8-4z" />
      <path d="M4 11l8 4 8-4" />
      <path d="M4 15l8 4 8-4" />
    </svg>
  );
}

export function SpaceSystemsIcon({ className }: IconProps) {
  return (
    <svg {...ICON_PROPS} className={className}>
      <circle cx="12" cy="12" r="2.5" />
      <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-20 12 12)" />
    </svg>
  );
}
