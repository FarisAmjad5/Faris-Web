"use client";

import { useEffect, useState } from "react";
import { numberStats, type NumberStat } from "@/lib/data";
import { useReveal } from "@/hooks/use-reveal";

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      const frameId = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(frameId);
    }

    let frameId: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [active, target, duration]);

  return value;
}

function StatTile({ stat, active }: { stat: NumberStat; active: boolean }) {
  const value = useCountUp(stat.value, active);
  return (
    <div className="flex flex-col items-start gap-1 rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] p-4">
      <span className="font-display text-2xl font-semibold text-[var(--text)] sm:text-3xl">
        {value}
        {stat.suffix}
      </span>
      <span className="text-xs text-[var(--muted)] sm:text-sm">{stat.label}</span>
    </div>
  );
}

export function Stats() {
  const { ref, isVisible } = useReveal<HTMLDivElement>(0.4);

  return (
    <div ref={ref} className="card h-full p-6 sm:p-8">
      <h3 className="mb-6 font-display text-xl font-semibold text-[var(--text)]">By The Numbers</h3>
      <div className="grid grid-cols-2 gap-4">
        {numberStats.map((stat) => (
          <StatTile key={stat.label} stat={stat} active={isVisible} />
        ))}
      </div>
    </div>
  );
}
