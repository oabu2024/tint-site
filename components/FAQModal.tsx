"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How long does a window tinting installation take?",
    a: "Most residential installations are completed in a single day. The exact time depends on the number of windows, but our team works efficiently to minimize disruption to your schedule.",
  },
  {
    q: "How long do I have to wait before cleaning my windows?",
    a: "We recommend waiting at least 30 days before cleaning the inside of your tinted windows. This allows the film to fully cure. Use a soft cloth and ammonia-free cleaner when you do clean them.",
  },
  {
    q: "Will window tint make my home too dark inside?",
    a: "No. Our films are designed to block heat and UV rays while maintaining natural light. Most customers notice little to no difference in brightness, just a more comfortable and glare-free interior.",
  },
  {
    q: "Can window tint be applied to any type of glass?",
    a: "Window film can be applied to most standard residential and commercial glass. We assess your windows during the free consultation to confirm compatibility and recommend the best film for your glass type.",
  },
  {
    q: "Does window tint help with privacy at night?",
    a: "One-way mirror film provides daytime privacy by reflecting light from outside. At night, when interior lights are on, visibility reverses. For full around-the-clock privacy, frosted or blackout films are a better option.",
  },
  {
    q: "Will tinting affect my window warranty?",
    a: "In most cases, professionally installed window film does not void your window manufacturer's warranty. We use film brands that are widely accepted. We recommend checking your window warranty terms if you have concerns.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Houston and all surrounding areas including Katy, Sugar Land, The Woodlands, Pearland, Friendswood, League City, and more. Contact us if you're unsure whether we cover your area.",
  },
  {
    q: "Is there a warranty on the installation?",
    a: "Yes. All residential installations come with a lifetime warranty covering bubbling, peeling, cracking, and significant fading. Commercial installations are covered for 5 years. See our Warranty document for full details.",
  },
];

export default function FAQModal() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
        FAQ
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
                  }}
                >
                  ✕
                </button>

                <div style={{ padding: "3rem 3rem 3.5rem", color: "#3E2723" }}>
                  {/* Header */}
                  <div style={{ borderBottom: "3px solid #C0392B", paddingBottom: "1.5rem", marginBottom: "2rem" }}>
                    <div style={{ fontWeight: 900, fontSize: "1.8rem", letterSpacing: "-0.02em", lineHeight: 1, marginBottom: "4px" }}>
                      TINT<span style={{ color: "#C0392B" }}>BROS</span>
                    </div>
                    <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: "rgba(62,39,35,0.5)", textTransform: "uppercase" }}>
                      Frequently Asked Questions
                    </div>
                  </div>

                  {/* FAQ items */}
                  <div>
                    {faqs.map((faq, i) => (
                      <div
                        key={i}
                        style={{
                          borderBottom: "1px solid rgba(62,39,35,0.1)",
                        }}
                      >
                        <button
                          onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                          style={{
                            width: "100%",
                            background: "none",
                            border: "none",
                            padding: "1.25rem 0",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "1rem",
                            fontFamily: "inherit",
                            textAlign: "left",
                          }}
                        >
                          <span style={{ fontWeight: 700, fontSize: "0.95rem", color: "#3E2723", lineHeight: 1.4 }}>
                            {faq.q}
                          </span>
                          <span style={{
                            color: "#C0392B",
                            fontSize: "1.2rem",
                            fontWeight: 300,
                            flexShrink: 0,
                            transform: activeIndex === i ? "rotate(45deg)" : "none",
                            transition: "transform 0.25s ease",
                            display: "inline-block",
                          }}>
                            +
                          </span>
                        </button>

                        <AnimatePresence>
                          {activeIndex === i && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                              style={{ overflow: "hidden" }}
                            >
                              <p style={{
                                fontSize: "0.88rem",
                                lineHeight: 1.75,
                                color: "rgba(62,39,35,0.7)",
                                paddingBottom: "1.25rem",
                              }}>
                                {faq.a}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(62,39,35,0.15)", fontSize: "0.8rem", color: "rgba(62,39,35,0.5)" }}>
                    Still have questions? Contact us and we'll get back to you within 24 hours.
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
