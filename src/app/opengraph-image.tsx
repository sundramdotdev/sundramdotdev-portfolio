import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/constants";

export const alt = `${siteConfig.brand} — Product Engineering & Software Studio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          backgroundColor: "#0B0C0C",
          fontFamily: "Inter, system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Abstract subtle grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(#C18A42 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.05,
          }}
        />

        {/* Gradient glow */}
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(193,138,66,0.15) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Brand Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "60px",
          }}
        >
          {/* SVG Monogram replica from the logo component */}
          <div
            style={{
              display: "flex",
              width: "48px",
              height: "48px",
            }}
          >
            <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2L2 10V22L16 30L30 22V10L16 2Z" stroke="#C18A42" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M16 2L16 30" stroke="#C18A42" strokeWidth="2.5" strokeOpacity="0.3" />
              <path d="M2 10L30 10" stroke="#C18A42" strokeWidth="2.5" strokeOpacity="0.3" />
              <path d="M2 22L30 22" stroke="#C18A42" strokeWidth="2.5" strokeOpacity="0.3" />
              <path d="M10 14L10 24" stroke="#F1F1F0" strokeWidth="2.5" strokeLinecap="square" />
              <path d="M10 14L16 10L22 14" stroke="#F1F1F0" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" />
              <path d="M22 14L22 24" stroke="#F1F1F0" strokeWidth="2.5" strokeLinecap="square" />
            </svg>
          </div>
          <span
            style={{
              fontSize: "24px",
              fontWeight: "600",
              color: "#F1F1F0",
              letterSpacing: "-0.5px",
            }}
          >
            NEXFLOW
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "64px",
            fontWeight: "800",
            color: "#F1F1F0",
            lineHeight: "1.1",
            letterSpacing: "-2.5px",
            maxWidth: "900px",
          }}
        >
          <span>Building Mobile Apps</span>
          <span>That Solve Real Problems.</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: "flex",
            fontSize: "24px",
            color: "#8F8F89",
            marginTop: "32px",
            maxWidth: "700px",
            lineHeight: "1.5",
          }}
        >
          Product Engineering & Software Studio
        </div>

        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            right: "80px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            opacity: 0.5,
          }}
        >
          <div style={{ display: "flex", width: "40px", height: "1px", backgroundColor: "#C18A42" }} />
          <div style={{ display: "flex", fontSize: "14px", color: "#C18A42", textTransform: "uppercase", letterSpacing: "2px" }}>
            sundram.dev
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
