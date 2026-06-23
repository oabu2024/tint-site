"use client";

export default function OfferBar() {
  return (
    <div style={{
      backgroundColor: "#C0392B",
      padding: "7px 1rem",
      textAlign: "center",
      position: "relative",
      zIndex: 110,
    }}>
      <span style={{ color: "#FAF9F6", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.05em" }}>
        ☀️ Summer Special — <strong>$150 off</strong> + free live quote.{" "}
        <a href="#contact" style={{ color: "#FAF9F6", fontWeight: 800, textDecoration: "underline" }}>Book now</a>
      </span>
    </div>
  );
}
