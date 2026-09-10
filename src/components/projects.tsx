import Image from "next/image";
import { ArrowUpRight, Layers } from "lucide-react";
import { projects, type ProjectHue } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const hueStyles: Record<ProjectHue, { gradient: string; glow: string; text: string }> = {
  // WordPress family — blue/indigo range
  indigo: {
    gradient: "from-indigo-400/25 via-indigo-500/10 to-transparent",
    glow: "bg-indigo-400/20",
    text: "text-indigo-300",
  },
  blue: {
    gradient: "from-blue-400/25 via-blue-500/10 to-transparent",
    glow: "bg-blue-400/20",
    text: "text-blue-300",
  },
  violet: {
    gradient: "from-violet-400/25 via-violet-500/10 to-transparent",
    glow: "bg-violet-400/20",
    text: "text-violet-300",
  },
  // Next.js family — cyan/teal range
  cyan: {
    gradient: "from-cyan-400/25 via-cyan-500/10 to-transparent",
    glow: "bg-cyan-400/20",
    text: "text-cyan-300",
  },
  teal: {
    gradient: "from-teal-400/25 via-teal-500/10 to-transparent",
    glow: "bg-teal-400/20",
    text: "text-teal-300",
  },
  sky: {
    gradient: "from-sky-400/25 via-sky-500/10 to-transparent",
    glow: "bg-sky-400/20",
    text: "text-sky-300",
  },
};

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 flex items-center gap-3 sm:mb-14">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
            <Layers className="h-5 w-5" aria-hidden="true" />
          </span>
          <h2 className="section-title">Selected Work</h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const hue = hueStyles[project.hue];
            return (
              <Reveal key={project.id} delay={index * 100}>
                <article className="card group flex h-full flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(34,211,238,0.35)]">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--border)]">
                    {project.image ? (
                      <>
                        <Image
                          src={project.image}
                          alt={`Screenshot of the ${project.title} website`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-[var(--surface)]/60 via-transparent to-transparent"
                          aria-hidden="true"
                        />
                      </>
                    ) : (
                      <>
                        <div
                          className={cn(
                            "absolute inset-0 bg-gradient-to-br transition-transform duration-500 group-hover:scale-110",
                            hue.gradient
                          )}
                        />
                        <div className="absolute inset-0 bg-[var(--surface)]" style={{ opacity: 0.55 }} />
                        <div
                          className={cn(
                            "absolute -right-6 -top-6 h-28 w-28 rounded-full blur-2xl transition-transform duration-500 group-hover:scale-125",
                            hue.glow
                          )}
                          aria-hidden="true"
                        />
                        {/* mock UI made from plain divs */}
                        <div className="absolute inset-0 flex flex-col justify-end gap-2 p-5" aria-hidden="true">
                          <div className="flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-[var(--muted)]/40" />
                            <span className="h-2 w-2 rounded-full bg-[var(--muted)]/40" />
                            <span className="h-2 w-2 rounded-full bg-[var(--muted)]/40" />
                          </div>
                          <div className="flex gap-2">
                            <div className="h-14 flex-1 rounded-md border border-[var(--border)] bg-[var(--surface)]/60" />
                            <div className="flex h-14 w-1/3 flex-col gap-1.5 rounded-md border border-[var(--border)] bg-[var(--surface)]/60 p-2">
                              <div className="h-1.5 w-full rounded-full bg-[var(--muted)]/30" />
                              <div className="h-1.5 w-2/3 rounded-full bg-[var(--muted)]/30" />
                              <div className="h-1.5 w-4/5 rounded-full bg-[var(--muted)]/30" />
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                    <span className="chip absolute right-3 top-3 !bg-[var(--surface)]">{project.badge}</span>
                  </div>

                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg font-semibold text-[var(--text)]">
                        {project.title}
                      </h3>
                      {project.href ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`View ${project.title} project`}
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-all hover:border-[var(--border-hover)] hover:text-[var(--accent)]"
                        >
                          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                      ) : (
                        <span
                          aria-hidden="true"
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border)]/50 text-[var(--muted)]/40"
                        >
                          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </span>
                      )}
                    </div>
                    <p className="flex-1 text-sm leading-relaxed text-[var(--muted)]">
                      {project.description}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className={cn("chip !py-1 !text-[11px]", hue.text)}
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
