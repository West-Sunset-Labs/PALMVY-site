import { ImageResponse } from "next/og";
import { findProductByLandingSlug } from "@/core/data/products";

export const alt = "PALMVY";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Imagens geradas não enxergam tokens do Tailwind: os valores espelham app/globals.css.
const COLORS = {
  background: "#071A2B",
  title: "#F5F7F4",
  text: "#C7D1D8",
  accent: "#FF7A45",
};

type OpenGraphImageProps = {
  params: Promise<{ slug: string }>;
};

export default async function OpenGraphImage({ params }: OpenGraphImageProps) {
  const { slug } = await params;
  const product = findProductByLandingSlug(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: COLORS.background,
          color: COLORS.title,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="56" height="55" viewBox="0 0 112 109" fill="none">
            <path
              d="M4 17H32L56 58L80 17H108L56 105Z"
              fill={COLORS.title}
            />
            <path
              d="M56 51.07L34.88 15A25.77 25.77 0 0 1 77.12 15Z"
              fill={COLORS.accent}
            />
          </svg>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              letterSpacing: 6,
              color: COLORS.title,
            }}
          >
            PALMVY
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 120, lineHeight: 1.05 }}>
            {product?.name ?? "PALMVY"}
          </div>
          <div style={{ display: "flex", fontSize: 44, color: COLORS.text }}>
            {product?.tagline ?? "California Dreamin'. Digital reality."}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: 120,
            height: 6,
            background: COLORS.accent,
          }}
        />
      </div>
    ),
    size,
  );
}
