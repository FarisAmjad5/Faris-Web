"use client";

import { useEffect, useState } from "react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";
import { useActiveSection } from "@/hooks/use-active-section";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { LogoMark } from "@/components/ui/logo-mark";

const SECTION_IDS = navLinks.map((link) => link.href.slice(1));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-2.5 font-display text-lg font-semibold">
          <LogoMark className="h-9 w-9 shrink-0 transition-transform duration-500 group-hover:rotate-[18deg]" />
          <span className="whitespace-nowrap">{siteConfig.name}</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = activeId === id;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--text)]",
                  isActive && "text-[var(--text)]"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-3)] transition-transform duration-300",
                    isActive && "scale-x-100"
                  )}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Wrapper does the hiding: .btn-ghost sets its own `display`, which
              beats the `hidden` utility when applied to the same element. */}
          <span className="hidden md:block">
            <a
              href={siteConfig.cvHref}
              download
              className="btn-ghost !px-4 !py-2 text-xs sm:!text-sm"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download CV
            </a>
          </span>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--text)] transition-colors hover:border-[var(--border-hover)] sm:h-10 sm:w-10"
          >
            {theme === "dark" ? (
              <Sun className="h-[18px] w-[18px]" aria-hidden="true" />
            ) : (
              <Moon className="h-[18px] w-[18px]" aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--text)] sm:h-10 sm:w-10 lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          // A max-height transition (rather than the grid-template-rows 0fr/1fr
          // trick) is used here because that trick's intrinsic-sizing math
          // doesn't resolve correctly for a descendant nested inside a
          // `position: sticky` ancestor (this header) in Chromium.
          "overflow-hidden border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-xl transition-[max-height,border-color] duration-300 ease-out lg:hidden",
          mobileOpen ? "max-h-[32rem] border-b" : "max-h-0 border-transparent"
        )}
      >
        <nav aria-label="Mobile">
          <ul className="flex flex-col gap-1 px-4 pb-4 pt-1 sm:px-6">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = activeId === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "block min-h-[44px] rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--muted)] transition-colors hover:bg-[var(--surface-soft)] hover:text-[var(--text)]",
                      isActive && "bg-[var(--surface-soft)] text-[var(--text)]"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li className="pt-2">
              <a
                href={siteConfig.cvHref}
                download
                className="btn-ghost w-full !py-2.5 text-sm"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
