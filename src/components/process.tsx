import { processSteps } from "@/lib/data";
import { ProcessStepItem } from "@/components/process-step";
import { SectionHeading } from "@/components/ui/section-heading";

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How I Work"
          title="My Work Process"
          description="A clear, repeatable process that keeps every project on track from kickoff to launch."
        />

        <div className="relative">
          <div
            className="pointer-events-none absolute inset-y-10 left-1/2 block w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--border-hover)] to-transparent sm:hidden"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-[var(--border-hover)] to-transparent lg:block"
            aria-hidden="true"
          />

          <ol className="relative grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-4">
            {processSteps.map((step, index) => (
              <ProcessStepItem
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
                delay={index * 80}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
