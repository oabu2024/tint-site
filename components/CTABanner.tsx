"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { supabase } from "@/lib/supabase";

const inputStyle = {
  width: "100%",
  backgroundColor: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.18)",
  color: "#FAF9F6",
  fontSize: "0.9rem",
  padding: "13px 16px",
  outline: "none",
  fontFamily: "inherit",
  borderRadius: "4px",
  transition: "border-color 0.2s",
};

export default function CTABanner() {
  const ref = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", area: "", service: "", window_count: "", timeline: "", owns_property: "", message: "" });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const { error } = await supabase.from("quotes").insert([{
      name: form.name, phone: form.phone, email: form.email,
      area: form.area, service: form.service, message: form.message,
      window_count: form.window_count, timeline: form.timeline, owns_property: form.owns_property,
    }]);
    if (error) setError("Something went wrong. Please try again.");
    else setSubmitted(true);
  };

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="contact"
      ref={ref}
      style={{ position: "relative", padding: "120px 0", overflow: "hidden", backgroundColor: "#FAF9F6" }}
    >
      {/* Parallax texture overlay */}
      <motion.div style={{
        position: "absolute", inset: "-20%", y: bgY,
        background: "radial-gradient(ellipse at 70% 50%, rgba(192,57,43,0.06) 0%, transparent 70%)",
      }} />

      {/* Large ghost text background */}
      <div style={{
        position: "absolute", top: "50%", left: "-2%",
        transform: "translateY(-50%)",
        fontWeight: 900, fontSize: "clamp(8rem, 18vw, 22rem)",
        lineHeight: 1, letterSpacing: "-0.05em",
        color: "rgba(192,57,43,0.07)",
        userSelect: "none", pointerEvents: "none", whiteSpace: "nowrap",
      }}>
        TINT
      </div>

      {/* Decorative circles */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-120px", right: "-120px", width: "400px", height: "400px", borderRadius: "50%", border: "1px solid rgba(192,57,43,0.15)" }} />
        <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "250px", height: "250px", borderRadius: "50%", border: "1px solid rgba(192,57,43,0.1)" }} />
        <div style={{ position: "absolute", bottom: "-80px", left: "10%", width: "200px", height: "200px", borderRadius: "50%", border: "1px solid rgba(192,57,43,0.1)" }} />
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem", position: "relative", zIndex: 1 }}>
        <div
          className="cta-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "5rem", alignItems: "center" }}
        >
          {/* Left — copy */}
          <div>
            <ScrollReveal>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                backgroundColor: "rgba(192,57,43,0.08)",
                border: "1px solid rgba(192,57,43,0.3)",
                borderRadius: "100px",
                padding: "6px 16px",
                marginBottom: "2rem",
              }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#C0392B", display: "inline-block" }} />
                <span style={{ color: "#C0392B", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  Free Consultation
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 style={{
                color: "#1a0f0d", fontWeight: 900,
                fontSize: "clamp(2.8rem, 6vw, 6rem)",
                lineHeight: 0.92, letterSpacing: "-0.03em", marginBottom: "1.75rem",
              }}>
                GET YOUR<br />
                FREE<br />
                <span style={{ color: "#C0392B" }}>QUOTE TODAY</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p style={{ color: "rgba(26,15,13,0.6)", fontSize: "1rem", maxWidth: "400px", lineHeight: 1.75, marginBottom: "2.5rem" }}>
                We come to you, assess your windows, and send a detailed quote — all within 24 hours. No pressure, no obligation.
              </p>
            </ScrollReveal>

            {/* Trust badges */}
            <ScrollReveal delay={0.3}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {["Lifetime warranty on all installs", "Response within 24 hours", "Serving Houston & all surrounding areas"].map((point) => (
                  <div key={point} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "18px", height: "18px", borderRadius: "50%", backgroundColor: "rgba(192,57,43,0.1)", border: "1px solid rgba(192,57,43,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "#C0392B", fontSize: "0.65rem", fontWeight: 900 }}>✓</span>
                    </div>
                    <span style={{ color: "rgba(26,15,13,0.7)", fontSize: "0.875rem" }}>{point}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right — form card */}
          <ScrollReveal direction="right" delay={0.2}>
            <div style={{
              minWidth: "min(360px, 100%)", maxWidth: "440px", width: "100%",
              backgroundColor: "#1a0f0d",
              border: "none",
              borderRadius: "12px",
              padding: "2.5rem",
              boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
            }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                  <div style={{
                    width: "64px", height: "64px", borderRadius: "50%",
                    backgroundColor: "rgba(192,57,43,0.15)", border: "2px solid #C0392B",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 1.5rem",
                  }}>
                    <span style={{ color: "#C0392B", fontSize: "1.5rem" }}>✓</span>
                  </div>
                  <p style={{ color: "#FAF9F6", fontWeight: 800, fontSize: "1.2rem", marginBottom: "0.5rem" }}>Request received!</p>
                  <p style={{ color: "rgba(250,249,246,0.5)", fontSize: "0.875rem" }}>We'll reach out within 24 hours.</p>
                </div>
              ) : (
                <>
                  <div style={{ marginBottom: "1.75rem" }}>
                    <h3 style={{ color: "#FAF9F6", fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.25rem" }}>Request a Free Quote</h3>
                  <p style={{ color: "rgba(250,249,246,0.4)", fontSize: "0.8rem" }}>Fill out the form and we'll get back to you fast.</p>
                  </div>

                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                      <input name="name" placeholder="Full Name" required value={form.name} onChange={handleChange} style={inputStyle} />
                      <input name="phone" placeholder="Phone Number" required value={form.phone} onChange={handleChange} style={inputStyle} />
                    </div>
                    <input name="email" type="email" placeholder="Email Address" required value={form.email} onChange={handleChange} style={inputStyle} />
                    <input name="area" placeholder="City / Area (e.g. Katy, Sugar Land)" value={form.area} onChange={handleChange} style={inputStyle} />
                    <select
                      name="service" required value={form.service} onChange={handleChange}
                      style={{ ...inputStyle, color: form.service ? "#FAF9F6" : "rgba(250,249,246,0.4)" }}
                    >
                      <option value="" disabled style={{ backgroundColor: "#1a0f0d", color: "#FAF9F6" }}>Service Needed</option>
                      <option value="home" style={{ backgroundColor: "#1a0f0d", color: "#FAF9F6" }}>Home</option>
                      <option value="commercial" style={{ backgroundColor: "#1a0f0d", color: "#FAF9F6" }}>Commercial</option>
                    </select>
                    <select
                      name="window_count" required value={form.window_count} onChange={handleChange}
                      style={{ ...inputStyle, color: form.window_count ? "#FAF9F6" : "rgba(250,249,246,0.4)" }}
                    >
                      <option value="" disabled style={{ backgroundColor: "#1a0f0d", color: "#FAF9F6" }}>How many windows?</option>
                      <option value="1-5" style={{ backgroundColor: "#1a0f0d", color: "#FAF9F6" }}>1–5 windows</option>
                      <option value="6-15" style={{ backgroundColor: "#1a0f0d", color: "#FAF9F6" }}>6–15 windows</option>
                      <option value="16+" style={{ backgroundColor: "#1a0f0d", color: "#FAF9F6" }}>16+ windows</option>
                      <option value="not-sure" style={{ backgroundColor: "#1a0f0d", color: "#FAF9F6" }}>Not sure</option>
                    </select>
                    <select
                      name="timeline" required value={form.timeline} onChange={handleChange}
                      style={{ ...inputStyle, color: form.timeline ? "#FAF9F6" : "rgba(250,249,246,0.4)" }}
                    >
                      <option value="" disabled style={{ backgroundColor: "#1a0f0d", color: "#FAF9F6" }}>When do you want this done?</option>
                      <option value="asap" style={{ backgroundColor: "#1a0f0d", color: "#FAF9F6" }}>As soon as possible</option>
                      <option value="30-days" style={{ backgroundColor: "#1a0f0d", color: "#FAF9F6" }}>Within 30 days</option>
                      <option value="exploring" style={{ backgroundColor: "#1a0f0d", color: "#FAF9F6" }}>Just exploring</option>
                    </select>
<textarea
                      name="message" placeholder="Anything else we should know? (optional)"
                      rows={3} value={form.message} onChange={handleChange}
                      style={{ ...inputStyle, resize: "none" }}
                    />
                    {error && <p style={{ color: "#C0392B", fontSize: "0.8rem", textAlign: "center" }}>{error}</p>}

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, backgroundColor: "#C0392B", color: "#FAF9F6" }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        backgroundColor: "#FAF9F6", color: "#1a0f0d",
                        fontWeight: 900, fontSize: "0.85rem",
                        letterSpacing: "0.15em", textTransform: "uppercase",
                        padding: "18px", border: "none", cursor: "pointer",
                        fontFamily: "inherit", borderRadius: "4px",
                        boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                        transition: "background-color 0.2s, color 0.2s",
                      }}
                    >
                      Get My Free Quote →
                    </motion.button>

                    <p style={{ color: "rgba(250,249,246,0.3)", fontSize: "0.7rem", textAlign: "center", letterSpacing: "0.05em" }}>
                      No obligation · Response within 24 hours
                    </p>
                  </form>
                </>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
