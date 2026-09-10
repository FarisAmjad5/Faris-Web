"use client";

import { useRef, useState, type ChangeEvent, type FormEvent, type Ref } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { contactDetails, siteConfig } from "@/lib/data";
import { iconMap } from "@/components/ui/icon-map";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialState: FormState = { name: "", email: "", subject: "", message: "" };

function validate(state: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!state.name.trim()) errors.name = "Please enter your name.";
  if (!state.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_PATTERN.test(state.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!state.subject.trim()) errors.subject = "Please add a subject.";
  if (!state.message.trim()) errors.message = "Please write a short message.";
  return errors;
}

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const nameInputRef = useRef<HTMLInputElement>(null);

  const updateField = (field: keyof FormState) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    window.setTimeout(() => {
      setStatus("success");
      setForm(initialState);
    }, 1100);
  };

  const focusForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
    nameInputRef.current?.focus();
  };

  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="card grid gap-10 overflow-hidden p-6 sm:p-8 lg:grid-cols-[4fr_3fr_5fr] lg:gap-8 lg:p-10">
            <div className="flex flex-col justify-center gap-4">
              <span className="chip self-start">Get In Touch</span>
              <h2 className="section-title !text-left">Let&apos;s Build Something Great</h2>
              <p className="text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                Have a project in mind or just want to say hello? I&apos;m always open to
                discussing new ideas, freelance work, or full-time opportunities.
              </p>
              <button type="button" onClick={focusForm} className="btn-primary self-start">
                <Send className="h-4 w-4" aria-hidden="true" />
                Send Message
              </button>
            </div>

            <div className="relative flex flex-col justify-center gap-5">
              <div
                className="pointer-events-none absolute inset-0 -z-0 hidden items-center justify-center lg:flex"
                aria-hidden="true"
              >
                <div
                  className="h-56 w-56 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, var(--accent) 1px, transparent 1.6px)",
                    backgroundSize: "16px 16px",
                    maskImage: "radial-gradient(circle, black 50%, transparent 72%)",
                    WebkitMaskImage: "radial-gradient(circle, black 50%, transparent 72%)",
                  }}
                />
              </div>

              <ul className="relative z-10 flex flex-col gap-5">
                {contactDetails.map((detail) => {
                  const Icon = iconMap[detail.icon];
                  return (
                    <li key={detail.label} className="flex items-start gap-3">
                      <span
                        className={cn(
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-soft)]",
                          detail.accent ? "text-[var(--success)]" : "text-[var(--accent)]"
                        )}
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-xs uppercase tracking-wide text-[var(--muted)]">
                          {detail.label}
                        </span>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className={cn(
                              "flex items-center gap-1.5 break-words text-sm font-medium transition-colors hover:text-[var(--accent)]",
                              detail.accent ? "text-[var(--success)]" : "text-[var(--text)]"
                            )}
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <span
                            className={cn(
                              "flex items-center gap-1.5 break-words text-sm font-medium",
                              detail.accent ? "text-[var(--success)]" : "text-[var(--text)]"
                            )}
                          >
                            {detail.accent ? (
                              <span
                                className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--success)]"
                                aria-hidden="true"
                              />
                            ) : null}
                            {detail.value}
                          </span>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div id="contact-form" className="scroll-mt-24">
              {status === "success" ? (
                <div
                  role="status"
                  className="flex h-full flex-col items-center justify-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] p-8 text-center"
                >
                  <CheckCircle2 className="h-10 w-10 text-[var(--success)]" aria-hidden="true" />
                  <p className="font-display text-lg font-semibold text-[var(--text)]">
                    Message sent!
                  </p>
                  <p className="text-sm text-[var(--muted)]">
                    Thanks for reaching out — I&apos;ll get back to you at {siteConfig.email} soon.
                  </p>
                  <button type="button" className="btn-ghost mt-2" onClick={() => setStatus("idle")}>
                    Send another message
                  </button>
                </div>
              ) : (
                <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      id="contact-name"
                      inputRef={nameInputRef}
                      label="Name"
                      value={form.name}
                      onChange={updateField("name")}
                      error={errors.name}
                      autoComplete="name"
                    />
                    <Field
                      id="contact-email"
                      label="Email"
                      type="email"
                      value={form.email}
                      onChange={updateField("email")}
                      error={errors.email}
                      autoComplete="email"
                    />
                  </div>
                  <Field
                    id="contact-subject"
                    label="Subject"
                    value={form.subject}
                    onChange={updateField("subject")}
                    error={errors.subject}
                  />
                  <TextAreaField
                    id="contact-message"
                    label="Message"
                    value={form.message}
                    onChange={updateField("message")}
                    error={errors.message}
                  />
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-primary mt-2 w-full disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  inputRef?: Ref<HTMLInputElement>;
};

function Field({ id, label, value, onChange, error, type = "text", autoComplete, inputRef }: FieldProps) {
  const errorId = `${id}-error`;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-medium text-[var(--muted)]">
        {label}
      </label>
      <input
        ref={inputRef}
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          "min-h-11 rounded-lg border bg-[var(--surface-soft)] px-3.5 py-2.5 text-sm text-[var(--text)] outline-none transition-colors placeholder:text-[var(--muted)]",
          error ? "border-red-400/60" : "border-[var(--border)] focus:border-[var(--border-hover)]"
        )}
      />
      {error ? (
        <p id={errorId} className="text-xs text-red-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}

type TextAreaFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
};

function TextAreaField({ id, label, value, onChange, error }: TextAreaFieldProps) {
  const errorId = `${id}-error`;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-medium text-[var(--muted)]">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        rows={4}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          "resize-none rounded-lg border bg-[var(--surface-soft)] px-3.5 py-2.5 text-sm text-[var(--text)] outline-none transition-colors placeholder:text-[var(--muted)]",
          error ? "border-red-400/60" : "border-[var(--border)] focus:border-[var(--border-hover)]"
        )}
      />
      {error ? (
        <p id={errorId} className="text-xs text-red-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}
