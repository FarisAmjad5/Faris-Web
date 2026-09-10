import { cn } from "@/lib/utils";

/**
 * Faris Amjad mark: an open orbital ring that fades out at the lower-left,
 * a solid inner ring, and a geometric F whose stem carries the A's angled
 * foot. Drawn in the site's accent gradient so it works on both themes and
 * costs no image request.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={cn("h-9 w-9", className)}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="logo-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent)" />
          <stop offset="55%" stopColor="var(--accent-3)" />
          <stop offset="100%" stopColor="var(--accent-3)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="logo-glyph" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent)" />
          <stop offset="100%" stopColor="var(--accent-3)" />
        </linearGradient>
      </defs>

      {/* outer orbit — open at the lower left, fading as it goes */}
      <path
        d="M6.6 28.7A18 18 0 1 1 15 39.6"
        stroke="url(#logo-ring)"
        strokeWidth={2}
        strokeLinecap="round"
      />
      {/* inner ring */}
      <circle cx="24" cy="24" r="12.6" stroke="url(#logo-glyph)" strokeWidth={1.6} opacity={0.55} />
      {/* F — stem, top arm, mid arm, with the A's angled foot */}
      <path
        d="M20 15.5h9.2M20 15.5v13.2l4.2 4.3M20 23.4h6.4"
        stroke="url(#logo-glyph)"
        strokeWidth={2.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
