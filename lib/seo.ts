import type { Metadata } from "next"

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
  noIndex?: boolean
}

export function generateSEO({
  title = "SJ Business Consulting, LLC - Practical Consulting for Real-World Business Growth",
  description = "We help SMBs streamline operations, improve financial performance, and scale with confidence. Florida-based business consulting for strategy, operations, and financial advisory.",
  keywords = "business consulting, SMB advisory, strategy consulting, operations optimization, financial advisory, startup guidance, Florida business consultant",
  canonical = "/",
  ogImage,
  noIndex = false,
}: SEOProps = {}): Metadata {
  const baseUrl = "https://sjbusinessconsulting.com"
  const fullUrl = `${baseUrl}${canonical}`
  const ogImageUrl =
    ogImage || `${baseUrl}/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`

  return {
    title,
    description,
    keywords,
    authors: [{ name: "SJ Business Consulting, LLC" }],
    creator: "SJ Business Consulting, LLC",
    publisher: "SJ Business Consulting, LLC",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: "SJ Business Consulting, LLC",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}
