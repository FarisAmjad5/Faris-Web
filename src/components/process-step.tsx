"use client";

import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import { iconMap } from "@/components/ui/icon-map";
import type { IconKey } from "@/lib/data";

type ProcessStepItemProps = {
  number: string;
  title: string;
  description: string;
  icon: IconKey;
  delay?: number;
};

/**
 * Renders the <li> itself (rather than being wrapped by the generic
 * <Reveal> div) so the parent <ol> keeps valid list markup. Takes the
 * icon *key* (not the component) because a Server Component parent
 * can't pass a component reference as a prop across the client boundary.
 */
export function ProcessStepItem({ number, title, description, icon, delay = 0 }: ProcessStepItemProps) {
  const Icon = iconMap[icon];
  const { ref, isVisible } = useReveal<HTMLLIElement>();

  return (
    <li
      ref={ref}
      className={cn(
        "reveal relative flex flex-col items-center gap-3 text-center",
        isVisible && "is-visible"
      )}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[var(--border-hover)] bg-[var(--surface)] text-[var(--accent)] shadow-[0_0_24px_-4px_rgba(34,211,238,0.55)]">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="font-display text-xs font-semibold tracking-widest text-[var(--accent)]">
        {number}
      </span>
      <h3 className="font-display text-base font-semibold text-[var(--text)]">{title}</h3>
      <p className="max-w-[15rem] text-sm leading-relaxed text-[var(--muted)]">{description}</p>
    </li>
  );
}
