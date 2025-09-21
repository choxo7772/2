import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/uibutton"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/uicard"
import { Badge } from "@/components/uibadge"
import Link from "next/link"
import { ArrowRight, CheckCircle, TrendingUp, Users, Target, DollarSign } from "lucide-react"

export default function HomePage() {
  const services = [
    {
      title: "Strategy & Planning",
      description: "Data-driven strategic planning to align your business goals with actionable roadmaps.",
      icon: Target,
      href: "/services/strategy",
    },
    {
      title: "Operations Optimization",
      description: "Streamline processes, eliminate inefficiencies, and boost operational performance.",
      icon: TrendingUp,
      href: "/services/operations",
    },
    {
      title: "Financial Advisory",
      description: "Improve cash flow, financial planning, and performance metrics for sustainable growth.",
      icon: DollarSign,
      href: "/services/finance",
    },
    {
      title: "Startup Guidance",
      description: "Complete setup and compliance guidance for new businesses and entrepreneurs.",
      icon: Users,
      href: "/services/startup",
    },
  ]

  const pillars = ["Data-Driven Strategy", "Process Optimization", "Financial Clarity", "Hands-On Execution"]

  const testimonials = [
    {
      quote:
        "SJ Business Consulting transformed our operations. We saw a 40% improvement in efficiency within 3 months.",
      author: "Maria Rodriguez",
      role: "Small Business Owner",
      location: "Miami, FL",
    },
    {
      quote: "Their financial advisory helped us identify cost savings of over $50K annually. Exceptional expertise.",
      author: "James Thompson",
      role: "Restaurant Owner",
      location: "Fort Lauderdale, FL",
    },
    {
      quote: "From startup to profitable business in 18 months. Their guidance was invaluable every step of the way.",
      author: "Sarah Chen",
      role: "Tech Entrepreneur",
      location: "Orlando, FL",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <StructuredData type="organization" data={{}} />
      <StructuredData type="breadcrumb" data={[{ name: "Home", url: "https://sjbusinessconsulting.com/" }]} />

      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Serving Florida + Remote Nationwide
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Practical Consulting for Real-World Business Growth
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              We help SMBs streamline operations, improve financial performance, and scale with confidence through
              data-driven strategies and hands-on execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Book Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Get a Proposal</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-card-foreground mb-4">Our Approach</h2>
            <p className="text-muted-foreground">
              Four core principles that drive measurable results for your business
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-card-foreground">{pillar}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-muted-foreground">
              Comprehensive business consulting solutions tailored to your specific needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{service.description}</CardDescription>
                    <Button variant="ghost" size="sm" asChild className="group-hover:text-primary">
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-card-foreground mb-4">Proven Results</h2>
              <p className="text-muted-foreground">
                Real outcomes from our strategic partnerships with SMBs across Florida
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">40%</div>
                <div className="text-sm text-muted-foreground">Average efficiency improvement</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">$50K+</div>
                <div className="text-sm text-muted-foreground">Annual cost savings identified</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">18mo</div>
                <div className="text-sm text-muted-foreground">Average time to profitability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground">Success stories from businesses we've helped transform</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const avatarImages = [
                "/professional-hispanic-businesswoman-headshot.jpg", // Maria Rodriguez
                "/professional-businessman-headshot-middle-aged.jpg", // James Thompson
                "/professional-asian-businesswoman-tech-entrepreneur.jpg", // Sarah Chen
              ]

              return (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <blockquote className="text-muted-foreground mb-4">"{testimonial.quote}"</blockquote>
                    <div className="flex items-center gap-3">
                      <img
                        src={avatarImages[index] || "/placeholder.svg"}
                        alt={`${testimonial.author} headshot`}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role} • {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Ready to Transform Your Business?</h2>
            <p className="text-primary-foreground/90 mb-8">
              Schedule a consultation today and discover how we can help you achieve sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/book">Schedule Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
