import { aboutHighlights, aboutParagraphs } from "@/lib/data";
import { iconMap } from "@/components/ui/icon-map";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Skills } from "@/components/skills";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Get to know me a little better"
          description="A quick look at who I am, how I work, and what I bring to the table."
        />

        <div className="grid gap-6 lg:grid-cols-[5fr_7fr] lg:gap-8">
          <Reveal className="h-full">
            <div className="card flex flex-col gap-7 p-6 sm:p-8">
              <div className="flex flex-col gap-4">
                <h3 className="font-display text-xl font-semibold text-[var(--text)]">About Me</h3>
                {aboutParagraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 24)}
                    className="text-sm leading-relaxed text-[var(--muted)] sm:text-[15px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <ul className="flex flex-col gap-4 border-t border-[var(--border)] pt-6">
                {aboutHighlights.map((highlight) => {
                  const Icon = iconMap[highlight.icon];
                  return (
                    <li key={highlight.title} className="flex items-start gap-3.5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--accent)]/10 text-[var(--accent)]">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-semibold leading-snug text-[var(--text)]">
                          {highlight.title}
                        </span>
                        <span className="text-xs leading-relaxed text-[var(--muted)]">
                          {highlight.description}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={150} className="h-full">
            <Skills />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
