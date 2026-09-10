import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  action,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-10 flex flex-col gap-4 sm:mb-14",
        align === "center" ? "items-center text-center" : "items-start text-left",
        Boolean(action) && "sm:flex-row sm:items-end sm:justify-between sm:text-left",
        className
      )}
    >
      <div className={cn("flex flex-col gap-4", align === "center" && "items-center")}>
        {eyebrow ? <span className="chip">{eyebrow}</span> : null}
        <h2 className="section-title max-w-2xl">{title}</h2>
        {description ? (
          <p className="max-w-xl text-sm text-[var(--muted)] sm:text-base">{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </Reveal>
  );
}
