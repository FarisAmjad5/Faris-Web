import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/lib/data";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — Web Developer`,
  description: siteConfig.tagline,
  keywords: [
    "Faris Amjad",
    "Web Developer",
    "Next.js Developer",
    "Tailwind CSS",
    "WordPress Developer",
    "Portfolio",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} — Web Developer`,
    description: siteConfig.tagline,
    type: "website",
  },
};

// Runs before hydration to set the `.dark` class from localStorage (falling
// back to the dark theme, which is the site default) so there's no
// light/dark flash on load.
const themeInitScript = `
(function () {
  try {
    var stored = window.localStorage.getItem('faris-theme');
    var theme = stored === 'light' || stored === 'dark' ? stored : 'dark';
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
        <ThemeProvider>
          <a
            href="#home"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--surface)] focus:px-4 focus:py-2 focus:text-[var(--text)] focus:shadow-lg"
          >
            Skip to content
          </a>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
