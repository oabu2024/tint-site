"use client";

const footerLinks = {
  Services: ["Solar Film", "Privacy Tint", "Decorative Film", "Commercial"],
  Company: ["About Us", "Our Process", "Gallery", "Careers"],
  Support: ["Get a Quote", "FAQ", "Warranty", "Contact"],
};

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#3E2723",
        borderTop: "1px solid rgba(250,249,246,0.06)",
        padding: "80px 0 40px",
      }}
    >
      <div
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "4rem",
            paddingBottom: "4rem",
            borderBottom: "1px solid rgba(250,249,246,0.08)",
            marginBottom: "2.5rem",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontWeight: 900,
                fontSize: "1.5rem",
                color: "#FAF9F6",
                letterSpacing: "0.05em",
                marginBottom: "1.25rem",
              }}
            >
              TINT<span style={{ color: "#C0392B" }}>BROS</span>
            </div>
            <p
              style={{
                color: "rgba(250,249,246,0.5)",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                maxWidth: "300px",
                marginBottom: "2rem",
              }}
            >
              Premium residential window tinting in Houston & surrounding areas. Heat rejection, UV
              protection, and elevated design — for homes that demand the best.
            </p>

            {/* Social */}
            <div style={{ display: "flex", gap: "1rem" }}>
              {["IG", "FB", "TW", "YT"].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    width: "38px",
                    height: "38px",
                    border: "1px solid rgba(250,249,246,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(250,249,246,0.5)",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    letterSpacing: "0.05em",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "#C0392B";
                    (e.currentTarget as HTMLElement).style.color = "#C0392B";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(250,249,246,0.15)";
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(250,249,246,0.5)";
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4
                style={{
                  color: "#FAF9F6",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "1.5rem",
                }}
              >
                {heading}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {links.map((link) => (
                  <li key={link} style={{ marginBottom: "0.75rem" }}>
                    <a
                      href="#"
                      style={{
                        color: "rgba(250,249,246,0.45)",
                        textDecoration: "none",
                        fontSize: "0.875rem",
                        transition: "color 0.25s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          "#FAF9F6")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          "rgba(250,249,246,0.45)")
                      }
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              color: "rgba(250,249,246,0.3)",
              fontSize: "0.8rem",
            }}
          >
            © 2026 Tint Bros. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "2rem" }}>
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((l) => (
              <a
                key={l}
                href="#"
                style={{
                  color: "rgba(250,249,246,0.3)",
                  fontSize: "0.75rem",
                  textDecoration: "none",
                  transition: "color 0.25s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#FAF9F6")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "rgba(250,249,246,0.3)")
                }
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
