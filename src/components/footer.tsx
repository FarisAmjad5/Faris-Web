import { ArrowUp } from "lucide-react";
import { footerLinks, siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
        <div className="flex flex-col items-center gap-3 lg:items-start">
          <a href="#home" className="flex items-center gap-2.5 font-display text-base font-semibold">
            <span>{siteConfig.name}</span>
          </a>
          <p className="text-xs text-[var(--muted)]">
            &copy; {siteConfig.yearFounded} {siteConfig.name}. All rights reserved.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#home"
          aria-label="Back to top"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--text)] transition-all hover:-translate-y-0.5 hover:border-[var(--border-hover)] hover:text-[var(--accent)]"
        >
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
