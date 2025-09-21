import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get("title") || "SJ Business Consulting, LLC"
    const description = searchParams.get("description") || "Practical Consulting for Real-World Business Growth"

    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f172a",
          backgroundImage: "linear-gradient(45deg, #0f172a 0%, #1e293b 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              color: "#ffffff",
              marginBottom: "20px",
              lineHeight: 1.2,
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: "24px",
              color: "#94a3b8",
              maxWidth: "800px",
              lineHeight: 1.4,
            }}
          >
            {description}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "40px",
              padding: "12px 24px",
              backgroundColor: "#0891b2",
              borderRadius: "8px",
              color: "#ffffff",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            sjbusinessconsulting.com
          </div>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (error: unknown) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
