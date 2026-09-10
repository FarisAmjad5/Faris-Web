"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which of the given section ids is currently most in view so the
 * navbar can highlight the active link. `ids` should be a stable array
 * reference (e.g. module-level or memoized) to avoid re-observing on every
 * render.
 */
export function useActiveSection(ids: string[]): string {
  const [activeId, setActiveId] = useState(ids[0] ?? "");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setActiveId((current) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

          if (visible.length > 0) {
            return visible[0].target.id;
          }
          return current;
        });
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
