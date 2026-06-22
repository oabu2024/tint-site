"use client";

import AnimatedCounter from "./AnimatedCounter";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: 5, suffix: "-Star", label: "Rated Service" },
  { value: 10000, suffix: "+", label: "Windows Tinted" },
  { value: 99, suffix: "%", label: "UV Blocked" },
  { value: 500, suffix: "+", label: "Happy Homeowners" },
];

const reasons = [
  {
    title: "Certified Installers",
    body: "Every technician is factory-trained and IWFA-certified — no shortcuts, no subcontractors.",
  },
  {
    title: "Premium Film Brands",
    body: "We install only top-tier films from 3M, Llumar, and Vista — brands that stand behind their product.",
  },
  {
    title: "Lifetime Warranty",
    body: "Every residential installation comes with our transferable lifetime warranty. We stand behind every square foot.",
  },
  {
    title: "Clean. Precise. Fast.",
    body: "Professional installation in a single day with zero mess, zero bubbles, and zero disruption to your schedule.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#3E2723",
        padding: "120px 0 140px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 80% 50%, rgba(192,57,43,0.08) 0%, transparent 60%)",
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
        {/* Stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "0",
            borderBottom: "1px solid rgba(250,249,246,0.1)",
            paddingBottom: "5rem",
            marginBottom: "6rem",
          }}
        >
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div
                style={{
                  borderRight: i < 3 ? "1px solid rgba(250,249,246,0.08)" : "none",
                  padding: "0 2.5rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    color: "#FAF9F6",
                    fontWeight: 900,
                    fontSize: "clamp(3rem, 6vw, 5.5rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    marginBottom: "0.75rem",
                  }}
                >
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2200}
                  />
                </div>
                <p
                  style={{
                    color: "rgba(250,249,246,0.45)",
                    fontWeight: 500,
                    fontSize: "0.8rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Two column */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6rem",
            alignItems: "start",
          }}
        >
          <ScrollReveal direction="left">
            <div>
              <span
                style={{
                  display: "inline-block",
                  color: "#C0392B",
                  fontWeight: 600,
                  fontSize: "0.7rem",
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  marginBottom: "1.5rem",
                }}
              >
                Why Choose Us
              </span>
              <h2
                style={{
                  color: "#FAF9F6",
                  fontWeight: 900,
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.02em",
                  marginBottom: "2rem",
                }}
              >
                THE STANDARD
                <br />
                OTHERS
                <br />
                <span style={{ color: "#C0392B" }}>MEASURE BY.</span>
              </h2>
              <p
                style={{
                  color: "rgba(250,249,246,0.65)",
                  fontSize: "1.05rem",
                  lineHeight: 1.75,
                  maxWidth: "440px",
                }}
              >
                We don&apos;t just apply film — we solve problems. Heat, glare,
                fading furniture, lack of privacy. Every installation is
                precision-engineered for your specific windows and lifestyle.
              </p>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gap: "0",
            }}
          >
            {reasons.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 0.1} direction="right">
                <div
                  style={{
                    borderBottom: "1px solid rgba(250,249,246,0.08)",
                    padding: "2rem 0",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1.5rem",
                    }}
                  >
                    <span
                      style={{
                        color: "#C0392B",
                        fontWeight: 900,
                        fontSize: "1rem",
                        paddingTop: "3px",
                        flexShrink: 0,
                      }}
                    >
                      0{i + 1}
                    </span>
                    <div>
                      <h4
                        style={{
                          color: "#FAF9F6",
                          fontWeight: 700,
                          fontSize: "1.05rem",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {r.title}
                      </h4>
                      <p
                        style={{
                          color: "rgba(250,249,246,0.55)",
                          fontSize: "0.9rem",
                          lineHeight: 1.65,
                        }}
                      >
                        {r.body}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
