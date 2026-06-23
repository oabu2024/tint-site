"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const photos = [
  { src: "/hum.webp", alt: "Window tint install" },
  { src: "/bed.jpg", alt: "Bedroom window tinting" },
  { src: "/laliga.jpg", alt: "Window tint install" },
  { src: "/prem.jpg", alt: "Window tint install" },
  { src: "/dad.webp", alt: "Window tint install" },
];

// Slide 1: [0], Slide 2: [1,2], Slide 3: [3,4]
const slides = [
  [photos[0]],
  [photos[1], photos[2]],
  [photos[3], photos[4]],
];

export default function Gallery() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (index: number) => {
    setDir(index > active ? 1 : -1);
    setActive(index);
  };

  return (
    <section id="gallery" style={{ backgroundColor: "#0f0705", padding: "120px 0 140px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>

        {/* Heading */}
        <div style={{ marginBottom: "3rem", display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <ScrollReveal>
              <span style={{ color: "#C0392B", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", display: "block", marginBottom: "0.75rem" }}>
                Gallery
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 style={{ color: "#FAF9F6", fontWeight: 900, fontSize: "clamp(2.5rem, 5vw, 5rem)", lineHeight: 0.95, letterSpacing: "-0.03em", margin: 0 }}>
                RECENT<br /><span style={{ color: "#C0392B" }}>INSTALLS</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p style={{ color: "rgba(250,249,246,0.5)", fontSize: "0.95rem", lineHeight: 1.7, margin: "1rem 0 0" }}>
                A look at what professional window tinting looks like up close.
              </p>
            </ScrollReveal>
          </div>

          {/* Arrows */}
          <div style={{ display: "flex", gap: "10px" }}>
            {[{ label: "←", fn: () => go(Math.max(0, active - 1)) }, { label: "→", fn: () => go(Math.min(slides.length - 1, active + 1)) }].map(({ label, fn }) => (
              <button
                key={label}
                onClick={fn}
                style={{
                  width: "48px", height: "48px", borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.2)",
                  backgroundColor: "transparent", color: "#FAF9F6",
                  fontSize: "1.1rem", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "background-color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#C0392B"; (e.currentTarget as HTMLElement).style.borderColor = "#C0392B"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)"; }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Slide area */}
        <div>
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={active}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                display: "grid",
                gridTemplateColumns: slides[active].length === 1 ? "1fr" : "1fr 1fr",
                gap: "12px",
              }}
            >
              {slides[active].map((photo) => (
                <div
                  key={photo.src}
                  style={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    backgroundColor: "#1a0f0d",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={900}
                    height={700}
                    style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }}
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginTop: "2rem" }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              style={{
                width: active === i ? "28px" : "8px",
                height: "8px",
                borderRadius: "4px",
                backgroundColor: active === i ? "#C0392B" : "rgba(255,255,255,0.2)",
                border: "none", cursor: "pointer", padding: 0,
                transition: "width 0.3s, background-color 0.3s",
              }}
            />
          ))}
        </div>

        {/* Bottom label */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "2.5rem" }}>
          <div style={{ height: "1px", flex: 1, backgroundColor: "rgba(255,255,255,0.08)" }} />
          <span style={{ color: "rgba(250,249,246,0.3)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
            Houston &amp; Surrounding Areas
          </span>
          <div style={{ height: "1px", flex: 1, backgroundColor: "rgba(255,255,255,0.08)" }} />
        </div>

      </div>
    </section>
  );
}
