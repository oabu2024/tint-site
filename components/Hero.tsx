"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";

export default function Hero() {

  const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number];
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };
  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
  };

  const locationTag = (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        color: "#C0392B",
        fontWeight: 600,
        fontSize: "0.75rem",
        letterSpacing: "0.35em",
        textTransform: "uppercase",
        marginBottom: "1.2rem",
      }}
    >
      <svg width="12" height="16" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <path d="M7 0C3.13 0 0 3.13 0 7C0 11.17 5.64 17.31 6.53 18.28C6.79 18.56 7.22 18.56 7.48 18.28C8.36 17.31 14 11.17 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z" fill="#C0392B" />
      </svg>
      Serving Houston &amp; Surrounding Areas
    </span>
  );

  return (
    <>
      {/* ── HERO ── */}
      <section id="home" className="hero-section" style={{ backgroundColor: "#1a0f0d" }}>
        {/* House image — full visible, no overlay */}
        <div style={{ position: "relative", width: "100%", height: "300px" }}>
          <Image
            src="/hero house.jpg"
            alt="Modern home with premium window tinting"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
          />
          {/* Light bottom fade into dark section */}
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "80px",
            background: "linear-gradient(to bottom, transparent, #1a0f0d)",
          }} />
        </div>

        {/* Text content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          style={{ padding: "2rem 1.5rem 3rem" }}
        >
          <motion.div variants={item}>{locationTag}</motion.div>

          <motion.div variants={item}>
            <h1 style={{ color: "#FAF9F6", fontWeight: 900, fontSize: "2.4rem", lineHeight: 1, letterSpacing: "-0.02em", marginBottom: "0.25rem" }}>
              RESIDENTIAL
            </h1>
            <h1 style={{ color: "#FAF9F6", fontWeight: 900, fontSize: "2.4rem", lineHeight: 1, letterSpacing: "-0.02em", marginBottom: "0.25rem" }}>
              &amp; COMMERCIAL
            </h1>
            <h1 style={{ color: "#FAF9F6", fontWeight: 900, fontSize: "2.4rem", lineHeight: 1, letterSpacing: "-0.02em", marginBottom: "0.25rem" }}>
              WINDOW
            </h1>
            <h1 style={{ fontWeight: 900, fontSize: "2.4rem", lineHeight: 1, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
              <span style={{ color: "#C0392B" }}>TINTING</span>
            </h1>
          </motion.div>

          <motion.p variants={item} style={{ color: "rgba(250,249,246,0.7)", fontSize: "1rem", lineHeight: 1.65, marginBottom: "2rem" }}>
            Block the heat, protect your interiors, and add privacy. One installation covers it all.
          </motion.p>

          <motion.div variants={item} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <Button variant="primary" href="#contact">Get a Free Quote</Button>
            <Button variant="outline" href="#services">Our Services</Button>
          </motion.div>
        </motion.div>
      </section>

    </>
  );
}
