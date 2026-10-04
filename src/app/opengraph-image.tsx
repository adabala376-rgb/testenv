import { ImageResponse } from "next/og";

export const alt = "AirMix | Professional Audio Production & Sound Engineering";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0B0B0B",
          backgroundImage:
            "radial-gradient(circle at center, rgba(227, 30, 36, 0.25) 0%, transparent 60%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              fontSize: "84px",
              fontWeight: 900,
              letterSpacing: "4px",
              color: "#FFFFFF",
              textTransform: "uppercase",
            }}
          >
            AIR MI
          </div>
          <div
            style={{
              fontSize: "84px",
              fontWeight: 900,
              letterSpacing: "4px",
              color: "#E31E24",
              textTransform: "uppercase",
            }}
          >
            X
          </div>
        </div>

        <div
          style={{
            fontSize: "24px",
            fontWeight: 700,
            letterSpacing: "6px",
            color: "#BDBDBD",
            textTransform: "uppercase",
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            paddingTop: "20px",
          }}
        >
          PROFESSIONAL AUDIO PRODUCTION
        </div>

        <div
          style={{
            marginTop: "16px",
            fontSize: "16px",
            color: "#888888",
            letterSpacing: "2px",
          }}
        >
          Music Production · Mixing & Mastering · Sound Design · Podcast Restoration
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
