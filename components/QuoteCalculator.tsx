"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const RATE = 7; // $7 per sq ft

const COUNT_OPTIONS = [
  { label: "1–5",        value: 3,  display: "1–5 windows" },
  { label: "6–10",       value: 8,  display: "6–10 windows" },
  { label: "11–20",      value: 15, display: "11–20 windows" },
  { label: "20+",        value: 25, display: "20+ windows" },
  { label: "Not sure",   value: 10, display: "~10 windows (est.)" },
];

const SIZE_OPTIONS = [
  { label: "Small",            value: 8,  display: "Small (~8 sq ft)" },
  { label: "Medium",           value: 15, display: "Medium (~15 sq ft)" },
  { label: "Large",            value: 25, display: "Large (~25 sq ft)" },
  { label: "Mixed / Not sure", value: 15, display: "Mixed / ~15 sq ft avg" },
];

const TYPE_OPTIONS = [
  { label: "🏠 Home",        value: "home" },
  { label: "🏢 Commercial",  value: "commercial" },
  { label: "🏙️ Condo / Apt", value: "condo" },
];

const TYPE_LABELS: Record<string, string> = {
  home: "Home", commercial: "Commercial", condo: "Condo / Apt",
};

const chipBase: React.CSSProperties = {
  padding: "9px 18px",
  border: "1px solid rgba(250,249,246,0.12)",
  background: "rgba(250,249,246,0.05)",
  color: "rgba(250,249,246,0.5)",
  fontSize: "0.82rem",
  fontWeight: 600,
  fontFamily: "inherit",
  borderRadius: "100px",
  cursor: "pointer",
  transition: "all 0.18s",
  whiteSpace: "nowrap" as const,
};

const chipActive: React.CSSProperties = {
  ...chipBase,
  background: "#C0392B",
  borderColor: "#C0392B",
  color: "#fff",
  fontWeight: 700,
};

