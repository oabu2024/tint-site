"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "./Button";
import ScrollReveal from "./ScrollReveal";

export default function CTABanner() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        position: "relative",
        padding: "140px 0",
        overflow: "hidden",
        backgroundColor: "#2c1810",
      }}
    >
      {/* Parallax BG */}
      <motion.div
        style={{
          position: "absolute",
          inset: "-20%",
          y: bgY,
          background:
            "linear-gradient(135deg, #1a0f0d 0%, #3E2723 50%, #2c1810 100%)",
        }}
      />

      {/* Geometric shapes */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "-100px",
            transform: "translateY(-50%) rotate(45deg)",
            width: "400px",
            height: "400px",
            border: "1px solid rgba(192,57,43,0.1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "-50px",
            transform: "translateY(-50%) rotate(45deg)",
            width: "280px",
            height: "280px",
            border: "1px solid rgba(192,57,43,0.07)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "3rem",
            width: "80px",
            height: "3px",
            backgroundColor: "#C0392B",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2.5rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <div>
            <ScrollReveal>
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
                Take the First Step
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2
                style={{
                  color: "#FAF9F6",
                  fontWeight: 900,
                  fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.02em",
                  marginBottom: "1.5rem",
                }}
              >
                READY TO
                <br />
                TRANSFORM
                <br />
                <span style={{ color: "#C0392B" }}>YOUR HOME?</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p
                style={{
                  color: "rgba(250,249,246,0.6)",
                  fontSize: "1.05rem",
                  maxWidth: "480px",
                  lineHeight: 1.7,
                }}
              >
                Book your free, no-obligation home consultation today. We come
                to you, assess your needs, and provide a detailed quote — all
                within 24 hours.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delay={0.3}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                minWidth: "220px",
              }}
            >
              <Button variant="primary" href="tel:+15550123456">
                Call Now
              </Button>
              <Button variant="outline" href="mailto:hello@luxetint.com">
                Email Us
              </Button>
              <p
                style={{
                  color: "rgba(250,249,246,0.35)",
                  fontSize: "0.75rem",
                  textAlign: "center",
                  letterSpacing: "0.05em",
                }}
              >
                Response within 24 hours
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
