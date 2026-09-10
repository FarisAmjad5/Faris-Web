// Central content source for the whole site. Every section pulls its copy
// from here so the UI components stay presentational.

export type IconKey =
  | "github"
  | "linkedin"
  | "mail"
  | "briefcase"
  | "layers"
  | "star"
  | "search"
  | "file-text"
  | "pen-tool"
  | "code"
  | "shield-check"
  | "rocket"
  | "code2"
  | "quote"
  | "users"
  | "check-circle"
  | "clock"
  | "trending-up"
  | "phone"
  | "map-pin"
  | "send"
  | "graduation-cap";

export const siteConfig = {
  name: "Faris Amjad",
  role: "Web Developer",
  // Short line from the CV header ("Web Developer | Next.js, Tailwind & WordPress"),
  // shown as a small kicker under the hero badge.
  techTagline: "Next.js, Tailwind & WordPress",
  title: "I build digital experiences that matter.",
  titleHighlight: "experiences",
  tagline:
    "Hi, I'm Faris Amjad, a web developer with 1+ year of experience building responsive, performance-focused websites with Next.js, Tailwind CSS, and custom WordPress theme and plugin development. I take projects from requirements through deployment on Vercel with GitHub version control, backed by the business perspective from my BBA.",
  email: "farisamjad73@gmail.com",
  phone: "+92 320 2011821",
  location: "Islamabad, Pakistan",
  availability: "Open to new opportunities",
  cvHref: "/faris-amjad-cv.pdf",
  yearFounded: 2026,
};

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const footerLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export type SocialLink = { label: string; href: string; icon: IconKey };

// No Twitter/X handle on the CV, so only these three.
export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/FarisAmjad5", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/farisamjad/", icon: "linkedin" },
  { label: "Email", href: "mailto:farisamjad73@gmail.com", icon: "mail" },
];

export type HeroStat = { icon: IconKey; value: string; label: string };

export const heroStats: HeroStat[] = [
  { icon: "briefcase", value: "1+", label: "Years of Experience" },
  // TODO: confirm project count with Faris
  { icon: "layers", value: "10+", label: "Projects Delivered" },
  { icon: "star", value: "100%", label: "On-Time Delivery" },
];

export const heroHighlights = ["Clean Code", "Scalable Solutions", "Pixel Perfect"];

export const heroCodeSnippet = [
  { tint: "muted", text: "const" },
  { tint: "cyan", text: " faris " },
  { tint: "muted", text: "=" },
  { tint: "muted", text: " {" },
];

export type AboutHighlight = { icon: IconKey; title: string; description: string };

// Each one traces back to a line in the CV — nothing invented.
export const aboutHighlights: AboutHighlight[] = [
  {
    icon: "rocket",
    title: "End-to-end delivery",
    description:
      "Requirements gathering through production deployment on Vercel, with GitHub version control throughout.",
  },
  {
    icon: "trending-up",
    title: "Performance-focused",
    description:
      "Image compression, caching, and asset cleanup that lift page load times and Core Web Vitals scores.",
  },
  {
    icon: "graduation-cap",
    title: "Business perspective",
    description:
      "A BBA in progress, so every build stays tied to the business goal sitting behind it.",
  },
];

export const aboutParagraphs: string[] = [
  "I'm a web developer with 1+ year of hands-on experience building responsive, performance-focused websites with Next.js, JavaScript, and Tailwind CSS, alongside custom WordPress theme and plugin development.",
  "I work end to end — gathering requirements directly from clients, building the site, and shipping it to production — and I'm currently completing a BBA, pairing business insight with technical execution.",
];

export type Skill = { label: string; percent: number };

// Self-assessed proficiency — adjust freely
export const skills: Skill[] = [
  { label: "HTML5 & CSS3", percent: 90 },
  { label: "JavaScript", percent: 85 },
  { label: "Next.js & React", percent: 85 },
  { label: "Tailwind CSS", percent: 90 },
  { label: "WordPress & PHP", percent: 80 },
];

export type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "WordPress Developer & Designer",
    company: "MIK Service",
    duration: "4 months",
    bullets: [
      "Developed and customized WordPress plugins to meet client-specific functional requirements, reducing dependency on paid third-party plugins and recurring license costs.",
      "Customized themes to match client branding and business websites, translating design direction into working, on-brand responsive layouts.",
      "Optimized site speed through image compression, caching, and asset cleanup, improving page load times and Core Web Vitals scores.",
      "Gathered requirements directly from clients and delivered every project on deadline while managing multiple concurrent builds.",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Independent Projects",
    duration: "1 year",
    bullets: [
      "Designed and developed responsive web applications using Next.js, Tailwind CSS, and JavaScript, from wireframe through production deployment.",
      "Implemented reusable component architecture and utility-first styling, cutting development time on subsequent pages and keeping the UI consistent.",
      "Deployed all projects to Vercel with continuous deployment from GitHub, and used Claude AI for rapid prototyping, debugging, and code review.",
    ],
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  location: string;
};

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Business Administration (BBA)",
    institution: "Virtual University of Pakistan",
    location: "Islamabad",
  },
  {
    degree: "Intermediate in Commerce",
    institution: "Board of Intermediate Education",
    location: "Karachi",
  },
  {
    degree: "Matriculation, Computer Science",
    institution: "Board of Secondary Education",
    location: "Karachi",
  },
];

// From the CV's "Tools & Deployment" and "Practices" lines.
export type Capability = { icon: IconKey; title: string; description: string };

// The CV's CMS line, broken out: "WordPress — theme development & customization,
// plugin development & customization, Elementor".
export const capabilities: Capability[] = [
  { icon: "pen-tool", title: "Themes", description: "Built & customized to brand" },
  { icon: "code", title: "Plugins", description: "Custom builds that replace paid tools" },
  { icon: "layers", title: "Elementor", description: "Page building at speed" },
];