export default function QuoteCalculator() {
  const [type, setType]   = useState<string | null>(null);
  const [count, setCount] = useState<number | null>(null);
  const [size, setSize]   = useState<number | null>(null);
  const [countDisplay, setCountDisplay] = useState("");
  const [sizeDisplay, setSizeDisplay]   = useState("");

  const answered = [type, count, size].filter(Boolean).length;
  const sqft  = count && size ? Math.round(count * size) : null;
  const mid   = sqft ? sqft * RATE : null;
  const low   = mid ? Math.round(mid * 0.85 / 10) * 10 : null;
  const high  = mid ? Math.round(mid * 1.15 / 10) * 10 : null;
  const pct   = Math.round((answered / 3) * 100);
  const ready = answered === 3;

  return (
    <section style={{ padding: "100px 0 120px", backgroundColor: "#100806", position: "relative", overflow: "hidden" }}>
      {/* background glow */}
      <div style={{
        position: "absolute", width: "700px", height: "700px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(192,57,43,0.1) 0%, transparent 70%)",
        top: "-100px", right: "-200px", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2.5rem", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ marginBottom: "2.75rem" }}>
          <ScrollReveal>
            <span style={{ color: "#C0392B", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", display: "block", marginBottom: "0.75rem" }}>
              Instant Estimate
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 style={{ color: "#FAF9F6", fontWeight: 900, fontSize: "clamp(2.2rem,4.5vw,3.8rem)", lineHeight: 0.93, letterSpacing: "-0.03em", marginBottom: "1rem" }}>
              HOW MUCH WILL<br /><span style={{ color: "#C0392B" }}>YOUR TINT COST?</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p style={{ color: "rgba(250,249,246,0.5)", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: "500px" }}>
              Answer 3 quick questions and get a ballpark price in seconds — no calls, no obligation.
            </p>
          </ScrollReveal>
        </div>

        {/* Card */}
        <ScrollReveal delay={0.15}>
          <div style={{
            background: "#1c0e0b", border: "1px solid rgba(250,249,246,0.08)",
            borderRadius: "16px", padding: "2.5rem",
            boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
          }}>
            <div className="calc-grid">

              {/* LEFT: Questions */}
              <div>
                {/* Progress dots */}
                <div style={{ display: "flex", gap: "6px", marginBottom: "1.75rem" }}>
                  {[0, 1, 2].map((i) => {
                    const filled = i < answered;
                    const current = i === answered;
                    return (
                      <div key={i} style={{
                        height: "5px", borderRadius: "3px",
                        background: filled || current ? "#C0392B" : "rgba(250,249,246,0.08)",
                        width: current ? "44px" : "28px",
                        transition: "all 0.25s",
                      }} />
                    );
                  })}
                </div>

                {/* Q1 */}
                <div style={{ marginBottom: "1.75rem" }}>
                  <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(250,249,246,0.22)", display: "block", marginBottom: "0.5rem" }}>Step 1 of 3</span>
                  <p style={{ fontSize: "0.93rem", fontWeight: 700, color: "#FAF9F6", marginBottom: "0.9rem" }}>What type of property?</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {TYPE_OPTIONS.map((o) => (
                      <button key={o.value} onClick={() => setType(o.value)} style={type === o.value ? chipActive : chipBase}>{o.label}</button>
                    ))}
                  </div>
                </div>

                {/* Q2 */}
                <div style={{ marginBottom: "1.75rem" }}>
                  <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(250,249,246,0.22)", display: "block", marginBottom: "0.5rem" }}>Step 2 of 3</span>
                  <p style={{ fontSize: "0.93rem", fontWeight: 700, color: "#FAF9F6", marginBottom: "0.9rem" }}>How many windows?</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {COUNT_OPTIONS.map((o) => (
                      <button key={o.label} onClick={() => { setCount(o.value); setCountDisplay(o.display); }} style={count === o.value && countDisplay === o.display ? chipActive : chipBase}>{o.label}</button>
                    ))}
                  </div>
                </div>

                {/* Q3 */}
                <div>
                  <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(250,249,246,0.22)", display: "block", marginBottom: "0.5rem" }}>Step 3 of 3</span>
                  <p style={{ fontSize: "0.93rem", fontWeight: 700, color: "#FAF9F6", marginBottom: "0.4rem" }}>Average window size?</p>
                  <p style={{ fontSize: "0.72rem", color: "rgba(250,249,246,0.35)", marginBottom: "0.8rem" }}>Small ≈ 8 sq ft · Medium ≈ 15 sq ft · Large ≈ 25 sq ft</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {SIZE_OPTIONS.map((o) => (
                      <button key={o.label} onClick={() => { setSize(o.value); setSizeDisplay(o.display); }} style={size === o.value && sizeDisplay === o.display ? chipActive : chipBase}>{o.label}</button>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT: Result */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div>
                  <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#C0392B", display: "block", marginBottom: "0.4rem" }}>Your Estimate</span>
                  <div style={{
                    fontSize: "clamp(2.4rem,5vw,3.5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1,
                    color: ready && low && high ? "#FAF9F6" : "rgba(250,249,246,0.22)",
                    transition: "color 0.3s",
                  }}>
                    {ready && low && high
                      ? `$${low.toLocaleString()} – $${high.toLocaleString()}`
                      : answered >= 2 && mid
                        ? `~$${mid.toLocaleString()}`
                        : "—"}
                  </div>
                  <p style={{ color: "rgba(250,249,246,0.5)", fontSize: "0.8rem", lineHeight: 1.6, marginTop: "0.5rem" }}>
                    {ready
                      ? `Based on ~${sqft} sq ft × $${RATE}/sq ft. Final quote confirmed on-site.`
                      : answered >= 2
                        ? "Almost there — answer all 3 for your full estimate."
                        : "Select your options to see your instant estimate."}
                  </p>
                </div>

                {/* Progress bar */}
                <div>
                  <div style={{ background: "rgba(250,249,246,0.06)", borderRadius: "4px", height: "6px", overflow: "hidden" }}>
                    <div style={{ height: "100%", background: "#C0392B", borderRadius: "4px", width: pct + "%", transition: "width 0.4s cubic-bezier(0.25,0.1,0.25,1)" }} />
                  </div>
                  <p style={{ fontSize: "0.7rem", color: "rgba(250,249,246,0.22)", marginTop: "0.4rem" }}>{answered} of 3 answered</p>
                </div>

                {/* Breakdown */}
                {ready && (
                  <div style={{ border: "1px solid rgba(250,249,246,0.08)", borderRadius: "10px", overflow: "hidden" }}>
                    {[
                      ["Property",  type ? TYPE_LABELS[type] : "—"],
                      ["Windows",   countDisplay || "—"],
                      ["Avg size",  sizeDisplay  || "—"],
                      ["Est. sq ft", sqft ? `~${sqft} sq ft` : "—"],
                      ["Rate",      `$${RATE} / sq ft`],
                    ].map(([k, v]) => (
                      <div key={k} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.7rem 1rem", borderBottom: "1px solid rgba(250,249,246,0.08)", fontSize: "0.8rem" }}>
                        <span style={{ color: "rgba(250,249,246,0.5)" }}>{k}</span>
                        <span style={{ color: "#FAF9F6", fontWeight: 700 }}>{v}</span>
                      </div>
                    ))}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.7rem 1rem", fontSize: "0.8rem" }}>
                      <span style={{ color: "rgba(250,249,246,0.5)" }}>Estimate</span>
                      <span style={{ color: "#C0392B", fontWeight: 700 }}>{low && high ? `$${low.toLocaleString()} – $${high.toLocaleString()}` : "—"}</span>
                    </div>
                  </div>
                )}

                {/* CTA */}
                {ready && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <a
                      href="#contact"
                      style={{
                        background: "#C0392B", color: "#FAF9F6",
                        fontWeight: 900, fontSize: "0.8rem",
                        letterSpacing: "0.15em", textTransform: "uppercase",
                        padding: "16px", border: "none", borderRadius: "6px",
                        cursor: "pointer", fontFamily: "inherit",
                        boxShadow: "0 4px 20px rgba(192,57,43,0.3)",
                        textAlign: "center", textDecoration: "none", display: "block",
                      }}
                    >
                      Lock In This Price → Get My Quote
                    </a>
                    <p style={{ fontSize: "0.7rem", color: "rgba(250,249,246,0.22)", textAlign: "center" }}>
                      Final price confirmed on-site · No obligation · Response within 24 hrs
                    </p>
                  </div>
                )}
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        .calc-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          align-items: start;
        }
        @media (max-width: 700px) {
          .calc-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
