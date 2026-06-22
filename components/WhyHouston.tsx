"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const reasons = [
  {
    icon: "☀️",
    stat: "200+",
    statLabel: "Sunny days per year",
    title: "Brutal Texas Heat",
    body: "Houston summers push indoor temps to uncomfortable highs. Window film blocks up to 79% of solar heat before it ever enters your space.",
  },
  {
    icon: "⚡",
    stat: "30%",
    statLabel: "Average energy savings",
    title: "High Energy Bills",
    body: "AC systems work overtime fighting heat gain through untreated glass. Tinted windows reduce the load — and your monthly bill.",
  },
  {
    icon: "🛡️",
    stat: "99%",
    statLabel: "UV rays blocked",
    title: "UV Damage to Interiors",
    body: "Furniture, flooring, and artwork fade fast under Houston's intense sun. Our films filter out 99% of UV rays to protect what's inside.",
  },
  {
    icon: "👁️",
    stat: "100%",
    statLabel: "Daytime privacy",
    title: "Lack of Privacy",
    body: "Close neighbors and street-facing rooms leave you exposed. One-way mirror and frosted films give you full privacy without losing natural light.",
  },
];

export default function WhyHouston() {
  return (
    <section
      style={{
        backgroundColor: "#3E2723",
        padding: "120px 0 140px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 60%, rgba(192,57,43,0.07) 0%, transparent 55%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2.5rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <SectionHeading
          eyebrow="The Houston Challenge"
          title={`WHY HOUSTON\nPROPERTIES NEED\nWINDOW TINTING`}
          light
        />

        {/* Photo */}
        <ScrollReveal delay={0.1}>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "480px",
              overflow: "hidden",
              marginBottom: "2rem",
            }}
          >
            <Image
              src="/homey.webp"
              alt="Modern home with window tinting"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            {/* subtle red corner accent */}
            <div style={{ position: "absolute", top: 0, left: 0, width: "50px", height: "3px", backgroundColor: "#C0392B" }} />
            <div style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "50px", backgroundColor: "#C0392B" }} />
          </div>
        </ScrollReveal>

        {/* Subtitle below image */}
        <ScrollReveal delay={0.15}>
          <p style={{
            color: "rgba(250,249,246,0.65)",
            fontWeight: 500,
            fontSize: "1.05rem",
            lineHeight: 1.75,
            maxWidth: "600px",
            marginBottom: "4rem",
          }}>
            Sunlight entering through glass brings heat, glare, and visibility from outside. Window tinting reduces heat before it spreads through the room and adds a privacy layer that makes interiors harder to see from outdoors. Many Houston property owners notice cooler spaces, less glare on screens, and a drop in energy use instantly.
          </p>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2px",
            marginTop: "4rem",
          }}
        >
          {reasons.map((r, i) => (
            <ScrollReveal key={r.title} delay={i * 0.1}>
              <ReasonCard reason={r} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonCard({
  reason,
  index,
}: {
  reason: (typeof reasons)[0];
  index: number;
}) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: "0 24px 48px rgba(0,0,0,0.3)" }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
      style={{
        backgroundColor: "rgba(250,249,246,0.04)",
        border: "1px solid rgba(250,249,246,0.07)",
        padding: "2.5rem",
        position: "relative",
        cursor: "default",
      }}
    >
      {/* Red top accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "40px",
          height: "3px",
          backgroundColor: "#C0392B",
        }}
      />

      {/* Big stat */}
      <div style={{ marginBottom: "1.5rem" }}>
        <span
          style={{
            display: "block",
            color: "#C0392B",
            fontWeight: 900,
            fontSize: "3rem",
            lineHeight: 1,
            letterSpacing: "-0.03em",
          }}
        >
          {reason.stat}
        </span>
        <span
          style={{
            color: "rgba(250,249,246,0.4)",
            fontWeight: 500,
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          {reason.statLabel}
        </span>
      </div>

      <h3
        style={{
          color: "#FAF9F6",
          fontWeight: 800,
          fontSize: "1.2rem",
          marginBottom: "0.85rem",
          letterSpacing: "-0.01em",
        }}
      >
        {reason.title}
      </h3>

      <p
        style={{
          color: "rgba(250,249,246,0.6)",
          fontSize: "0.9rem",
          lineHeight: 1.7,
        }}
      >
        {reason.body}
      </p>

      {/* Index number watermark */}
      <div
        style={{
          position: "absolute",
          bottom: "1.25rem",
          right: "1.5rem",
          color: "rgba(255,255,255,0.04)",
          fontWeight: 900,
          fontSize: "5rem",
          lineHeight: 1,
          letterSpacing: "-0.05em",
        }}
      >
        0{index + 1}
      </div>
    </motion.div>
  );
}
