"use client";

import { useRef, useState } from "react";
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

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement;
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - 24, behavior: "smooth" });
    setActive(index);
  };

  const prev = () => scrollTo(Math.max(0, active - 1));
  const next = () => scrollTo(Math.min(photos.length - 1, active + 1));

  return (
    <section id="gallery" style={{ backgroundColor: "#0f0705", padding: "120px 0 140px", overflow: "hidden" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Heading */}
        <div style={{ padding: "0 2.5rem", marginBottom: "3rem", display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
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

          {/* Arrow controls */}
          <ScrollReveal delay={0.15}>
            <div style={{ display: "flex", gap: "10px" }}>
              {[{ label: "←", fn: prev }, { label: "→", fn: next }].map(({ label, fn }) => (
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
          </ScrollReveal>
        </div>

        {/* Scrollable track */}
        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: "12px",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            paddingLeft: "2.5rem",
            paddingRight: "2.5rem",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onScroll={() => {
            const track = trackRef.current;
            if (!track) return;
            const scrollLeft = track.scrollLeft;
            let closest = 0;
            let minDist = Infinity;
            Array.from(track.children).forEach((child, i) => {
              const dist = Math.abs((child as HTMLElement).offsetLeft - 24 - scrollLeft);
              if (dist < minDist) { minDist = dist; closest = i; }
            });
            setActive(closest);
          }}
        >
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              onClick={() => scrollTo(i)}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              style={{
                flexShrink: 0,
                width: "clamp(260px, 55vw, 520px)",
                scrollSnapAlign: "start",
                borderRadius: "10px",
                overflow: "hidden",
                cursor: "pointer",
                border: active === i ? "2px solid #C0392B" : "2px solid transparent",
                transition: "border-color 0.3s",
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={600}
                style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginTop: "2rem" }}>
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              style={{
                width: active === i ? "24px" : "8px",
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
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "2.5rem", padding: "0 2.5rem" }}>
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
