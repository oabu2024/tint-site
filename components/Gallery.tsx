"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const photos = [
  { src: "/hero house.jpg", alt: "Residential tint install" },
  { src: "/bed.jpg", alt: "Bedroom window tinting" },
  { src: "/hum.webp", alt: "Window tint install" },
  { src: "/laliga.jpg", alt: "Window tint install" },
  { src: "/prem.jpg", alt: "Window tint install" },
  { src: "/dad.webp", alt: "Window tint install" },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      style={{
        backgroundColor: "#FAF9F6",
        padding: "120px 0 140px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
        <SectionHeading
          eyebrow="Gallery"
          title={`RECENT\nINSTALLS`}
          subtitle="A look at what professional window tinting looks like up close."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "12px",
            marginTop: "4rem",
          }}
        >
          {photos.map((photo, i) => (
            <ScrollReveal key={photo.src} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
                style={{
                  position: "relative",
                  height: "320px",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
                {/* Red corner accent */}
                <div style={{ position: "absolute", top: 0, left: 0, width: "36px", height: "3px", backgroundColor: "#C0392B" }} />
                <div style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "36px", backgroundColor: "#C0392B" }} />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
