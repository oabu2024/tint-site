"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="16" stroke="#FAF9F6" strokeWidth="1.5" />
        <path
          d="M20 4C20 4 28 12 28 20C28 28 20 36 20 36C20 36 12 28 12 20C12 12 20 4 20 4Z"
          fill="rgba(192,57,43,0.2)"
          stroke="#C0392B"
          strokeWidth="1.5"
        />
        <line
          x1="4"
          y1="20"
          x2="36"
          y2="20"
          stroke="#FAF9F6"
          strokeWidth="1"
          opacity="0.3"
        />
      </svg>
    ),
    title: "Solar Film",
    tagline: "Stay cool. Save energy.",
    description:
      "Our high-performance solar films block up to 99% of UV rays and dramatically reduce heat gain — lowering your energy bills while keeping interiors comfortable year-round.",
    stat: "Up to 79% heat rejected",
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
        <rect
          x="6"
          y="6"
          width="28"
          height="28"
          rx="2"
          stroke="#FAF9F6"
          strokeWidth="1.5"
        />
        <path
          d="M6 14H34M6 22H34M14 6V34"
          stroke="rgba(250,249,246,0.3)"
          strokeWidth="1"
        />
        <rect
          x="14"
          y="6"
          width="20"
          height="28"
          fill="rgba(192,57,43,0.15)"
          stroke="#C0392B"
          strokeWidth="1"
        />
      </svg>
    ),
    title: "Privacy Tint",
    tagline: "Your home. Your sanctuary.",
    description:
      "One-way mirror film provides complete daytime privacy without sacrificing natural light — ideal for street-facing rooms, bathrooms, and offices.",
    stat: "100% daytime privacy",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        backgroundColor: "#FAF9F6",
        padding: "120px 0 140px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
        <SectionHeading
          eyebrow="What We Do"
          title={`CRAFTED\nFOR YOUR\nHOME`}
          subtitle="Two specialized film solutions, each engineered for maximum performance and lasting elegance."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2px",
            marginTop: "4rem",
          }}
        >
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.12}>
              <ServiceCard service={service} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 32px 64px rgba(62,39,35,0.18)" }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        backgroundColor: "#5D4037",
        padding: "3rem 2.5rem",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
      }}
    >
      {/* Red accent top line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          backgroundColor: "#C0392B",
        }}
      />

      {/* Big number */}
      <div
        style={{
          position: "absolute",
          top: "1.5rem",
          right: "2rem",
          fontSize: "5rem",
          fontWeight: 900,
          color: "rgba(255,255,255,0.05)",
          lineHeight: 1,
          letterSpacing: "-0.05em",
        }}
      >
        0{index + 1}
      </div>

      <div style={{ marginBottom: "2rem" }}>{service.icon}</div>

      <h3
        style={{
          color: "#FAF9F6",
          fontWeight: 800,
          fontSize: "1.6rem",
          letterSpacing: "-0.02em",
          marginBottom: "0.5rem",
        }}
      >
        {service.title}
      </h3>

      <p
        style={{
          color: "#C0392B",
          fontWeight: 600,
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "1.25rem",
        }}
      >
        {service.tagline}
      </p>

      <p
        style={{
          color: "rgba(250,249,246,0.7)",
          fontSize: "0.95rem",
          lineHeight: 1.7,
          marginBottom: "2rem",
        }}
      >
        {service.description}
      </p>

      <div
        style={{
          borderTop: "1px solid rgba(250,249,246,0.12)",
          paddingTop: "1.25rem",
          color: "#FAF9F6",
          fontWeight: 700,
          fontSize: "0.8rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        {service.stat}
      </div>
    </motion.div>
  );
}
