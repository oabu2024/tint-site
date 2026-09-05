"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import ScrollReveal from "./ScrollReveal";
import { supabase } from "@/lib/supabase";

const inputStyle = {
  width: "100%",
  backgroundColor: "#fff",
  border: "2px solid #1a0f0d",
  color: "#1a0f0d",
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
  const [form, setForm] = useState({ name: "", phone: "", email: "", area: "", service: "", window_count: "", timeline: "", owns_property: "", message: "", available_for_call: "" });
  const [error, setError] = useState<string | null>(null);
  const [photos, setPhotos] = useState<File[]>([]);
  const [photoUrls, setPhotoUrls] = useState<string[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addPhotos = useCallback((files: FileList | File[]) => {
    const arr = Array.from(files).slice(0, 5 - photos.length);
    setPhotos((prev) => [...prev, ...arr].slice(0, 5));
    setPhotoUrls((prev) => [...prev, ...arr.map((f) => URL.createObjectURL(f))].slice(0, 5));
  }, [photos.length]);

  const removePhoto = (i: number) => {
    setPhotos((prev) => prev.filter((_, idx) => idx !== i));
    setPhotoUrls((prev) => prev.filter((_, idx) => idx !== i));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setUploading(true);

    // Upload photos to Supabase Storage
    let uploadedUrls: string[] = [];
    if (photos.length > 0) {
      for (const file of photos) {
        const ext = file.name.split(".").pop();
        const path = `quotes/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
        const { error: upErr } = await supabase.storage.from("quote-photos").upload(path, file);
        if (!upErr) {
          const { data } = supabase.storage.from("quote-photos").getPublicUrl(path);
          uploadedUrls.push(data.publicUrl);
        }
      }
    }

    const { error } = await supabase.from("quotes").insert([{
      name: form.name, phone: form.phone, email: form.email,
      area: form.area, service: form.service, message: form.message,
      window_count: form.window_count, timeline: form.timeline,
      owns_property: form.owns_property, available_for_call: form.available_for_call,
      photo_urls: uploadedUrls.length > 0 ? uploadedUrls : null,
    }]);

    setUploading(false);

    if (error) {
      setError("Something went wrong. Please try again.");
    } else {
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead");
      }
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "conversion", { send_to: "AW-18285315911/f9KrCKGcgcgcEMeOj49E" });
      }
      setSubmitted(true);
    }
  };

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="contact"
      ref={ref}
      style={{ position: "relative", padding: "120px 0", overflow: "hidden", backgroundColor: "#0f0705" }}
    >
      {/* Parallax texture overlay */}
      <motion.div style={{
        position: "absolute", inset: "-20%", y: bgY,
        background: "radial-gradient(ellipse at 20% 50%, rgba(192,57,43,0.25) 0%, transparent 60%), linear-gradient(135deg, #0f0705 0%, #1a0f0d 50%, #0f0705 100%)",
      }} />

      {/* Large ghost text background */}
      <div style={{
        position: "absolute", top: "50%", left: "-2%",
        transform: "translateY(-50%)",
        fontWeight: 900, fontSize: "clamp(8rem, 18vw, 22rem)",
        lineHeight: 1, letterSpacing: "-0.05em",
        color: "rgba(255,255,255,0.06)",
        userSelect: "none", pointerEvents: "none", whiteSpace: "nowrap",
      }}>
        TINT
      </div>

      {/* Decorative circles */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-120px", right: "-120px", width: "400px", height: "400px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.06)" }} />
        <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "250px", height: "250px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.04)" }} />
        <div style={{ position: "absolute", bottom: "-80px", left: "10%", width: "200px", height: "200px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.04)" }} />
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
                backgroundColor: "rgba(192,57,43,0.15)",
                border: "1px solid rgba(192,57,43,0.4)",
                borderRadius: "100px",
                padding: "6px 16px",
                marginBottom: "2rem",
              }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#C0392B", display: "inline-block" }} />
                <span style={{ color: "#FAF9F6", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  Get a Quote
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 style={{
                color: "#FAF9F6", fontWeight: 900,
                fontSize: "clamp(2.8rem, 6vw, 6rem)",
                lineHeight: 0.92, letterSpacing: "-0.03em", marginBottom: "1.75rem",
              }}>
                GET YOUR<br />
                FREE<br />
                <span style={{ color: "#C0392B" }}>QUOTE TODAY</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p style={{ color: "rgba(250,249,246,0.65)", fontSize: "1rem", maxWidth: "400px", lineHeight: 1.75, marginBottom: "2.5rem" }}>
                Fill out the form and we'll send you a detailed quote within 24 hours. No pressure, no obligation.
              </p>
            </ScrollReveal>

            {/* Trust badges */}
            <ScrollReveal delay={0.3}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {["6 year warranty on all installs", "Response within 24 hours", "Serving Houston & all surrounding areas"].map((point) => (
                  <div key={point} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "18px", height: "18px", borderRadius: "50%", backgroundColor: "rgba(192,57,43,0.2)", border: "1px solid rgba(192,57,43,0.5)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "#C0392B", fontSize: "0.65rem", fontWeight: 900 }}>✓</span>
                    </div>
                    <span style={{ color: "rgba(250,249,246,0.7)", fontSize: "0.875rem" }}>{point}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right — form card */}
          <ScrollReveal direction="right" delay={0.2}>
            <div style={{
              minWidth: "min(360px, 100%)", maxWidth: "440px", width: "100%",
              backgroundColor: "#FAF9F6",
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
                  <p style={{ color: "#1a0f0d", fontWeight: 800, fontSize: "1.2rem", marginBottom: "0.5rem" }}>We got your request!</p>
                  <p style={{ color: "rgba(26,15,13,0.55)", fontSize: "0.875rem" }}>Someone from our team will contact you shortly to schedule your free consultation.</p>
                </div>
              ) : (
                <>
                  <div style={{ marginBottom: "1.75rem" }}>
                    <h3 style={{ color: "#1a0f0d", fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.25rem" }}>Request a Free Quote</h3>
                  <p style={{ color: "rgba(26,15,13,0.45)", fontSize: "0.8rem" }}>Fill out the form and we'll get back to you fast.</p>
                  </div>

                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                      <input name="name" placeholder="Full Name" required value={form.name} onChange={handleChange} style={inputStyle} />
                      <input name="phone" placeholder="Phone Number" required value={form.phone} onChange={handleChange} style={inputStyle} />
                    </div>
                    <input name="email" type="email" placeholder="Email Address" required value={form.email} onChange={handleChange} style={inputStyle} />
                    <input name="area" placeholder="Property Address or Area" value={form.area} onChange={handleChange} style={inputStyle} />
                    <select
                      name="service" required value={form.service} onChange={handleChange}
                      style={{ ...inputStyle, color: form.service ? "#1a0f0d" : "rgba(26,15,13,0.4)" }}
                    >
                      <option value="" disabled style={{ backgroundColor: "#fff", color: "#1a0f0d" }}>Service Needed</option>
                      <option value="home" style={{ backgroundColor: "#fff", color: "#1a0f0d" }}>Home</option>
                      <option value="commercial" style={{ backgroundColor: "#fff", color: "#1a0f0d" }}>Commercial</option>
                    </select>
                    <select
                      name="window_count" required value={form.window_count} onChange={handleChange}
                      style={{ ...inputStyle, color: form.window_count ? "#1a0f0d" : "rgba(26,15,13,0.4)" }}
                    >
                      <option value="" disabled style={{ backgroundColor: "#fff", color: "#1a0f0d" }}>How many windows?</option>
                      <option value="1-5" style={{ backgroundColor: "#fff", color: "#1a0f0d" }}>1–5 windows</option>
                      <option value="6-15" style={{ backgroundColor: "#fff", color: "#1a0f0d" }}>6–15 windows</option>
                      <option value="16+" style={{ backgroundColor: "#fff", color: "#1a0f0d" }}>16+ windows</option>
                      <option value="not-sure" style={{ backgroundColor: "#fff", color: "#1a0f0d" }}>Not sure</option>
                    </select>
                    <select
                      name="timeline" required value={form.timeline} onChange={handleChange}
                      style={{ ...inputStyle, color: form.timeline ? "#1a0f0d" : "rgba(26,15,13,0.4)" }}
                    >
                      <option value="" disabled style={{ backgroundColor: "#fff", color: "#1a0f0d" }}>When do you want this done?</option>
                      <option value="asap" style={{ backgroundColor: "#fff", color: "#1a0f0d" }}>As soon as possible</option>
                      <option value="30-days" style={{ backgroundColor: "#fff", color: "#1a0f0d" }}>Within 30 days</option>
                      <option value="exploring" style={{ backgroundColor: "#fff", color: "#1a0f0d" }}>Just exploring</option>
                    </select>
<textarea
                      name="message" placeholder="Anything else we should know? (optional)"
                      rows={3} value={form.message} onChange={handleChange}
                      style={{ ...inputStyle, resize: "none" }}
                    />
                    {/* Photo upload */}
                    <div style={{ borderTop: "1px solid rgba(26,15,13,0.1)", paddingTop: "12px" }}>
                      <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "#1a0f0d", marginBottom: "2px" }}>
                        Add photos of your windows <span style={{ fontWeight: 400, color: "rgba(26,15,13,0.4)" }}>(optional)</span>
                      </p>
                      <p style={{ fontSize: "0.72rem", color: "rgba(26,15,13,0.4)", marginBottom: "10px" }}>
                        Helps us give you a more accurate quote
                      </p>

                      {/* Drop zone */}
                      <div
                        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                        onDragLeave={() => setDragOver(false)}
                        onDrop={(e) => { e.preventDefault(); setDragOver(false); addPhotos(e.dataTransfer.files); }}
                        style={{
                          position: "relative",
                          border: `2px dashed ${dragOver ? "#C0392B" : "rgba(192,57,43,0.3)"}`,
                          borderRadius: "8px",
                          background: dragOver ? "rgba(192,57,43,0.08)" : "rgba(192,57,43,0.04)",
                          padding: "1.25rem 1rem",
                          textAlign: "center",
                          cursor: "pointer",
                          transition: "border-color 0.2s, background 0.2s",
                        }}
                      >
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={(e) => e.target.files && addPhotos(e.target.files)}
                          style={{ position: "absolute", inset: 0, opacity: 0, cursor: "pointer", width: "100%", height: "100%" }}
                        />
                        <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(192,57,43,0.12)", border: "1px solid rgba(192,57,43,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px", fontSize: "1rem" }}>
                          📷
                        </div>
                        <p style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1a0f0d", marginBottom: "2px" }}>
                          <span style={{ color: "#C0392B" }}>Tap to upload</span> or drag & drop
                        </p>
                        <p style={{ fontSize: "0.72rem", color: "rgba(26,15,13,0.4)" }}>JPG, PNG, HEIC · Up to 5 photos</p>
                      </div>

                      {/* Thumbnails */}
                      {photoUrls.length > 0 && (
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "10px" }}>
                          {photoUrls.map((url, i) => (
                            <div key={url} style={{ position: "relative", width: "68px", height: "68px", borderRadius: "6px", overflow: "hidden", border: "2px solid rgba(192,57,43,0.3)", flexShrink: 0 }}>
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={url} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                              <button
                                type="button"
                                onClick={() => removePhoto(i)}
                                style={{ position: "absolute", top: "2px", right: "2px", width: "18px", height: "18px", borderRadius: "50%", background: "#C0392B", color: "#fff", border: "none", fontSize: "10px", fontWeight: 900, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "inherit" }}
                              >
                                ✕
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Available for call */}
                    <div style={{ borderTop: "1px solid rgba(26,15,13,0.1)", paddingTop: "12px" }}>
                    </div>
                    <div>
                      <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1a0f0d", marginBottom: "0.6rem" }}>
                        Are you available for a quick call in the next few minutes?
                      </p>
                      <div style={{ display: "flex", gap: "0.75rem" }}>
                        {["Yes", "No"].map((val) => (
                          <button
                            key={val}
                            type="button"
                            onClick={() => setForm({ ...form, available_for_call: val })}
                            style={{
                              flex: 1, padding: "12px",
                              border: `2px solid ${form.available_for_call === val ? "#C0392B" : "#1a0f0d"}`,
                              backgroundColor: form.available_for_call === val ? "#C0392B" : "#fff",
                              color: form.available_for_call === val ? "#fff" : "#1a0f0d",
                              fontWeight: 700, fontSize: "0.9rem",
                              borderRadius: "4px", cursor: "pointer",
                              fontFamily: "inherit", transition: "all 0.2s",
                            }}
                          >
                            {val}
                          </button>
                        ))}
                      </div>
                    </div>

                    {error && <p style={{ color: "#C0392B", fontSize: "0.8rem", textAlign: "center" }}>{error}</p>}

                    <motion.button
                      type="submit"
                      disabled={uploading}
                      whileHover={uploading ? {} : { scale: 1.02, backgroundColor: "#a93226" }}
                      whileTap={uploading ? {} : { scale: 0.98 }}
                      style={{
                        backgroundColor: uploading ? "#a93226" : "#C0392B", color: "#FAF9F6",
                        fontWeight: 900, fontSize: "0.85rem",
                        letterSpacing: "0.15em", textTransform: "uppercase",
                        padding: "18px", border: "none", cursor: uploading ? "default" : "pointer",
                        fontFamily: "inherit", borderRadius: "4px",
                        boxShadow: "0 4px 20px rgba(192,57,43,0.35)",
                        transition: "background-color 0.2s",
                        opacity: uploading ? 0.8 : 1,
                      }}
                    >
                      {uploading ? "Sending..." : "Get My Free Quote →"}
                    </motion.button>

                    <p style={{ color: "rgba(26,15,13,0.35)", fontSize: "0.7rem", textAlign: "center", letterSpacing: "0.05em" }}>
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
