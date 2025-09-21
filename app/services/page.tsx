import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/uibutton"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/uicard"
import Link from "next/link"
import { Target, TrendingUp, DollarSign, Users, ArrowRight, CheckCircle } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Strategy & Planning",
      description: "Data-driven strategic planning to align your business goals with actionable roadmaps.",
      icon: Target,
      href: "/services/strategy",
      features: ["Business assessment", "Strategic roadmapping", "Market analysis", "Goal setting & KPIs"],
      timeline: "4-6 weeks",
      deliverables: ["Strategic plan document", "Implementation roadmap", "Performance metrics framework"],
    },
    {
      title: "Operations Optimization",
      description: "Streamline processes, eliminate inefficiencies, and boost operational performance.",
      icon: TrendingUp,
      href: "/services/operations",
      features: ["Process mapping", "Workflow optimization", "Quality improvement", "Performance monitoring"],
      timeline: "6-8 weeks",
      deliverables: ["Process documentation", "Optimization recommendations", "Implementation guide"],
    },
    {
      title: "Financial Advisory",
      description: "Improve cash flow, financial planning, and performance metrics for sustainable growth.",
      icon: DollarSign,
      href: "/services/finance",
      features: ["Financial analysis", "Cash flow management", "Budgeting & forecasting", "Cost optimization"],
      timeline: "4-6 weeks",
      deliverables: ["Financial health report", "Budget templates", "Cash flow projections"],
    },
    {
      title: "Startup Guidance",
      description: "Complete setup and compliance guidance for new businesses and entrepreneurs.",
      icon: Users,
      href: "/services/startup",
      features: ["Business formation", "Compliance setup", "Initial planning", "Launch strategy"],
      timeline: "3-5 weeks",
      deliverables: ["Business formation documents", "Compliance checklist", "Launch plan"],
    },
  ]

  const process = [
    {
      step: "1",
      title: "Discovery",
      description: "We start with a comprehensive assessment of your current situation, challenges, and goals.",
    },
    {
      step: "2",
      title: "Analysis",
      description: "Deep dive into your data, processes, and market position to identify opportunities.",
    },
    {
      step: "3",
      title: "Strategy",
      description: "Develop customized recommendations and actionable plans tailored to your business.",
    },
    {
      step: "4",
      title: "Implementation",
      description: "Work alongside you to execute the plan and ensure successful adoption.",
    },
    {
      step: "5",
      title: "Optimization",
      description: "Monitor results, make adjustments, and continuously improve performance.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Our Services</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Comprehensive business consulting solutions designed to drive measurable results and sustainable growth
              for your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="h-full group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <div className="text-sm text-muted-foreground">{service.timeline}</div>
                      </div>
                    </div>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Deliverables</h4>
                        <ul className="space-y-2">
                          {service.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-center text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                        <Link href={service.href}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-card-foreground mb-4">Our Proven Process</h2>
              <p className="text-muted-foreground">
                A systematic approach that ensures consistent results and measurable outcomes
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose SJ Business Consulting</h2>
              <p className="text-muted-foreground">What sets us apart in the consulting landscape</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Results-Focused</h3>
                <p className="text-sm text-muted-foreground">
                  Every recommendation is designed to deliver measurable business outcomes
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">SMB Specialists</h3>
                <p className="text-sm text-muted-foreground">
                  Deep understanding of small and medium business challenges and opportunities
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Practical Approach</h3>
                <p className="text-sm text-muted-foreground">
                  Solutions that are realistic, actionable, and designed for real-world implementation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Ready to Transform Your Business?</h2>
            <p className="text-primary-foreground/90 mb-8">
              Let's discuss which services are right for your business and create a customized plan for success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
