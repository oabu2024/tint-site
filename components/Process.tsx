"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description:
      "We visit your home, assess your windows, and listen to your goals — privacy, heat reduction, or aesthetics. Zero pressure, pure expertise.",
    duration: "60 min",
  },
  {
    number: "02",
    title: "Film Selection",
    description:
      "Browse our curated library of premium films. We provide physical samples to see exactly how each option looks on your glass in real light.",
    duration: "30 min",
  },
  {
    number: "03",
    title: "Professional Install",
    description:
      "Our certified team arrives on time, works cleanly, and completes most homes in a single day — with precision cuts and bubble-free application.",
    duration: "1 day",
  },
  {
    number: "04",
    title: "Warranty & Care",
    description:
      "Every installation is backed by our transferable lifetime warranty. We provide a care guide and remain your point of contact for years to come.",
    duration: "Lifetime",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      style={{
        backgroundColor: "#FAF9F6",
        padding: "60px 0 140px",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
        <SectionHeading
          eyebrow="How It Works"
          title={`OUR\nPROCESS`}
          subtitle="Four simple steps from first call to final reveal."
        />

        {/* Timeline */}
        <div style={{ position: "relative", marginTop: "5rem" }}>
          {/* Connecting line — desktop */}
          <div
            style={{
              position: "absolute",
              top: "2.5rem",
              left: "calc(12.5% - 1px)",
              right: "calc(12.5% - 1px)",
              height: "1px",
              backgroundColor: "rgba(62,39,35,0.1)",
            }}
            className="hidden md:block"
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "3rem",
            }}
          >
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.15}>
                <StepCard step={step} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Number circle */}
      <div
        style={{
          width: "5rem",
          height: "5rem",
          border: "1px solid rgba(62,39,35,0.15)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "2rem",
          position: "relative",
          backgroundColor: "#FAF9F6",
        }}
      >
        <span
          style={{
            color: "#C0392B",
            fontWeight: 900,
            fontSize: "1.1rem",
            letterSpacing: "0.05em",
          }}
        >
          {step.number}
        </span>
      </div>

      {/* Duration badge */}
      <span
        style={{
          display: "inline-block",
          backgroundColor: "rgba(192,57,43,0.08)",
          color: "#C0392B",
          fontWeight: 700,
          fontSize: "0.65rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          padding: "4px 10px",
          marginBottom: "1rem",
        }}
      >
        {step.duration}
      </span>

      <h3
        style={{
          color: "#3E2723",
          fontWeight: 800,
          fontSize: "1.4rem",
          letterSpacing: "-0.02em",
          marginBottom: "1rem",
        }}
      >
        {step.title}
      </h3>

      <p
        style={{
          color: "rgba(62,39,35,0.6)",
          fontSize: "0.95rem",
          lineHeight: 1.7,
        }}
      >
        {step.description}
      </p>
    </motion.div>
  );
}
