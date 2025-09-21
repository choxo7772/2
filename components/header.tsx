"use client"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/uibutton"

export function Header() {
  const [open, setOpen] = useState(false)
  const nav = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "About", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-semibold text-lg">SJ Business Consulting</Link>
          <nav className="hidden md:flex gap-6">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm hover:underline">
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button asChild className="px-4 py-2 rounded-md border">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
          <button className="md:hidden p-2" onClick={()=>setOpen(!open)} aria-label="Toggle Menu">☰</button>
        </div>
        {open && (
          <div className="md:hidden py-2 border-t">
            <nav className="flex flex-col gap-2">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className="px-2 py-1.5 rounded hover:bg-muted">
                  {item.name}
                </Link>
              ))}
              <Button asChild className="mt-2 px-4 py-2 rounded-md border">
                <Link href="/contact">Get Started</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
