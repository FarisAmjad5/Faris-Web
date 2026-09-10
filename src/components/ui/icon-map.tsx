import {
  Briefcase,
  CheckCircle2,
  Clock,
  Code2,
  FileText,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  PenTool,
  Phone,
  Quote,
  Rocket,
  Search,
  Send,
  ShieldCheck,
  Star,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import type { IconKey } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";

export type IconComponent = LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;

export const iconMap: Record<IconKey, IconComponent> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
  briefcase: Briefcase,
  layers: Layers,
  star: Star,
  search: Search,
  "file-text": FileText,
  "pen-tool": PenTool,
  code: Code2,
  "shield-check": ShieldCheck,
  rocket: Rocket,
  code2: Code2,
  quote: Quote,
  users: Users,
  "check-circle": CheckCircle2,
  clock: Clock,
  "trending-up": TrendingUp,
  phone: Phone,
  "map-pin": MapPin,
  send: Send,
  "graduation-cap": GraduationCap,
};
