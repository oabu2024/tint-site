"use client";

import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <ScrollReveal delay={0}>
          <span
            className="inline-block text-xs font-semibold tracking-[0.3em] uppercase mb-4"
            style={{ color: "#C0392B" }}
          >
            {eyebrow}
          </span>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.1}>
        <h2
          className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight"
          style={{ color: light ? "#FAF9F6" : "#3E2723" }}
        >
          {title}
        </h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={0.2}>
          <p
            className="mt-6 text-lg font-medium max-w-xl leading-relaxed"
            style={{
              color: light ? "rgba(250,249,246,0.7)" : "rgba(62,39,35,0.65)",
            }}
          >
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
