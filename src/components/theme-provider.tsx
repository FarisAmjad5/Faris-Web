"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "faris-theme";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

/**
 * The no-flash inline script (see layout.tsx) already sets the `.dark`
 * class on <html> before hydration. This provider just mirrors that
 * decision into React state so components can read/toggle it, and keeps
 * localStorage in sync.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}
