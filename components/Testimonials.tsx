"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    quote:
      "The transformation was immediate. Our south-facing living room used to be unbearable in the afternoon. After Tint Bros installed their solar film, it's comfortable all day and our energy bill dropped in the first month.",
    name: "Marcus & Elena Thornton",
    location: "Sugar Land, TX",
    rating: 5,
  },
  {
    quote:
      "We were skeptical that film could actually provide privacy without blocking our view. Tint Bros showed us a sample and we were sold instantly. The one-way mirror tint is genuinely stunning. Neighbors can't see in, we see everything out.",
    name: "Priya Nair",
    location: "Katy, TX",
    rating: 5,
  },
  {
    quote:
      "The privacy film they installed in our bathroom and office has completely elevated the interior. Professional installation, immaculate finish. Tint Bros operates at a completely different level.",
    name: "James & Carol Whitfield",
    location: "The Woodlands, TX",
    rating: 5,
  },
  {
    quote:
      "From the free consultation to the final walkthrough, every step felt premium. Tint Bros matched the film to our home's architecture perfectly. This is the kind of detail that separates good from exceptional.",
    name: "Dominique Laurent",
    location: "Pearland, TX",
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
          Client Stories
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
