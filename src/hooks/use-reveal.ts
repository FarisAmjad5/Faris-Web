"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Attaches an IntersectionObserver to the returned ref and flips
 * `isVisible` to true the first time the element scrolls into view.
 *
 * Under prefers-reduced-motion the `.reveal` CSS rule in globals.css
 * already forces full opacity / no transform unconditionally, so this
 * hook doesn't need a separate JS branch for that case — it just keeps
 * observing normally.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
