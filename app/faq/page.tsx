"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    a: "Yes. All residential installations come with a lifetime warranty covering bubbling, peeling, cracking, and significant fading. Commercial installations are covered for 5 years. See our Warranty page for full details.",
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main>
        <section style={{ backgroundColor: "#0f0705", padding: "120px 0 80px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 2.5rem" }}>
            <span style={{ color: "#C0392B", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", display: "block", marginBottom: "1rem" }}>
              Support
            </span>
            <h1 style={{ color: "#FAF9F6", fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 0.95, letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
              FREQUENTLY<br /><span style={{ color: "#C0392B" }}>ASKED QUESTIONS</span>
            </h1>
            <p style={{ color: "rgba(250,249,246,0.5)", fontSize: "0.95rem", lineHeight: 1.7 }}>
              Everything you need to know about our window tinting services.
            </p>
          </div>
        </section>

        <section style={{ backgroundColor: "#FAF9F6", padding: "80px 0 100px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 2.5rem" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid rgba(62,39,35,0.1)" }}>
                <button
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  style={{
                    width: "100%", background: "none", border: "none",
                    padding: "1.5rem 0", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    gap: "1rem", fontFamily: "inherit", textAlign: "left",
                  }}
                >
                  <span style={{ fontWeight: 700, fontSize: "1rem", color: "#3E2723", lineHeight: 1.4 }}>
                    {faq.q}
                  </span>
                  <span style={{
                    color: "#C0392B", fontSize: "1.4rem", fontWeight: 300, flexShrink: 0,
                    transform: activeIndex === i ? "rotate(45deg)" : "none",
                    transition: "transform 0.25s ease", display: "inline-block",
                  }}>+</span>
                </button>
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ overflow: "hidden" }}
                    >
                      <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "rgba(62,39,35,0.7)", paddingBottom: "1.5rem" }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(62,39,35,0.1)" }}>
              <p style={{ color: "rgba(62,39,35,0.6)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                Still have questions?{" "}
                <Link href="/#contact" style={{ color: "#C0392B", fontWeight: 600, textDecoration: "none" }}>
                  Contact us
                </Link>{" "}
                and we&apos;ll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
