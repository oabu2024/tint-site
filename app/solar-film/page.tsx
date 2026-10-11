import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Solar Film Window Tinting Houston | Tint Bros",
  description:
    "Solar film installation in Houston. Block heat, reduce energy bills, and protect interiors with professional solar window film. Free same-day quote.",
};

export default function SolarFilmPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ backgroundColor: "#0f0705", padding: "120px 0 80px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem", textAlign: "center" }}>
            <span style={{ color: "#C0392B", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", display: "block", marginBottom: "1rem" }}>
              Solar Film Installation
            </span>
            <h1 style={{ color: "#FAF9F6", fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 0.95, letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
              BLOCK THE HEAT.<br /><span style={{ color: "#C0392B" }}>KEEP THE LIGHT.</span>
            </h1>
            <p style={{ color: "rgba(250,249,246,0.55)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "540px", margin: "0 auto 2.5rem" }}>
              Solar window film rejects up to 78% of solar heat while maintaining your view and natural light. The most effective way to lower energy costs in Houston&apos;s climate.
            </p>
            <Link
              href="/#contact"
              style={{ display: "inline-block", backgroundColor: "#C0392B", color: "#FAF9F6", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "16px 40px", textDecoration: "none" }}
            >
              Get a Free Quote
            </Link>
          </div>
        </section>

        {/* What is solar film */}
        <section style={{ backgroundColor: "#1a0f0d", padding: "100px 0" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 2.5rem" }}>
            <span style={{ color: "#C0392B", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", display: "block", textAlign: "center", marginBottom: "1rem" }}>
              What is solar film
            </span>
            <h2 style={{ color: "#FAF9F6", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em", textAlign: "center", marginBottom: "2rem" }}>
              HOW IT WORKS
            </h2>
            <p style={{ color: "rgba(250,249,246,0.6)", fontSize: "0.95rem", lineHeight: 1.8, textAlign: "center", marginBottom: "3rem" }}>
              Solar film is a thin, multi-layer film applied directly to the inside of your existing windows. It uses advanced nano-ceramic or metallic technology to selectively block infrared and UV radiation — the parts of sunlight that cause heat and fading — while letting visible light through. No need to replace your windows.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
              {[
                { stat: "78%", label: "Solar heat blocked" },
                { stat: "99%", label: "UV rays blocked" },
                { stat: "30%", label: "Energy savings potential" },
                { stat: "6 yr", label: "Residential warranty" },
              ].map((item) => (
                <div key={item.label} style={{ backgroundColor: "rgba(250,249,246,0.04)", border: "1px solid rgba(250,249,246,0.08)", borderRadius: "8px", padding: "2rem", textAlign: "center" }}>
                  <div style={{ color: "#C0392B", fontWeight: 900, fontSize: "2.5rem", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "0.5rem" }}>{item.stat}</div>
                  <div style={{ color: "rgba(250,249,246,0.5)", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Film types */}
        <section style={{ backgroundColor: "#0f0705", padding: "100px 0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
            <span style={{ color: "#C0392B", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", display: "block", textAlign: "center", marginBottom: "1rem" }}>
              Options
            </span>
            <h2 style={{ color: "#FAF9F6", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.03em", textAlign: "center", marginBottom: "4rem" }}>
              SOLAR FILM TYPES
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
              {[
                { title: "Nano-ceramic film", body: "Non-metallic, signal-friendly, and the highest performing option. Won&apos;t interfere with phones or GPS. Ideal for homes and offices." },
                { title: "Dual-reflective film", body: "Reduces glare and heat while providing daytime privacy with a subtle mirror effect on the outside." },
                { title: "Low-E solar film", body: "Helps retain heat in winter while blocking it in summer. Best for year-round energy efficiency." },
                { title: "Clear UV film", body: "Nearly invisible film that blocks 99% of UV rays with minimal change to the appearance of your windows." },
              ].map((item) => (
                <div key={item.title} style={{ backgroundColor: "rgba(250,249,246,0.04)", border: "1px solid rgba(250,249,246,0.08)", borderRadius: "8px", padding: "2rem" }}>
                  <h3 style={{ color: "#FAF9F6", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem" }}>{item.title}</h3>
                  <p style={{ color: "rgba(250,249,246,0.5)", fontSize: "0.88rem", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: "#C0392B", padding: "80px 0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem", textAlign: "center" }}>
            <h2 style={{ color: "#FAF9F6", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em", marginBottom: "1rem" }}>
              NOT SURE WHICH FILM IS RIGHT FOR YOU?
            </h2>
            <p style={{ color: "rgba(250,249,246,0.8)", fontSize: "0.95rem", marginBottom: "2rem" }}>
              We assess your windows and recommend the best film for your needs — free of charge.
            </p>
            <Link
              href="/#contact"
              style={{ display: "inline-block", border: "2px solid #FAF9F6", color: "#FAF9F6", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "16px 40px", textDecoration: "none" }}
            >
              Get your free quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
