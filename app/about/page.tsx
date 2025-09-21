import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/uibutton"
import { Card, CardContent } from "@/components/uicard"
import Link from "next/link"
import Image from "next/image"
import { Award, Users, Target, TrendingUp } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on measurable outcomes that directly impact your bottom line and business growth.",
    },
    {
      icon: Users,
      title: "Partnership Approach",
      description: "We work alongside you as trusted advisors, not just consultants, ensuring sustainable success.",
    },
    {
      icon: TrendingUp,
      title: "Practical Solutions",
      description: "Our recommendations are actionable and realistic, designed for real-world implementation.",
    },
    {
      icon: Award,
      title: "Proven Expertise",
      description: "Years of experience helping SMBs across Florida achieve their strategic and operational goals.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              About SJ Business Consulting
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              We're dedicated to helping small and medium-sized businesses achieve sustainable growth through strategic
              planning, operational excellence, and financial optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                At SJ Business Consulting, we believe every business has the potential for extraordinary growth. Our
                mission is to unlock that potential through practical, data-driven consulting that delivers real-world
                results.
              </p>
              <p className="text-muted-foreground mb-6">
                Founded with the vision of making professional business consulting accessible to SMBs, we've helped
                dozens of Florida businesses streamline their operations, improve their financial performance, and scale
                with confidence.
              </p>
              <p className="text-muted-foreground">
                We don't just provide recommendations – we partner with you to implement solutions that create lasting
                change and sustainable competitive advantages.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/professional-business-consulting-team-meeting.jpg"
                alt="SJ Business Consulting team"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-card-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground">The principles that guide everything we do for our clients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-card-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Leadership</h2>
              <p className="text-muted-foreground">Meet the experienced professional behind SJ Business Consulting</p>
            </div>
            <Card className="max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <Image
                    src="/owner-professional-headshot.png"
                    alt="Samara Irma Johnson"
                    width={180}
                    height={180}
                    className="rounded-full object-cover"
                  />
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Samara Irma Johnson</h3>
                    <p className="text-primary font-semibold mb-4">Founder & Principal Consultant</p>
                    <p className="text-muted-foreground mb-4">
                      With over a decade of experience in business strategy and operations, Samara has helped countless
                      SMBs across Florida achieve their growth objectives through practical, results-driven consulting.
                    </p>
                    <p className="text-muted-foreground">
                      Her expertise spans strategic planning, process optimization, financial analysis, and startup
                      guidance, making her a trusted advisor for businesses at every stage of growth.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-card-foreground mb-4">Our Process</h2>
              <p className="text-muted-foreground">A proven methodology that delivers consistent results</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {["Discover", "Diagnose", "Roadmap", "Implement", "Measure"].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-card-foreground">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Partner With Us?</h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can help your business achieve its full potential.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