export type ProjectHue = "indigo" | "blue" | "violet" | "cyan" | "teal" | "sky";

export type Project = {
  id: string;
  title: string;
  description: string;
  badge: string;
  tags: string[];
  hue: ProjectHue;
  // Live URL. Undefined on the WordPress placeholders until Faris shares real links.
  href?: string;
  // Screenshot in /public/projects. When absent the card falls back to its gradient mock-up.
  image?: string;
};

// All six are real, live projects — three WordPress builds, then three Next.js builds.
export const projects: Project[] = [
  // WordPress (blue/indigo family) — all three are real, live sites
  {
    id: "duskford-agency",
    title: "Duskford Agency Site",
    description:
      "A dark, animation-led WordPress site for a digital design subscription agency, with a services breakdown, project showcase, and client testimonials.",
    badge: "WordPress",
    tags: ["WordPress", "PHP", "Elementor"],
    hue: "indigo",
    href: "https://wordpress-1364175-6421579.cloudwaysapps.com/",
    image: "/projects/agency-website.png",
  },
  {
    id: "couchly-store",
    title: "Couchly Furniture Store",
    description:
      "A WooCommerce furniture storefront with product collections, variable products and sale pricing, a countdown promotion, and full cart checkout.",
    badge: "WordPress",
    tags: ["WordPress", "WooCommerce", "Elementor"],
    hue: "blue",
    href: "https://wordpress-1364175-6664499.cloudwaysapps.com/",
    image: "/projects/furniture-store.png",
  },
  {
    id: "vexel-agency",
    title: "Vexel Agency Site",
    description:
      "A multi-page WordPress site for a creative agency — services, portfolio, animated stat counters, team profiles, and a blog.",
    badge: "WordPress",
    tags: ["WordPress", "PHP", "Elementor"],
    hue: "violet",
    href: "https://wordpress-1364175-5771208.cloudwaysapps.com/",
    image: "/projects/vexel-agency.png",
  },
  // Next.js (cyan/teal family) — real, live projects
  {
    id: "novaris-estate",
    title: "Novaris Estate",
    description:
      "A luxury real estate site for a futuristic architecture brand, with a scroll-driven hero, animated stat counters, and a featured-properties showcase.",
    badge: "Next.js",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    hue: "cyan",
    href: "https://real-estate-website-zeta-ten.vercel.app/",
    image: "/projects/novaris-estate.png",
  },
  {
    id: "bright-smile-dental",
    title: "Bright Smile Dental",
    description:
      "A conversion-focused website for a London dental practice, with booking calls-to-action, a services breakdown, and an accreditation marquee.",
    badge: "Next.js",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    hue: "teal",
    href: "https://bright-smile-dental-web.vercel.app/",
    image: "/projects/bright-smile-dental-light.png",
  },
  {
    id: "nova-storefront",
    title: "NOVA Storefront",
    description:
      "A premium e-commerce storefront with eight product collections, a trending-products grid with ratings, and a live countdown sale section.",
    badge: "Next.js",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    hue: "sky",
    href: "https://e-commerce-website-six-teal-92.vercel.app/",
    image: "/projects/nova-storefront.png",
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: IconKey;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "Understand goals, users, and constraints before writing a single line of code.",
    icon: "search",
  },
  {
    number: "02",
    title: "Plan",
    description: "Map the architecture, scope, and timeline so the build stays predictable.",
    icon: "file-text",
  },
  {
    number: "03",
    title: "Design",
    description: "Prototype the interface with a focus on clarity, hierarchy, and accessibility.",
    icon: "pen-tool",
  },
  {
    number: "04",
    title: "Develop",
    description: "Ship clean, typed, well-tested code in small, reviewable increments.",
    icon: "code2",
  },
  {
    number: "05",
    title: "Test",
    description: "Validate functionality, performance, and edge cases across devices.",
    icon: "shield-check",
  },
  {
    number: "06",
    title: "Deploy",
    description: "Launch with confidence, then monitor and iterate based on real usage.",
    icon: "rocket",
  },
];

export type Highlight = { title: string; body: string };

// Factual value statements drawn directly from the CV's experience bullets —
// no fabricated names, quotes, or clients.
export const highlights: Highlight[] = [
  {
    title: "Cuts Licensing Costs",
    body: "Builds custom WordPress plugins tailored to client requirements, reducing dependency on paid third-party plugins and recurring license fees.",
  },
  {
    title: "Performance-First Builds",
    body: "Improves Core Web Vitals through image compression, caching, and asset cleanup, resulting in faster page loads.",
  },
  {
    title: "Reusable Component Architecture",
    body: "Structures Next.js and Tailwind CSS projects around reusable components and utility-first styling to keep UIs consistent and ship faster.",
  },
  {
    title: "End-to-End Delivery",
    body: "Takes projects from requirements through deployment, shipping to Vercel with continuous deployment from GitHub.",
  },
];

export type NumberStat = { value: number; suffix: string; label: string };

export const numberStats: NumberStat[] = [
  { value: 1, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "%", label: "On-Time Delivery" },
  { value: 2, suffix: "", label: "Roles Held" },
];

export type ContactDetail = {
  icon: IconKey;
  label: string;
  value: string;
  href?: string;
  accent?: boolean;
};

export const contactDetails: ContactDetail[] = [
  { icon: "mail", label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: "phone", label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s+/g, "")}` },
  { icon: "map-pin", label: "Location", value: siteConfig.location },
  { icon: "check-circle", label: "Availability", value: siteConfig.availability, accent: true },
];
