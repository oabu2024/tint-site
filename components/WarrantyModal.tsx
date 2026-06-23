"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WarrantyModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          background: "none",
          border: "none",
          color: "rgba(250,249,246,0.55)",
          fontSize: "0.9rem",
          cursor: "pointer",
          padding: 0,
          fontFamily: "inherit",
          textAlign: "left",
        }}
      >
        Warranty
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.75)",
                zIndex: 999,
              }}
            />

            {/* Centering wrapper */}
            <div style={{
              position: "fixed",
              inset: 0,
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
              pointerEvents: "none",
            }}>
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                pointerEvents: "all",
                width: "min(680px, 100%)",
                maxHeight: "88vh",
                overflowY: "auto",
                backgroundColor: "#faf9f6",
                boxShadow: "0 32px 80px rgba(0,0,0,0.4)",
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                style={{
                  position: "sticky",
                  top: "1rem",
                  left: "100%",
                  float: "right",
                  marginRight: "1rem",
                  marginTop: "1rem",
                  background: "none",
                  border: "1px solid rgba(62,39,35,0.2)",
                  width: "32px",
                  height: "32px",
                  cursor: "pointer",
                  fontSize: "1rem",
                  color: "#3E2723",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "inherit",
                  zIndex: 10,
                }}
              >
                ✕
              </button>

              {/* Document */}
              <div style={{ padding: "3rem 3rem 3.5rem", color: "#3E2723", fontFamily: "inherit" }}>

                {/* Header with logo */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem", borderBottom: "3px solid #C0392B", paddingBottom: "1.5rem" }}>
                  <div>
                    <div style={{ fontWeight: 900, fontSize: "1.8rem", letterSpacing: "-0.02em", lineHeight: 1 }}>
                      TINT<span style={{ color: "#C0392B" }}>BROS</span>
                    </div>
                    <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: "rgba(62,39,35,0.5)", textTransform: "uppercase", marginTop: "4px" }}>
                      Houston &amp; Surrounding Areas
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontWeight: 800, fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C0392B", marginBottom: "4px" }}>
                      Certificate of
                    </div>
                    <div style={{ fontWeight: 900, fontSize: "1.4rem", letterSpacing: "-0.01em", color: "#3E2723" }}>
                      WARRANTY
                    </div>
                  </div>
                </div>

                {/* Intro */}
                <p style={{ fontSize: "0.9rem", lineHeight: 1.75, marginBottom: "2rem", color: "rgba(62,39,35,0.8)" }}>
                  Tint Bros stands behind every installation we perform. This warranty applies to all residential and commercial window tinting services completed by our certified technicians and covers defects in materials and workmanship under normal use conditions.
                </p>

                {/* Warranty sections */}
                {[
                  {
                    title: "1. Coverage",
                    body: "This warranty covers bubbling, peeling, cracking, delamination, and significant color change or fading of the installed window film under normal use. Coverage applies to the film and adhesive used during your installation.",
                  },
                  {
                    title: "2. Duration",
                    body: "Tint Bros provides a lifetime warranty on all residential installations for as long as you own the property. Commercial installations are covered for a period of 5 years from the date of installation.",
                  },
                  {
                    title: "3. Transferable",
                    body: "This warranty is fully transferable to subsequent property owners at no additional cost. The new owner must contact Tint Bros with proof of the original installation date to activate the transfer.",
                  },
                  {
                    title: "4. Exclusions",
                    body: "This warranty does not cover damage caused by misuse, improper cleaning, physical damage, scratches, acts of nature, or modifications made to the film after installation. Damage caused by broken or cracked glass is also excluded.",
                  },
                  {
                    title: "5. Claim Process",
                    body: "To make a warranty claim, contact Tint Bros directly. A technician will assess the issue at no charge. If the defect falls within warranty coverage, we will repair or replace the affected film free of cost.",
                  },
                ].map((section) => (
                  <div key={section.title} style={{ marginBottom: "1.5rem" }}>
                    <h3 style={{ fontWeight: 800, fontSize: "0.85rem", letterSpacing: "0.05em", textTransform: "uppercase", color: "#3E2723", marginBottom: "0.5rem" }}>
                      {section.title}
                    </h3>
                    <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: "rgba(62,39,35,0.75)" }}>
                      {section.body}
                    </p>
                  </div>
                ))}

                {/* Footer line */}
                <div style={{ borderTop: "1px solid rgba(62,39,35,0.15)", paddingTop: "1.5rem", marginTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontWeight: 900, fontSize: "1rem", letterSpacing: "-0.01em" }}>
                      TINT<span style={{ color: "#C0392B" }}>BROS</span>
                    </div>
                    <div style={{ fontSize: "0.7rem", color: "rgba(62,39,35,0.45)", marginTop: "2px" }}>
                      Houston, TX · tintbros.com
                    </div>
                  </div>
                  <div style={{ textAlign: "right", fontSize: "0.7rem", color: "rgba(62,39,35,0.45)", lineHeight: 1.6 }}>
                    Questions? Contact us<br />for warranty support.
                  </div>
                </div>

              </div>
            </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
