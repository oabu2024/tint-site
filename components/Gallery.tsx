"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const photos = [
  { src: "/hum.webp", alt: "Window tint install" },
  { src: "/bed.jpg", alt: "Bedroom window tinting" },
  { src: "/laliga.jpg", alt: "Window tint install" },
  { src: "/prem.jpg", alt: "Window tint install" },
  { src: "/dad.webp", alt: "Window tint install" },
];

function GalleryImage({ src, alt, delay = 0, height }: { src: string; alt: string; delay?: number; height: string }) {
  return (
    <ScrollReveal delay={delay}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ position: "relative", width: "100%", height, overflow: "hidden", borderRadius: "8px" }}
      >
        <Image src={src} alt={alt} fill style={{ objectFit: "cover", objectPosition: "center" }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(15,7,5,0.45) 0%, transparent 50%)",
        }} />
      </motion.div>
    </ScrollReveal>
  );
}

export default function Gallery() {
  const [featured, ...rest] = photos;

  return (
    <section id="gallery" style={{ backgroundColor: "#0f0705", padding: "120px 0 140px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>

        {/* Heading */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3.5rem", flexWrap: "wrap", gap: "1rem" }}>
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
          </div>
          <ScrollReveal delay={0.2}>
            <p style={{ color: "rgba(250,249,246,0.5)", fontSize: "0.95rem", maxWidth: "320px", lineHeight: 1.7, margin: 0 }}>
              A look at what professional window tinting looks like up close.
            </p>
          </ScrollReveal>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>

          {/* Featured — spans full left column */}
          <div style={{ gridRow: "1 / 3" }}>
            <GalleryImage src={featured.src} alt={featured.alt} delay={0} height="690px" />
          </div>

          {/* Top-right */}
          <GalleryImage src={rest[0].src} alt={rest[0].alt} delay={0.1} height="340px" />

          {/* Bottom-right: two side by side (only first 2 of rest) */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {rest.slice(1, 3).map((photo, i) => (
              <GalleryImage key={photo.src} src={photo.src} alt={photo.alt} delay={0.2 + i * 0.08} height="340px" />
            ))}
          </div>
        </div>

        {/* 5th image — full width strip */}
        {rest[3] && (
          <div style={{ marginTop: "10px" }}>
            <GalleryImage src={rest[3].src} alt={rest[3].alt} delay={0.35} height="260px" />
          </div>
        )}

        {/* Bottom label */}
        <ScrollReveal delay={0.3}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "2rem" }}>
            <div style={{ height: "1px", flex: 1, backgroundColor: "rgba(255,255,255,0.08)" }} />
            <span style={{ color: "rgba(250,249,246,0.3)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
              Houston &amp; Surrounding Areas
            </span>
            <div style={{ height: "1px", flex: 1, backgroundColor: "rgba(255,255,255,0.08)" }} />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
