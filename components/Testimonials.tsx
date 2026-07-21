"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    quote:
      "Houston homes face brutal afternoon heat. Our solar film blocks up to 99% of UV rays and significantly reduces heat coming through your windows — homeowners typically notice the difference the same day.",
    name: "Solar Heat Rejection",
    location: "Sugar Land, Katy & Surrounding Areas",
    rating: 5,
  },
  {
    quote:
      "One-way privacy film lets you see out while blocking the view from outside. No curtains needed, no loss of natural light — just clean, modern privacy that works all day long.",
    name: "One-Way Privacy Film",
    location: "Houston, TX",
    rating: 5,
  },
  {
    quote:
      "Every install starts with a free in-person consultation. We measure your windows, show you film samples, and give you a quote on the spot. No pressure, no guesswork.",
    name: "Free In-Person Consultation",
    location: "Houston & Surrounding Areas",
    rating: 5,
  },
  {
    quote:
      "We stand behind every install with a lifetime warranty on our film. If it peels, bubbles, or fades — we fix it. That's the Tint Bros standard.",
    name: "Lifetime Warranty",
    location: "All Service Areas",
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      5500
    );
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[index];

  return (
    <section
      style={{
        backgroundColor: "#3E2723",
        padding: "120px 0 140px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-50%",
          left: "-20%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(192,57,43,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 2.5rem",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <span
          style={{
            display: "inline-block",
            color: "#C0392B",
            fontWeight: 600,
            fontSize: "0.7rem",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            marginBottom: "3rem",
          }}
        >
          Why Tint Bros
        </span>

        {/* Big quote mark */}
        <div
          style={{
            color: "rgba(192,57,43,0.2)",
            fontSize: "8rem",
            fontWeight: 900,
            lineHeight: 0.5,
            marginBottom: "2rem",
          }}
        >
          "
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p
              style={{
                color: "#FAF9F6",
                fontWeight: 500,
                fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                lineHeight: 1.65,
                fontStyle: "italic",
                marginBottom: "3rem",
              }}
            >
              {t.quote}
            </p>

            <div>
              {/* Stars */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "4px",
                  marginBottom: "1rem",
                }}
              >
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} style={{ color: "#C0392B", fontSize: "1rem" }}>
                    ★
                  </span>
                ))}
              </div>

              <p
                style={{
                  color: "#FAF9F6",
                  fontWeight: 700,
                  fontSize: "1rem",
                  marginBottom: "0.25rem",
                }}
              >
                {t.name}
              </p>
              <p
                style={{
                  color: "rgba(250,249,246,0.4)",
                  fontWeight: 400,
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                }}
              >
                {t.location}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginTop: "3rem",
          }}
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              style={{
                width: i === index ? "2rem" : "6px",
                height: "6px",
                borderRadius: "3px",
                backgroundColor: i === index ? "#C0392B" : "rgba(250,249,246,0.25)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.35s ease",
                padding: 0,
              }}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
