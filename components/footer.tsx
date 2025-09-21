import Link from "next/link"

export function Footer() {
  const year = new Date().getFullYear()
  const services = [
    { name: "Strategy & Planning", href: "/services/strategy" },
    { name: "Operations Optimization", href: "/services/operations" },
    { name: "Financial Advisory", href: "/services/finance" },
    { name: "Startup Guidance", href: "/services/startup" },
  ]
  const company = [
    { name: "About Us", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold mb-3">SJ Business Consulting</h4>
          <p className="text-sm text-muted-foreground">Practical consulting for real-world growth.</p>
        </div>
        <div>
          <h5 className="font-medium mb-2">Services</h5>
          <ul className="space-y-1 text-sm">
            {services.map(s => <li key={s.href}><Link href={s.href} className="hover:underline">{s.name}</Link></li>)}
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-2">Company</h5>
          <ul className="space-y-1 text-sm">
            {company.map(s => <li key={s.href}><Link href={s.href} className="hover:underline">{s.name}</Link></li>)}
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-2">Contact</h5>
          <p className="text-sm text-muted-foreground">Sunrise, FL • United States</p>
          <p className="text-sm text-muted-foreground">info@sjbusinessconsulting.com</p>
        </div>
      </div>
      <div className="border-t py-6">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-sm text-muted-foreground">© {year} SJ Business Consulting, LLC. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">Serving Florida and nationwide remotely</p>
        </div>
      </div>
    </footer>
  )
}
