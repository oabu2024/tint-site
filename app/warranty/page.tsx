import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Warranty | Tint Bros Houston",
  description:
    "Tint Bros offers a lifetime warranty on all residential window tinting installations and a 5-year warranty on commercial installs in Houston.",
};

export default function WarrantyPage() {
  const sections = [
    {
      title: "1. Coverage",
      body: "This warranty covers bubbling, peeling, cracking, delamination, and significant color change or fading of the installed window film under normal use. Coverage applies to the film and adhesive used during your installation.",
    },
    {
      title: "2. Duration",
      body: "Tint Bros provides a lifetime warranty on all residential installations. Commercial installations are covered for a period of 5 years from the date of installation.",
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
  ];

  return (
    <>
      <Navbar />
      <main>
        <section style={{ backgroundColor: "#0f0705", padding: "120px 0 80px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 2.5rem" }}>
            <span style={{ color: "#C0392B", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", display: "block", marginBottom: "1rem" }}>
              Tint Bros
            </span>
            <h1 style={{ color: "#FAF9F6", fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 0.95, letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
              WARRANTY<br /><span style={{ color: "#C0392B" }}>COVERAGE</span>
            </h1>
            <p style={{ color: "rgba(250,249,246,0.5)", fontSize: "0.95rem", lineHeight: 1.7 }}>
              We stand behind every installation we perform.
            </p>
          </div>
        </section>

        <section style={{ backgroundColor: "#FAF9F6", padding: "80px 0 100px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 2.5rem" }}>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "rgba(62,39,35,0.8)", marginBottom: "3rem", borderLeft: "3px solid #C0392B", paddingLeft: "1.5rem" }}>
              Tint Bros stands behind every installation we perform. This warranty applies to all residential and commercial window tinting services completed by our certified technicians and covers defects in materials and workmanship under normal use conditions.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 style={{ fontWeight: 800, fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C0392B", marginBottom: "0.75rem" }}>
                    {section.title}
                  </h2>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "rgba(62,39,35,0.75)" }}>
                    {section.body}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(62,39,35,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <div style={{ fontWeight: 900, fontSize: "1.2rem", letterSpacing: "-0.01em", color: "#3E2723" }}>
                  TINT<span style={{ color: "#C0392B" }}>BROS</span>
                </div>
                <div style={{ fontSize: "0.75rem", color: "rgba(62,39,35,0.45)", marginTop: "4px" }}>
                  Houston, TX · tintbroshouston.com
                </div>
              </div>
              <Link
                href="/#contact"
                style={{ color: "#C0392B", fontWeight: 700, fontSize: "0.85rem", textDecoration: "none", letterSpacing: "0.05em" }}
              >
                Contact us for warranty support →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
