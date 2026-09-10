"use client";

import { useSyncExternalStore } from "react";
import { Cpu } from "lucide-react";
import { capabilities, skills } from "@/lib/data";
import { iconMap } from "@/components/ui/icon-map";
import { useReveal } from "@/hooks/use-reveal";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Anyone who asked for less motion gets the finished bars immediately rather
 * than a value that only animates into place. Read through
 * useSyncExternalStore so it also tracks the setting changing mid-session.
 */
function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const query = window.matchMedia(REDUCED_MOTION_QUERY);
      query.addEventListener("change", onChange);
      return () => query.removeEventListener("change", onChange);
    },
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false
  );
}

export function Skills() {
  const { ref, isVisible } = useReveal<HTMLDivElement>(0.25);
  const reducedMotion = usePrefersReducedMotion();
  const filled = isVisible || reducedMotion;

  return (
    <div ref={ref} id="skills" className="card flex h-full scroll-mt-24 flex-col gap-7 p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="font-display text-xl font-semibold text-[var(--text)]">My Expertise</h3>
          <p className="text-xs text-[var(--muted)] sm:text-sm">
            The stack I reach for on every build.
          </p>
        </div>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
          <Cpu className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>

      <ul className="flex flex-col gap-5">
        {skills.map((skill, index) => (
          <li key={skill.label} className="flex flex-col gap-2">
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-sm font-medium text-[var(--text)]">{skill.label}</span>
              <span className="font-mono text-xs tabular-nums text-[var(--muted)]">
                {skill.percent}%
              </span>
            </div>
            <div
              className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--border)]"
              role="progressbar"
              aria-label={skill.label}
              aria-valuenow={skill.percent}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="relative h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-3)]"
                style={{
                  width: filled ? `${skill.percent}%` : "0%",
                  transition: reducedMotion
                    ? undefined
                    : "width 1100ms cubic-bezier(0.22, 1, 0.36, 1)",
                  transitionDelay: reducedMotion ? undefined : `${index * 90}ms`,
                }}
              >
                <span
                  className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 translate-x-1/2 rounded-full bg-[var(--accent)] shadow-[0_0_10px_2px_rgba(34,211,238,0.55)]"
                  aria-hidden="true"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="grid gap-3 border-t border-[var(--border)] pt-6 sm:grid-cols-3">
        {capabilities.map((capability) => {
          const Icon = iconMap[capability.icon];
          return (
            <div
              key={capability.title}
              className="flex flex-col gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] p-3.5 transition-colors hover:border-[var(--border-hover)]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent)]/10 text-[var(--accent)]">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-[13px] font-semibold leading-none text-[var(--text)]">
                {capability.title}
              </span>
              <span className="text-xs leading-snug text-[var(--muted)]">
                {capability.description}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
