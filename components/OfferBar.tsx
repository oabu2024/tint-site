"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function OfferBar() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ backgroundColor: "#1a0f0d", overflow: "hidden", position: "relative", zIndex: 110 }}
        >
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            padding: "8px 3rem",
          }}>
            <span style={{ color: "#C0392B", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
              ☀️ Summer Special
            </span>
            <span style={{ width: "1px", height: "12px", backgroundColor: "rgba(255,255,255,0.2)", flexShrink: 0 }} />
            <span style={{ color: "rgba(250,249,246,0.85)", fontSize: "0.78rem", fontWeight: 500 }}>
              <strong style={{ color: "#FAF9F6" }}>$150 off</strong> + free live quote
            </span>
            <span style={{ width: "1px", height: "12px", backgroundColor: "rgba(255,255,255,0.2)", flexShrink: 0 }} />
            <a
              href="#contact"
              style={{
                color: "#C0392B",
                fontWeight: 800,
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                whiteSpace: "nowrap",
                borderBottom: "1px solid #C0392B",
                paddingBottom: "1px",
              }}
            >
              Claim →
            </a>
            <button
              onClick={() => setVisible(false)}
              aria-label="Dismiss"
              style={{
                position: "absolute",
                right: "1rem",
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.4)",
                cursor: "pointer",
                fontSize: "0.75rem",
                lineHeight: 1,
                padding: "4px",
              }}
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
