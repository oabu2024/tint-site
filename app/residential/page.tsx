import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Residential Window Tinting Houston | Tint Bros",
  description:
    "Professional residential window tinting in Houston. Block heat, protect interiors, and add privacy. Free same-day quote. Serving Katy, Sugar Land, Pearland & more.",
};

export default function ResidentialPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ backgroundColor: "#0f0705", padding: "120px 0 80px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem", textAlign: "center" }}>
            <span style={{ color: "#C0392B", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", display: "block", marginBottom: "1rem" }}>
              Residential Window Tinting
            </span>
            <h1 style={{ color: "#FAF9F6", fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 0.95, letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
              KEEP YOUR HOME<br /><span style={{ color: "#C0392B" }}>COOL & PRIVATE</span>
            </h1>
            <p style={{ color: "rgba(250,249,246,0.55)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "540px", margin: "0 auto 2.5rem" }}>
              Professional solar film, privacy tint, and UV protection installed at your home across Houston and surrounding areas. Free same-day quote.
            </p>
            <Link
              href="/#contact"
              style={{ display: "inline-block", backgroundColor: "#C0392B", color: "#FAF9F6", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "16px 40px", textDecoration: "none" }}
            >
              Get a Free Quote
            </Link>
          </div>
        </section>

        {/* Benefits */}
        <section style={{ backgroundColor: "#1a0f0d", padding: "100px 0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
            <span style={{ color: "#C0392B", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", display: "block", textAlign: "center", marginBottom: "1rem" }}>
              Why tint your home
            </span>
            <h2 style={{ color: "#FAF9F6", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.03em", textAlign: "center", marginBottom: "4rem" }}>
              WHAT YOU GET
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
              {[
                { title: "Heat rejection", body: "Block up to 78% of solar heat and reduce your AC bill significantly." },
                { title: "Privacy film", body: "See out, not in. Perfect for street-facing windows and front doors." },
                { title: "UV protection", body: "Block 99% of UV rays to protect furniture, flooring, and your skin." },
                { title: "Glare reduction", body: "Eliminate screen glare and eye strain without losing natural light." },
                { title: "Energy savings", body: "Lower your energy costs year-round by reducing heat gain in summer." },
                { title: "Lifetime warranty", body: "Every residential install is backed by our lifetime warranty." },
              ].map((item) => (
                <div key={item.title} style={{ backgroundColor: "rgba(250,249,246,0.04)", border: "1px solid rgba(250,249,246,0.08)", borderRadius: "8px", padding: "2rem" }}>
                  <h3 style={{ color: "#FAF9F6", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem" }}>{item.title}</h3>
                  <p style={{ color: "rgba(250,249,246,0.5)", fontSize: "0.88rem", lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section style={{ backgroundColor: "#0f0705", padding: "100px 0" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 2.5rem" }}>
            <span style={{ color: "#C0392B", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", display: "block", textAlign: "center", marginBottom: "1rem" }}>
              The process
            </span>
            <h2 style={{ color: "#FAF9F6", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.03em", textAlign: "center", marginBottom: "4rem" }}>
              HOW IT WORKS
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {[
                { num: "1", title: "Get a free quote", body: "Fill out our form and we'll get back to you same day." },
                { num: "2", title: "We come to you", body: "We visit your home, measure your windows, and walk you through film options." },
                { num: "3", title: "Professional install", body: "Clean, bubble-free installation — usually completed in a few hours." },
                { num: "4", title: "Lifetime warranty", body: "All residential installs are backed by our lifetime warranty." },
              ].map((step) => (
                <div key={step.num} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                  <div style={{ width: "40px", height: "40px", minWidth: "40px", borderRadius: "50%", backgroundColor: "#C0392B", color: "#FAF9F6", fontWeight: 700, fontSize: "0.9rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {step.num}
                  </div>
                  <div>
                    <h3 style={{ color: "#FAF9F6", fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem" }}>{step.title}</h3>
                    <p style={{ color: "rgba(250,249,246,0.5)", fontSize: "0.88rem", lineHeight: 1.7 }}>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: "#C0392B", padding: "80px 0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem", textAlign: "center" }}>
            <h2 style={{ color: "#FAF9F6", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em", marginBottom: "1rem" }}>
              READY TO TINT YOUR HOME?
            </h2>
            <p style={{ color: "rgba(250,249,246,0.8)", fontSize: "0.95rem", marginBottom: "2rem" }}>
              Serving Houston, Katy, Sugar Land, Pearland, The Woodlands, Cypress & surrounding areas.
            </p>
            <Link
              href="/#contact"
              style={{ display: "inline-block", border: "2px solid #FAF9F6", color: "#FAF9F6", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "16px 40px", textDecoration: "none" }}
            >
              Get your free quote today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
