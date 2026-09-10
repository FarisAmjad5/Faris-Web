import { GraduationCap } from "lucide-react";
import { education, experience } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

/** "MIK Service" -> "MS". Stands in for a company logo. */
function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function GroupLabel({ children }: { children: string }) {
  return (
    <div className="mb-5 flex items-center gap-4">
      <span className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
        {children}
      </span>
      <span className="h-px flex-1 bg-[var(--border)]" aria-hidden="true" />
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Career"
          title="Experience & Education"
          description="Where I've worked and what I studied."
        />

        <Reveal>
          <GroupLabel>Experience</GroupLabel>
        </Reveal>

        <div className="mb-12 grid gap-6 md:grid-cols-2">
          {experience.map((item, index) => (
            <Reveal key={item.role} delay={index * 120} className="h-full">
              <article className="card flex h-full flex-col gap-5 p-6 sm:p-7">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3.5">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] font-display text-sm font-semibold text-[var(--accent)]"
                      aria-hidden="true"
                    >
                      {initials(item.company)}
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-display text-base font-semibold leading-snug text-[var(--text)]">
                        {item.role}
                      </h3>
                      <p className="text-[13px] font-medium text-[var(--accent)]">{item.company}</p>
                    </div>
                  </div>
                  <span className="chip shrink-0 !py-0.5 !text-[11px]">{item.duration}</span>
                </div>

                <ul className="flex flex-col gap-3 border-t border-[var(--border)] pt-5">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-[13px] leading-relaxed text-[var(--muted)]"
                    >
                      <span
                        className="mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 rounded-[2px] bg-[var(--accent)]/70"
                        aria-hidden="true"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <GroupLabel>Education</GroupLabel>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((edu, index) => (
            <Reveal key={edu.degree} delay={index * 120} className="h-full">
              <article className="card flex h-full flex-col gap-4 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-[15px] font-semibold leading-snug text-[var(--text)]">
                    {edu.degree}
                  </h3>
                  <p className="text-xs leading-relaxed text-[var(--muted)]">
                    {edu.institution}
                    <span className="mx-1.5 text-[var(--border-hover)]">&middot;</span>
                    {edu.location}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
