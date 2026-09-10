"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { highlights } from "@/lib/data";
import { Stats } from "@/components/stats";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (paused || reducedMotionRef.current) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % highlights.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, [paused]);

  const active = highlights[index];
  const goTo = (target: number) => setIndex((target + highlights.length) % highlights.length);

  return (
    <section id="highlights" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Highlights"
          title="What I Bring"
          description="A few concrete ways I've helped projects move faster and run better."
        />

        <div className="grid gap-6 lg:grid-cols-[6fr_5fr] lg:gap-8">
          <Reveal>
            <div
              className="card flex h-full flex-col gap-6 p-6 sm:p-8"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold text-[var(--text)]">
                  What I Bring
                </h3>
                <Sparkles className="h-8 w-8 text-[var(--accent)]/30" aria-hidden="true" />
              </div>

              <div aria-live="polite" className="flex flex-1 flex-col gap-3">
                <h4 className="font-display text-lg font-semibold text-[var(--text)] sm:text-xl">
                  {active.title}
                </h4>
                <p className="mt-auto text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                  {active.body}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2" role="tablist" aria-label="Choose highlight">
                  {highlights.map((highlight, i) => (
                    <button
                      key={highlight.title}
                      type="button"
                      role="tab"
                      onClick={() => goTo(i)}
                      aria-label={`Show highlight: ${highlight.title}`}
                      aria-selected={i === index}
                      className="group flex h-11 w-6 items-center justify-center"
                    >
                      <span
                        className={cn(
                          "h-2 rounded-full transition-all",
                          i === index ? "w-6 bg-[var(--accent)]" : "w-2 bg-[var(--border-hover)]"
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => goTo(index - 1)}
                    aria-label="Previous highlight"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors hover:border-[var(--border-hover)] hover:text-[var(--accent)] sm:h-9 sm:w-9"
                  >
                    <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => goTo(index + 1)}
                    aria-label="Next highlight"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors hover:border-[var(--border-hover)] hover:text-[var(--accent)] sm:h-9 sm:w-9"
                  >
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <Stats />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
