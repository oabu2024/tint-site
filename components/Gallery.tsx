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

export default function Gallery() {
  const [active, setActive] = useState(0);

  return (
    <section id="gallery" style={{ backgroundColor: "#0f0705", padding: "120px 0 140px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>

        {/* Heading */}
        <div style={{ marginBottom: "3rem" }}>
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
            <p style={{ color: "rgba(250,249,246,0.5)", fontSize: "0.95rem", lineHeight: 1.7, margin: "1rem 0 0", maxWidth: "400px" }}>
              A look at what professional window tinting looks like up close.
            </p>
          </ScrollReveal>
        </div>

        {/* Gallery layout: main image + thumbnail column */}
        <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>

          {/* Main image */}
          <div style={{ flex: 1, borderRadius: "10px", overflow: "hidden", position: "relative" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Image
                  src={photos[active].src}
                  alt={photos[active].alt}
                  width={900}
                  height={700}
                  style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnail column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "160px", flexShrink: 0 }}>
            {photos.map((photo, i) => (
              <motion.div
                key={photo.src}
                onClick={() => setActive(i)}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                style={{
                  borderRadius: "6px",
                  overflow: "hidden",
                  cursor: "pointer",
                  border: active === i ? "2px solid #C0392B" : "2px solid transparent",
                  opacity: active === i ? 1 : 0.55,
                  transition: "opacity 0.3s, border-color 0.3s",
                }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={300}
                  height={220}
                  style={{ width: "100%", height: "auto", display: "block", objectFit: "contain", backgroundColor: "#1a0f0d" }}
                />
              </motion.div>
            ))}
          </div>
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
