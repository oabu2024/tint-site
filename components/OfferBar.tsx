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
          style={{ backgroundColor: "#C0392B", overflow: "hidden", position: "sticky", top: 0, zIndex: 200 }}
        >
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            padding: "10px 1.5rem",
            position: "relative",
          }}>
            <span style={{ fontSize: "0.75rem", letterSpacing: "0.15em", color: "rgba(255,255,255,0.7)", textTransform: "uppercase", fontWeight: 600 }}>
              ☀️ Summer Special
            </span>
            <span style={{ width: "1px", height: "14px", backgroundColor: "rgba(255,255,255,0.3)" }} />
            <span style={{ color: "#FAF9F6", fontWeight: 800, fontSize: "0.85rem", letterSpacing: "0.02em" }}>
              Get $150 off your first full-home tint installation this summer
            </span>
            <span style={{ width: "1px", height: "14px", backgroundColor: "rgba(255,255,255,0.3)" }} />
            <a
              href="#contact"
              style={{
                color: "#FAF9F6",
                fontWeight: 800,
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.5)",
                paddingBottom: "1px",
                whiteSpace: "nowrap",
              }}
            >
              Claim Offer →
            </a>
            <button
              onClick={() => setVisible(false)}
              style={{
                position: "absolute",
                right: "1rem",
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.6)",
                cursor: "pointer",
                fontSize: "1rem",
                lineHeight: 1,
                padding: "4px",
              }}
              aria-label="Dismiss"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
