"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Button from "./Button";
import ScrollReveal from "./ScrollReveal";
import { supabase } from "@/lib/supabase";

const inputStyle = {
  width: "100%",
  backgroundColor: "rgba(250,249,246,0.07)",
  border: "1px solid rgba(250,249,246,0.15)",
  color: "#FAF9F6",
  fontSize: "0.9rem",
  padding: "12px 16px",
  outline: "none",
  fontFamily: "inherit",
};

export default function CTABanner() {
  const ref = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", area: "", service: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const { error } = await supabase.from("quotes").insert([{
      name: form.name,
      phone: form.phone,
      email: form.email,
      area: form.area,
      service: form.service,
      message: form.message,
    }]);
    if (error) {
      setError("Something went wrong. Please try again.");
    } else {
      setSubmitted(true);
    }
  };
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        position: "relative",
        padding: "140px 0",
        overflow: "hidden",
        backgroundColor: "#2c1810",
      }}
    >
      {/* Parallax BG */}
      <motion.div
        style={{
          position: "absolute",
          inset: "-20%",
          y: bgY,
          background:
            "linear-gradient(135deg, #1a0f0d 0%, #3E2723 50%, #2c1810 100%)",
        }}
      />

      {/* Geometric shapes */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "-100px",
            transform: "translateY(-50%) rotate(45deg)",
            width: "400px",
            height: "400px",
            border: "1px solid rgba(192,57,43,0.1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "-50px",
            transform: "translateY(-50%) rotate(45deg)",
            width: "280px",
            height: "280px",
            border: "1px solid rgba(192,57,43,0.07)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "3rem",
            width: "80px",
            height: "3px",
            backgroundColor: "#C0392B",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2.5rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="cta-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <div>
            <ScrollReveal>
              <span
                style={{
                  display: "inline-block",
                  color: "#C0392B",
                  fontWeight: 600,
                  fontSize: "0.7rem",
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  marginBottom: "1.5rem",
                }}
              >
                Take the First Step
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2
                style={{
                  color: "#FAF9F6",
                  fontWeight: 900,
                  fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.02em",
                  marginBottom: "1.5rem",
                }}
              >
                READY TO
                <br />
                TRANSFORM
                <br />
                <span style={{ color: "#C0392B" }}>YOUR HOME?</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p
                style={{
                  color: "rgba(250,249,246,0.6)",
                  fontSize: "1.05rem",
                  maxWidth: "480px",
                  lineHeight: 1.7,
                }}
              >
                Book your free, no-obligation home consultation today. We come
                to you, assess your needs, and provide a detailed quote — all
                within 24 hours.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delay={0.3}>
            <div style={{ minWidth: "min(320px, 100%)", maxWidth: "420px", width: "100%" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "3rem 0" }}>
                  <div style={{ color: "#C0392B", fontSize: "2.5rem", marginBottom: "1rem" }}>✓</div>
                  <p style={{ color: "#FAF9F6", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>We got your request!</p>
                  <p style={{ color: "rgba(250,249,246,0.5)", fontSize: "0.9rem" }}>We'll reach out within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    <input
                      name="name"
                      placeholder="Full Name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                    <input
                      name="phone"
                      placeholder="Phone Number"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    required
                    value={form.email}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  <input
                    name="area"
                    placeholder="City / Area (e.g. Katy, Sugar Land)"
                    value={form.area}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    style={{ ...inputStyle, color: form.service ? "#FAF9F6" : "rgba(250,249,246,0.45)" }}
                  >
                    <option value="" disabled style={{ backgroundColor: "#3E2723", color: "#FAF9F6" }}>Service Needed</option>
<option value="home" style={{ backgroundColor: "#3E2723", color: "#FAF9F6" }}>Home</option>
                    <option value="commercial" style={{ backgroundColor: "#3E2723", color: "#FAF9F6" }}>Commercial</option>
                  </select>
                  <textarea
                    name="message"
                    placeholder="Anything else we should know? (optional)"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: "none" }}
                  />
                  {error && (
                    <p style={{ color: "#C0392B", fontSize: "0.8rem", textAlign: "center" }}>{error}</p>
                  )}
                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#C0392B",
                      color: "#FAF9F6",
                      fontWeight: 800,
                      fontSize: "0.8rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      padding: "16px",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "inherit",
                    }}
                  >
                    Get Quote
                  </button>
                  <p style={{ color: "rgba(250,249,246,0.35)", fontSize: "0.72rem", textAlign: "center", letterSpacing: "0.05em" }}>
                    Response within 24 hours · No obligation
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
