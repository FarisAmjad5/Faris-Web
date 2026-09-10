import { Code2 } from "lucide-react";
import { heroHighlights, heroStats, siteConfig, socialLinks } from "@/lib/data";
import { iconMap } from "@/components/ui/icon-map";
import { Reveal } from "@/components/ui/reveal";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-[var(--accent)]/20 blur-[100px] sm:h-96 sm:w-96" />
        <div className="absolute bottom-[-10%] left-[-10%] h-72 w-72 rounded-full bg-[var(--accent-3)]/20 blur-[100px] sm:h-96 sm:w-96" />
        <div
          className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(34,211,238,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.07)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]"
        />
      </div>

      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="flex flex-col items-start gap-6">
          <div className="flex flex-col items-start gap-2">
            <span className="chip">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--success)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--success)]" />
              </span>
              {siteConfig.role}
            </span>
            <span className="pl-1 text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
              {siteConfig.techTagline}
            </span>
          </div>

          <h1 className="font-display text-[clamp(2.25rem,1.7rem+3vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-[var(--text)]">
            I build digital{" "}
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-3)] bg-clip-text text-transparent">
              experiences
            </span>{" "}
            that matter.
          </h1>

          <p className="max-w-lg text-base text-[var(--muted)] sm:text-lg">{siteConfig.tagline}</p>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-ghost">
              Let&apos;s Talk
            </a>
          </div>

          <ul className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noreferrer noopener" : undefined}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--muted)] transition-all hover:-translate-y-0.5 hover:border-[var(--border-hover)] hover:text-[var(--accent)]"
                  >
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={150} className="flex flex-col gap-4">
          <div className="card overflow-hidden">
            <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#f87171]" />
              <span className="h-3 w-3 rounded-full bg-[#fbbf24]" />
              <span className="h-3 w-3 rounded-full bg-[#34d399]" />
              <span className="ml-2 text-xs text-[var(--muted)]">faris.tsx</span>
            </div>
            <pre className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-relaxed sm:text-sm">
              <code>
                <span className="text-[var(--accent-3)]">const</span>{" "}
                <span className="text-[var(--accent)]">faris</span> = {"{"}
                {"\n"}
                {"  "}
                <span className="text-[var(--muted)]">role:</span>{" "}
                <span className="text-[var(--success)]">&apos;Web Developer&apos;</span>,{"\n"}
                {"  "}
                <span className="text-[var(--muted)]">stack:</span> [
                <span className="text-[var(--success)]">&apos;Next.js&apos;</span>,{" "}
                <span className="text-[var(--success)]">&apos;Tailwind&apos;</span>,{" "}
                <span className="text-[var(--success)]">&apos;WordPress&apos;</span>],{"\n"}
                {"  "}
                <span className="text-[var(--muted)]">location:</span>{" "}
                <span className="text-[var(--success)]">&apos;Islamabad, PK&apos;</span>,{"\n"}
                {"  "}
                <span className="text-[var(--muted)]">available:</span>{" "}
                <span className="text-[var(--accent-3)]">true</span>,{"\n"}
                {"}"};
              </code>
            </pre>
          </div>

          <div className="card flex items-center justify-between gap-3 px-5 py-4">
            <div className="flex items-center gap-3 text-sm font-medium text-[var(--text)]">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--accent)]/10 text-[var(--accent)]">
                <Code2 className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
                {heroHighlights.map((item, index) => (
                  <span key={item} className="flex items-center gap-1.5">
                    {item}
                    {index < heroHighlights.length - 1 ? (
                      <span className="text-[var(--muted)]">&middot;</span>
                    ) : null}
                  </span>
                ))}
              </span>
            </div>
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--success)]" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {heroStats.map((stat) => {
              const Icon = iconMap[stat.icon];
              return (
                <div key={stat.label} className="card flex flex-col items-start gap-2 px-4 py-4 sm:px-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent)]/10 text-[var(--accent)]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="font-display text-lg font-semibold text-[var(--text)] sm:text-xl">
                    {stat.value}
                  </span>
                  <span className="text-[11px] leading-tight text-[var(--muted)] sm:text-xs">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
