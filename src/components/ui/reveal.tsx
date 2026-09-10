"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

/**
 * Fades + slides content in once it scrolls into view. Wraps `useReveal`
 * so sections don't have to wire up the IntersectionObserver themselves.
 * Always renders a <div> — for other tags, use `useReveal` directly.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn("reveal", isVisible && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
