import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Commercial Window Tinting Houston | Tint Bros",
  description:
    "Professional commercial window tinting in Houston. Reduce heat, glare, and energy costs for offices, storefronts, and commercial buildings. Free quote.",
};

export default function CommercialPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ backgroundColor: "#0f0705", padding: "120px 0 80px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem", textAlign: "center" }}>
            <span style={{ color: "#C0392B", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", display: "block", marginBottom: "1rem" }}>
              Commercial Window Tinting
            </span>
            <h1 style={{ color: "#FAF9F6", fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 0.95, letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
              PROTECT YOUR<br /><span style={{ color: "#C0392B" }}>BUSINESS</span>
            </h1>
            <p style={{ color: "rgba(250,249,246,0.55)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "540px", margin: "0 auto 2.5rem" }}>
              Cut energy costs, reduce glare, and add privacy to your office, storefront, or commercial building. Professional installation with minimal disruption.
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
              Built for business
            </span>
            <h2 style={{ color: "#FAF9F6", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.03em", textAlign: "center", marginBottom: "4rem" }}>
              WHY BUSINESSES CHOOSE US
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
              {[
                { title: "Energy cost savings", body: "Reduce HVAC costs by blocking solar heat through large commercial glass surfaces." },
                { title: "Glare reduction", body: "Improve employee productivity and customer comfort by eliminating screen glare." },
                { title: "Privacy & security", body: "One-way mirror and frosted films for conference rooms, offices, and storefronts." },
                { title: "UV protection", body: "Protect merchandise, furniture, and flooring from fading due to UV exposure." },
                { title: "Professional appearance", body: "Clean, uniform tinting enhances the look of any commercial building exterior." },
                { title: "5-year warranty", body: "All commercial installations are covered by our 5-year warranty." },
              ].map((item) => (
                <div key={item.title} style={{ backgroundColor: "rgba(250,249,246,0.04)", border: "1px solid rgba(250,249,246,0.08)", borderRadius: "8px", padding: "2rem" }}>
                  <h3 style={{ color: "#FAF9F6", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem" }}>{item.title}</h3>
                  <p style={{ color: "rgba(250,249,246,0.5)", fontSize: "0.88rem", lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who we serve */}
        <section style={{ backgroundColor: "#0f0705", padding: "100px 0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
            <span style={{ color: "#C0392B", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", display: "block", textAlign: "center", marginBottom: "1rem" }}>
              Who we work with
            </span>
            <h2 style={{ color: "#FAF9F6", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.03em", textAlign: "center", marginBottom: "4rem" }}>
              COMMERCIAL CLIENTS
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", maxWidth: "900px", margin: "0 auto" }}>
              {["Office buildings", "Retail storefronts", "Restaurants", "Hotels", "Medical offices", "Warehouses", "Schools", "HOA properties"].map((type) => (
                <div key={type} style={{ border: "1px solid rgba(250,249,246,0.1)", padding: "1.25rem", textAlign: "center" }}>
                  <p style={{ color: "rgba(250,249,246,0.7)", fontSize: "0.9rem", fontWeight: 600 }}>{type}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: "#C0392B", padding: "80px 0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem", textAlign: "center" }}>
            <h2 style={{ color: "#FAF9F6", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em", marginBottom: "1rem" }}>
              GET A FREE COMMERCIAL QUOTE
            </h2>
            <p style={{ color: "rgba(250,249,246,0.8)", fontSize: "0.95rem", marginBottom: "2rem" }}>
              We assess your property and provide a detailed quote at no cost. Serving Houston and surrounding areas.
            </p>
            <Link
              href="/#contact"
              style={{ display: "inline-block", border: "2px solid #FAF9F6", color: "#FAF9F6", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "16px 40px", textDecoration: "none" }}
            >
              Request a quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
