import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "SJ Business Consulting, LLC - Practical Consulting for Real-World Business Growth",
  description: "We help SMBs streamline operations, improve financial performance, and execute strategy with hands-on, practical consulting across strategy, operations, and financial advisory.",
  keywords: ["business consulting", "SMB advisory", "strategy consulting", "operations", "financial advisory", "startup guidance", "Florida"],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
