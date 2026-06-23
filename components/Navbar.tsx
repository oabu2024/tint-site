"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Home", "Services", "About", "Gallery", "Contact"];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: scrolled ? "#3E2723" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "80px",
          }}
        >
          {/* Logo */}
          <a
            href="/"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontWeight: 900,
              fontSize: "1.35rem",
              color: "#FAF9F6",
              letterSpacing: "0.05em",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            TINT
            <span style={{ color: "#C0392B" }}>BROS</span>
          </a>

          {/* Desktop Links */}
          <div
            className="hidden md:flex"
            style={{ alignItems: "center", gap: "2.5rem" }}
          >
            {links.map((link) => (
              <NavLink key={link} label={link} />
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                backgroundColor: "#C0392B",
                color: "#FAF9F6",
                padding: "10px 28px",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor =
                  "#a93226")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor =
                  "#C0392B")
              }
            >
              Get a Quote
            </motion.a>
          </div>

          {/* Hamburger */}
          <button
            className="flex md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={
                  menuOpen
                    ? i === 0
                      ? { rotate: 45, y: 10 }
                      : i === 1
                        ? { opacity: 0, scaleX: 0 }
                        : { rotate: -45, y: -10 }
                    : { rotate: 0, y: 0, opacity: 1, scaleX: 1 }
                }
                style={{
                  display: "block",
                  width: "26px",
                  height: "2px",
                  backgroundColor: "#FAF9F6",
                  transformOrigin: "center",
                }}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 90,
              backgroundColor: "#3E2723",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2.5rem",
            }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "#FAF9F6",
                  fontWeight: 700,
                  fontSize: "2.5rem",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                }}
              >
                {link}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => setMenuOpen(false)}
              style={{
                backgroundColor: "#C0392B",
                color: "#FAF9F6",
                padding: "14px 40px",
                fontWeight: 700,
                fontSize: "0.9rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                marginTop: "1rem",
              }}
            >
              Get a Quote
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ label }: { label: string }) {
  return (
    <a
      href={`#${label.toLowerCase()}`}
      style={{
        color: "rgba(250,249,246,0.85)",
        textDecoration: "none",
        fontWeight: 500,
        fontSize: "0.875rem",
        letterSpacing: "0.05em",
        position: "relative",
      }}
      className="group"
    >
      {label}
      <span
        style={{
          position: "absolute",
          bottom: "-3px",
          left: 0,
          width: "0%",
          height: "2px",
          backgroundColor: "#C0392B",
          transition: "width 0.3s ease",
        }}
        className="group-hover:w-full"
      />
    </a>
  );
}
